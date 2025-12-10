
import React, { useState } from 'react';
import { IconMapping } from './IconMapping';
import { audio } from '../services/audio';

interface TileProps {
  id: string;
  text: string;
  isSolved: boolean;
  isDragging: boolean;
  isHinting?: boolean; 
  colorClass?: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  isToken?: boolean;
  iconName?: string;
}

export const Tile: React.FC<TileProps> = ({ 
  id, 
  text, 
  isSolved, 
  isDragging, 
  isHinting,
  colorClass,
  onPointerDown,
  isToken,
  iconName
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isSolved || isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt effect
    const rotateX = ((y - centerY) / centerY) * -12; 
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const baseClasses = "relative w-full h-full rounded-2xl flex flex-col items-center justify-center p-1 text-center leading-tight transition-all duration-300 select-none touch-none overflow-hidden cursor-pointer backface-hidden";
  const fontSize = isToken ? "text-[10px] md:text-xs font-black" : "text-[11px] md:text-sm font-bold tracking-tight";

  let stateClasses = "";
  
  if (isDragging) {
    stateClasses = "opacity-0 scale-90"; 
  } else if (isSolved) {
    stateClasses = `${colorClass || 'bg-slate-200'} text-slate-900 shadow-card-solved scale-[0.96] opacity-90 cursor-default border-2 border-transparent grayscale-[0.2]`;
  } else if (isToken) {
    stateClasses = `
      bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600
      text-amber-950
      border border-white/40
      shadow-card-token
      z-20 animate-pop
      hover:brightness-110 hover:scale-[1.05]
    `;
  } else {
    // Premium Glass/Paper Morphism
    stateClasses = `
      bg-tile-idle
      text-tile-text
      shadow-[0_4px_0_0_#e4e4e7,0_6px_10px_rgba(0,0,0,0.05)]
      border border-white
      hover:shadow-[0_8px_0_0_#e4e4e7,0_12px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1.5
      active:shadow-[0_0_0_0_#e4e4e7,inset_0_2px_4px_rgba(0,0,0,0.1)] active:translate-y-[4px] active:border-transparent
      shadow-inner-light
      ${isHinting ? 'animate-shake ring-4 ring-yellow-400/50 z-20' : ''}
    `;
  }

  const handlePress = (e: React.PointerEvent) => {
    if (!isSolved) {
      audio.playPop(); 
      onPointerDown(e, id);
    }
  };

  const transformStyle = !isSolved && !isDragging && !isToken
    ? { transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)` }
    : {};

  return (
    <div
      onPointerDown={handlePress}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${baseClasses} ${stateClasses} ${fontSize}`}
      role="button"
      data-tile-id={id}
      style={transformStyle}
    >
       {/* Noise Texture for premium tactile feel */}
       <div 
         className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
       />

      {isToken && iconName && (
        <div className="mb-1 text-amber-950 drop-shadow-sm transform group-hover:scale-110 transition-transform">
          <IconMapping name={iconName} size={24} />
        </div>
      )}
      
      <span className="relative z-10 px-1 break-words w-full drop-shadow-sm">{text}</span>
      
      {/* Glossy Sheen */}
      {!isSolved && !isDragging && !isToken && (
        <div 
           className="absolute -inset-full top-0 block h-full w-full -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 hover:animate-shimmer pointer-events-none" 
        />
      )}
      
      {isToken && (
         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent animate-pulse-glow pointer-events-none mix-blend-overlay" />
      )}
    </div>
  );
};
