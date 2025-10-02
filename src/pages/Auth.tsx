import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import authHero from "@/assets/auth-hero.jpg";

export default function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy login - navigate to onboarding
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex w-full">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${authHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-accent/60 to-primary/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <h1 className="text-5xl font-bold mb-4 glow-text">
            Platform AI untuk UMKM
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Dapatkan insight dan rekomendasi bisnis yang cerdas dari AI
          </p>
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-white rounded-full" />
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            <div className="w-1 h-1 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? (
                <>Selamat Datang di <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aivator</span></>
              ) : (
                <>Daftar di <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aivator</span></>
              )}
            </h2>
            <p className="text-muted-foreground">
              {isLogin ? "Masuk ke akun Anda" : "Buat akun baru untuk memulai"}
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
              className="w-full"
            >
              {isLogin ? "Masuk" : "Daftar Sekarang"}
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
                <span className="px-4 bg-background text-muted-foreground">Atau lanjutkan dengan</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-12 rounded-xl">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="h-12 rounded-xl">
                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
