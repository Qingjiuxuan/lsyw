import React from 'react';
import { TIMELINE_DATA } from '../constants';
import { Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark border-y border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
             <Clock className="text-brand-red" /> 服务进度时效表
          </h2>
          <p className="text-gray-400 text-sm">我们深知币圈瞬息万变，速度就是生命线。</p>
        </div>

        <div className="bg-brand-black rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-900 border-b border-neutral-800">
                  <th className="px-6 py-4 text-brand-gold font-bold text-sm uppercase tracking-wider w-2/3">服务项目</th>
                  <th className="px-6 py-4 text-brand-gold font-bold text-sm uppercase tracking-wider w-1/3">预计完成时间</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {TIMELINE_DATA.map((item, index) => (
                  <tr key={index} className="hover:bg-brand-grey/30 transition-colors">
                    <td className="px-6 py-4 text-gray-300 text-sm md:text-base font-medium">
                      {item.service}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-brand-red font-bold text-lg">{item.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
