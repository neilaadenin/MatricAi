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
    <Card className={`p-6 shadow-card ${className}`}>
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white/50">{icon}</div>
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </Card>
  );
}

export function PerformanceCard() {
  return (
    <div className="space-y-6">
      {/* Main Performance Card */}
      <Card className="p-6 gradient-primary text-white shadow-elevated">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white/90 font-medium mb-2">Performa</p>
            <div className="flex items-baseline gap-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-5xl font-bold">+23%</span>
            </div>
            <p className="mt-4 text-white/90 text-sm leading-relaxed">
              Minggu yang luar biasa! Interaksi Anda naik 20% dan meningkat 15%.
            </p>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          icon={<ShoppingCart className="w-6 h-6 text-primary" />}
          value="2,847"
          label="Total Pembelian"
          className="bg-gradient-to-br from-cyan-50 to-cyan-100/50"
        />
        <StatCard
          icon={<DollarSign className="w-6 h-6 text-primary" />}
          value="Rp. 100.000"
          label="Pendapatan"
          className="bg-gradient-to-br from-cyan-50 to-cyan-100/50"
        />
      </div>
    </div>
  );
}
