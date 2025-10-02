import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Import Ikon untuk konten notifikasi
import { TrendingUp, Users, Target, AlertCircle } from "lucide-react"; 
import profileImage from "@/assets/profile-drink.png"; 

// Menambahkan tab "Notifikasi"
const tabs = ["Pribadi", "Bisnis", "Notifikasi"];

// Data Notifikasi tetap ada, tapi title dan description tidak digunakan di render
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

    // Component untuk bagian "Profil Bisnis"
    const BusinessProfileCard = () => (
        <Card className="p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4">Profil Bisnis</h3>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="nama-usaha">Nama Usaha</Label>
                    <Input id="nama-usaha" defaultValue="Nafaya Shop" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="kategori-usaha">Kategori Usaha</Label>
                    <Input id="kategori-usaha" defaultValue="Produk" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="jenis-usaha">Jenis Usaha</Label>
                    <Input id="jenis-usaha" defaultValue="Makanan" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="target-pelanggan">Target Pelanggan</Label>
                    <Input id="target-pelanggan" defaultValue="Pelajar" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="tanggal-buka">Tanggal Buka Usaha</Label>
                    <Input id="tanggal-buka" defaultValue="11 Februari 2019" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="alamat-bisnis">Alamat lengkap usaha</Label>
                    <Input id="alamat-bisnis" placeholder="Alamat Bisnis" />
                </div>
            </div>
        </Card>
    );

    // Component untuk bagian "Data Keuangan"
    const FinancialDataCard = () => (
        <Card className="p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4">Data Keuangan</h3>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="omzet">Rata-rata omset setiap bulan</Label>
                    <Input id="omzet" defaultValue="<1 juta" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="modal">Modal dan sumber biaya</Label>
                    <Input id="modal" defaultValue="Mandiri" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pengeluaran-terbesar">Pengeluaran terbesar usaha</Label>
                    <Input id="pengeluaran-terbesar" placeholder="misal produksi" />
                </div>
            </div>
        </Card>
    );

    // Component untuk bagian "Data Pemasaran"
    const MarketingDataCard = () => (
        <Card className="p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4">Data Pemasaran</h3>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="penjualan-utama">Penjualan utama</Label>
                    <Input id="penjualan-utama" defaultValue="Offline" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pelanggan-harian">Rata-rata pelanggan setiap hari</Label>
                    <Input id="pelanggan-harian" defaultValue="12 orang" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="performa">Performa</Label>
                    <Input id="performa" defaultValue="Menurun" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="repeat-order">Adakah yang repeat order</Label>
                    <Input id="repeat-order" placeholder="berapa" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="link-ecommerce">Link e-commerce (opsional)</Label>
                    <Input id="link-ecommerce" placeholder="masukkan link disini" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="link-instagram">Link instagram</Label>
                    <Input id="link-instagram" placeholder="masukkan link disini" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="link-tiktok">Link tiktok</Label>
                    <Input id="link-tiktok" placeholder="masukkan link disini" />
                </div>
            </div>
        </Card>
    );

    // Component untuk bagian "Data Operasional"
    const OperationalDataCard = () => (
        <Card className="p-6 shadow-card">
            <h3 className="text-lg font-bold mb-4">Data Operasional</h3>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="kapasitas-produksi">Kapasitas produksi</Label>
                    <Input id="kapasitas-produksi" placeholder="berapa unit perbulan" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="sumber-bahan-baku">Sumber bahan baku</Label>
                    <Input id="sumber-bahan-baku" defaultValue="Lokal" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="teknologi">Teknologi yang sudah dipakai</Label>
                    <Input id="teknologi" placeholder="misal kasir digital" />
                </div>
            </div>
        </Card>
    );


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

            {/* Tab: Bisnis (Menggunakan beberapa Card) */}
            {activeTab === "Bisnis" && (
                <div className="space-y-6">
                    {/* 1. Profil Bisnis */}
                    <BusinessProfileCard />
                    
                    {/* 2. Data Keuangan */}
                    <FinancialDataCard />
                    
                    {/* 3. Data Pemasaran */}
                    <MarketingDataCard />
                    
                    {/* 4. Data Operasional */}
                    <OperationalDataCard />

                    {/* Tombol Simpan Global */}
                    <Button variant="gradient" className="w-full">
                        Simpan Semua Perubahan Bisnis
                    </Button>
                </div>
            )}

            {/* Tab: Notifikasi (Header Judul/Sub-judul Dihapus) */}
            {activeTab === "Notifikasi" && (
                <div className="space-y-6">
                    {/* Bagian ini sebelumnya berisi H1 dan P, dan sekarang Dihapus */}
                    
                    {/* Notifications List */}
                    <div className="space-y-3">
                        {notifications.map((notif, idx) => (
                            <Card
                                key={idx}
                                className="p-4 shadow-card hover:shadow-elevated transition-all cursor-pointer hover:border-primary/20"
                            >
                                <div className="flex gap-4 items-center justify-between">
                                    
                                    {/* Kiri: Icon & Waktu */}
                                    <div className="flex gap-4 items-center">
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                                                <notif.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>

                                        {/* Waktu */}
                                        <p className="text-sm text-muted-foreground">
                                            {notif.time}
                                        </p>
                                    </div>

                                    {/* Kanan: Arrow */}
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xl text-primary/70">
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