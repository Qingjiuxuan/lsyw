import React from 'react';
import { motion } from 'framer-motion';
import { APP_NAME, SUB_TITLE, HERO_DESC } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-black">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-grey/20 to-transparent pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-3/5 mb-12 md:mb-0 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-red font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
              {SUB_TITLE}
            </h2>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-gold-gradient block">{APP_NAME}</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {HERO_DESC}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#services" className="px-8 py-3 bg-white text-brand-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                探索业务
              </a>
              <a href="#contact" className="px-8 py-3 border border-brand-gold text-brand-gold font-bold rounded-lg hover:bg-brand-gold/10 transition-colors flex items-center">
                咨询价格 <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Visual (Coin) */}
        <div className="w-full md:w-2/5 flex justify-center coin-container">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="coin"
          >
            <div className="coin-inner">
              <span className="text-4xl">₿</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
