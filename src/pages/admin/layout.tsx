import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, Calendar, UserCog, FileText, LogOut } from "lucide-react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const navigate = useNavigate();

  const menu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { label: "About Page", icon: FileText, path: "/admin/about" },
    { label: "Events", icon: Calendar, path: "/admin/events" },
    { label: "Courses", icon: BookOpen, path: "/admin/courses" },
    { label: "Contacts", icon: UserCog, path: "/admin/contacts" },
  ];

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border/50 p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gradient mb-8">Admin Panel</h1>

        <nav className="flex-grow space-y-3">
          {menu.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl bg-muted hover:bg-primary/20 transition-all"
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl mt-6 bg-red-600 hover:bg-red-700 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
