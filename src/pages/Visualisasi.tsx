import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const insights = [
  {
    title: "Stok Rendah",
    description: "Stok semen tinggal 10 kilo. Saatnya Restok!",
    type: "warning",
  },
  {
    title: "Peringatan Kedatangan",
    description: "80 unit cat akan kedatangan dalam 3 hari. Pastikan ruang simpan cukup.",
    type: "info",
  },
  {
    title: "Saran Perkembangan Stok",
    description: "Penjualan paku meningkat 30%. Pertimbangkan untuk menambah stok paku.",
    type: "success",
  },
];

const products = {
  trending: [
    { name: "Semen", sold: "230 terjual", trend: "up" },
    { name: "Paku", sold: "180 terjual", trend: "up" },
    { name: "30% Keramik", sold: "65.2% terjual", trend: "up" },
  ],
  slow: [
    { name: "Pipa", sold: "45 terjual", trend: "down" },
    { name: "Keramik", sold: "30 terjual", trend: "down" },
    { name: "Saklar", sold: "20 terjual", trend: "down" },
  ],
};

const analysis = [
  {
    title: "Semen",
    description: "Penjualan semen naik 23% dalam 2 minggu. Semen populer untuk proyek rumah...",
  },
  {
    title: "Paku",
    description: "Kenaikkan 18% untuk penjualan paku. Paku mengalami peningkatan...",
  },
  {
    title: "Cat Tembok",
    description: "Penjualan cat tembok melonjak 30% khas. Banyak pelanggan yang ingin cat dinding...",
  },
];

export default function Visualisasi() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-8 rounded-3xl shadow-elevated">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Inventory & Insights
        </h1>
        <p className="text-muted-foreground">Analisa mendalam untuk bisnis Anda</p>
      </div>

      {/* Insights Cards */}
      <div className="space-y-4">
        {insights.map((insight, idx) => (
          <Card
            key={idx}
            className={`glass-card p-6 rounded-2xl shadow-elevated hover-float border-l-4 ${
              insight.type === "warning"
                ? "border-l-destructive"
                : insight.type === "info"
                ? "border-l-primary"
                : "border-l-green-500"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${
                insight.type === "warning"
                  ? "bg-destructive/10"
                  : insight.type === "info"
                  ? "bg-primary/10"
                  : "bg-green-500/10"
              }`}>
                <AlertCircle className={`w-6 h-6 ${
                  insight.type === "warning"
                    ? "text-destructive"
                    : insight.type === "info"
                    ? "text-primary"
                    : "text-green-500"
                }`} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{insight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Performance Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Trending Products */}
        <Card className="glass-card p-8 rounded-3xl shadow-elevated">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Performa Produk
          </h2>
          <div className="space-y-4">
            {products.trending.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl gradient-card hover-float">
                <div>
                  <p className="font-bold text-lg">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sold}</p>
                </div>
                <div className="p-3 rounded-xl bg-green-500/10">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Slow Moving Products */}
        <Card className="glass-card p-8 rounded-3xl shadow-elevated">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
            Produk Kurang Laku
          </h2>
          <div className="space-y-4">
            {products.slow.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-destructive/5 hover-float">
                <div>
                  <p className="font-bold text-lg">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sold}</p>
                </div>
                <div className="p-3 rounded-xl bg-destructive/10">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI Analysis */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Analisis AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analysis.map((item, idx) => (
            <Card key={idx} className="glass-card p-8 rounded-3xl shadow-elevated hover-float">
              <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
