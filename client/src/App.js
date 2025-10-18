import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState("");
  return (
    <div style={{ padding: 20 }}>
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div>
          <div>Welcome {user?.email}</div>
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;
