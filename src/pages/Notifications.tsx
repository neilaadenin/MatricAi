import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Import Ikon untuk konten notifikasi
import { TrendingUp, Users, Target, AlertCircle } from "lucide-react"; 
import aivatorLogo from "@/assets/aivator-logo.png";
import profileImage from "@/assets/profile-drink.png"; 

// Menambahkan tab "Notifikasi"
const tabs = ["Pribadi", "Bisnis", "Notifikasi"];

// Data Notifikasi dipindahkan ke sini
const notifications = [
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "2 jam yang lalu",
  },
  {
    icon: Users,
    title: "Efek Diskon Tukang Berhasil",
    description: "Program diskon khusus untuk tukang berhasil menaik...",
    time: "5 jam yang lalu",
  },
  {
    icon: Target,
    title: "Iklan Jangkau Kontraktor Efektif",
    description: "Iklan yang menargetkan kontraktor di Facebook mem...",
    time: "1 hari yang lalu",
  },
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "2 hari yang lalu",
  },
  {
    icon: TrendingUp,
    title: "Performa Paket Proyek Renovasi",
    description: "Paket proyek renovasi kamar mandi yang Anda buat...",
    time: "3 hari yang lalu",
  },
];


export default function Profile() {
  const [activeTab, setActiveTab] = useState("Pribadi");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Profil</h1>
      </div>

      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24">
            <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-elevated">
            ✏️
          </button>
        </div>
      </div>

      {/* Tabs - Dibuat rata tengah (justify-center) dengan jarak yang rapi */}
      <div className="flex justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            // Menggunakan mx-4 untuk jarak horizontal yang rapi di antara tab
            className={`px-4 py-3 mx-4 font-medium transition-colors relative ${
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent" />
            )}
          </button>
        ))}
      </div>

      {/* --- Form Content (Tergantung pada tab yang aktif) --- */}
      
      {/* Tab: Pribadi */}
      {activeTab === "Pribadi" && (
        <Card className="p-6 shadow-card">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input id="name" placeholder="Ruby Jane" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">No Hp</Label>
              <Input id="phone" placeholder="081223847" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Kata Sandi</Label>
              <div className="flex gap-2">
                <Input id="password" type="password" placeholder="••••••" className="flex-1" />
                <Button variant="outline">Ubah</Button>
              </div>
            </div>

            <Button variant="gradient" className="w-full">
              Simpan Perubahan
            </Button>
          </div>
        </Card>
      )}

      {/* Tab: Bisnis */}
      {activeTab === "Bisnis" && (
        <Card className="p-6 shadow-card">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business">Nama Bisnis</Label>
              <Input id="business" placeholder="Cooking's jane" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Input id="category" placeholder="Makanan" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Lokasi</Label>
              <Input id="location" placeholder="Jakarta" />
            </div>

            <Button variant="gradient" className="w-full">
              Simpan Perubahan
            </Button>
          </div>
        </Card>
      )}

      {/* Tab: Notifikasi (Konten baru) */}
      {activeTab === "Notifikasi" && (
        <div className="space-y-6">
          <div className="text-center"> {/* Header diubah ke center agar sesuai dengan desain atas */}
          
          </div>
          
          {/* Notifications List */}
          <div className="space-y-3">
            {notifications.map((notif, idx) => (
              <Card
                key={idx}
                className="p-4 shadow-card hover:shadow-elevated transition-all cursor-pointer hover:border-primary/20"
              >
                <div className="flex gap-4 items-center"> {/* Tambah items-center untuk vertikal rata tengah */}
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                      <notif.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{notif.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1 line-clamp-2"> {/* margin bottom dikurangi */}
                      {notif.description}
                    </p>
                    <p className="text-xs text-muted-foreground">{notif.time}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xl text-primary/70"> {/* styling panah diubah */}
                      →
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}