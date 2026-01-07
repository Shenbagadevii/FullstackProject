const API = "/api/auth";

export async function login(email, password) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login failed");
  const data = await res.json();
  // expect { token, user }
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user || {}));
  return data;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getToken() {
  return localStorage.getItem("token");
}

export function getAuthHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function isAuthenticated() {
  return !!getToken();
}
