import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const CART_ANCHOR = "learning-cart";

const COURSE_LINKS = [
  { to: "/web-development", label: "Web Development" },
  { to: "/data-science", label: "Data Science & AI" },
  { to: "/cloud-computing", label: "Cloud Computing" },
  { to: "/ui-ux-design", label: "UI/UX Design" },
];

const RESOURCE_LINKS = [
  { to: "/blog", label: "Blog & Articles" },
  { to: "/community", label: "Student Community" },
  { to: "/success-stories", label: "Success Stories" },
];

const navLinkClass = ({ isActive }) =>
  `nav-link${isActive ? " nav-link--active" : ""}`;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  const navRef = useRef(null);
  const drawerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  const scrollToMainCart = () => {
    document.getElementById(CART_ANCHOR)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToMainCart = () => {
    setActiveDropdown(null);
    if (location.pathname === "/") {
      scrollToMainCart();
    } else {
      navigate({ pathname: "/", hash: CART_ANCHOR });
    }
  };

  const handleNavbarRemove = (item) => {
    removeFromCart(item.id);
    toast.success(`Removed from cart`);
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
    setActiveDropdown(null);
    toast.info("Cart cleared");
  };

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const t = e.target;
      if (navRef.current?.contains(t)) return;
      if (drawerRef.current?.contains(t)) return;
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
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const openMobile = () => {
    setActiveDropdown(null);
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

            <li className="nav-item nav-item--dropdown">
              <button
                type="button"
                className="nav-link nav-link--trigger"
                aria-expanded={activeDropdown === "courses"}
                aria-haspopup="true"
                aria-controls="navbar-courses-menu"
                id="navbar-courses-button"
                onClick={() => toggleDropdown("courses")}
              >
                Explore Courses
                <span className="dropdown-icon" aria-hidden="true">
                  ▾
                </span>
              </button>
              {activeDropdown === "courses" && (
                <div
                  id="navbar-courses-menu"
                  role="menu"
                  aria-labelledby="navbar-courses-button"
                  className="dropdown-menu glassmorphism dropdown-menu--active"
                >
                  {COURSE_LINKS.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="dropdown-item"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li className="nav-item nav-item--dropdown">
              <button
                type="button"
                className="nav-link nav-link--trigger"
                aria-expanded={activeDropdown === "resources"}
                aria-haspopup="true"
                aria-controls="navbar-resources-menu"
                id="navbar-resources-button"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <span className="dropdown-icon" aria-hidden="true">
                  ▾
                </span>
              </button>
              {activeDropdown === "resources" && (
                <div
                  id="navbar-resources-menu"
                  role="menu"
                  aria-labelledby="navbar-resources-button"
                  className="dropdown-menu glassmorphism dropdown-menu--active"
                >
                  {RESOURCE_LINKS.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="dropdown-item"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
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
              onClick={() => setDarkMode((d) => !d)}
              aria-pressed={darkMode}
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <span aria-hidden="true">{darkMode ? "☀️" : "🌙"}</span>
            </button>

            <div className="navbar-cart-wrap">
              <button
                type="button"
                className="cart-btn"
                id="navbar-cart-button"
                aria-expanded={activeDropdown === "cart"}
                aria-haspopup="true"
                aria-controls="navbar-cart-menu"
                aria-label={`Shopping cart, ${cartCount} item${cartCount === 1 ? "" : "s"}`}
                onClick={() => toggleDropdown("cart")}
              >
                Cart ({cartCount})
                <span className="cart-icon" aria-hidden="true">
                  🛒
                </span>
              </button>

              {activeDropdown === "cart" && (
                <div
                  id="navbar-cart-menu"
                  role="region"
                  aria-label="Cart contents"
                  className="dropdown-menu glassmorphism dropdown-menu--active dropdown-menu--cart"
                >
                  {cartCount === 0 ? (
                    <div className="navbar-cart-empty">
                      <p className="navbar-cart-empty-text">Your cart is empty</p>
                      <Link
                        to="/"
                        className="navbar-cart-browse"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Browse courses
                      </Link>
                    </div>
                  ) : (
                    <>
                      <ul className="navbar-cart-list">
                        {cart.map((item) => (
                          <li key={item.id} className="navbar-cart-row">
                            <span className="navbar-cart-title">{item.title}</span>
                            <div className="navbar-cart-meta">
                              <span className="navbar-cart-price">
                                ${Number(item.price).toFixed(2)}
                              </span>
                              <button
                                type="button"
                                className="navbar-cart-remove"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNavbarRemove(item);
                                }}
                                aria-label={`Remove ${item.title} from cart`}
                              >
                                ✕
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="navbar-cart-total">
                        <span>Estimated total</span>
                        <span className="navbar-cart-total-value">
                          ${cartTotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="navbar-cart-footer">
                        <button
                          type="button"
                          className="navbar-cart-linkish"
                          onClick={goToMainCart}
                        >
                          View full cart
                        </button>
                        <button
                          type="button"
                          className="navbar-cart-clear"
                          onClick={handleNavbarClear}
                        >
                          Clear all
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
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
                ✕
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
    </>
  );
};

export default Navbar;
