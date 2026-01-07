import { getAuthHeaders } from "./authService";
const API = "/api/orders";

export async function fetchOrders() {
  const res = await fetch(API, { headers: { ...getAuthHeaders() } });
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function fetchOrder(id) {
  const res = await fetch(`${API}/${id}`, { headers: { ...getAuthHeaders() } });
  if (!res.ok) throw new Error("Failed to fetch order");
  return res.json();
}

export async function createOrder(payload) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}
