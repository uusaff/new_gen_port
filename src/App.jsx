import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuroraBackground } from './components/motion/AuroraBackground';
import { AmbientCursor } from './components/motion/AmbientCursor';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';
import { RSSLanding } from './pages/RSSLanding';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F0] dark:bg-[#0A0A0A] text-[#1C1C1A] dark:text-[#F4F4F0] font-sans selection:bg-[#D90429] selection:text-[#F4F4F0] overflow-x-hidden relative z-0 transition-colors duration-700">
      <AuroraBackground />
      <AmbientCursor />
       <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-giant { font-family: 'Bebas Neue', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
       `}} />
       
       <Navbar />
       <ScrollToTop />
       
       <main className="relative z-10 w-full">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/experience" element={<Experience />} />
           <Route path="/education" element={<Education />} />
           <Route path="/services" element={<Services />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/privacy" element={<PrivacyPolicy />} />
           <Route path="/terms" element={<Terms />} />
           <Route path="/rss" element={<RSSLanding />} />
           {/* Catch-all 404 route */}
           <Route path="*" element={<NotFound />} />
         </Routes>
       </main>
       
       <Footer />
    </div>
  );
}

export default App;
