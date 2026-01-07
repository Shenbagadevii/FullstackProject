import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { fetchOrders } from "../services/orderService";

const Orders = () => {
  // DEFAULT SAMPLE ORDERS
  const defaultOrders = [
    {
      id: 1,
      username: "John Doe",
      total: 120.5,
      status: "Pending",
      date: "2025-01-10",
    },
    {
      id: 2,
      username: "Alice",
      total: 99.99,
      status: "Completed",
      date: "2025-01-12",
    },
    {
      id: 3,
      username: "Michael",
      total: 75.0,
      status: "Processing",
      date: "2025-01-15",
    },
  ];

  const [orders, setOrders] = useState(defaultOrders);

  useEffect(() => {
    fetchOrders()
      .then((data) => {
        if (data && data.length > 0) {
          setOrders(data);
        }
      })
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const columns = [
    { key: "id", title: "Order ID" },
    { key: "username", title: "User" },
    { key: "total", title: "Total", render: (r) => `$${r.total}` },
    { key: "status", title: "Status" },
    { key: "date", title: "Date" },
  ];

  return (
    <div>
      <h2>Orders</h2>
      <Table
        columns={columns}
        data={orders}
        renderRowActions={(row) => (
          <Link to={`/orders/${row.id}`}>
            <button className="edit">View</button>
          </Link>
        )}
      />
    </div>
  );
};

export default Orders;
