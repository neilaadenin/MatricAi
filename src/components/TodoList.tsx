import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";

const todos = [
  {
    title: "Buat Daftar Material Paket",
    description: "Daftar semua bahan yang dibutuhkan untuk satu proyek kecil. Misalnya...",
    completed: false,
  },
  {
    title: "Tentukan Harga Spesial Paket",
    description: "Setelah daftar material dibuat, hitung total harga semua item. Berikan diskon khusus...",
    completed: false,
  },
  {
    title: "Latih Karyawan Toko",
    description: "Berikan informasi lengkap tentang paket ini kepada semua karyawan",
    completed: true,
    highlight: true,
    images: [
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    ],
  },
  {
    title: "Tentukan Harga Spesial Paket",
    description: "Setelah daftar material dibuat, hitung total harga semua item. Berikan diskon khusus...",
    completed: false,
  },
];

export function TodoList() {
  return (
    <Card className="p-6 shadow-card">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">Hi, Neila</p>
        <h2 className="text-2xl font-bold">Ini adalah Todo Kamu</h2>
      </div>

      <div className="space-y-4">
        {todos.map((todo, idx) => (
          <div key={idx} className="relative">
            {/* Vertical line */}
            {idx < todos.length - 1 && (
              <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-transparent" />
            )}

            <div
              className={`relative ${
                todo.highlight
                  ? "gradient-primary p-6 rounded-xl text-white shadow-elevated"
                  : "pl-10 pr-4 py-4"
              }`}
            >
              {/* Icon */}
              <div
                className={`absolute left-0 top-4 ${
                  todo.highlight ? "left-2 top-2" : ""
                }`}
              >
                {todo.completed ? (
                  <CheckCircle2 className={`w-6 h-6 ${todo.highlight ? "text-white" : "text-primary"}`} />
                ) : (
                  <Circle className={`w-6 h-6 ${todo.highlight ? "text-white" : "text-muted-foreground"}`} />
                )}
              </div>

              <div className={todo.highlight ? "ml-8" : ""}>
                <h3 className={`font-semibold mb-1 ${todo.highlight ? "text-white" : "text-foreground"}`}>
                  {todo.title}
                </h3>
                <p className={`text-sm ${todo.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                  {todo.description}
                </p>

                {/* Images for highlighted todo */}
                {todo.highlight && todo.images && (
                  <div className="flex gap-2 mt-4">
                    {todo.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
