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
    showOnMobile: true
  },
  {
    icon: FaHome,
    value: '350',
    label: 'DOMESTIC WORKERS',
    suffix: '+',
    color: 'from-blue-500 to-cyan-600',
    showOnMobile: true
  },
  {
    icon: FaUsers,
    value: '10k',
    label: 'Happy Guests',
    suffix: '+',
    color: 'from-green-500 to-emerald-600',
    showOnMobile: true
  },
  {
    icon: FaHandshake,
    value: '100',
    label: 'Host Satisfaction',
    suffix: '%',
    color: 'from-purple-500 to-indigo-600',
    showOnMobile: false
  },
  {
    icon: FaAward,
    value: '5',
    label: 'Years Experience',
    suffix: '+',
    color: 'from-red-500 to-rose-600',
    showOnMobile: false
  }
];

const Achievements = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1.5 md:gap-3 lg:gap-4 px-1 md:px-0">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className={`group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl
                     ${!achievement.showOnMobile ? 'hidden lg:block' : ''}`}
        >
          <div className="flex flex-col items-center text-center p-1.5 md:p-2 relative z-10">
            {/* Glowing background effect */}
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${achievement.color}
                           group-hover:opacity-30 transition-opacity duration-300`} />
            
            {/* Animated icon container */}
            <div className="relative">
              <motion.div
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br ${achievement.color} 
                           flex items-center justify-center mb-1 md:mb-2
                           group-hover:shadow-lg group-hover:shadow-white/20 transition-shadow duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <achievement.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </motion.div>
              
              {/* Pulsing ring effect - hidden on mobile */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color}
                             opacity-0 group-hover:opacity-20 animate-ping hidden md:block`} />
            </div>

            {/* Value with animated counting effect */}
            <motion.div
              className="text-sm md:text-xl font-bold text-white relative text-shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <span className="relative z-10 whitespace-nowrap">
                {achievement.value}
                <span className="text-white/80">{achievement.suffix}</span>
              </span>
            </motion.div>

            {/* Label with gradient text effect */}
            <div className={`text-[10px] md:text-xs font-medium bg-gradient-to-r ${achievement.color}
                           bg-clip-text text-transparent mt-0.5 md:mt-1 leading-tight text-shadow-sm`}>
              {achievement.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements; 