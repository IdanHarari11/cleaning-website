'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { 
  FaHome, 
  FaBroom,
  FaBuilding,
  FaTools,
  FaSprayCan,
  FaLeaf,
  FaRecycle,
  FaSnowflake,
  FaCalendarCheck,
  FaShieldAlt,
  FaClipboardList,
  FaCheck
} from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';

const services = [
  {
    icon: FaHome,
    title: 'Residential Cleaning',
    description: 'Comprehensive home cleaning services tailored to your specific needs, ensuring a spotless and healthy living environment.',
    height: 'row-span-1',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: FaBuilding,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties. We maintain a clean, professional environment for your business and clients.',
    features: [
      'Regular scheduled maintenance',
      'After-hours service available',
      'Customized cleaning plans',
    ],
    height: 'row-span-2',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
  {
    icon: FaBroom,
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of all surfaces, fixtures, and hard-to-reach areas to remove built-up dirt and grime.',
    height: 'row-span-1',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
  },
  {
    icon: FaCalendarCheck,
    title: 'Regular Maintenance',
    description: 'Scheduled recurring cleaning services on weekly, bi-weekly, or monthly basis to keep your space consistently clean and organized.',
    features: [
      'Flexible scheduling options',
      'Consistent cleaning team',
      'Customized cleaning checklist',
    ],
    height: 'row-span-2',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: FaSnowflake,
    title: 'Seasonal Cleaning',
    description: 'Specialized cleaning services for seasonal needs including spring cleaning and holiday preparation.',
    height: 'row-span-1',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    icon: FaRecycle,
    title: 'Post-Construction Cleanup',
    description: 'Thorough cleaning after renovation or construction projects to remove dust, debris, and construction residue.',
    height: 'row-span-1',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
];

const Services = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    <section id='services' className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden scroll-mt-20">
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
                <FaClipboardList className="text-blue-500 text-2xl" />
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800 tracking-tight">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional cleaning solutions tailored to your specific needs
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "10px 10px 20px #d1d1d1, -10px -10px 20px #ffffff",
                transition: { duration: 0.3 }
              }}
              className={`${service.height} ${service.color} rounded-2xl p-5 
                         shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] transition-all duration-300
                         flex flex-col ${service.height === 'row-span-1' ? 'justify-start' : 'justify-between'}`}
            >
              <div className={`flex flex-col ${service.height === 'row-span-1' ? 'h-auto' : 'h-full'}`}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[inset_3px_3px_6px_#c5c5c5,inset_-3px_-3px_6px_#ffffff] mb-4">
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm text-gray-600 ${service.features ? 'mb-2' : 'mb-auto'}`}>
                  {service.description}
                </p>
                {service.features && (
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className={`${service.iconColor} mr-2 flex-shrink-0`}>
                          <FaCheck className="w-3 h-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                {service.button && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 bg-white text-gray-800 rounded-full text-sm
                             font-medium hover:bg-gray-50 transition-colors duration-200
                             shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff] hover:shadow-[inset_3px_3px_5px_#d1d1d1,inset_-3px_-3px_5px_#ffffff] w-full sm:w-auto cursor-pointer
                             ${service.height === 'row-span-1' ? 'mt-auto' : 'mt-3'}`}
                    onClick={() => window.open(service.button.action, '_blank')}
                  >
                    {service.button.text}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;