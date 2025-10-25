import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function Profile() {
  const [data, setData] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/auth/check");
        setData(JSON.stringify(res.data, null, 2));
      } catch {
        setData("Error: Not logged in");
      }
    };
    load();
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      <pre>{data}</pre>
    </div>
  );
}
