'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaCheck, FaStar, FaAward } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

const AboutUs = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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

  // Create an array of bubbles with different sizes and positions
  const bubbles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 40) + 10, // Random size between 10px and 50px
    left: `${Math.floor(Math.random() * 90)}%`, // Random horizontal position
    delay: Math.random() * 5, // Random delay for animation
    duration: Math.random() * 3 + 3, // Random duration between 3-6s
    color: i % 5 === 0 ? 'bg-blue-200' : i % 4 === 0 ? 'bg-blue-100' : i % 3 === 0 ? 'bg-cyan-100' : 'bg-sky-100'
  }));

  // Create sparkle effects
  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 80) + 10}%`,
    left: `${Math.floor(Math.random() * 90)}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 2 + 1,
    size: Math.random() * 0.5 + 0.5
  }));

  return (
    <section id="about-us" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20">
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

      {/* Sparkle effects */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-blue-200 z-0"
          style={{
            top: sparkle.top,
            left: sparkle.left,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, sparkle.size, 0],
            transition: { 
              duration: sparkle.duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: sparkle.delay,
              times: [0, 0.5, 1]
            }
          }}
        >
          <BsStars size={24} />
        </motion.div>
      ))}

      {/* Water drop effect on the right side */}
      <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
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
                <BsStars className="text-blue-500 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
            About <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Learn why we're the most trusted cleaning service in South Florida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image with enhanced neumorphic effect - now spans 6 columns on desktop */}
          <motion.div 
            className="md:col-span-6 relative h-[500px] md:h-[600px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 z-0"></div>
            
            {/* Main image container with enhanced shadows */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-[20px_20px_60px_#d1d1d1,-20px_-20px_60px_#ffffff] transform hover:translate-y-[-10px] transition-all duration-700">
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10"></div>
              
              {/* Image */}
              <Image 
                src="/images/team/Yani.webp" 
                alt="Yani - Founder of KBI Cleaning Services" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-2xl"
                priority
              />
              
              {/* Floating card with name - repositioned for better visibility */}
              <motion.div 
                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.7)] z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-600">Yani</h3>
                <p className="text-gray-700">Founder & CEO</p>
                <div className="flex mt-2 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content with enhanced neumorphic elements - now spans 6 columns on desktop */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="md:col-span-6"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[10px_10px_30px_#d1d1d1,-10px_-10px_30px_#ffffff] relative">
              <FaQuoteLeft className="absolute top-6 left-6 text-blue-100 text-4xl" />
              
              <motion.p 
                className="text-gray-700 mb-6 pt-8 px-8 text-lg md:text-xl leading-relaxed"
                variants={itemVariants}
              >
                There are many agencies in the industry, but we are <span className="font-semibold text-blue-600">different!</span> We care a lot about our clients and understand the importance of finding the right match for each household. With over a thousand domestic workers at our disposal, we interview and place according to our client's preferences. Our success rate is the highest in south Florida with hundreds of placements and five-star reviews.
              </motion.p>
              
              <FaQuoteRight className="absolute bottom-6 right-6 text-blue-100 text-4xl" />
            </div>

            {/* Key points with enhanced neumorphic buttons */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { text: "Personalized Matching", icon: FaCheck },
                { text: "Highest Success Rate", icon: FaStar },
                { text: "Hundreds of Placements", icon: BsStars },
                { text: "Five-Star Reviews", icon: FaAward }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl p-5 flex items-center shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-500 mr-4 shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff]">
                    <point.icon className="text-xl" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{point.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Call to action button */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-center sm:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-[5px_5px_15px_rgba(0,0,0,0.1)] hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 