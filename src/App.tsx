import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PromptEngineeringGuide from "./pages/PromptEngineeringGuide";
import CreateGemGuide from "./pages/CreateGemGuide";
import GenerateImageGuide from "./pages/GenerateImageGuide";
import DeepResearchGuide from "./pages/DeepResearchGuide";
import TakingNotesGuide from "./pages/TakingNotesGuide";
import CanvasGuide from "./pages/CanvasGuide";
import AnalysingDataGuide from "./pages/AnalysingDataGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guide/prompt-engineering" element={<PromptEngineeringGuide />} />
          <Route path="/guide/create-gem" element={<CreateGemGuide />} />
          <Route path="/guide/generate-image" element={<GenerateImageGuide />} />
          <Route path="/guide/deep-research" element={<DeepResearchGuide />} />
          <Route path="/guide/taking-notes" element={<TakingNotesGuide />} />
          <Route path="/guide/canvas" element={<CanvasGuide />} />
          <Route path="/guide/analysing-data" element={<AnalysingDataGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
