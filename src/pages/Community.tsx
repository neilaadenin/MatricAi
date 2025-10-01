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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Komunitas UMKM</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b">
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

      {/* Groups Section (when Grup tab is active) */}
      {activeTab === "Grup" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Rekomendasi Untukmu</h2>
            <Button variant="ghost" size="sm">Lihat Semua</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {groups.map((group, idx) => (
              <Card key={idx} className="overflow-hidden shadow-card hover:shadow-elevated transition-all">
                <img src={group.image} alt={group.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={group.image}
                      alt=""
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{group.name}</h3>
                      <p className="text-xs text-muted-foreground">{group.members}</p>
                    </div>
                  </div>
                  <Button variant="gradient" size="sm" className="w-full">
                    + Join
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Posts Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Postingan</h2>
        
        {posts.map((post, idx) => (
          <Card key={idx} className="p-6 shadow-card hover:shadow-elevated transition-all">
            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold">
                {post.author[0]}
              </div>
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.handle}</p>
              </div>
            </div>

            {/* Content */}
            <p className="mb-4 text-sm leading-relaxed">{post.content}</p>

            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt=""
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}

            {/* Interactions */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-5 h-5" />
                <span>{post.shares}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
