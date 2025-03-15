'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import useScrollToSection from '@/hooks/useScrollToSection';
import Achievements from './Achievements'

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
          <div className="absolute inset-0 bg-black/50 z-10" />
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
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {images[currentIndex].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10">
                {images[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="h-32 md:h-24"></div> {/* Fixed height spacer */}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-3 bg-[#259CD5] text-white rounded-full font-medium text-lg
                       hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
            >
              Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-primary text-white rounded-full font-medium text-lg
                       hover:bg-primary/90 transition-colors duration-200 cursor-pointer"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
        <div className="flex-1"></div>

        {/* Indicators */}
        <div className="absolute bottom-10 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                index === currentIndex ? 'bg-primary' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full py-6">
        <div className="max-w-6xl mx-auto px-4">
          <Achievements />
        </div>
      </div>
    </section>
  );
};

export default SwitchImages;