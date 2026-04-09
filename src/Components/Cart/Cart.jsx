import { useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import { getCartPricing } from "../../utils/cartPricing";
import "./Cart.css";

const CART_ANCHOR = "learning-cart";

export default function Cart() {
  const { cart, cartTotal, removeFromCart, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const pricing = useMemo(
    () => getCartPricing(cartTotal, cart.length),
    [cart.length, cartTotal]
  );

  useEffect(() => {
    if (location.hash !== `#${CART_ANCHOR}`) return;
    const element = document.getElementById(CART_ANCHOR);
    if (!element) return;

    const frame = requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  const handleClear = () => {
    if (cart.length === 0) return;
    if (
      typeof window !== "undefined" &&
      !window.confirm("Remove all courses from your cart?")
    ) {
      return;
    }

    clearCart();
    toast.info("Cart cleared");
  };

  const handleRemoveOne = (course) => {
    removeFromCart(course.id);
    toast.success(`Removed "${course.title}" from cart`);
  };

  return (
    <section
      id={CART_ANCHOR}
      className="horizontal-cart"
      aria-labelledby="cart-heading"
    >
      <div className="cart-left">
        <div className="cart-heading-row">
          <h2 id="cart-heading" className="cart-title">
            <span aria-hidden="true">Cart</span> My cart
          </h2>
          <span className="cart-count-pill" aria-live="polite">
            {cart.length === 0
              ? "0 courses"
              : `${cart.length} course${cart.length === 1 ? "" : "s"}`}
          </span>
        </div>

        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="cart-empty-block">
              <p className="cart-empty">Your cart is empty.</p>
              <Link className="cart-empty-cta" to="/">
                Browse courses
              </Link>
            </div>
          ) : (
            cart.map((course) => (
              <div key={course.id} className="course-chip course-chip--rich">
                <div className="course-chip__text">
                  <span className="course-chip__title">{course.title}</span>
                  <span className="course-chip__meta">
                    {course.instructor} - ${Number(course.price).toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemoveOne(course)}
                  title="Remove from cart"
                  aria-label={`Remove ${course.title} from cart`}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-right-summary">
          <span className="cart-total-label">Order total</span>
          <span className="cart-total-price">${pricing.totalPayable.toFixed(2)}</span>
        </div>
        <div className="cart-breakdown" aria-label="Cart price details">
          <span>Subtotal: ${pricing.subtotal.toFixed(2)}</span>
          <span>Discount: -${pricing.discount.toFixed(2)}</span>
          <span>Platform fee: ${pricing.platformFee.toFixed(2)}</span>
        </div>
        <div className="cart-actions">
          {cart.length > 0 && (
            <>
              <button
                type="button"
                className="cart-btn-secondary"
                onClick={handleClear}
              >
                Clear cart
              </button>
              <button
                type="button"
                className="cart-btn-checkout"
                disabled
                title="Checkout is not wired to a payment provider in this demo"
              >
                Checkout
              </button>
            </>
          )}
          {location.pathname !== "/" && (
            <button
              type="button"
              className="cart-btn-text"
              onClick={() => navigate({ pathname: "/", hash: CART_ANCHOR })}
            >
              Back to catalog
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
