import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import ExtensionDevelopmentPage from './pages/services/ExtensionDevelopmentPage';
import ShopifyManagementPage from './pages/services/ShopifyManagementPage';
import WebsiteDevelopmentPage from './pages/services/WebsiteDevelopmentPage';
import DigitalMarketingPage from './pages/services/DigitalMarketingPage';
import AIAgentsPage from './pages/services/AIAgentsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/extension-development" element={<ExtensionDevelopmentPage />} />
            <Route path="/services/shopify-management" element={<ShopifyManagementPage />} />
            <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/services/ai-agents" element={<AIAgentsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;