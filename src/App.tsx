import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";
import "./index.css";
import MutualFunds from "./pages/products/MutualFunds";
import PMS from "./pages/products/PMS";
import PrivateEquity from "./pages/products/PrivateEquity";
import AIF from "./pages/products/AIF";
import DebtStructure from "./pages/products/DebtStructure";
import RealEstate from "./pages/products/RealEstate";
import Insurance from "./pages/products/Insurance";
import FixedDeposits from "./pages/products/FixedDeposits";
import Bonds from "./pages/products/Bonds";
import Debentures from "./pages/products/Debentures";
import Loans from "./pages/products/Loans";
import RetirementSchemes from "./pages/products/RetirementSchemes";
import InvestmentServices from "./pages/services/InvestmentServices";
import TaxServices from "./pages/services/TaxServices";
import RetirementServices from "./pages/services/RetirementServices";
import InsuranceServices from "./pages/services/InsuranceServices";
import WillTrustServices from "./pages/services/WillTrustServices";
import LoanServices from "./pages/services/LoanServices";
import RealEstateServices from "./pages/services/RealEstateServices";
import { ThemeProvider } from "@/components/ThemeProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import LiveMarket from "@/components/LiveMarket";

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
  <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
              <Route path="/services/investment-services" element={<InvestmentServices />} />
              <Route path="/services/tax-services" element={<TaxServices />} />
              <Route path="/services/retirement-services" element={<RetirementServices />} />
              <Route path="/services/insurance-services" element={<InsuranceServices />} />
              <Route path="/services/will-trust-services" element={<WillTrustServices />} />
              <Route path="/services/loan-services" element={<LoanServices />} />
              <Route path="/services/real-estate-services" element={<RealEstateServices />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/mutual-funds" element={<MutualFunds />} />
              <Route path="/products/pms" element={<PMS />} />
              <Route path="/products/private-equity" element={<PrivateEquity />} />
              <Route path="/products/aif" element={<AIF />} />
              <Route path="/products/debt-structure" element={<DebtStructure />} />
              <Route path="/products/real-estate" element={<RealEstate />} />
              <Route path="/products/insurance" element={<Insurance />} />
              <Route path="/products/fixed-deposits" element={<FixedDeposits />} />
              <Route path="/products/bonds" element={<Bonds />} />
              <Route path="/products/debentures" element={<Debentures />} />
              <Route path="/products/loans" element={<Loans />} />
              <Route path="/products/retirement-schemes" element={<RetirementSchemes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <LiveMarket />
        <WhatsAppFloat />
      </div>
    </TooltipProvider>
  </ThemeProvider>  
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