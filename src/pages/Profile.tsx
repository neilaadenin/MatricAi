import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import aivatorLogo from "@/assets/aivator-logo.png";

const tabs = ["Pribadi", "Bisnis", "Pengaturan"];

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
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <img src={aivatorLogo} alt="Profile" className="w-16 h-16" />
            </div>
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-elevated">
            ✏️
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium transition-colors relative ${
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

      {/* Form */}
      <Card className="p-6 shadow-card">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input id="name" placeholder="Saiful Ahmad" />
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

      {/* Business Info (when Bisnis tab is active) */}
      {activeTab === "Bisnis" && (
        <Card className="p-6 shadow-card">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business">Nama Bisnis</Label>
              <Input id="business" placeholder="Toko Bangunan ABC" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Input id="category" placeholder="Retail" />
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
