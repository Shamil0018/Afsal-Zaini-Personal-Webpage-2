import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });

    const data = await res.json();
    if (!res.ok) return setError(data.error);
    const navigate = useNavigate();

    navigate("/admin/login");

  }

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter Admin Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
