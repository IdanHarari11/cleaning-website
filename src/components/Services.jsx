'use client';

import { motion } from 'framer-motion';
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
  FaShieldAlt
} from 'react-icons/fa';
import SectionTitle from './SectionTitle';

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
    title: 'Move-In/Move-Out Cleaning',
    description: 'Specialized cleaning services for property transitions, ensuring spaces are immaculate for new occupants.',
    height: 'row-span-1',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: FaShieldAlt,
    title: 'Sanitization Services',
    description: 'Professional disinfection and sanitization to eliminate germs, bacteria, and viruses from high-touch surfaces and common areas.',
    features: [
      'Hospital-grade disinfectants',
      'Focus on high-touch surfaces',
      'COVID-19 protocols followed',
    ],
    height: 'row-span-2',
    color: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
  {
    icon: FaSprayCan,
    title: 'Carpet & Upholstery Cleaning',
    description: 'Professional deep cleaning for carpets, rugs, and upholstered furniture to remove stains, odors, and allergens.',
    features: [
      'Hot water extraction',
      'Stain treatment',
      'Fast drying methods',
    ],
    height: 'row-span-2',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
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
    icon: FaLeaf,
    title: 'Green Cleaning',
    description: 'Environmentally friendly cleaning using eco-certified products and sustainable practices.',
    height: 'row-span-1',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
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
  return (
    <section id='services' className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="What We Offer"
          sectionId="services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[200px] gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${service.height} ${service.color} rounded-2xl p-5 
                         shadow-sm hover:shadow-md transition-shadow duration-300
                         flex flex-col ${service.height === 'row-span-1' ? 'justify-start' : 'justify-between'}`}
            >
              <div className={`flex flex-col ${service.height === 'row-span-1' ? 'h-auto' : 'h-full'}`}>
                <div className={`${service.iconColor} mb-3`}>
                  <service.icon className="w-8 h-8" />
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
                        <span className={`${service.iconColor} mr-2`}>•</span>
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
                             shadow-sm hover:shadow w-full sm:w-auto cursor-pointer
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