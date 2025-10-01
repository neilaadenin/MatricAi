import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import aivatorLogo from "@/assets/aivator-logo.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

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

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-2rem)]">
      {/* Header */}
      <div className="glass-card border-b border-primary/10 p-6 shadow-elevated">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI Chat
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Tanyakan apapun tentang bisnis Anda</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Aivator Logo Center */}
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <img src={aivatorLogo} alt="Aivator" className="w-32 h-32 opacity-30 animate-pulse" />
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
                <div className="w-12 h-12 rounded-2xl gradient-primary p-2 shadow-glow">
                  <img src={aivatorLogo} alt="AI" className="w-full h-full" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center text-white font-bold text-lg shadow-glow">
                  S
                </div>
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
