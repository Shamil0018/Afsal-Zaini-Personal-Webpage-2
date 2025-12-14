import { useEffect, useState } from "react";
// import Router from "next/router";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then(async (res) => {
        if (res.status === 401) {
            const navigate = useNavigate();

            navigate("/admin/login");
        //   Router.push("/admin/login");
          return;
        }
        const json = await res.json();
        setData(json.contacts);
        setLoading(false);
      });
  }, []);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    const navigate = useNavigate();

    navigate("/admin/login");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Contact Submissions</h1>
      <button onClick={logout}>Logout</button>
      {data.map((c) => (
        <div key={c._id} style={{ border: "1px solid #ddd", margin: "10px" }}>
          <p><strong>Name:</strong> {c.name}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Message:</strong> {c.message}</p>
          <p><small>{new Date(c.createdAt).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
}
