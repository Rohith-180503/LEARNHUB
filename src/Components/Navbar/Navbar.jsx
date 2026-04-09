import { useState, useEffect, useRef, useMemo } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import { getCartPricing } from "../../utils/cartPricing";
import { safeReadStorage, safeWriteStorage } from "../../utils/storage";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const CART_ANCHOR = "learning-cart";
const THEME_KEY = "theme";

const COURSE_LINKS = [
  {
    to: "/explore/all",
    label: "Full Course Catalog",
    desc: "Comprehensive curricula from Linux training to advanced AI systems.",
  },
  {
    to: "/explore/web-development",
    label: "Modern Web Stack",
    desc: "Master JavaScript, React, and Node.js for scalable application engineering.",
  },
  {
    to: "/explore/data-science",
    label: "AI & Neural Systems",
    desc: "Deep dives into Generative AI, LLMs, and high-performance data modeling.",
  },
  {
    to: "/explore/cloud-computing",
    label: "Cloud & DevOps",
    desc: "Architecting AWS infrastructure and Kubernetes-driven GitOps workflows.",
  },
  {
    to: "/explore/ui-ux-design",
    label: "Experience Architecture",
    desc: "Synthesizing Figma mastery with cognitive psychology for intuitive UI.",
  },
];

const RESOURCE_LINKS = [
  {
    to: "/resources/blog",
    label: "Tech Intelligence",
    desc: "Critical analysis of emerging tech like Rust, Go, and Edge AI.",
  },
  {
    to: "/resources/community",
    label: "Peer Network",
    desc: "Engage with a large community of learners in our developer ecosystem.",
  },
  {
    to: "/resources/success-stories",
    label: "Career Transitions",
    desc: "First-hand accounts of students moving from zero to senior roles.",
  },
  {
    to: "/resources/documentation",
    label: "Student Playbook",
    desc: "Guides for getting more value from the platform and its tooling.",
  },
];

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? " nav-link--active" : ""}`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartPanelOpen, setCartPanelOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      safeReadStorage(THEME_KEY) === "dark"
  );

  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const cartPanelRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  const cartPricing = useMemo(
    () => getCartPricing(cartTotal, cartCount),
    [cartCount, cartTotal]
  );

  const scrollToMainCart = () => {
    document.getElementById(CART_ANCHOR)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const closeAllPanels = () => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setCartPanelOpen(false);
  };

  const goToMainCart = () => {
    setCartPanelOpen(false);
    if (location.pathname === "/") {
      scrollToMainCart();
    } else {
      navigate({ pathname: "/", hash: CART_ANCHOR });
    }
  };

  const handleNavbarRemove = (item) => {
    removeFromCart(item.id);
    toast.success(`Removed "${item.title}" from cart`);
  };

  const handleNavbarClear = () => {
    if (cartCount === 0) return;
    if (
      typeof window !== "undefined" &&
      !window.confirm("Remove all courses from your cart?")
    ) {
      return;
    }

    clearCart();
    setCartPanelOpen(false);
    toast.info("Cart cleared");
  };

  const handlePlaceOrder = () => {
    if (cartCount === 0) return;
    toast.success("Order review started. Payment integration coming soon.");
    setCartPanelOpen(false);
  };

  const handleDropdownTrigger = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const handleDropdownBlur = (event) => {
    const nextTarget = event.relatedTarget;
    if (event.currentTarget.contains(nextTarget)) return;
    setActiveDropdown(null);
  };

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setCartPanelOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    safeWriteStorage(THEME_KEY, darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        closeAllPanels();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      const target = event.target;
      if (navRef.current?.contains(target)) return;
      if (drawerRef.current?.contains(target)) return;
      if (cartPanelRef.current?.contains(target)) return;
      setActiveDropdown(null);
      setMobileOpen(false);
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen && !cartPanelOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen, cartPanelOpen]);

  const openMobile = () => {
    setActiveDropdown(null);
    setCartPanelOpen(false);
    setMobileOpen(true);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav ref={navRef} className="modern-navbar" aria-label="Main">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" aria-label="LearnHub home">
            <img src={logo} alt="" width={40} height={40} decoding="async" />
            <span className="logo-text">LearnHub</span>
          </Link>

          <ul className="navbar-links navbar-links--desktop">
            <li className="nav-item">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li
              className="nav-item nav-item--dropdown"
              onMouseEnter={() => !mobileOpen && setActiveDropdown("courses")}
              onMouseLeave={() => !mobileOpen && setActiveDropdown(null)}
              onBlur={handleDropdownBlur}
            >
              <button
                type="button"
                className="nav-link nav-link--trigger"
                aria-expanded={activeDropdown === "courses"}
                aria-haspopup="true"
                aria-controls="navbar-courses-menu"
                id="navbar-courses-button"
                onClick={() => handleDropdownTrigger("courses")}
              >
                Explore Courses
                <span className="dropdown-icon" aria-hidden="true">
                  v
                </span>
              </button>
              <div
                id="navbar-courses-menu"
                role="menu"
                aria-labelledby="navbar-courses-button"
                className={`dropdown-menu glassmorphism ${activeDropdown === "courses" ? "dropdown-menu--active" : ""}`}
              >
                {COURSE_LINKS.map(({ to, label, desc }) => (
                  <Link
                    key={to}
                    to={to}
                    role="menuitem"
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="dropdown-item-title">{label}</span>
                    <span className="dropdown-item-desc">{desc}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li
              className="nav-item nav-item--dropdown"
              onMouseEnter={() => !mobileOpen && setActiveDropdown("resources")}
              onMouseLeave={() => !mobileOpen && setActiveDropdown(null)}
              onBlur={handleDropdownBlur}
            >
              <button
                type="button"
                className="nav-link nav-link--trigger"
                aria-expanded={activeDropdown === "resources"}
                aria-haspopup="true"
                aria-controls="navbar-resources-menu"
                id="navbar-resources-button"
                onClick={() => handleDropdownTrigger("resources")}
              >
                Resources
                <span className="dropdown-icon" aria-hidden="true">
                  v
                </span>
              </button>
              <div
                id="navbar-resources-menu"
                role="menu"
                aria-labelledby="navbar-resources-button"
                className={`dropdown-menu glassmorphism ${activeDropdown === "resources" ? "dropdown-menu--active" : ""}`}
              >
                {RESOURCE_LINKS.map(({ to, label, desc }) => (
                  <Link
                    key={to}
                    to={to}
                    role="menuitem"
                    className="dropdown-item"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="dropdown-item-title">{label}</span>
                    <span className="dropdown-item-desc">{desc}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li className="nav-item">
              <NavLink to="/instructors" className={navLinkClass}>
                Instructors
              </NavLink>
            </li>
          </ul>

          <div className="navbar-actions">
            <button
              type="button"
              className="navbar-theme-toggle"
              onClick={() => setDarkMode((value) => !value)}
              aria-pressed={darkMode}
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <span aria-hidden="true">{darkMode ? "Light" : "Dark"}</span>
            </button>

            <div className="navbar-cart-wrap">
              <button
                type="button"
                className="cart-btn"
                id="navbar-cart-button"
                aria-expanded={cartPanelOpen}
                aria-haspopup="dialog"
                aria-controls="navbar-cart-panel"
                aria-label={`Shopping cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
                onClick={() => {
                  setActiveDropdown(null);
                  setMobileOpen(false);
                  setCartPanelOpen((prev) => !prev);
                }}
              >
                Cart ({cartCount})
                <span className="cart-icon" aria-hidden="true">
                  Bag
                </span>
              </button>
            </div>

            <button
              type="button"
              className="navbar-burger"
              aria-expanded={mobileOpen}
              aria-controls="navbar-mobile-drawer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => (mobileOpen ? closeMobile() : openMobile())}
            >
              <span className="navbar-burger-bar" aria-hidden="true" />
              <span className="navbar-burger-bar" aria-hidden="true" />
              <span className="navbar-burger-bar" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="navbar-backdrop"
            aria-hidden="true"
            onClick={closeMobile}
          />
          <aside
            ref={drawerRef}
            id="navbar-mobile-drawer"
            className="navbar-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="navbar-drawer-header">
              <span className="navbar-drawer-title">Menu</span>
              <button
                type="button"
                className="navbar-drawer-close"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                X
              </button>
            </div>

            <nav className="navbar-drawer-nav" aria-label="Mobile">
              <NavLink to="/" end className={navLinkClass} onClick={closeMobile}>
                Home
              </NavLink>

              <p className="navbar-drawer-section" id="drawer-courses-heading">
                Explore courses
              </p>
              {COURSE_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={navLinkClass}
                  onClick={closeMobile}
                  aria-describedby="drawer-courses-heading"
                >
                  {label}
                </NavLink>
              ))}

              <p className="navbar-drawer-section" id="drawer-resources-heading">
                Resources
              </p>
              {RESOURCE_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={navLinkClass}
                  onClick={closeMobile}
                  aria-describedby="drawer-resources-heading"
                >
                  {label}
                </NavLink>
              ))}

              <NavLink
                to="/instructors"
                className={navLinkClass}
                onClick={closeMobile}
              >
                Instructors
              </NavLink>
            </nav>
          </aside>
        </>
      )}

      {cartPanelOpen && (
        <>
          <div
            className="navbar-cart-overlay"
            aria-hidden="true"
            onClick={() => setCartPanelOpen(false)}
          />
          <aside
            ref={cartPanelRef}
            id="navbar-cart-panel"
            className="navbar-cart-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <header className="navbar-cart-panel__header">
              <div>
                <h3 className="navbar-cart-panel__title">My Cart</h3>
                <p className="navbar-cart-panel__subtitle">
                  {cartCount} course{cartCount === 1 ? "" : "s"} selected
                </p>
              </div>
              <button
                type="button"
                className="navbar-cart-panel__close"
                onClick={() => setCartPanelOpen(false)}
                aria-label="Close cart"
              >
                X
              </button>
            </header>

            <div className="navbar-cart-panel__content">
              {cartCount === 0 ? (
                <div className="navbar-cart-empty">
                  <p className="navbar-cart-empty-text">Your cart is empty</p>
                  <Link
                    to="/"
                    className="navbar-cart-browse"
                    onClick={closeAllPanels}
                  >
                    Browse courses
                  </Link>
                </div>
              ) : (
                <ul className="navbar-cart-list navbar-cart-list--panel">
                  {cart.map((item) => (
                    <li key={item.id} className="navbar-cart-row navbar-cart-row--panel">
                      <div className="navbar-cart-item-main">
                        <p className="navbar-cart-title navbar-cart-title--panel">
                          {item.title}
                        </p>
                        <p className="navbar-cart-instructor">{item.instructor}</p>
                        <p className="navbar-cart-qty">Qty: 1</p>
                      </div>
                      <div className="navbar-cart-meta navbar-cart-meta--panel">
                        <span className="navbar-cart-price">
                          ${Number(item.price).toFixed(2)}
                        </span>
                        <button
                          type="button"
                          className="navbar-cart-linkish"
                          onClick={() => toast.info("Save for later is coming soon")}
                        >
                          Save for later
                        </button>
                        <button
                          type="button"
                          className="navbar-cart-remove"
                          onClick={() => handleNavbarRemove(item)}
                          aria-label={`Remove ${item.title} from cart`}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <footer className="navbar-cart-panel__footer">
              <div className="navbar-price-box">
                <h4 className="navbar-price-box__title">Price Details</h4>
                <div className="navbar-price-row">
                  <span>Subtotal</span>
                  <span>${cartPricing.subtotal.toFixed(2)}</span>
                </div>
                <div className="navbar-price-row">
                  <span>Discount</span>
                  <span className="navbar-price-row__discount">
                    -${cartPricing.discount.toFixed(2)}
                  </span>
                </div>
                <div className="navbar-price-row">
                  <span>Platform fee</span>
                  <span>${cartPricing.platformFee.toFixed(2)}</span>
                </div>
                <div className="navbar-price-row navbar-price-row--total">
                  <span>Total Amount</span>
                  <span>${cartPricing.totalPayable.toFixed(2)}</span>
                </div>
              </div>

              <div className="navbar-cart-panel__actions">
                <button
                  type="button"
                  className="navbar-cart-secondary"
                  onClick={goToMainCart}
                >
                  View full cart
                </button>
                <button
                  type="button"
                  className="navbar-cart-secondary navbar-cart-danger"
                  onClick={handleNavbarClear}
                  disabled={cartCount === 0}
                >
                  Clear all
                </button>
                <button
                  type="button"
                  className="navbar-cart-place-order"
                  onClick={handlePlaceOrder}
                  disabled={cartCount === 0}
                >
                  Place Order
                </button>
              </div>
            </footer>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
