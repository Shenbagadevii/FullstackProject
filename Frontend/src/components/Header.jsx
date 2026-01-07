import React from "react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <div className="header">
      <input className="search" placeholder="Search..." />
      <div className="user-profile">
        <img src={user.avatar || "https://i.pravatar.cc/40"} alt="profile" />
        <div>
          <h4>{user.name || "Admin"}</h4>
          <p>@{user.username || "admin"}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
