import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Users } from "lucide-react";

const tabs = ["Trending", "Grup", "Teman"];

const groups = [
  { name: "Info Skincare Viral", members: "5k Bergabung", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
  { name: "Info Skincare Viral", members: "1k Bergabung", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
  { name: "Info Skincare Viral", members: "1.5k Bergabung", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop" },
];

const posts = [
  {
    author: "SHINIE BEAUTY",
    handle: "@shinie",
    content: "🌟 Lagi cari bengkel cat di RT, serum pencerah kulit yang katanya bisa bikin wajah bisa glowing dalam 7 hari? Banyak yang coba salam...",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop",
    likes: "20k",
    comments: "5k",
    shares: "10.1k",
  },
  {
    author: "NanaJaya",
    handle: "@nanastore",
    content: "Toko skincare ini lagi banyak diskon an kaplan katulu, update produk terbaru kayak itu percon kena api, serum gimana uda dijelasin pelanggan saya...",
    likes: "8.5k",
    comments: "2k",
    shares: "50.1k",
  },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState("Trending");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-8 rounded-3xl shadow-elevated">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Komunitas UMKM
        </h1>
        <p className="text-muted-foreground">Terhubung dengan ribuan UMKM lainnya</p>
      </div>

      {/* Tabs */}
      <div className="glass-card rounded-2xl p-2 shadow-card flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-6 py-3 font-semibold rounded-xl transition-all duration-300 ${
              activeTab === tab
                ? "gradient-primary text-white shadow-glow"
                : "text-muted-foreground hover:bg-primary/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Groups Section (when Grup tab is active) */}
      {activeTab === "Grup" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Rekomendasi Untukmu</h2>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groups.map((group, idx) => (
              <Card key={idx} className="overflow-hidden glass-card rounded-3xl shadow-elevated hover-float group">
                <img src={group.image} alt={group.name} className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <img
                      src={group.image}
                      alt=""
                      className="w-12 h-12 rounded-xl object-cover shadow-card"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-base">{group.name}</h3>
                      <p className="text-xs text-muted-foreground">{group.members}</p>
                    </div>
                  </div>
                  <Button variant="gradient" size="lg" className="w-full">
                    + Join
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Posts Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Postingan</h2>
        
        {posts.map((post, idx) => (
          <Card key={idx} className="glass-card p-8 rounded-3xl shadow-elevated hover-float">
            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center text-white font-bold text-xl shadow-glow">
                {post.author[0]}
              </div>
              <div>
                <h3 className="font-bold text-lg">{post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.handle}</p>
              </div>
            </div>

            {/* Content */}
            <p className="mb-6 leading-relaxed">{post.content}</p>

            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt=""
                className="w-full h-80 object-cover rounded-2xl mb-6 shadow-card"
              />
            )}

            {/* Interactions */}
            <div className="flex items-center gap-8 text-sm">
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <div className="p-2 rounded-xl hover:bg-primary/5">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-semibold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <div className="p-2 rounded-xl hover:bg-primary/5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-semibold">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:scale-110">
                <div className="p-2 rounded-xl hover:bg-primary/5">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="font-semibold">{post.shares}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
