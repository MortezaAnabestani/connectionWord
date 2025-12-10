
import React from 'react';
import { X, Lock, Map, Archive } from 'lucide-react';
import { Modal } from './Modal';
import { CollectionItem } from '../types';
import { IconMapping } from './IconMapping';
import { LEVELS } from '../data/levels';

interface CollectionBookProps {
  isOpen: boolean;
  onClose: () => void;
  items: CollectionItem[];
  totalSlots: number;
}

export const CollectionBook: React.FC<CollectionBookProps> = ({ isOpen, onClose, items, totalSlots }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="دفترچه سوغات">
      <div className="flex flex-col gap-5">
         <div className="bg-amber-50 rounded-xl p-3 border border-amber-100 flex items-start gap-3">
            <Archive className="text-amber-600 shrink-0 mt-1" size={20} />
            <p className="text-amber-800 text-xs leading-relaxed text-right">
               در سفر خود به شهرهای مختلف ایران، با ترکیب کردن آیتم‌ها، سوغاتی‌های ارزشمند پیدا کنید و در این دفترچه ثبت کنید.
            </p>
         </div>

         <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 p-1 max-h-[50vh] overflow-y-auto custom-scrollbar">
            {Array.from({ length: totalSlots }).map((_, idx) => {
               const item = items[idx];
               const levelName = item ? LEVELS.find(l => l.id === item.levelId)?.title.split(':')[0] : '';
               
               return (
                  <div 
                  key={idx}
                  className={`
                     aspect-[3/4] rounded-xl flex flex-col items-center justify-center p-2 border transition-all relative overflow-hidden group
                     ${item 
                        ? 'bg-gradient-to-b from-white to-amber-50 border-amber-300 shadow-md hover:shadow-xl hover:-translate-y-1' 
                        : 'bg-slate-100 border-slate-200 shadow-inner'
                     }
                  `}
                  >
                  {item ? (
                     <>
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-10 mix-blend-multiply" />
                        <div className="absolute top-0 right-0 w-8 h-8 bg-amber-400 opacity-20 rounded-bl-full z-0" />
                        
                        <div className="relative z-10 w-12 h-12 mb-2 text-amber-600 drop-shadow-sm filter group-hover:brightness-110 transition-all">
                           <IconMapping name={item.icon} size={48} />
                        </div>
                        
                        <div className="relative z-10 w-full text-center">
                            <span className="block text-[10px] font-black text-slate-800 leading-tight mb-1 truncate px-1">
                            {item.name}
                            </span>
                            <span className="inline-block text-[8px] text-amber-700/80 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                            {levelName}
                            </span>
                        </div>
                     </>
                  ) : (
                     <div className="flex flex-col items-center gap-1 opacity-30">
                        <Lock size={24} className="text-slate-500" />
                        <span className="text-[10px] font-bold text-slate-400 mt-1">قفل</span>
                     </div>
                  )}
                  </div>
               );
            })}
         </div>
         
         {/* Progress Bar */}
         <div className="bg-slate-900 rounded-2xl p-4 shadow-lg flex items-center gap-3">
             <div className="flex-1 flex flex-col gap-1">
                 <div className="flex justify-between text-[10px] font-bold text-slate-400">
                     <span>پیشرفت مجموعه</span>
                     <span className="text-white">{items.length} / {totalSlots}</span>
                 </div>
                 <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(251,191,36,0.5)]" 
                        style={{ width: `${(items.length / totalSlots) * 100}%` }} 
                    />
                 </div>
             </div>
             <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 font-black text-sm">
                 {Math.round((items.length / totalSlots) * 100)}%
             </div>
         </div>
      </div>
    </Modal>
  );
};
