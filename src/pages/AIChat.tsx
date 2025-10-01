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
      <div className="border-b p-4 bg-card shadow-card">
        <h1 className="text-xl font-semibold">AI Chat</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Aivator Logo Center */}
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <img src={aivatorLogo} alt="Aivator" className="w-32 h-32 opacity-20" />
          </div>
        )}

        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              {message.role === "assistant" ? (
                <img src={aivatorLogo} alt="AI" className="w-10 h-10" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-semibold">
                  S
                </div>
              )}
            </div>

            {/* Message Bubble */}
            <div
              className={`max-w-[70%] rounded-2xl p-4 shadow-card ${
                message.role === "user"
                  ? "gradient-primary text-white"
                  : "bg-card text-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-4 bg-card shadow-elevated">
        <div className="flex gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Apa yang mau kamu tanyain?"
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" variant="gradient">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
