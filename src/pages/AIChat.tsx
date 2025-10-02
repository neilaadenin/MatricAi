import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import aivatorLogo from "@/assets/aivator-logo.png";
import profileDrink from "@/assets/profile-drink.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const chatHistory = [
  { id: 1, title: "Strategi Marketing TikTok", date: "Kemarin" },
  { id: 2, title: "Tips Meningkatkan Penjualan", date: "2 hari lalu" },
  { id: 3, title: "Analisis Kompetitor", date: "3 hari lalu" },
];

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Kalo promoin produk enaknya dimana?",
    },
    {
      role: "assistant",
      content:
        "Kamu bisa melakukan promosi ke TikTok, karena TikTok adalah salah satu platform yang sedang banyak diperbincangkan dan merupakan platform dengan pengguna terbanyak saat ini.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-2rem)]">
      {/* Header */}
      <div className="glass-card border-b border-primary/10 p-6 shadow-elevated">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aivator Chat
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Tanyakan apapun tentang bisnis Anda</p>
          </div>
          <Collapsible open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="gap-2">
                Riwayat chat
                <ChevronDown className={`w-4 h-4 transition-transform ${isHistoryOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="absolute right-6 top-20 z-50">
              <div className="glass-card rounded-2xl shadow-elevated p-4 w-64 space-y-2">
                {chatHistory.map((chat) => (
                  <button
                    key={chat.id}
                    className="w-full text-left p-3 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <p className="font-medium text-sm">{chat.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{chat.date}</p>
                  </button>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Aivator Logo Center */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <img src={profileDrink} alt="Profile" className="w-32 h-32 opacity-30 animate-pulse" />
            <p className="text-muted-foreground mt-4">Mulai percakapan dengan AI</p>
          </div>
        )}

        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex gap-4 animate-fade-in ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              {message.role === "assistant" ? (
                <img src={aivatorLogo} alt="AI" className="w-12 h-12 rounded-2xl object-contain" />
              ) : (
                <img src={profileDrink} alt="User" className="w-12 h-12 rounded-2xl object-cover" />
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[70%] rounded-3xl p-5 shadow-elevated ${
                message.role === "user"
                  ? "gradient-hero text-white"
                  : "glass-card"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="glass-card border-t border-primary/10 p-6 shadow-elevated">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Apa yang mau kamu tanyakan?"
            className="flex-1 h-14 rounded-2xl border-2 focus:border-primary/40"
          />
          <Button onClick={handleSend} size="icon" variant="hero" className="h-14 w-14 rounded-2xl">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}