import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login, register, loginWithGoogle, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect already-logged-in users away from the login page
  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  // Show error toast if Google OAuth redirected back with an error param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("error") === "google_not_configured") {
      toast.error("Google sign-in is not configured yet. Please use email & password.");
    }
  }, [location.search]);

  const validateForm = () => {
    const newErrors = {};
    if (mode === "signup" && !name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      if (mode === "login") {
        await login(email, password);
        toast.success("Welcome back! Login successful.");
      } else {
        await register(name, email, password);
        toast.success("Account created successfully! Welcome to LearnHub 🎓");
      }
      navigate("/");
    } catch (err) {
      // Show the server's error message directly in a toast
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = () => {
    loginWithGoogle();
  };

  const toggleMode = (e) => {
    e.preventDefault();
    setMode(mode === "login" ? "signup" : "login");
    setErrors({});
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card glassmorphism">
        <div className="login-left">
          <div className="login-left__content">
            <div className="login-logo">
              <span className="logo-icon">🎓</span>
              <span className="logo-text gradient-text">LearnHub</span>
            </div>
            <h2>Start Your Learning Journey</h2>
            <p>Access world-class courses, expert instructors, and a global community of learners.</p>
            <ul className="login-benefits">
              <li><span className="check">✓</span> 12,000+ Professional Courses</li>
              <li><span className="check">✓</span> Expert Instructor Mentors</li>
              <li><span className="check">✓</span> Career-Focused Learning Paths</li>
              <li><span className="check">✓</span> Verified Certifications</li>
            </ul>
          </div>
          <div className="login-left__decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-container">
            <header className="login-header">
              <h1 className="gradient-text">{mode === "login" ? "Welcome Back" : "Create Account"}</h1>
              <p>{mode === "login" ? "Sign in to continue your learning journey" : "Join thousands of learners today"}</p>
            </header>

            <div className="social-login">
              <button
                type="button"
                className="social-btn"
                onClick={handleSocialLogin}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="divider">
              <span>or {mode === "login" ? "sign in" : "sign up"} with email</span>
            </div>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              {mode === "signup" && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <span className="input-icon">👤</span>
                    <input
                      type="text"
                      id="name"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      className={errors.name ? "input-error" : ""}
                      autoComplete="name"
                    />
                  </div>
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    className={errors.email ? "input-error" : ""}
                    autoComplete="email"
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder={mode === "login" ? "Enter your password" : "Create a password (min 6 chars)"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    className={errors.password ? "input-error" : ""}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              {mode === "login" && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="forgot-link"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("Password reset coming soon!");
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className={`primary-btn login-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    {mode === "login" ? "Signing in…" : "Creating account…"}
                  </>
                ) : (
                  mode === "login" ? "Sign In" : "Sign Up"
                )}
              </button>
            </form>

            <footer className="login-footer">
              <p>
                {mode === "login" ? "Don't have an account?" : "Already have an account?"}
                <a href="#" className="signup-link" onClick={toggleMode}>
                  {mode === "login" ? " Create one for free" : " Sign in here"}
                </a>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
