import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../services/productService";

const EditProduct = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct(id).then(setForm).catch(() => {});
  }, [id]);

  if (!form) return <p>Loading...</p>;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await updateProduct(id, form);
      navigate("/products");
    } catch {
      alert("Failed to update product");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 720 }}>
        <label>Name</label>
        <input name="name" value={form.name || ""} onChange={change} required />

        <label>Category</label>
        <input name="category" value={form.category || ""} onChange={change} />

        <label>Brand</label>
        <input name="brand" value={form.brand || ""} onChange={change} />

        <label>Price</label>
        <input name="price" type="number" value={form.price || 0} onChange={change} />

        <label>Stock</label>
        <input name="stock" type="number" value={form.stock || 0} onChange={change} />

        <label>Description</label>
        <textarea name="description" value={form.description || ""} onChange={change} />

        <button type="submit" style={saveBtn} disabled={saving}>{saving ? "Saving..." : "Save"}</button>
      </form>
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

export default EditProduct;
