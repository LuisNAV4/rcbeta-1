import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Inscripcion from "./pages/RegistroRepresentante";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/inicio" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
        {/* Ola inferior decorativa */}
        <div className="background-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"
              fill="hsl(var(--primary))"
              style={{ transition: 'fill 0.3s' }}
            />
          </svg>
        </div>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
