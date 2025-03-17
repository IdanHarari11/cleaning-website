"use client";

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaGoogle, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Feedbacks = () => {
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

    return (
        <section id="testimonials" className="py-16 px-4 bg-gray-50 overflow-hidden scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. See what our satisfied clients have to say about our cleaning services.
                    </p>
                    
                    <a 
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                    >
                        <FaGoogle className="text-xl" />
                        <span>Read More Reviews on Google</span>
                        <FaMapMarkerAlt className="text-lg" />
                    </a>
                </div>

                <div className="relative">
                    {/* Carousel navigation buttons */}
                    <button 
                        onClick={prevFeedback}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 -ml-4 md:ml-0"
                        aria-label="Previous testimonial"
                    >
                        <FaChevronLeft className="text-blue-500" />
                    </button>
                    
                    <button 
                        onClick={nextFeedback}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 -mr-4 md:mr-0"
                        aria-label="Next testimonial"
                    >
                        <FaChevronRight className="text-blue-500" />
                    </button>

                    {/* Carousel container */}
                    <div className="relative h-[400px] md:h-[350px] overflow-hidden">
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
                                <div className="bg-white rounded-2xl p-6 md:p-8 mx-auto max-w-3xl shadow-[5px_5px_15px_#d1d1d1,-5px_-5px_15px_#ffffff]">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-semibold shadow-[inset_2px_2px_5px_#c5c5c5,inset_-2px_-2px_5px_#ffffff]">
                                            {feedbacks[currentIndex].name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-semibold text-lg text-gray-800">{feedbacks[currentIndex].name}</h3>
                                            <div className="flex text-yellow-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="relative">
                                        <FaQuoteLeft className="absolute top-0 left-0 text-blue-100 text-3xl opacity-70" />
                                        <p className="text-gray-600 pt-6 px-8 pb-4 text-base md:text-lg leading-relaxed">
                                            {feedbacks[currentIndex].feedback.length > 250 
                                                ? `${feedbacks[currentIndex].feedback.substring(0, 250)}...` 
                                                : feedbacks[currentIndex].feedback
                                            }
                                        </p>
                                        {feedbacks[currentIndex].feedback.length > 250 && (
                                            <button 
                                                className="text-blue-500 hover:text-blue-700 font-medium text-sm ml-8"
                                                onClick={() => window.open(googleMapsUrl, '_blank')}
                                            >
                                                Read full review on Google
                                            </button>
                                        )}
                                        <FaQuoteRight className="absolute bottom-0 right-0 text-blue-100 text-3xl opacity-70" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination dots */}
                    <div className="flex justify-center mt-6 gap-2">
                        {feedbacks.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-3 h-3 rounded-full bg-blue-500`}
                                variants={dotVariants}
                                initial="inactive"
                                animate={currentIndex === index ? "active" : "inactive"}
                                transition={{ duration: 0.3 }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedbacks;