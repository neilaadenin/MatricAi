import { NavLink } from "react-router-dom";
import { Home, Sparkles, BarChart3, Users, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import aivatorLogo from "@/assets/aivator-logo.png";

const navItems = [
  { title: "Beranda", icon: Home, path: "/" },
  { title: "AI", icon: Sparkles, path: "/ai" },
  { title: "Visualisasi", icon: BarChart3, path: "/visualisasi" },
  { title: "Komunitas", icon: Users, path: "/komunitas" },
  { title: "Profil", icon: User, path: "/profil" },
  { title: "Notifikasi", icon: Bell, path: "/notifikasi" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50 bg-card border-r shadow-card">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b">
        <img src={aivatorLogo} alt="Aivator" className="w-10 h-10" />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Aivator
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                isActive
                  ? "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
