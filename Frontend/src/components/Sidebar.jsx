import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <h2 className="logo">InventoryPro</h2>

      <ul className="menu">
        <li><NavLink to="/">Dashboard</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        <li><NavLink to="/messages">Messages</NavLink></li>
        <li><NavLink to="/notifications">Notifications</NavLink></li>
        <li><NavLink to="/settings">Settings</NavLink></li>
      </ul>

      <div style={{ marginTop: "auto" }}>
        <button onClick={handleLogout} style={logoutBtnStyle}>Logout</button>
      </div>
    </div>
  );
};

const logoutBtnStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#ef4444",
  color: "white",
  cursor: "pointer",
  fontWeight: 700,
};

export default Sidebar;
