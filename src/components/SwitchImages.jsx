'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import Image from 'next/image';
import useScrollToSection from '@/hooks/useScrollToSection';
import Achievements from './Achievements';
import { BsStars } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

const images = [
  {
    src: '/images/cleaning/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg',
    alt: 'Professional home cleaning service',
    title: 'Professional Cleaning Services',
    description: 'Experience the difference with our thorough and detailed cleaning approach.',
  },
  {
    src: '/images/cleaning/woman-is-holding-cleaning-product-gloves-rags-basin-white-wall.jpg',
    alt: 'woman-is-holding-cleaning-product-gloves-rags-basin-white-wall',
    title: 'Commercial & Residential Solutions',
    description: 'Tailored cleaning services for homes, offices, and commercial spaces.',
  },
  {
    src: '/images/cleaning/medium-shot-woman-cleaning-window.jpg',
    alt: 'medium shot woman cleaning window',
    title: 'Eco-Friendly Cleaning',
    description: 'We use environmentally safe products that are effective and sustainable.',
  },
  {
    src: '/images/cleaning/close-up-woman-spray-cleaning-floor.jpg',
    alt: 'close up woman spraying cleaning floor',
    title: 'Customized Cleaning Solutions',
    description: 'We tailor our cleaning services to meet your specific needs and preferences.',
  },
];

const SwitchImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollToSection } = useScrollToSection();
  const controls = useAnimation();
  const ref = useRef(null);

  // Create bubbles for background effect
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 30) + 10, // Random size between 10px and 40px
    left: `${Math.floor(Math.random() * 90)}%`, // Random horizontal position
    delay: Math.random() * 5, // Random delay for animation
    duration: Math.random() * 3 + 3, // Random duration between 3-6s
    color: i % 5 === 0 ? 'bg-blue-200' : i % 4 === 0 ? 'bg-blue-100' : i % 3 === 0 ? 'bg-cyan-100' : 'bg-sky-100'
  }));

  // Create sparkle effects
  const sparkles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: `${Math.floor(Math.random() * 90)}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
    size: Math.random() * 0.5 + 0.5
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            priority
            className="object-cover object-center h-full w-full"
            sizes="100vw"
            style={{
              objectPosition: 'center center',
              maxHeight: '100vh'
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="flex-1"></div>
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
                {images[currentIndex].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {images[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="h-32 md:h-24"></div> {/* Fixed height spacer */}
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97, y: 1 }}
              onClick={() => scrollToSection('services')}
              className="px-10 py-4 bg-gradient-to-r from-[#259CD5] to-[#1e8bc3] text-white rounded-full font-medium text-sm uppercase tracking-wider
                       shadow-[5px_5px_15px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.3)] 
                       hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),inset_2px_2px_3px_rgba(255,255,255,0.4)] 
                       transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Our Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#1e8bc3] to-[#259CD5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97, y: 1 }}
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-white text-[#259CD5] rounded-full font-medium text-sm uppercase tracking-wider
                       shadow-[5px_5px_15px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.5)] 
                       hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),inset_2px_2px_3px_rgba(255,255,255,0.6)]
                       hover:bg-gray-50 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <span className="bg-gradient-to-r from-[#259CD5] to-[#1e8bc3] bg-clip-text text-transparent">Contact Us</span>
            </motion.button>
          </div>
        </div>
        <div className="flex-1"></div>

      </div>

      <div className="w-full py-6">
        <div className="max-w-6xl mx-auto px-4">
          <Achievements />
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 flex space-x-5">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 cursor-pointer 
              ${index === currentIndex 
                ? 'bg-gradient-to-r from-[#259CD5] to-[#1e8bc3] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),2px_2px_4px_rgba(0,0,0,0.3)] scale-110' 
                : 'bg-white/70 hover:bg-white/90 shadow-[1px_1px_3px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.4)]'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default SwitchImages;