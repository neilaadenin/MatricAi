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
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-card border-t shadow-elevated">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all min-w-[64px]",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )
            }
          >
            <item.icon className={cn("w-6 h-6")} />
            <span className="text-xs font-medium">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
