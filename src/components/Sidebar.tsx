import { NavLink, useNavigate } from "react-router-dom";
import { Home, Sparkles, BarChart3, Users, User, Bell, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import aivatorLogo from "@/assets/aivator-logo-clean.png";

const navItems = [
  { title: "Beranda", icon: Home, path: "/" },
  { title: "AI", icon: Sparkles, path: "/ai" },
  { title: "Visualisasi", icon: BarChart3, path: "/visualisasi" },
  { title: "Komunitas", icon: Users, path: "/komunitas" },
  { title: "Profil", icon: User, path: "/profil" },
  { title: "Notifikasi", icon: Bell, path: "/notifikasi" },
];

export function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <aside className="hidden md:flex md:flex-col fixed inset-y-0 z-50 w-64 glass-card border-r border-primary/10 shadow-elevated">
      {/* Logo */}
      <div className="flex items-center justify-center px-6 py-6 border-b border-primary/10">
        <img src={aivatorLogo} alt="Aivator" className="h-12 drop-shadow-glow" />
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

      {/* Logout Button */}
      <div className="px-3 py-6 border-t border-primary/10">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full justify-start gap-3"
        >
          <LogOut className="w-5 h-5" />
          <span>Keluar</span>
        </Button>
      </div>
    </aside>
  );
}
