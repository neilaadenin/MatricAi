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
    <aside className="hidden md:flex md:w-64 md:flex-col fixed inset-y-0 z-50 glass-card border-r border-primary/10 shadow-elevated">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-primary/10">
        <img src={aivatorLogo} alt="Aivator" className="w-12 h-12 drop-shadow-glow" />
        <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text">
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
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                isActive
                  ? "gradient-primary text-white font-semibold shadow-glow"
                  : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
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
