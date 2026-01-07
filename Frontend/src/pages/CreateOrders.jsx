import React, { useEffect, useState } from "react";

const CreateOrder = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);

  const placeOrder = async () => {
    const order = {
      productId: Number(selectedProduct),
      quantity: Number(qty),
    };

    await fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    alert("Order Placed Successfully!");
  };

  return (
    <div>
      <h2>Create Order</h2>

      <label>Choose Product:</label>
      <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
        <option value="">--Select--</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} (Stock: {p.stock})
          </option>
        ))}
      </select>

      <label>Quantity</label>
      <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default CreateOrder;
