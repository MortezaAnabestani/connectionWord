
import React from 'react';
import { Category } from '../types';
import { IconMapping } from './IconMapping';

interface VisualSolvedRowProps {
  category: Category;
}

export const VisualSolvedRow: React.FC<VisualSolvedRowProps> = ({ category }) => {
  // Map simple colors to rich gradients
  const getGradient = (baseColor: string) => {
    if (baseColor.includes('indigo')) return 'from-indigo-500 to-violet-600 border-indigo-400';
    if (baseColor.includes('yellow')) return 'from-yellow-400 to-amber-500 border-yellow-300';
    if (baseColor.includes('purple') || baseColor.includes('fuchsia')) return 'from-fuchsia-500 to-purple-600 border-purple-400';
    if (baseColor.includes('blue') || baseColor.includes('sky')) return 'from-blue-400 to-cyan-500 border-blue-300';
    if (baseColor.includes('red') || baseColor.includes('rose')) return 'from-rose-500 to-red-600 border-red-400';
    if (baseColor.includes('green') || baseColor.includes('emerald')) return 'from-emerald-400 to-green-600 border-emerald-300';
    if (baseColor.includes('orange')) return 'from-orange-400 to-amber-600 border-orange-300';
    if (baseColor.includes('teal')) return 'from-teal-400 to-emerald-500 border-teal-300';
    return 'from-slate-500 to-slate-700 border-slate-400';
  };

  const gradientClass = getGradient(category.color);

  return (
    <div className={`
      relative col-span-6 w-full h-16 md:h-20 rounded-2xl 
      bg-gradient-to-r ${gradientClass}
      shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] 
      border-t border-white/30 border-b border-black/10
      animate-pop overflow-hidden group select-none
    `}>
      {/* Dynamic Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />

      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
      
      {/* Large Icon Watermark */}
      <div className="absolute -right-6 -bottom-6 opacity-20 transform rotate-12 scale-150 text-black mix-blend-overlay pointer-events-none">
         {category.icon && <IconMapping name={category.icon} size={100} />}
      </div>

      <div className="flex items-center h-full px-4 md:px-6 relative z-10 gap-4">
        {/* Icon Circle */}
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 shadow-inner">
           {category.icon ? (
             <IconMapping name={category.icon} size={24} className="text-white drop-shadow-md" />
           ) : (
             <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
           )}
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 min-w-0">
           <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[9px] md:text-[10px] font-black text-white/70 uppercase tracking-widest bg-black/20 px-1.5 py-0.5 rounded backdrop-blur-sm">
                تکمیل شد
              </span>
           </div>
           <span className="text-lg md:text-2xl font-black text-white drop-shadow-md truncate leading-none pb-1">
             {category.title}
           </span>
        </div>

        {/* Preview Words Pill */}
        <div className="hidden md:flex flex-wrap justify-end gap-1.5 max-w-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
          {category.words.slice(0, 3).map((w, i) => (
            <span key={i} className="text-[10px] bg-white/20 border border-white/10 px-2 py-0.5 rounded-full text-white font-bold backdrop-blur-sm shadow-sm">
              {w}
            </span>
          ))}
          {category.words.length > 3 && <span className="text-white/60 text-xs font-bold self-center">...</span>}
        </div>
      </div>
    </div>
  );
};
