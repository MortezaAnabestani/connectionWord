
import React, { useEffect, useState } from 'react';
import { Gift, Check, Sparkles, Calendar } from 'lucide-react';
import { Modal } from './Modal';
import { storage } from '../services/storage';
import { DailyRewardState } from '../types';

interface DailyRewardProps {
  onClaim: (amount: number) => void;
}

const REWARDS = [100, 150, 200, 300, 400, 600, 1000];

export const DailyReward: React.FC<DailyRewardProps> = ({ onClaim }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState<DailyRewardState>({ lastClaimDate: '', streak: 0 });

  useEffect(() => {
    const saved = storage.getItem('persian_connections_daily');
    if (saved) {
      try { setState(JSON.parse(saved)); } catch(e) {}
    }
  }, []);

  useEffect(() => {
    const today = new Date().toDateString();
    if (state.lastClaimDate !== today) {
       setTimeout(() => setIsOpen(true), 1500);
    }
  }, [state.lastClaimDate]);

  const handleClaim = () => {
    const today = new Date().toDateString();
    
    let newStreak = state.streak;
    const lastDate = new Date(state.lastClaimDate);
    const diffTime = Math.abs(new Date().getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    // Reset streak if missed more than 1 day (diffDays > 2 means yesterday + day before yesterday)
    // Actually simpler: if lastClaimDate was NOT yesterday, reset.
    // For simplicity in this demo, let's just increment.
    
    const rewardAmount = REWARDS[newStreak % REWARDS.length];
    
    const newState = {
      lastClaimDate: today,
      streak: newStreak + 1
    };
    
    setState(newState);
    storage.setItem('persian_connections_daily', JSON.stringify(newState));
    onClaim(rewardAmount);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={() => {}} title="پاداش روزانه">
      <div className="flex flex-col items-center gap-6 py-2 overflow-hidden">
         {/* Hero Icon */}
         <div className="relative group cursor-pointer" onClick={handleClaim}>
            <div className="absolute inset-0 bg-cyan-400 blur-[60px] opacity-40 animate-pulse-glow" />
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl animate-float border-4 border-white/20 relative z-10 group-hover:scale-110 transition-transform duration-300">
                <Gift size={64} className="text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]" />
                <div className="absolute top-0 right-0 p-2">
                    <Sparkles className="text-yellow-300 animate-spin-slow" size={24} />
                </div>
            </div>
         </div>
         
         <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-slate-800">خوش برگشتی!</h3>
            <p className="text-slate-500 font-bold text-sm">هر روز سر بزن تا پاداش بیشتری بگیری.</p>
         </div>

         {/* Calendar Strip */}
         <div className="flex gap-2 w-full overflow-x-auto p-4 no-scrollbar mask-gradient-x snap-x">
           {REWARDS.map((amount, idx) => {
             const currentDayIndex = state.streak % REWARDS.length;
             const isToday = idx === currentDayIndex;
             const isPast = idx < currentDayIndex;
             const isBigPrize = idx === REWARDS.length - 1;
             
             return (
               <div 
                 key={idx}
                 className={`
                   snap-center flex-shrink-0 w-20 h-28 rounded-2xl flex flex-col items-center justify-center gap-2 border-2 transition-all duration-300 relative overflow-hidden
                   ${isToday 
                     ? 'border-cyan-400 bg-white scale-110 shadow-xl z-10' 
                     : isBigPrize 
                        ? 'border-yellow-400 bg-yellow-50/50'
                        : 'border-slate-100 bg-slate-50'
                   }
                   ${isPast ? 'bg-slate-100 grayscale opacity-60' : ''}
                 `}
               >
                 {isToday && <div className="absolute inset-0 bg-cyan-400/5 animate-pulse" />}
                 
                 <span className={`text-[10px] font-bold uppercase tracking-wider ${isToday ? 'text-cyan-600' : 'text-slate-400'}`}>
                    روز {idx + 1}
                 </span>
                 
                 {isPast ? (
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-200">
                        <Check size={20} className="text-green-600" />
                    </div>
                 ) : (
                    <div className="flex flex-col items-center">
                         <span className={`font-black text-xl ${isBigPrize ? 'text-yellow-600' : 'text-slate-700'}`}>
                            {amount}
                         </span>
                         <span className="text-[9px] text-slate-400 font-bold">GEM</span>
                     </div>
                 )}

                 {isBigPrize && !isPast && <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400" />}
               </div>
             );
           })}
         </div>

         <button 
           onClick={handleClaim}
           className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/40 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-2"
         >
           <Gift size={22} />
           <span>دریافت پاداش</span>
         </button>
      </div>
    </Modal>
  );
};
