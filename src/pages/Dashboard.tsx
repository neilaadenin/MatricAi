import { PerformanceCard } from "@/components/PerformanceCard";
import { RecommendationCards } from "@/components/RecommendationCards";
import { TodoList } from "@/components/TodoList";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Halo, Saiful Ahmad!</h1>
        <p className="text-muted-foreground">Selamat datang</p>
        <div className="mt-4">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-sm font-medium">
            Wujudkan <span className="text-primary font-bold">Ide</span>
          </span>
        </div>
      </div>

      {/* Weekly Report Header */}
      <div>
        <h2 className="text-xl font-semibold mb-1">Laporan Mingguan</h2>
        <p className="text-sm text-muted-foreground">Dec 14 - Dec 20, 2024</p>
      </div>

      {/* Performance Section */}
      <PerformanceCard />

      {/* Revenue Analysis */}
      <Card className="p-6 shadow-card">
        <h3 className="text-lg font-semibold mb-4">Analisa Pendapatan</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
            <div>
              <p className="font-medium text-destructive">
                Masalah Utama: Pertumbuhan Omzet Melambat
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Meski ada pertumbuhan 12%, laju pertumbuhannya menurun dan 18% sebelumnya.
              </p>
            </div>
          </div>
          
          <div className="pl-8 space-y-2 text-sm">
            <p className="text-muted-foreground">• Faktor Penyebab: Kehadiran offline yang terbatas</p>
            <p className="text-muted-foreground">• Faktor Penyebab: Biaya bahan baku yang tinggi mengurangi margin</p>
            <p className="text-muted-foreground">• Faktor Penyebab: Potensi pasar lokal yang belum tergaap</p>
          </div>
        </div>

        <Button variant="gradient" className="w-full mt-6">
          Apa yang bisa kamu lakukan?
        </Button>
      </Card>

      {/* AI Recommendations */}
      <RecommendationCards />

      {/* Todo List */}
      <TodoList />
    </div>
  );
}
