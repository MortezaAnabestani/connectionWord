
import React, { useEffect, useState } from 'react';
import { WifiOff, Wifi, CloudOff } from 'lucide-react';

export const NetworkStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showRestored, setShowRestored] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
        setIsOnline(true);
        setShowRestored(true);
        setTimeout(() => setShowRestored(false), 4000);
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && !showRestored) return null;

  return (
    <div className={`
        fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-[999] animate-slide-up backdrop-blur-xl border font-bold text-sm
        transition-all duration-500
        ${!isOnline 
            ? 'bg-slate-900/90 text-red-400 border-red-500/30' 
            : 'bg-slate-900/90 text-emerald-400 border-emerald-500/30'
        }
    `}>
       <div className={`p-2 rounded-full ${!isOnline ? 'bg-red-500/10' : 'bg-emerald-500/10'}`}>
          {!isOnline ? <CloudOff size={18} /> : <Wifi size={18} />}
       </div>
       <div className="flex flex-col">
          <span className="leading-tight">{!isOnline ? 'ارتباط با اینترنت قطع شد' : 'اتصال برقرار شد'}</span>
          {!isOnline && <span className="text-[10px] opacity-60 font-normal">برخی قابلیت‌ها ممکن است کار نکنند</span>}
       </div>
    </div>
  );
};
