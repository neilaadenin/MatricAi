import { ArrowLeft, ThumbsUp, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function PostDetail() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/komunitas")}
          className="rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold">Komunitas UMKM</h1>
      </div>

      {/* Post Card */}
      <div className="glass-card p-8 rounded-3xl shadow-elevated space-y-6">
        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold shadow-glow">
            DB
          </div>
          <div>
            <h3 className="font-semibold">Depo Barokah</h3>
            <p className="text-sm text-muted-foreground">Toko Bangunan</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-foreground leading-relaxed">
            Sebagai toko bangunan, kita belajar kalau usaha itu bukan cuma soal jualan semen atau bata, tapi juga gimana cara edukasiin pelanggan biar ngerti produk, nyatet transaksi biar rapi, sampai promosi sederhana di sosmed yang bikin orang lebih percaya — nah, hal-hal kecil kayak gini ternyata bisa banget kita terapin bareng-bareng di UMKM lain juga.
          </p>

          {/* Post Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=500&fit=crop"
              alt="Toko"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-muted-foreground">
          <button className="flex items-center gap-2 hover:text-primary transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span>20k</span>
          </button>
          <div className="flex items-center gap-2">
            <span>7k Komentar</span>
          </div>
          <div className="flex items-center gap-2">
            <span>50.1k Views</span>
          </div>
          <button className="ml-auto hover:text-primary transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="glass-card p-8 rounded-3xl shadow-elevated space-y-6">
        <h2 className="text-xl font-bold">Komentar</h2>

        {/* Comment 1 */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-glow flex-shrink-0">
              DB
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold">Depo Barokah</h4>
                <span className="text-xs text-muted-foreground">Toko Bangunan</span>
              </div>
              <p className="text-foreground mb-2">
                Setuju, terimakasih sudah share!
              </p>
              <div className="flex items-center gap-4 text-sm">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-primary font-medium">1.2k</span>
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  Balas
                </button>
              </div>

              {/* Nested Reply */}
              <div className="mt-4 pl-6 border-l-2 border-primary/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-sm shadow-glow flex-shrink-0">
                    DB
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">Depo Barokah</h4>
                      <span className="text-xs text-muted-foreground">Toko Bangunan</span>
                    </div>
                    <p className="text-foreground text-sm mb-2">
                      Setuju, terimakasih sudah share!
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="w-3 h-3" />
                        <span className="text-primary font-medium">1.2k</span>
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors text-xs">
                        Balas
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Comment */}
        <div className="flex items-center gap-3 pt-4 border-t">
          <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white font-bold shadow-glow flex-shrink-0">
            A
          </div>
          <Input
            placeholder="Tambahkan komentar..."
            className="flex-1 rounded-xl h-12"
          />
          <Button variant="gradient" size="lg">
            Kirim
          </Button>
        </div>
      </div>
    </div>
  );
}
