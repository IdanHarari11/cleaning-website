'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Image from 'next/image';
import useScrollToSection from '@/hooks/useScrollToSection';

const navItems = [
  { name: 'Home', sectionId: 'home' },
  { name: 'Services', sectionId: 'services' },
  { name: 'About Us', sectionId: 'about-us' },
  { name: 'Testimonials', sectionId: 'testimonials' },
  { name: 'Our Team', sectionId: 'our-team' },
  { name: 'Contact', sectionId: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 pt-4 ${
        scrolled ? 'bg-[#11111100] backdrop-blur-lg border-none' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home', setIsMenuOpen(false))}
              className={`cursor-pointer text-2xl font-bold ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              <Image 
                src="/images/logo.png" 
                alt="KBI Cleaning Logo" 
                priority 
                width={90} 
                height={30} 
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.sectionId, setIsMenuOpen(false))}
                className={`font-medium tracking-wide text-sm uppercase transition-all duration-300 cursor-pointer relative group ${
                  scrolled ? 'text-[#259CD5]' : 'text-[#259CD5]'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#259CD5] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, when: "beforeChildren" }}
            className={`md:hidden bg-white/60 backdrop-blur-lg border-none`}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } }
              }}
              className="px-4 pt-2 pb-3 space-y-1"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId, setIsMenuOpen(false))}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="block py-3 text-[#259CD5] hover:text-[#1e8bc3] transition-all duration-300 font-medium tracking-wide text-sm uppercase w-full text-left cursor-pointer"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;