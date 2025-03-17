'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import SectionTitle from './SectionTitle';

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    details: 'info@kbicleaning.com',
    description: 'Quick response within 24 hours',
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: '(305) 555-1234',
    description: 'Mon-Sat from 8am to 6pm',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Service Area',
    details: 'Miami-Dade & Broward County',
    description: 'Serving all of South Florida',
  },
];

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the email body with proper line breaks
      const emailBody = `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}
        Service Type: ${formData.serviceType}

        Message:
        ${formData.message}`.trim();

      // Create the mailto URL
      const mailtoLink = `mailto:info@kbicleaning.com?subject=${encodeURIComponent('New Cleaning Service Request')}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.open(mailtoLink, '_blank');

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        message: '',
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Create bubbles for background effect
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 40) + 10, // Random size between 10px and 50px
    left: `${Math.floor(Math.random() * 90)}%`, // Random horizontal position
    delay: Math.random() * 5, // Random delay for animation
    duration: Math.random() * 3 + 3, // Random duration between 3-6s
    color: i % 5 === 0 ? 'bg-blue-200' : i % 4 === 0 ? 'bg-blue-100' : i % 3 === 0 ? 'bg-cyan-100' : 'bg-sky-100'
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20">
      {/* Decorative bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full ${bubble.color} opacity-70 z-0`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: -bubble.size,
          }}
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ 
            y: -500, 
            opacity: 0,
            transition: { 
              duration: bubble.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
              delay: bubble.delay
            }
          }}
        />
      ))}

      {/* Water drop effect on the right side */}
      <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: 500,
              opacity: [0, 0.7, 0],
              transition: {
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeIn"
              }
            }}
          >
            <IoWaterOutline size={Math.random() * 30 + 20} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="bg-white rounded-full p-3 shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff] inline-flex items-center justify-center">
              <div className="bg-blue-50 rounded-full p-2 shadow-[inset_2px_2px_5px_#c5c5c5,inset_-2px_-2px_5px_#ffffff]">
                <FaHeadset className="text-blue-500 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
            Request a <span className="text-blue-600">Free Quote</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Contact us today for a free, no-obligation quote for your cleaning needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12" ref={ref}>
          {/* Contact Information */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="flex gap-4 bg-white rounded-xl p-5 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-500 shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff]">
                    <info.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {info.title}
                  </h3>
                  <p className="mt-1 text-blue-600 font-medium">
                    {info.title === 'Call Us' ? (
                      <a href={`tel:${info.details}`} className="hover:underline">{info.details}</a>
                    ) : info.title === 'Email Us' ? (
                      <a href={`mailto:${info.details}`} className="hover:underline">{info.details}</a>
                    ) : (
                      info.details
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    {info.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-white rounded-xl shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <BsStars className="text-blue-500 mr-2" />
                Why Choose KBI Cleaning?
              </h3>
              <ul className="space-y-3">
                {[
                  "Professional, trained cleaning staff",
                  "Eco-friendly cleaning products",
                  "Flexible scheduling options",
                  "100% satisfaction guarantee"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3 shadow-[inset_2px_2px_3px_#c5c5c5,inset_-2px_-2px_3px_#ffffff] flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Residential Cleaning">Residential Cleaning</option>
                  <option value="Commercial Cleaning">Commercial Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="Move-In/Move-Out Cleaning">Move-In/Move-Out Cleaning</option>
                  <option value="Sanitization Services">Sanitization Services</option>
                </select>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-[inset_2px_2px_5px_#e0e0e0,inset_-2px_-2px_5px_#ffffff]"
                  required
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-[5px_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] transition-all duration-300 disabled:opacity-70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;