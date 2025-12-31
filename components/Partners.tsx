import React from 'react';
import { PARTNERS_LIST } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            👥 深度合作社区 <span className="text-brand-gold text-xl align-middle">(30+ 头部社群)</span>
          </h2>
          <p className="text-gray-400 max-w-2xl md:mx-auto">
            一键触达核心投资者，支持置顶、打 Call 及打包推广。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {PARTNERS_LIST.map((partner, index) => (
            <div 
              key={index}
              className="px-5 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-400 text-sm font-medium hover:text-brand-gold hover:border-brand-gold/50 hover:bg-brand-gold/5 transition-all cursor-default select-none"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
