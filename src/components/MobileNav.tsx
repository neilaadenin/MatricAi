import { NavLink } from "react-router-dom";
import { Home, Sparkles, Users, User, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Beranda", icon: Home, path: "/" },
  { title: "AI", icon: Sparkles, path: "/ai" },
  { title: "Komunitas", icon: Users, path: "/komunitas" },
  { title: "Notifikasi", icon: Bell, path: "/notifikasi" },
  { title: "Profil", icon: User, path: "/profil" },
];

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 glass-card border-t border-primary/10 shadow-intense">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 min-w-[64px]",
                isActive
                  ? "gradient-primary text-white shadow-glow"
                  : "text-muted-foreground hover:bg-primary/5"
              )
            }
          >
            <item.icon className={cn("w-6 h-6")} />
            <span className="text-xs font-semibold">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
