import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-brand-red">🛠</span> 核心业务矩阵
          </h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-brand-grey rounded-xl p-6 md:p-8 border border-neutral-800 hover:border-brand-red transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,0,18,0.15)] overflow-hidden"
            >
              {/* Icon Background */}
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <service.icon size={120} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-black rounded-lg flex items-center justify-center border border-brand-gold/30 mb-6 group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                  <service.icon className="text-brand-gold group-hover:text-white" size={24} />
                </div>

                <h3 className="text-xl font-bold text-brand-gold mb-6 group-hover:text-white transition-colors">
                  {service.id}. {service.title}
                </h3>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="border-l-2 border-neutral-700 pl-4 group-hover:border-brand-red/50 transition-colors">
                      <h4 className="text-white font-semibold text-sm mb-1">{feature.label}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
