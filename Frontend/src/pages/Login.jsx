import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../services/authService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await login(email, password);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      alert("Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" disabled={busy}>{busy ? "Logging in..." : "Login"}</button>

        <p>Don’t have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
