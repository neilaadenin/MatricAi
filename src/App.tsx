import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";
import Dashboard from "./pages/Dashboard";
import AIChat from "./pages/AIChat";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Visualisasi from "./pages/Visualisasi";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import ActionPlan from "./pages/ActionPlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth" || location.pathname === "/onboarding";

  return (
    <div className="flex min-h-screen w-full bg-gradient-subtle">
      {!isAuthPage && <Sidebar />}
      <main className={`flex-1 ${!isAuthPage ? "md:ml-64 pb-20 md:pb-0" : ""}`}>
        <div className={isAuthPage ? "" : "container mx-auto px-4 py-8 max-w-7xl"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/action-plan" element={<ActionPlan />} />
            <Route path="/ai" element={<AIChat />} />
            <Route path="/visualisasi" element={<Visualisasi />} />
            <Route path="/komunitas" element={<Community />} />
            <Route path="/komunitas/post/:id" element={<PostDetail />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/notifikasi" element={<Notifications />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      {!isAuthPage && <MobileNav />}
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
