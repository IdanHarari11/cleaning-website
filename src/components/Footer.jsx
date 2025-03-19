'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import useScrollToSection from '@/hooks/useScrollToSection';

const Footer = () => {
  const { scrollToSection } = useScrollToSection();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Services', sectionId: 'services' },
    { name: 'About Us', sectionId: 'about-us' },
    { name: 'Testimonials', sectionId: 'testimonials' },
    { name: 'Contact', sectionId: 'contact' },
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'yani@kbistaffing.com', href: 'mailto:yani@kbistaffing.com' },
    { icon: FaPhone, text: '(305) 555-1234', href: 'tel:(305)5551234' },
    { icon: FaMapMarkerAlt, text: 'Miami-Dade & Broward County', href: null },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="KBI Cleaning Logo" 
                  width={100} 
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional cleaning services for residential and commercial properties. 
              We provide high-quality, reliable cleaning solutions tailored to your needs.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Commercial Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Deep Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  Sanitization Services
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 text-primary">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="ml-3 text-gray-400">
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {info.text}
                      </a>
                    ) : (
                      info.text
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} KBI Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;