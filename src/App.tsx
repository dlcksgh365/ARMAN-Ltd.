import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";
import { LanguageProvider } from "@/contexts/LanguageContext";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ExportPage from "@/pages/ExportPage";
import ImportPage from "@/pages/ImportPage";
import DistributionPage from "@/pages/DistributionPage";
import EngineeringPage from "@/pages/EngineeringPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <main className="min-h-screen bg-background font-sans selection:bg-blue-accent/30 selection:text-navy">
          <Navbar onInquiryClick={() => setIsInquiryOpen(true)} />
          <Routes>
            <Route path="/" element={<HomePage onInquiryClick={() => setIsInquiryOpen(true)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/export" element={<ExportPage />} />
            <Route path="/services/import" element={<ImportPage />} />
            <Route path="/services/distribution" element={<DistributionPage />} />
            <Route path="/services/engineering" element={<EngineeringPage />} />
          </Routes>
          <Footer />
          <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
