import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FoundationCoursePage from "./pages/FoundationCoursePage";
import AdvancedProgramPage from "./pages/AdvancedProgramPage";
import GroupStudyPage from "./pages/GroupStudyPage";
import RegularTestsPage from "./pages/RegularTestsPage";
import MorningClassesPage from "./pages/MorningClassesPage";
import ApplicationsPage from "./pages/ApplicationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/foundation-course" element={<FoundationCoursePage />} />
          <Route path="/advanced-program" element={<AdvancedProgramPage />} />
          <Route path="/group-study" element={<GroupStudyPage />} />
          <Route path="/regular-tests" element={<RegularTestsPage />} />
          <Route path="/morning-classes" element={<MorningClassesPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
