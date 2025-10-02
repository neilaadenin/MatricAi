import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import aivatorLogo from "@/assets/aivator-logo.png";
import profileImage from "@/assets/profile-drink.png"; // Add this import and save the image

// Menghapus tab "Pengaturan"
const tabs = ["Pribadi", "Bisnis"];

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
            // Menggunakan mx-4 untuk jarak horizontal yang rapi di antara dua tab.
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

      {/* Form Content (Tergantung pada tab yang aktif) */}
      
      {/* Tab: Pribadi */}
      {(activeTab === "Pribadi" || activeTab === "Pengaturan") && ( // Tetap tampilkan "Pribadi" sebagai default
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
    </div>
  );
}