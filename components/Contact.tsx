import React from 'react';
import { CONTACT_DATA } from '../constants';
import { AlertTriangle, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`已复制: ${text}`);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-brand-black to-neutral-900 border-t border-brand-red/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">📞 官方联系方式</h2>
          
          <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm mb-8">
            <AlertTriangle size={16} />
            <span>安全提醒： 请务必通过 Telegram 群组确认身份，谨防冒充骗子。</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-xl border transition-all ${
                item.primary 
                  ? 'bg-gradient-to-br from-brand-grey to-neutral-900 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                  : 'bg-neutral-900 border-neutral-800 hover:border-brand-grey'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${item.primary ? 'bg-brand-gold text-brand-black' : 'bg-neutral-800 text-gray-400'}`}>
                  <item.icon size={24} />
                </div>
                {item.primary && (
                  <span className="bg-brand-red text-white text-xs px-2 py-1 rounded font-bold uppercase">
                    推荐
                  </span>
                )}
              </div>

              <h3 className="text-gray-400 text-sm font-medium mb-1">{item.platform}</h3>
              
              <div className="flex items-center gap-2 mb-2">
                 <p className={`font-mono text-lg font-bold truncate ${item.primary ? 'text-brand-gold' : 'text-white'}`}>
                  {item.value}
                </p>
                <button 
                  onClick={() => copyToClipboard(item.value)}
                  className="text-gray-500 hover:text-white transition-colors p-1"
                  title="复制"
                >
                  <Copy size={14} />
                </button>
              </div>

              {item.note && <p className="text-xs text-gray-500 mb-3">{item.note}</p>}

              {item.link && (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.primary 
                      ? 'bg-brand-gold text-brand-black hover:bg-yellow-400' 
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                  }`}
                >
                  点击联系
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-800 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} 一级市场营销服务. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
