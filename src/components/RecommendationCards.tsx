import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const recommendations = [
  {
    title: "Kembangkan Relasi dengan Tukang",
    description: "Jalin hubungan yang kuat dengan kontraktor lokal",
  },
  {
    title: "Tingkatkan Omzet Proyek Anda",
    description: "Strategi untuk meningkatkan pendapatan bulanan",
  },
  {
    title: "Jangkau Kontraktor di Sekitar Kamu",
    description: "Ekspansi jaringan bisnis Anda",
  },
];

export function RecommendationCards() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Apa yang harus kamu lakukan hari ini?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec, idx) => (
          <Card
            key={idx}
            className="p-6 gradient-card border-0 shadow-card hover:shadow-elevated transition-all cursor-pointer group"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {rec.title}
                </h3>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-primary mt-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
