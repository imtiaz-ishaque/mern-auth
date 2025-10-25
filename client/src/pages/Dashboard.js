import React from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

export default function Dashboard() {
  const logout = async () => {
    await api.post("/auth/logout");
    window.location.href = "/login";
  };

  return (
    <div>
      <h3>Dashboard (Protected)</h3>
      <Link to="/profile">Go to Profile</Link>
      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
