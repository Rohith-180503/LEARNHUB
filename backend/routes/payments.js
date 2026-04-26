import express, { Router } from "express";
import Stripe from "stripe";
import { db } from "../db.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock");

// ── POST /api/payments/create-checkout ──────────────────────────────────────
// Creates a Stripe Checkout session for the current cart
router.post("/create-checkout", authenticate, async (req, res) => {
  try {
    const { cartItems } = req.body; // Array of {id, title, price}
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const lineItems = cartItems.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100), // Stripe uses cents
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/explore/all?payment=success`,
      cancel_url: `${process.env.FRONTEND_URL}/explore/all?payment=cancel`,
      customer_email: req.user.email,
      metadata: {
        userId: req.user.id,
        courseIds: cartItems.map(i => i.id).join(","),
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// ── POST /api/payments/webhook ──────────────────────────────────────────────
// Handle Stripe success events (Requires stripe-cli for local testing)
router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const courseIds = session.metadata.courseIds.split(",");

    console.log(`💰 Payment success for User ${userId}, Courses: ${courseIds}`);

    // Grant access in DB
    for (const courseId of courseIds) {
      await db.execute({
        sql: "INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?, ?)",
        args: [userId, courseId]
      });
      // Also clear from cart
      await db.execute({
        sql: "DELETE FROM cart_items WHERE user_id = ? AND course_id = ?",
        args: [userId, courseId]
      });
    }
  }

  res.json({ received: true });
});

export default router;
