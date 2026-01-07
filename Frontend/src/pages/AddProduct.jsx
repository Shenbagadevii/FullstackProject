import React, { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    name: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
    sku: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Product Added Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Product</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="brand" placeholder="Brand" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} />
      <input name="stock" type="number" placeholder="Stock" onChange={handleChange} />
      <input name="sku" placeholder="SKU" onChange={handleChange} />

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
