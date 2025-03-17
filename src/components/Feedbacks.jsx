"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaGoogle, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

const Feedbacks = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    const feedbacks = [
        {
            id: 1,
            name: 'Viki Hatanian',
            feedback: `Yani has been not only great to work with, but she really has made me feel comfortable during the process. Yani listened to my needs as a client and made sure to match someone that makes sense for me as well as with the dynamic of my home. Yani stays in touch and makes sure that everything is working out as it should and smoothes out any bumps if there is any. I can tell that Yani puts a lot of thought and effort into both the employee and the clients to ensure everyone is happy. I feel confident in her services and I'm very grateful to have such a quality agency available.`,
        },
        {
            id: 2,
            name: `Sarit Levtov`,
            feedback: `Yani is not just an amazing person, she has amazing workers who will not disappoint. You cannot be sorry with working with her because she is so dedicated and devoted to ensuring that you get the best cleaning lady that you would require all your Basic household needs. Once you place that call you will not be disappointed! forever grateful.`
        },
        {
            id: 3,
            name: `Rona Livingston`,
            feedback: `I was looking for a full time nanny and house keeper for my 1 year old baby was referred to Yani through a friend. She found a few candidates for me, and was able to tell me a lot about them and scheduled an interview and then suggested to have each one to work a full day while I'm at home so i can get a clear observation of how they are with my daughter. That MADE the difference! It was so clear to me who is the best candidate and I'm so happy i found her! The nanny was perfect for my daughter and for me. We got along so well and i was able to go to work with a clear mind. I totally recommend this agency. Super professional and smart! She was very clear with what the nannies are looking to make and how everything works, as this was my first time seeking out one.`
        },
        {
            id: 4,
            name: `Mandyf Davoudpour`,
            feedback: `KBI is great to work with. Yanni finds me great cleaning ladies, fast and affordable.`
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for right, -1 for left

    // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextFeedback();
        }, 6000); // Change feedback every 6 seconds
        
        return () => clearInterval(interval);
    }, [currentIndex]);

    const googleMapsUrl = "https://www.google.com/maps/place/KBI+Staffing+%26+Cleaning+Services/@25.9851435,-80.5623632,10z/data=!4m8!3m7!1s0x88d9a972973145cd:0xd052b2e870f8c667!8m2!3d25.985517!4d-80.2327044!9m1!1b1!16s%2Fg%2F11ngpjtmvc?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D";

    const nextFeedback = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const prevFeedback = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    };

    // Animation variants
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

    const dotVariants = {
        inactive: { scale: 1, opacity: 0.5 },
        active: { scale: 1.2, opacity: 1 }
    };

    // Create bubbles for background effect
    const bubbles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.floor(Math.random() * 40) + 10, // Random size between 10px and 50px
        left: `${Math.floor(Math.random() * 90)}%`, // Random horizontal position
        delay: Math.random() * 5, // Random delay for animation
        duration: Math.random() * 3 + 3, // Random duration between 3-6s
        color: i % 5 === 0 ? 'bg-blue-200' : i % 4 === 0 ? 'bg-blue-100' : i % 3 === 0 ? 'bg-cyan-100' : 'bg-sky-100'
    }));

    return (
        <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden scroll-mt-20">
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

            {/* Water drop effect on the left side */}
            <div className="absolute left-0 top-0 h-full w-1/3 overflow-hidden opacity-10 pointer-events-none">
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
                                <FaStar className="text-yellow-400 text-2xl" />
                            </div>
                        </div>
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
                        What Our <span className="text-blue-600">Clients</span> Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. See what our satisfied clients have to say about our cleaning services.
                    </p>
                    
                    <motion.a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGoogle className="text-xl" />
                        <span className="font-bold">Read More Reviews on Google</span>
                        <FaMapMarkerAlt className="text-lg ml-1" />
                    </motion.a>
                </motion.div>

                <div className="relative" ref={ref}>
                    {/* Carousel navigation buttons */}
                    <motion.button 
                        onClick={prevFeedback}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 -ml-4 md:ml-0"
                        aria-label="Previous testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaChevronLeft className="text-blue-500 text-lg" />
                    </motion.button>
                    
                    <motion.button 
                        onClick={nextFeedback}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-[8px_8px_20px_#d1d1d1,-8px_-8px_20px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300 -mr-4 md:mr-0"
                        aria-label="Next testimonial"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaChevronRight className="text-blue-500 text-lg" />
                    </motion.button>

                    {/* Carousel container */}
                    <div className="relative h-[450px] md:h-[400px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.5 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white rounded-2xl p-8 md:p-10 mx-auto max-w-3xl shadow-[10px_10px_30px_#e0e0e0,-10px_-10px_30px_#ffffff] transform hover:translate-y-[-5px] transition-all duration-500">
                                    <div className="flex items-center mb-8">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-500 text-2xl font-semibold shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff]">
                                            {feedbacks[currentIndex].name.charAt(0)}
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="font-bold text-xl text-gray-800">{feedbacks[currentIndex].name}</h3>
                                            <div className="flex text-yellow-400 mt-1">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="relative">
                                        <FaQuoteLeft className="absolute top-0 left-0 text-blue-100 text-4xl opacity-70" />
                                        <p className="text-gray-700 pt-8 px-10 pb-6 text-base md:text-lg leading-relaxed">
                                            {feedbacks[currentIndex].feedback.length > 250 
                                                ? `${feedbacks[currentIndex].feedback.substring(0, 250)}...` 
                                                : feedbacks[currentIndex].feedback
                                            }
                                        </p>
                                        {feedbacks[currentIndex].feedback.length > 250 && (
                                            <motion.button 
                                                className="text-blue-500 hover:text-blue-700 font-medium text-sm ml-10 flex items-center gap-1"
                                                onClick={() => window.open(googleMapsUrl, '_blank')}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Read full review on Google
                                                <FaGoogle className="ml-1" />
                                            </motion.button>
                                        )}
                                        <FaQuoteRight className="absolute bottom-0 right-0 text-blue-100 text-4xl opacity-70" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center mt-8 gap-3">
                        {feedbacks.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-4 h-4 rounded-full bg-blue-500 shadow-[2px_2px_5px_#d1d1d1,-2px_-2px_5px_#ffffff]`}
                                variants={dotVariants}
                                initial="inactive"
                                animate={currentIndex === index ? "active" : "inactive"}
                                transition={{ duration: 0.3 }}
                                aria-label={`Go to testimonial ${index + 1}`}
                                whileHover={{ scale: 1.2 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;