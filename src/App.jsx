import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VerifyPage from './pages/VerifyPage';

/* Router assistant for window scroll & document title */
function RouterAssistant() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Dynamic page title mapping
    const titles = {
      '/': 'Trion Solutions — Software, Websites & Automation for Growing Businesses',
      '/services': 'Services & Solutions — Trion Solutions',
      '/work': 'Case Studies & Selected Work — Trion Solutions',
      '/about': 'About Us & Our Team — Trion Solutions',
      '/contact': 'Contact Us & Book Consultation — Trion Solutions',
      '/verify': 'Verify Internship Credential — Trion Solutions',
    };
    document.title = titles[pathname] || 'Trion Solutions';

    // Hash scroll or scroll to top
    if (hash) {
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/* Page transition wrapper */
const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition} className="page-wrapper">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouterAssistant />
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
