import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DownloadPage } from './pages/DownloadPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { LiveHighwayRadarBar } from './components/LiveHighwayRadarBar';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [targetAnchorId, setTargetAnchorId] = useState<string | undefined>(undefined);
  const [radarIsDismissed, setRadarIsDismissed] = useState(false);
  const [radarIsExpanded, setRadarIsExpanded] = useState(false);

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages: PageId[] = ['home', 'about', 'services', 'download', 'reviews', 'faqs', 'contact'];
      
      if (hash.includes('/')) {
        const [page, anchor] = hash.split('/');
        if (validPages.includes(page as PageId)) {
          setCurrentPage(page as PageId);
          setTargetAnchorId(anchor);
          return;
        }
      }

      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
        setTargetAnchorId(undefined);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, anchorId?: string) => {
    setCurrentPage(page);
    setTargetAnchorId(anchorId);
    if (anchorId) {
      window.location.hash = `${page}/${anchorId}`;
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] font-sans selection:bg-[#F4EDF9] selection:text-[#5B16A6]">
      {/* Sticky Global Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content View with Smooth Spring Transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'services' && (
              <ServicesPage onNavigate={handleNavigate} targetAnchorId={targetAnchorId} />
            )}
            {currentPage === 'download' && <DownloadPage onNavigate={handleNavigate} />}
            {currentPage === 'reviews' && <ReviewsPage onNavigate={handleNavigate} />}
            {currentPage === 'faqs' && <FaqPage onNavigate={handleNavigate} />}
            {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Interactive Global Animation Widgets */}
      <LiveHighwayRadarBar
        onNavigate={handleNavigate}
        onDismissedChange={setRadarIsDismissed}
        onExpandedChange={setRadarIsExpanded}
      />
      <ScrollToTopButton
        radarIsDismissed={radarIsDismissed}
        radarIsExpanded={radarIsExpanded}
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
