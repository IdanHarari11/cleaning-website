'use client';

import { motion } from 'framer-motion';
import { FaStar, FaHome, FaUsers, FaHandshake, FaAward } from 'react-icons/fa';

const achievements = [
  {
    icon: FaStar,
    value: '4.9',
    label: 'Average Rating',
    suffix: '/5',
    color: 'from-yellow-500 to-amber-600',
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    showOnMobile: true
  },
  {
    icon: FaHome,
    value: '350',
    label: 'DOMESTIC WORKERS',
    suffix: '+',
    color: 'from-blue-500 to-cyan-600',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
    showOnMobile: true
  },
  {
    icon: FaUsers,
    value: '10k',
    label: 'Happy Guests',
    suffix: '+',
    color: 'from-green-500 to-emerald-600',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
    showOnMobile: true
  },
  {
    icon: FaHandshake,
    value: '100',
    label: 'Host Satisfaction',
    suffix: '%',
    color: 'from-purple-500 to-indigo-600',
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-50',
    showOnMobile: false
  },
  {
    icon: FaAward,
    value: '5',
    label: 'Years Experience',
    suffix: '+',
    color: 'from-red-500 to-rose-600',
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
    showOnMobile: false
  }
];

const Achievements = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 px-1 md:px-0">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "8px 8px 16px rgba(0,0,0,0.2), -8px -8px 16px rgba(255,255,255,0.1)",
            transition: { duration: 0.3 }
          }}
          className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl
                     shadow-[5px_5px_15px_rgba(0,0,0,0.1),-2px_-2px_10px_rgba(255,255,255,0.1)]
                     transition-all duration-300
                     ${!achievement.showOnMobile ? 'hidden lg:block' : ''}`}
        >
          <div className="flex flex-col items-center text-center p-3 md:p-4 relative z-10">
            {/* Subtle gradient background */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${achievement.color}
                           group-hover:opacity-20 transition-opacity duration-300`} />
            
            {/* Neumorphic icon container */}
            <div className="relative mb-2 md:mb-3">
              <motion.div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${achievement.bgColor} 
                           flex items-center justify-center
                           shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]
                           group-hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]
                           transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <achievement.icon className={`w-5 h-5 md:w-6 md:h-6 ${achievement.iconColor}`} />
              </motion.div>
            </div>

            {/* Value with animated counting effect */}
            <motion.div
              className="text-lg md:text-2xl font-bold text-gray-800 relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <span className="relative z-10 whitespace-nowrap">
                {achievement.value}
                <span className="text-gray-600">{achievement.suffix}</span>
              </span>
            </motion.div>

            {/* Label with gradient text effect */}
            <div className={`text-xs md:text-sm font-medium bg-gradient-to-r ${achievement.color}
                           bg-clip-text text-transparent mt-1 md:mt-2 leading-tight`}>
              {achievement.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements; 