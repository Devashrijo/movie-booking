import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8081/login", {
        email,
        password,
      });

      setIsSuccess(true);
      setMessage(res.data.message);

      // Hide message after 3 sec
      setTimeout(() => setMessage(""), 3000);

      // Redirect after success
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (err) {
      setIsSuccess(false);
      setMessage(
        err.response?.data?.message || "Login failed! Please try again."
      );

      // Hide message after 3 sec
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="/images/login-side.jpg" alt="Login Visual" />
        </div>

        <div className="login-form">
          <h2>Welcome Back 👋</h2>
          <p>Please login to your account</p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>

          {message && (
            <p className={`message ${isSuccess ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <p className="signup-text">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
