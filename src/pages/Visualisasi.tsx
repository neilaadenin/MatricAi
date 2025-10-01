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
      <div>
        <h1 className="text-3xl font-bold mb-2">Inventory & Insights</h1>
      </div>

      {/* Insights Cards */}
      <div className="space-y-3">
        {insights.map((insight, idx) => (
          <Card
            key={idx}
            className={`p-4 border-l-4 shadow-card ${
              insight.type === "warning"
                ? "border-l-destructive bg-destructive/5"
                : insight.type === "info"
                ? "border-l-primary bg-primary/5"
                : "border-l-green-500 bg-green-50"
            }`}
          >
            <h3 className="font-semibold mb-1">{insight.title}</h3>
            <p className="text-sm text-muted-foreground">{insight.description}</p>
          </Card>
        ))}
      </div>

      {/* Performance Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trending Products */}
        <Card className="p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-4">Performa Produk</h2>
          <div className="space-y-3">
            {products.trending.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sold}</p>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </Card>

        {/* Slow Moving Products */}
        <Card className="p-6 shadow-card">
          <h2 className="text-lg font-semibold mb-4">Produk Kurang Laku</h2>
          <div className="space-y-3">
            {products.slow.map((product, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sold}</p>
                </div>
                <TrendingDown className="w-5 h-5 text-destructive" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* AI Analysis */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Analisis AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {analysis.map((item, idx) => (
            <Card key={idx} className="p-5 gradient-card border-0 shadow-card">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
