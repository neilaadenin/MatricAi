import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, AlertCircle } from "lucide-react";

const notifications = [
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "2 jam yang lalu",
  },
  {
    icon: Users,
    title: "Efek Diskon Tukang Berhasil",
    description: "Program diskon khusus untuk tukang berhasil menaik...",
    time: "5 jam yang lalu",
  },
  {
    icon: Target,
    title: "Iklan Jangkau Kontraktor Efektif",
    description: "Iklan yang menargetkan kontraktor di Facebook mem...",
    time: "1 hari yang lalu",
  },
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "2 hari yang lalu",
  },
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "3 hari yang lalu",
  },
];

export default function Notifications() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Notifikasi</h1>
        <p className="text-muted-foreground">Semua aktivitas dan pembaruan Anda</p>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notif, idx) => (
          <Card
            key={idx}
            className="p-4 shadow-card hover:shadow-elevated transition-all cursor-pointer hover:border-primary/20"
          >
            <div className="flex gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                  <notif.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1">{notif.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {notif.description}
                </p>
                <p className="text-xs text-muted-foreground">{notif.time}</p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  →
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
