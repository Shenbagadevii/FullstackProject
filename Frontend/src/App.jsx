import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Messages from "./pages/Messages";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />

      <Route
        path="/products"
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />

      <Route
        path="/orders"
        element={
          <Layout>
            <Orders />
          </Layout>
        }
      />

      <Route
        path="/messages"
        element={
          <Layout>
            <Messages />
          </Layout>
        }
      />

      <Route
        path="/notifications"
        element={
          <Layout>
            <Notifications />
          </Layout>
        }
      />

      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;
