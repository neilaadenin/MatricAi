import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function RecommendationCards() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Rekomendasi AI</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="glass-card p-8 rounded-3xl shadow-elevated hover-float group">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="font-bold text-xl mb-3">Tingkatkan Omzet Proyek Anda</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Tawarkan paket khusus untuk proyek renovasi kecil. Buat bundle material yang sering dibeli
            pelanggan Anda.
          </p>
          <Button variant="gradient" size="lg" className="w-full group">
            <span>Lihat Detail</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>

        <Card className="glass-card p-8 rounded-3xl shadow-elevated hover-float group">
          <div className="text-4xl mb-4">💪</div>
          <h3 className="font-bold text-xl mb-3">Kembangkan Relasi dengan Tukang</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Program loyalitas untuk tukang langganan bisa membantu omzet stabil. Berikan diskon khusus
            untuk pembelian rutin mereka.
          </p>
          <Button variant="gradient" size="lg" className="w-full group">
            <span>Lihat Detail</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Card>
      </div>
    </div>
  );
}
