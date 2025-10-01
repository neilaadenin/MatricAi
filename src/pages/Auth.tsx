import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Sparkles, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aivatorLogo from "@/assets/aivator-logo.png";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Auth attempt:", { email, password, name, isLogin });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Branding */}
        <div className="hidden md:flex flex-col justify-center space-y-8">
          <div className="flex items-center gap-4">
            <img src={aivatorLogo} alt="Aivator" className="w-16 h-16 drop-shadow-glow" />
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent glow-text">
                Aivator
              </h1>
              <p className="text-muted-foreground text-lg mt-2">Platform AI untuk UMKM</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl hover-float">
              <Sparkles className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-xl mb-2">AI yang Memahami Bisnis Anda</h3>
              <p className="text-muted-foreground">Dapatkan insight dan rekomendasi yang disesuaikan dengan kebutuhan bisnis UMKM Anda</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-float">
              <Sparkles className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-bold text-xl mb-2">Komunitas UMKM Terhubung</h3>
              <p className="text-muted-foreground">Bergabung dengan ribuan UMKM lainnya untuk berbagi pengalaman dan strategi</p>
            </div>
          </div>
        </div>

        {/* Right side - Auth form */}
        <Card className="glass-card p-8 md:p-10 rounded-3xl shadow-intense hover-float">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? (
                <>
                  Halo! <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Selamat Datang Kembali</span>
                </>
              ) : (
                <>
                  Mulai <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Perjalanan Anda</span>
                </>
              )}
            </h2>
            <p className="text-muted-foreground">
              {isLogin ? "Masuk ke akun Anda untuk melanjutkan" : "Buat akun baru untuk memulai"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold">Nama Lengkap</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-2 focus:border-primary/40 transition-all"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-2 focus:border-primary/40 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-2 focus:border-primary/40 transition-all"
                  required
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-muted-foreground">Ingat saya</span>
                </label>
                <a href="#" className="text-primary hover:underline font-medium">
                  Lupa password?
                </a>
              </div>
            )}

            <Button 
              type="submit" 
              variant="gradient" 
              size="lg" 
              className="w-full group"
            >
              {isLogin ? "Masuk" : "Daftar Sekarang"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-semibold hover:underline"
              >
                {isLogin ? "Daftar sekarang" : "Masuk di sini"}
              </button>
            </p>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground">Atau lanjutkan dengan</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-12 rounded-xl">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-12 rounded-xl">
                <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="h-12 rounded-xl">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Kembali ke beranda
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
