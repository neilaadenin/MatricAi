import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const weeklyTasks = [
  {
    title: "Buat akun tiktok",
    steps: [
      "Download tiktok",
      "Buat akun tiktok",
      'Cari referensi "toko enak daerah malang"',
      "Pelajari cara membuat video tiktok",
      "Gunakan sound viral",
    ],
  },
  {
    title: "Rutin posting di instagram",
    steps: [
      "Download tiktok",
      "Buat akun tiktok",
      'Cari referensi "toko enak daerah malang"',
      "Pelajari cara membuat video tiktok",
      "Gunakan sound viral",
    ],
  },
];

export default function ActionPlan() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-8 rounded-3xl shadow-elevated hover-float">
        <h1 className="text-3xl font-bold mb-2">
          Langkah-langkah untuk mengembangkan bisnis kamu 🚀
        </h1>
      </div>

      {/* Weekly Tasks */}
      <div>
        <h2 className="text-xl font-bold mb-6">Minggu ini</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {weeklyTasks.map((task, idx) => (
            <Card key={idx} className="glass-card p-6 rounded-3xl shadow-elevated hover-float">
              <h3 className="text-lg font-bold mb-4">{task.title}</h3>
              <ul className="space-y-2 mb-6">
                {task.steps.map((step, stepIdx) => (
                  <li key={stepIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    {step}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" className="w-full group">
                Lihat Detail
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Market Trend Info */}
      <Card className="glass-card p-8 rounded-3xl shadow-elevated">
        <h2 className="text-xl font-bold mb-4">Info Tren Pasar</h2>
        <p className="text-muted-foreground mb-6">
          makanan sehat sedang naik 20% di pasar online. makanan sehat sedang naik 20% di pasar
          online. makanan sehat sedang naik 20% di pasar online
        </p>
        <Button
          variant="gradient"
          size="lg"
          onClick={() => navigate("/ai")}
          className="group"
        >
          <Sparkles className="w-5 h-5" />
          Diskusi dengan AI
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Card>
    </div>
  );
}
