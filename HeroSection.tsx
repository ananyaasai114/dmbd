import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center mb-6"
        >
          <Star className="text-gold-400 w-8 h-8 mr-2" />
          <span className="text-silver-300 font-sans uppercase tracking-widest text-sm">
            21st Birthday
          </span>
          <Star className="text-gold-400 w-8 h-8 ml-2" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-silver-100 mb-6"
        >
          Adam Nabeel
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="flex flex-row gap-3 justify-center items-center"
        >
          <div className="h-[1px] w-16 bg-silver-400"></div>
          <p className="text-silver-300 font-sans text-lg md:text-xl">
            Celebrating You
          </p>
          <div className="h-[1px] w-16 bg-silver-400"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-silver-300 text-sm mb-2">Scroll to Explore</p>
        <div className="w-6 h-10 border-2 border-silver-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-silver-300 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;