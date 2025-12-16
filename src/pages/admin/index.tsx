import { useEffect, useState } from "react";
import AdminLayout from "./layout";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [contactsCount, setContactsCount] = useState(0);

  useEffect(() => {
    fetch("/api/admin/contacts")
      .then(async (res) => {
        if (!res.ok) return;
        const data = await res.json();
        setContactsCount(data.contacts.length);
      });
  }, []);

  const stats = [
    { title: "Total Contacts", value: contactsCount },
    { title: "Events", value: 0 },
    { title: "Courses", value: 0 },
  ];

  return (
    <AdminLayout>
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome Back, Admin 👋
      </motion.h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.15 }}
            className="p-6 rounded-2xl bg-card border border-border/50 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
            <p className="text-5xl font-bold text-gradient">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for future widgets */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="p-6 rounded-2xl bg-primary/20 border border-primary/30 hover:bg-primary/30 transition">
            Add Event
          </button>
          <button className="p-6 rounded-2xl bg-primary/20 border border-primary/30 hover:bg-primary/30 transition">
            Add Course
          </button>
          <button className="p-6 rounded-2xl bg-primary/20 border border-primary/30 hover:bg-primary/30 transition">
            Edit About Page
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
