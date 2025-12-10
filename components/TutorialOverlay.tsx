
import React, { useEffect, useState } from 'react';
import { Hand } from 'lucide-react';

export const TutorialOverlay: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start exit animation after 5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5000);

    // Unmount after animation finishes (5s + 1s animation)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 6000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`
      absolute inset-0 pointer-events-none z-50 flex items-center justify-center 
      transition-opacity duration-1000 
      ${isExiting ? 'opacity-0' : 'opacity-100'}
    `}>
      <div className="relative w-full max-w-xs h-64 animate-fade-in delay-500">
         <div className="absolute top-1/2 left-1/4 animate-hand-swipe text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
            <Hand size={48} className="fill-white/20" />
         </div>
         <div className="absolute bottom-10 left-0 right-0 text-center">
            <span className="bg-black/60 text-white px-6 py-3 rounded-full backdrop-blur-xl text-sm font-black border border-white/20 shadow-xl">
               بکشید و رها کنید
            </span>
         </div>
      </div>
    </div>
  );
};
