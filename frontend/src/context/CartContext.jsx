import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import { ENDPOINTS } from "../config";

const STORAGE_KEY = "learnhub-cart";
const API = ENDPOINTS.CART;
const PAY_API = ENDPOINTS.PAYMENTS;

const CartContext = createContext(null);

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCartFromStorage);
  const { user } = useAuth();

  // Sync cart when user logs in
  useEffect(() => {
    if (!user) return;

    const syncCart = async () => {
      try {
        // 1. First, fetch what's on the server
        const res = await fetch(API, { credentials: "include" });
        const serverCart = await res.json();
        
        if (serverCart.length > 0) {
          // Merge strategy: Server wins for now, or just combine
          setCart(serverCart);
        } else if (cart.length > 0) {
          // If server is empty but local has items, push local to server
          await fetch(`${API}/sync`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ courseIds: cart.map(i => i.id) }),
          });
        }
      } catch (e) {
        console.error("Cart sync failed:", e);
      }
    };

    syncCart();
  }, [user]); // Only run on login/logout

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* ignore quota / private mode */
    }
  }, [cart]);

  const addToCart = useCallback((course) => {
    setCart((prev) => {
      if (prev.some((item) => item.id === course.id)) return prev;
      return [...prev, course];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const checkout = useCallback(async () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }
    
    try {
      const res = await fetch(`${PAY_API}/create-checkout`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      console.error("Checkout failed:", e);
    }
  }, [cart, user]);

  const value = useMemo(() => {
    const cartTotal = cart.reduce(
      (sum, item) => sum + Number(item.price),
      0
    );
    return {
      cart,
      cartCount: cart.length,
      cartTotal,
      addToCart,
      removeFromCart,
      clearCart,
      checkout,
    };
  }, [cart, addToCart, removeFromCart, clearCart, checkout]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

/* Hook lives here with provider for a single import path; HMR lint exception only. */
// eslint-disable-next-line react-refresh/only-export-components -- paired hook + provider
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
