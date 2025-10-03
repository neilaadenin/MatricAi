# MatricAi - Platform AI untuk UMKM

Aplikasi web HTML statis untuk platform AI yang membantu UMKM dalam mengelola bisnis mereka.

## 🚀 Cara Menjalankan Aplikasi

### Opsi 1: Menggunakan Python (Recommended)
```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

### Opsi 2: Menggunakan Node.js
```bash
# Install serve globally
npm install -g serve

# Jalankan server
serve -s . -l 3000
```

### Opsi 3: Menggunakan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 📁 Struktur File

```
├── index.html              # Halaman utama (redirect ke auth)
├── auth.html               # Halaman login/register
├── onboarding.html         # Halaman onboarding
├── aivator-dashboard.html  # Dashboard utama
├── ai-chat.html           # Chat dengan AI
├── visualisasi.html       # Visualisasi data bisnis
├── community.html         # Komunitas UMKM
├── profile.html           # Profil pengguna
├── action-plan.html       # Rencana aksi bisnis
├── notifications.html     # Notifikasi
├── public/
│   ├── logo.png          # Logo aplikasi
│   └── favicon.ico       # Icon browser
└── package.json          # Dependencies
```

## 🎯 Fitur Utama

- **Dashboard Interaktif** - Overview bisnis dengan grafik dan statistik
- **AI Chat** - Chat dengan AI untuk konsultasi bisnis
- **Visualisasi Data** - Grafik dan analisis performa bisnis
- **Komunitas** - Forum dan sharing antar UMKM
- **Profil Pengguna** - Manajemen data pribadi dan bisnis
- **Rencana Aksi** - Planning dan strategi bisnis
- **Notifikasi** - Update dan reminder penting

## 🎨 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling dan animasi
- **JavaScript** - Interaktivitas
- **Tailwind CSS** - Framework CSS utility-first
- **Glassmorphism** - Efek kaca modern
- **Responsive Design** - Mobile-friendly

## 📱 Responsive Design

Aplikasi dirancang untuk berfungsi optimal di:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Customization

### Mengubah Logo
Ganti file `public/logo.png` dengan logo Anda sendiri.

### Mengubah Warna
Edit variabel CSS di setiap file HTML:
```css
--primary: hsl(280 80% 60%);
--accent: hsl(320 85% 65%);
```

### Menambah Halaman Baru
1. Buat file HTML baru
2. Copy struktur dari file yang ada
3. Update navigasi di sidebar dan mobile nav

## 📄 Lisensi

Aplikasi ini dibuat untuk keperluan kompetisi coding.

## 🤝 Kontribusi

Silakan buat issue atau pull request untuk perbaikan dan fitur baru.

---

**MatricAi** - Platform AI untuk UMKM Indonesia 🇮🇩