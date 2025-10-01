import { TrendingUp, ShoppingCart, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}

function StatCard({ icon, value, label, className }: StatCardProps) {
  return (
    <Card className={`glass-card p-6 rounded-2xl shadow-elevated hover-float ${className}`}>
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl gradient-primary shadow-glow">{icon}</div>
        <div>
          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value}</p>
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
        </div>
      </div>
    </Card>
  );
}

export function PerformanceCard() {
  return (
    <div className="space-y-6">
      {/* Main Performance Card */}
      <Card className="p-8 gradient-hero text-white shadow-intense rounded-3xl hover-float relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4">
            <span className="text-white/90 font-semibold text-sm">Performa Minggu Ini</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <TrendingUp className="w-10 h-10" />
            <span className="text-6xl font-bold glow-text">+23%</span>
          </div>
          <p className="text-white/95 text-base leading-relaxed max-w-md">
            Minggu yang luar biasa! Interaksi Anda naik 20% dan meningkat 15%.
          </p>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          icon={<ShoppingCart className="w-6 h-6 text-white" />}
          value="2,847"
          label="Total Pembelian"
        />
        <StatCard
          icon={<DollarSign className="w-6 h-6 text-white" />}
          value="Rp. 100.000"
          label="Pendapatan"
        />
      </div>
    </div>
  );
}
