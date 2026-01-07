import React, { useState } from "react";

const Settings = () => {
  const [form, setForm] = useState({ name: "", email: "", theme: "light" });
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const save = () => alert("Settings saved (demo)");

  return (
    <div>
      <h2>Settings</h2>
      <div className="settings-form" style={{ maxWidth: 720 }}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={change} />

        <label>Email</label>
        <input name="email" value={form.email} onChange={change} />

        <label>Theme</label>
        <select name="theme" value={form.theme} onChange={change}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <button onClick={save} style={saveBtn}>Save</button>
      </div>
    </div>
  );
};

const saveBtn = {
  marginTop: 12,
  padding: "10px 14px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
};

export default Settings;
