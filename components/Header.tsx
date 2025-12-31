import React from 'react';
import { CONTACT_DATA } from '../constants';

const Header: React.FC = () => {
  const primaryContact = CONTACT_DATA.find(c => c.primary) || CONTACT_DATA[0];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-brand-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-brand-goldLight flex items-center justify-center">
             <span className="font-bold text-brand-black text-sm">VIP</span>
          </div>
          <span className="text-xl font-bold text-brand-gold tracking-tight">一级市场营销</span>
        </div>

        {/* CTA Button */}
        <a 
          href={primaryContact.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-red-900/50 flex items-center gap-2 text-sm md:text-base"
        >
          <primaryContact.icon size={16} />
          <span>立即联系</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
