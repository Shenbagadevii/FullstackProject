import React, { useEffect, useState } from "react";

const Notifications = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // placeholder: replace with API call
    setNotes([
      { id: 1, text: "Low stock: Red T-Shirt", time: "2025-12-06 14:00" },
      { id: 2, text: "New order placed #1234", time: "2025-12-07 09:12" },
    ]);
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <div className="notifications">
        {notes.map((n) => (
          <div key={n.id} className="notification-card" style={noteCard}>
            <p>{n.text}</p>
            <small>{n.time}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

const noteCard = { padding: 10, borderRadius: 8, background: "#fff", marginBottom: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" };

export default Notifications;
