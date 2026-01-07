import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import { fetchOrders } from "../services/orderService";

const Dashboard = () => {

  // -----------------------------------------------------
  // DEFAULT SAMPLE DATA (shown until API returns values)
  // -----------------------------------------------------
  const defaultProducts = [
    { id: 1, name: "Sample Product A", stock: 20, price: 199 },
    { id: 2, name: "Sample Product B", stock: 4, price: 299 },
    { id: 3, name: "Sample Product C", stock: 12, price: 99 },
  ];

  const defaultOrders = [
    {
      id: 101,
      username: "John Doe",
      total: 250.5,
      status: "Completed",
      date: "2025-01-10",
    },
    {
      id: 102,
      username: "Alice",
      total: 499.0,
      status: "Pending",
      date: "2025-01-12",
    },
    {
      id: 103,
      username: "Michael",
      total: 150,
      status: "Processing",
      date: "2025-01-15",
    },
  ];

  // State initialized with DEFAULT DATA
  const [products, setProducts] = useState(defaultProducts);
  const [orders, setOrders] = useState(defaultOrders);
  const [loading, setLoading] = useState(true);

  // -----------------------------------------------------
  // LOAD DATA FROM API
  // -----------------------------------------------------
  useEffect(() => {
    const loadData = async () => {
      try {
        const prodData = await fetchProducts();
        const orderData = await fetchOrders();

        if (prodData && prodData.length > 0) setProducts(prodData);
        if (orderData && orderData.length > 0) setOrders(orderData);

      } catch (err) {
        console.error("Dashboard Load Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <h2>Loading Dashboard...</h2>;

  // -----------------------------------------------------
  // CALCULATIONS
  // -----------------------------------------------------
  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalProducts = products.length;
  const lowStockCount = products.filter((p) => p.stock <= 5).length;

  // -----------------------------------------------------
  // RETURN UI
  // -----------------------------------------------------
  return (
    <div className="dashboard-container">

      <h2 className="page-title">Dashboard</h2>

      {/* STAT CARDS */}
      <div className="cards">

        <div className="card card-blue" style={{ backgroundColor: "#3498db" }}>
          <h4>Total Products</h4>
          <h2>{totalProducts}</h2>
        </div>

        <div className="card card-green" style={{ backgroundColor: "#2ecc71" }}>
          <h4>Total Orders</h4>
          <h2>{orders.length}</h2>
        </div>

        <div className="card card-red" style={{ backgroundColor: "#e74c3c" }}>
          <h4>Total Sales</h4>
          <h2>₹{totalSales.toFixed(2)}</h2>
        </div>

        <div className="card card-yellow" style={{ backgroundColor: "#f1c40f" }}>
          <h4>Low Stock Items</h4>
          <h2>{lowStockCount}</h2>
        </div>
      </div>

      {/* RECENT ORDERS SECTION */}
      <div className="best-selling-section" style={{ marginTop: 20 }}>
        <h3>Recent Orders</h3>

        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.slice(0, 6).map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.username || o.user?.name || "Unknown"}</td>
                <td>₹{o.total}</td>
                <td>{o.status}</td>
                <td>{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
