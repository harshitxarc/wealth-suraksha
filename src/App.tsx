import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import "./index.css";

const queryClient = new QueryClient();


function AppWithRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  // On mount, if not on home, redirect to home
  React.useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </div>
    </TooltipProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppWithRedirect />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;