import React, { useState, useEffect } from "react";

import api from "../services/api";

export default function Dashboard() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/me");
        setMsg(JSON.stringify(res.data));
      } catch (e) {
        setMsg("Not authorized");
      }
    };
    load();
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <pre>{msg}</pre>
    </div>
  );
}
