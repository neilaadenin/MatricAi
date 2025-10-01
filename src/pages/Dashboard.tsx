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
      <div className="glass-card p-8 rounded-3xl shadow-elevated hover-float">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Halo, Saiful Ahmad!
        </h1>
        <p className="text-muted-foreground text-lg mb-4">Selamat datang kembali di Aivator</p>
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-primary text-white font-semibold shadow-glow">
          <span>Wujudkan</span>
          <span className="glow-text">Ide</span>
        </div>
      </div>

      {/* Weekly Report Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Laporan Mingguan</h2>
          <p className="text-muted-foreground mt-1">Dec 14 - Dec 20, 2024</p>
        </div>
      </div>

      {/* Performance Section */}
      <PerformanceCard />

      {/* Revenue Analysis */}
      <Card className="glass-card p-8 rounded-3xl shadow-elevated hover-float">
        <h3 className="text-xl font-bold mb-6">Analisa Pendapatan</h3>
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

        <Button variant="hero" size="lg" className="w-full mt-6">
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
