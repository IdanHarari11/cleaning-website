'use client';

import useScrollToSection from '@/hooks/useScrollToSection';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from 'react-icons/fa';

const quickLinks = [
  { name: 'Home', sectionId: 'home' },
  { name: 'Partners', sectionId: 'partners' },
  { name: 'Gallery', sectionId: 'gallery' },
  { name: 'Why Choose Us', sectionId: 'why-choose-us' },
  { name: 'Services', sectionId: 'services' },
  { name: 'How It Works', sectionId: 'workflow' },
  { name: 'Contact', sectionId: 'contact' },
];

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: 'kooshmanagement@gmail.com',
    link: 'mailto:kooshmanagement@gmail.com',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: '(954) 319-7577',
    link: 'tel:+1234567890',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    details: '20225 NE 34th CT',
    description: 'Aventura, FL 33180',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=20225+NE+34th+CT+Aventura+FL+33180',
  },
];

const Footer = () => {
  const { scrollToSection } = useScrollToSection();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="/images/logo.png"
                alt="KBI Cleaning Logo"
                width={120}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Maximize your property's potential with our expert Airbnb management. We handle everything, ensuring seamless hosting and exceptional guest experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.title} className="flex items-start gap-3 text-sm">
                  <info.icon className="text-primary mt-1" />
                  <span>
                    {info.title === 'Visit Us' ? (
                      <a href={info.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                        {info.details}<br />
                        {info.description}
                      </a>
                    ) : (
                      <a href={info.link} className="hover:text-white transition-colors duration-200">
                        {info.details}
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                           hover:bg-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm">
              Subscribe to our newsletter for updates and special offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Koosh Management. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;