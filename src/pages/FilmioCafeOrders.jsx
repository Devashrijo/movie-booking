import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FilmioCafeOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/filmioCafe/orders"
      );
      setOrders(response.data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Function to update order status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await axios.patch(
        `http://localhost:8081/api/filmioCafe/orders/${id}`,
        { status: newStatus }
      );
      alert(response.data.message);
      fetchOrders(); // refresh data
    } catch (error) {
      alert("Failed to update status");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "20px" }}>
          ☕ Filmio Café Orders Dashboard
        </h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found 😴</p>
        ) : (
          <table
            style={{
              width: "90%",
              margin: "auto",
              borderCollapse: "collapse",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <thead style={{ backgroundColor: "#333", color: "white" }}>
              <tr>
                <th style={{ padding: "10px" }}>ID</th>
                <th>Item Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>GST</th>
                <th>Total</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  <td>{order.id}</td>
                  <td>{order.item_name}</td>
                  <td>
                    <img
                      src={order.image}
                      alt={order.item_name}
                      width="60"
                      style={{ borderRadius: "8px" }}
                    />
                  </td>
                  <td>₹{order.price}</td>
                  <td>{order.gst}</td>
                  <td>₹{order.total}</td>
                  <td>
                    <span
                      style={{
                        color:
                          order.status === "Completed"
                            ? "green"
                            : order.status === "Cancelled"
                            ? "red"
                            : "orange",
                        fontWeight: "bold",
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    {new Date(order.created_at).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                      }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
}

export default FilmioCafeOrders;
