import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOrder } from "../services/orderService";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetchOrder(id).then(setOrder).catch(() => {});
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order #{order.id}</h2>
      <p><strong>User:</strong> {order.username || order.user?.name}</p>
      <p><strong>Total:</strong> ${order.total}</p>
      <p><strong>Status:</strong> {order.status}</p>

      <h3>Items</h3>
      <table className="table">
        <thead>
          <tr><th>Product</th><th>Qty</th><th>Price</th></tr>
        </thead>
        <tbody>
          {order.items.map((it, idx) => (
            <tr key={idx}>
              <td>{it.productName}</td>
              <td>{it.qty}</td>
              <td>${it.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
