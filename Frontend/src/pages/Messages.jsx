import React, { useEffect, useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // placeholder: replace with API call
    setMessages([
      { id: 1, sender: "Alice", message: "Hi, I need help with my order.", date: "2025-12-01" },
      { id: 2, sender: "Bob", message: "Can I change shipping address?", date: "2025-12-02" },
    ]);
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <div className="messages">
        {messages.map((m) => (
          <div key={m.id} className="message-card" style={msgCard}>
            <h4>{m.sender}</h4>
            <p>{m.message}</p>
            <small>{m.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

const msgCard = { padding: 12, borderRadius: 8, background: "#fff", marginBottom: 10, boxShadow: "0 4px 12px rgba(0,0,0,0.04)" };

export default Messages;
