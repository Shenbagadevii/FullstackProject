import { getAuthHeaders } from "./authService";
const API = "/api/products";

export async function fetchProducts() {
  const res = await fetch(API, { headers: { ...getAuthHeaders() } });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProduct(id) {
  const res = await fetch(`${API}/${id}`, { headers: { ...getAuthHeaders() } });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function createProduct(payload) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

export async function updateProduct(id, payload) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: { ...getAuthHeaders() },
  });
  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
}
