

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoImg from '../assets/logo.png';

export function Navbar() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBees, setShowBees] = useState(false);

  const handleFeaturesOpen = () => {
    setIsFeaturesOpen(true);
    setShowBees(true);
  };

  const handleFeaturesClose = () => {
    setIsFeaturesOpen(false);
    setTimeout(() => setShowBees(false), 1500);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ✅ Logo */}
          <a href="#home" className="flex items-center -ml-2" onClick={handleNavClick}>
            <img
              src={LogoImg}
              alt="Offerbeez Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown Wrapper */}
            <div
              className="relative"
              onMouseEnter={handleFeaturesOpen}
              onMouseLeave={handleFeaturesClose}
            >
              <button className="text-[#3266CC] hover:text-[#FF4FA2] transition-all duration-300 flex items-center gap-1 relative z-10">
                Features
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isFeaturesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* 🐝 Bees Animation */}
              <AnimatePresence>
                {showBees && (
                  <>
                    <motion.div
                      className="absolute top-0 left-0 text-2xl pointer-events-none"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 50, 120, 200],
                        y: [0, -30, -80, -150],
                        opacity: [0, 1, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      🐝
                    </motion.div>
                    <motion.div
                      className="absolute top-0 left-0 text-2xl pointer-events-none"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, -40, -100, -180],
                        y: [0, -20, -50, -120],
                        opacity: [0, 1, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: 0.1 }}
                    >
                      🐝
                    </motion.div>
                    <motion.div
                      className="absolute top-0 left-0 text-2xl pointer-events-none"
                      initial={{ x: 0, y: 0, opacity: 0 }}
                      animate={{
                        x: [0, 10, -10, 15],
                        y: [0, -40, -100, -180],
                        opacity: [0, 1, 1, 0],
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    >
                      🐝
                    </motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* ✅ Dropdown */}
              <AnimatePresence>
                {isFeaturesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 backdrop-blur-md bg-white/90 rounded-xl shadow-2xl py-2 border border-white/20"
                  >
                    <a
                      href="#consumer"
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                    >
                      Consumer
                    </a>
                    <a
                      href="#business"
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                    >
                      Business
                    </a>
                    
                    <a
                      href="#partner"
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                    >
                      Partner
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Menu Items */}
            <a href="#categories" onClick={handleNavClick} className="text-[#3266CC] hover:text-[#FF4FA2]">
              Categories
            </a>
            <a href="#about" onClick={handleNavClick} className="text-[#3266CC] hover:text-[#FF4FA2]">
              About Us
            </a>
            <a href="#how-it-works" onClick={handleNavClick} className="text-[#3266CC] hover:text-[#FF4FA2]">
              How It Works
            </a>
            <a href="#faqs" onClick={handleNavClick} className="text-[#3266CC] hover:text-[#FF4FA2]">
              FAQ
            </a>
            <a
              href="#footer"
              onClick={handleNavClick}
              className="bg-gradient-to-r from-[#FF4FA2] to-[#3266CC] text-white px-6 py-2.5 rounded-full hover:shadow-xl transition-all shadow-md"
            >
              Download
            </a>
          </div>

          {/* ✅ Mobile Button */}
          <button
            className="md:hidden text-[#3266CC]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 space-y-2 backdrop-blur-md bg-white/95 rounded-b-xl shadow-xl"
            >
              <div className="space-y-2">
                <div className="text-[#3266CC] px-4 py-2 font-medium">Features</div>
                <a
                  href="#business"
                  onClick={handleNavClick}
                  className="block pl-8 pr-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                >
                  Business
                </a>
                <a
                  href="#consumer"
                  onClick={handleNavClick}
                  className="block pl-8 pr-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                >
                  Consumer
                </a>
                <a
                  href="#partner"
                  onClick={handleNavClick}
                  className="block pl-8 pr-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
                >
                  Partner
                </a>
              </div>

              <a
                href="#categories"
                onClick={handleNavClick}
                className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
              >
                Categories
              </a>
              <a
                href="#about"
                onClick={handleNavClick}
                className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
              >
                About Us
              </a>
              <a
                href="#how-it-works"
                onClick={handleNavClick}
                className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
              >
                How It Works
              </a>
              <a
                href="#faqs"
                onClick={handleNavClick}
                className="block px-4 py-2 text-[#3266CC] hover:bg-[#FF4FA2]/10 hover:text-[#FF4FA2] rounded-lg mx-2"
              >
                FAQ
              </a>
              <a
                href="#download"
                onClick={handleNavClick}
                className="block px-4 py-2 bg-gradient-to-r from-[#FF4FA2] to-[#3266CC] text-white rounded-full mx-4 text-center hover:shadow-xl transition-all"
              >
                Download Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}


