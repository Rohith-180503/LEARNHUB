import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast.success("Welcome back! Login successful.");
        navigate("/");
      } else {
        toast.error("Please enter both email and password.");
      }
    }, 1500);
  };

  return (
    <div className="login-page glassmorphism">
      <div className="login-container">
        <header className="login-header">
          <h1 className="gradient-text">Welcome Back</h1>
          <p className="subtitle">Continue your learning journey with LearnHub</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" title="Forgot password? (Coming soon)">Forgot password?</Link>
          </div>

          <button 
            type="submit" 
            className="primary-btn login-btn" 
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <footer className="login-footer">
          <p>
            Don't have an account? <Link to="/signup">Create one for free</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
