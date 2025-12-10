
import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type?: ToastType;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', isVisible, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsAnimatingOut(false);
      
      // Auto dismiss after 3 seconds exactly
      const timer = setTimeout(() => {
        setIsAnimatingOut(true);
        // Wait for animation to finish before unmounting logic triggers parent close
        setTimeout(onClose, 500); 
      }, 3000);
      
      return () => clearTimeout(timer);
    } else {
      // If visibility prop changes to false externally
      setIsAnimatingOut(true);
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!shouldRender && !isVisible) return null;

  const bgColors = {
    success: 'bg-emerald-600 text-white shadow-emerald-500/30',
    error: 'bg-red-500 text-white shadow-red-500/30',
    info: 'bg-slate-800 text-white shadow-black/30'
  };

  const Icon = type === 'success' ? CheckCircle2 : type === 'error' ? AlertCircle : Info;

  return (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[70] pointer-events-none w-full flex justify-center px-4">
      <div 
        className={`
          flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl font-bold text-sm md:text-base backdrop-blur-md border border-white/10
          transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)
          ${bgColors[type]}
          ${isAnimatingOut ? 'opacity-0 translate-y-[-20px] scale-90' : 'opacity-100 translate-y-0 scale-100 animate-pop'}
        `}
      >
        <Icon size={24} strokeWidth={2.5} />
        <span className="drop-shadow-sm tracking-wide">{message}</span>
      </div>
    </div>
  );
};
