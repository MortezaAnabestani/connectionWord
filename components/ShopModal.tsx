
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Clock, Diamond, PlayCircle, Loader2 } from 'lucide-react';
import { Modal } from './Modal';
import { ShopItem } from '../types';

interface ShopModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: number;
  onBuy: (item: ShopItem) => void;
}

const SHOP_ITEMS: ShopItem[] = [
  { id: 'hint_1', name: 'یک راهنما', cost: 50, icon: 'Zap', action: 'hint' },
  { id: 'time_30', name: '+۳۰ ثانیه', cost: 30, icon: 'Clock', action: 'time' },
  { id: 'hint_pack', name: '۳ راهنما', cost: 120, icon: 'Zap', action: 'hint' },
];

export const ShopModal: React.FC<ShopModalProps> = ({ isOpen, onClose, currency, onBuy }) => {
  const [isWatchingAd, setIsWatchingAd] = useState(false);
  const [adTimer, setAdTimer] = useState(3);

  useEffect(() => {
    let interval: number;
    if (isWatchingAd) {
      interval = window.setInterval(() => {
        setAdTimer((prev) => {
          if (prev <= 1) {
             clearInterval(interval);
             return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWatchingAd]);

  useEffect(() => {
    if (adTimer === 0 && isWatchingAd) {
      // Ad Finished
      setIsWatchingAd(false);
      onBuy({ id: 'ad_reward', name: 'پاداش تبلیغ', cost: -50, icon: 'Diamond', action: 'hint' }); // Negative cost = gain
      setAdTimer(3);
    }
  }, [adTimer, isWatchingAd, onBuy]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="فروشگاه جم">
      <div className="flex flex-col gap-6">
        {/* Header Currency */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-5 flex items-center justify-between shadow-lg border border-white/10">
           <span className="text-slate-400 font-bold text-sm">موجودی شما:</span>
           <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-xl">
             <Diamond className="text-cyan-400 fill-cyan-400 animate-pulse" size={20} />
             <span className="text-2xl font-black text-white tracking-widest">{currency}</span>
           </div>
        </div>

        {/* Free Gems Section */}
        <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-500 px-1">دریافت رایگان</h4>
            <button
                onClick={() => setIsWatchingAd(true)}
                disabled={isWatchingAd}
                className={`
                  w-full relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all group overflow-hidden
                  ${isWatchingAd 
                    ? 'bg-slate-100 border-slate-200 cursor-wait' 
                    : 'bg-gradient-to-r from-emerald-50 to-white border-emerald-200 hover:border-emerald-400 hover:shadow-lg'
                  }
                `}
              >
                <div className="flex items-center gap-4 z-10">
                   <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
                      {isWatchingAd ? <Loader2 size={24} className="animate-spin" /> : <PlayCircle size={24} />}
                   </div>
                   <div className="flex flex-col items-start">
                     <span className="font-bold text-slate-800 text-lg">
                        {isWatchingAd ? `لطفا صبر کنید... ${adTimer}s` : 'تماشای ویدیو'}
                     </span>
                     <span className="text-xs text-slate-400 font-bold">پاداش: 50 جم</span>
                   </div>
                </div>
                
                {!isWatchingAd && (
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-full font-black text-sm bg-emerald-100 text-emerald-700 z-10">
                    <span>رایگان</span>
                    </div>
                )}
            </button>
        </div>

        {/* Items Section */}
        <div className="space-y-2">
           <h4 className="text-xs font-bold text-slate-500 px-1">آیتم‌های کمکی</h4>
            <div className="grid grid-cols-1 gap-3">
            {SHOP_ITEMS.map((item) => {
                const canAfford = currency >= item.cost;
                return (
                <button
                    key={item.id}
                    onClick={() => {
                    if (canAfford) onBuy(item);
                    }}
                    disabled={!canAfford}
                    className={`
                    relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all group
                    ${canAfford 
                        ? 'bg-white border-slate-100 hover:border-indigo-200 hover:shadow-lg active:scale-95' 
                        : 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed grayscale'
                    }
                    `}
                >
                    <div className="flex items-center gap-4">
                    <div className={`
                        p-3 rounded-xl transition-colors
                        ${item.action === 'hint' ? 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200' : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'}
                    `}>
                        {item.action === 'hint' ? <Zap size={24} /> : <Clock size={24} />}
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-bold text-slate-800 text-lg">{item.name}</span>
                        <span className="text-xs text-slate-400 font-bold">آیتم مصرفی</span>
                    </div>
                    </div>

                    <div className={`
                    flex items-center gap-1 px-3 py-1.5 rounded-full font-black text-sm
                    ${canAfford ? 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100' : 'bg-slate-200 text-slate-500'}
                    `}>
                    <span>{item.cost}</span>
                    <Diamond size={14} className={canAfford ? 'fill-cyan-600' : 'fill-slate-500'} />
                    </div>
                </button>
                );
            })}
            </div>
        </div>
      </div>
    </Modal>
  );
};
