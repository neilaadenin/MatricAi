import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import aivatorLogo from "@/assets/aivator-logo-clean.png";
import onboarding1 from "@/assets/onboarding-1.png";
import onboarding2 from "@/assets/onboarding-2.png";
import onboarding3 from "@/assets/onboarding-3.png";

const steps = ["Profil Bisnis", "Data Keuangan", "Data Operasional", "Data Pemasaran"];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/");
    }
  };

  const getOnboardingImage = () => {
    switch(currentStep) {
      case 0: return onboarding1;
      case 1: return onboarding2;
      case 2: return onboarding3;
      case 3: return onboarding1;
      default: return onboarding1;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="glass-card p-8 rounded-3xl shadow-elevated">
          <h1 className="text-2xl font-bold text-center mb-8">Detail Bisnis</h1>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 px-4">
            {steps.map((_, idx) => (
              <div key={idx} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                    idx <= currentStep
                      ? "gradient-primary text-white shadow-glow"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`h-1 w-16 mx-2 transition-all ${
                      idx < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="space-y-6">
            {currentStep === 0 && <ProfilBisnisForm />}
            {currentStep === 1 && <DataKeuanganForm />}
            {currentStep === 2 && <DataOperasionalForm />}
            {currentStep === 3 && <DataPemasaranForm />}
          </div>

          {/* Button */}
          <Button
            onClick={handleNext}
            variant="hero"
            size="lg"
            className="w-full mt-8"
          >
            {currentStep === steps.length - 1 ? "Selesai" : "Selanjutnya"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ProfilBisnisForm() {
  return (
    <>
      <div className="space-y-2">
        <Label>Nama Usaha</Label>
        <Input placeholder="Nafaya Shop" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Kategori Usaha</Label>
        <Select defaultValue="produk">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="produk">Produk</SelectItem>
            <SelectItem value="jasa">Jasa</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Jenis Usaha</Label>
        <Select defaultValue="makanan">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="makanan">Makanan</SelectItem>
            <SelectItem value="fashion">Fashion</SelectItem>
            <SelectItem value="elektronik">Elektronik</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Target pelanggan</Label>
        <Select defaultValue="pelajar">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pelajar">Pelajar</SelectItem>
            <SelectItem value="dewasa">Dewasa</SelectItem>
            <SelectItem value="keluarga">Keluarga</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Tanggal buka usaha</Label>
        <Input type="text" placeholder="11 Februari 2019" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Alamat lengkap usaha</Label>
        <Input placeholder="Alamat Bisnis" className="h-12 rounded-2xl" />
      </div>
    </>
  );
}

function DataKeuanganForm() {
  return (
    <>
      <div className="space-y-2">
        <Label>Rata-rata omset setiap bulan</Label>
        <Select defaultValue="1juta">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1juta">&lt;1 juta</SelectItem>
            <SelectItem value="1-5juta">1-5 juta</SelectItem>
            <SelectItem value="5-10juta">5-10 juta</SelectItem>
            <SelectItem value="10juta">&gt;10 juta</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Modal dan sumber biaya</Label>
        <Select defaultValue="mandiri">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mandiri">Mandiri</SelectItem>
            <SelectItem value="pinjaman">Pinjaman</SelectItem>
            <SelectItem value="investor">Investor</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Pengeluaran terbesar usaha</Label>
        <Input placeholder="misal produksi" className="h-12 rounded-2xl" />
      </div>
    </>
  );
}

function DataOperasionalForm() {
  return (
    <>
      <div className="space-y-2">
        <Label>Kapasitas produksi</Label>
        <Input placeholder="berapa unit perbulan" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Sumber bahan baku</Label>
        <Select defaultValue="lokal">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lokal">Lokal</SelectItem>
            <SelectItem value="nasional">Nasional</SelectItem>
            <SelectItem value="internasional">Internasional</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Teknologi yang sudah dipakai</Label>
        <Input placeholder="misal kasir digital" className="h-12 rounded-2xl" />
      </div>
    </>
  );
}

function DataPemasaranForm() {
  return (
    <>
      <div className="space-y-2">
        <Label>Penjualan utama</Label>
        <Select defaultValue="offline">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="offline">Offline</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Rata-rata pelanggan setiap hari</Label>
        <Input placeholder="12 orang" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Performa</Label>
        <Select defaultValue="menurun">
          <SelectTrigger className="h-12 rounded-2xl">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="menurun">Menurun</SelectItem>
            <SelectItem value="stabil">Stabil</SelectItem>
            <SelectItem value="meningkat">Meningkat</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Adakah yang repeat order</Label>
        <Input placeholder="berapa" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Link e-commerce (opsional)</Label>
        <Input placeholder="masukkan link disini" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Link instagram</Label>
        <Input placeholder="masukkan link disini" className="h-12 rounded-2xl" />
      </div>
      <div className="space-y-2">
        <Label>Link tiktok</Label>
        <Input placeholder="masukkan link disini" className="h-12 rounded-2xl" />
      </div>
    </>
  );
}
