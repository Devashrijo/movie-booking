import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8081/signup", {
        email,
        password,
        confirmPassword,
      });

      setMessage(res.data.message);
      setIsSuccess(true);

      // Hide message after 3 sec
      setTimeout(() => setMessage(""), 3000);

      // Redirect after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setIsSuccess(false);
      setMessage(
        err.response?.data?.message || "Signup failed! Please try again."
      );

      // Hide message after 3 sec
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="/images/login-side.jpg" alt="Signup Visual" />
        </div>

        <div className="login-form">
          <h2>Welcome!</h2>
          <p>Create your new account</p>

          <form onSubmit={handleSignUp}>
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

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Sign up</button>
          </form>

          {message && (
            <p className={`message ${isSuccess ? "success" : "error"}`}>
              {message}
            </p>
          )}

          <p className="signup-text">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
