import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      // call backend registration endpoint
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Registration failed");
      alert("Registered, please login");
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input name="name" placeholder="Name" value={form.name} onChange={change} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={change} required />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={change} required />

        <button type="submit" disabled={busy}>{busy ? "Registering..." : "Register"}</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
