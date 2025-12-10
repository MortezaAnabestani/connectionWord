
import React from 'react';
import { MapPin, Lock, Star, Cloud, Sun, Compass } from 'lucide-react';
import { LEVELS } from '../data/levels';
import { audio } from '../services/audio';

interface LevelMapProps {
  currentLevelId: number;
  onSelectLevel: (id: number) => void;
  completedLevels: number[];
}

export const LevelMap: React.FC<LevelMapProps> = ({ currentLevelId, onSelectLevel, completedLevels }) => {
  const maxCompleted = Array.isArray(completedLevels) && completedLevels.length > 0 
    ? Math.max(...completedLevels) 
    : 0;

  const handleSelect = (id: number) => {
    if (id > (maxCompleted + 1) && id !== 1) {
       audio.playError();
       return;
    }
    audio.playSuccess();
    onSelectLevel(id);
  };

  // Iran map path (Simplified but recognizable)
  const iranPath = "M 18,15 L 25,12 L 35,10 L 45,8 L 55,10 L 65,15 L 80,18 L 85,25 L 90,40 L 92,60 L 88,75 L 75,85 L 60,92 L 40,88 L 25,80 L 15,60 L 10,40 L 12,25 Z";
  // A more detailed path for Iran (approximate)
  const iranDetailPath = "M 28,10 C 35,5 45,5 50,8 C 55,5 65,5 75,12 C 80,15 85,18 88,25 C 92,35 95,50 92,65 C 90,75 80,85 70,88 C 60,92 50,90 45,88 C 40,90 30,85 25,75 C 20,65 15,55 12,45 C 10,35 15,25 20,20 C 22,15 25,12 28,10 Z";


  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#0b1120] rounded-[2.5rem] border-4 border-slate-800 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]">
      
      {/* Decorative Elements */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />
      
      <div className="absolute top-8 left-8 text-slate-700/30 animate-pulse"><Compass size={80} strokeWidth={1} /></div>
      <div className="absolute top-10 right-10 text-white/5 animate-float"><Cloud size={100} /></div>
      <div className="absolute top-32 right-20 text-white/5 animate-float" style={{ animationDelay: '2s' }}><Cloud size={60} /></div>

      {/* Map Container */}
      <div className="relative w-full max-w-lg aspect-[4/5] p-2 select-none">
        <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,0.2)] overflow-visible"
        >
            <defs>
              <filter id="glow-path">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="landGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="1" />
                <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
              </linearGradient>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
              </pattern>
            </defs>

            {/* Main Landmass */}
            <path 
                d="M 27,8 L 35,12 L 42,7 L 55,8 L 65,14 L 78,14 L 85,25 L 88,35 L 92,55 L 85,75 L 75,82 L 62,88 L 45,86 L 30,78 L 18,65 L 12,45 L 15,25 L 27,8 Z" 
                fill="url(#landGradient)"
                stroke="#334155"
                strokeWidth="0.5"
                className="transition-all duration-1000 hover:brightness-110"
            />
            {/* Grid Overlay on Land */}
             <path 
                d="M 27,8 L 35,12 L 42,7 L 55,8 L 65,14 L 78,14 L 85,25 L 88,35 L 92,55 L 85,75 L 75,82 L 62,88 L 45,86 L 30,78 L 18,65 L 12,45 L 15,25 L 27,8 Z" 
                fill="url(#grid)"
                className="pointer-events-none"
            />

            {/* Connection Paths (Curved Bezier) */}
            {LEVELS.map((level, index) => {
                if (index === LEVELS.length - 1) return null;
                const nextLevel = LEVELS[index + 1];
                const isUnlocked = completedLevels.includes(level.id);

                if (!level.mapCoordinates || !nextLevel.mapCoordinates) return null;

                // Calculate control point for curve (simple midpoint with offset)
                const mx = (level.mapCoordinates.x + nextLevel.mapCoordinates.x) / 2;
                const my = (level.mapCoordinates.y + nextLevel.mapCoordinates.y) / 2;
                // Add slight curve based on direction
                const cx = mx + (index % 2 === 0 ? 10 : -10);
                const cy = my + (index % 2 === 0 ? 5 : -5);

                const pathD = `M ${level.mapCoordinates.x},${level.mapCoordinates.y} Q ${cx},${cy} ${nextLevel.mapCoordinates.x},${nextLevel.mapCoordinates.y}`;

                return (
                    <g key={`path-${level.id}`}>
                        {/* Shadow Path */}
                        <path
                            d={pathD}
                            stroke="#0f172a"
                            strokeWidth="4"
                            fill="none"
                            opacity="0.5"
                        />
                        {/* Base Inactive Path */}
                        <path
                            d={pathD}
                            stroke="#334155"
                            strokeWidth="1.5"
                            fill="none"
                            strokeDasharray="2 2"
                            opacity="0.4"
                        />
                         {/* Animated Active Path */}
                        {isUnlocked && (
                           <path
                              d={pathD}
                              stroke="#fbbf24"
                              strokeWidth="1.5"
                              fill="none"
                              strokeDasharray="4 4"
                              className="animate-[dash_30s_linear_infinite]"
                              filter="url(#glow-path)"
                          />
                        )}
                    </g>
                );
            })}
        </svg>

        {/* Cities / Levels */}
        {LEVELS.map((level) => {
            if (!level.mapCoordinates) return null;
            const isLocked = level.id > (maxCompleted + 1) && level.id !== 1;
            const isCompleted = completedLevels.includes(level.id);
            const isCurrent = !isLocked && !isCompleted;

            return (
            <div
                key={level.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
                style={{
                  left: `${level.mapCoordinates.x}%`,
                  top: `${level.mapCoordinates.y}%`
                }}
            >
                {/* Ripple for current */}
                {isCurrent && (
                    <>
                      <div className="absolute inset-0 -m-8 border border-amber-500/30 rounded-full animate-ping pointer-events-none duration-3000" />
                      <div className="absolute inset-0 -m-4 bg-amber-500/20 rounded-full animate-pulse pointer-events-none" />
                    </>
                )}

                <button
                    onClick={() => handleSelect(level.id)}
                    className={`
                        relative flex items-center justify-center transition-all duration-500 ease-out
                        ${isLocked ? 'w-8 h-8 opacity-60 grayscale scale-90' : 'w-12 h-12 md:w-14 md:h-14 hover:scale-110 hover:-translate-y-2'}
                    `}
                >
                    {/* Marker Body */}
                    <div className={`
                        absolute inset-0 rounded-full border-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)] transition-colors
                        ${isLocked 
                            ? 'bg-slate-800 border-slate-600' 
                            : isCompleted 
                                ? 'bg-emerald-600 border-emerald-400' 
                                : 'bg-amber-500 border-amber-300 animate-bounce'
                        }
                    `}>
                        {/* Glassy Shine */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 text-white drop-shadow-sm">
                         {isLocked ? (
                            <Lock size={12} />
                        ) : isCompleted ? (
                            <Star size={20} fill="currentColor" className="text-emerald-100" />
                        ) : (
                            <MapPin size={24} fill="currentColor" className="text-white" />
                        )}
                    </div>
                </button>

                {/* City Label (Professional) */}
                <div className={`
                    absolute top-full mt-3 left-1/2 -translate-x-1/2 
                    flex flex-col items-center pointer-events-none transition-all duration-300
                    ${isLocked ? 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0' : 'opacity-100'}
                `}>
                    <div className="bg-black/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 shadow-xl flex items-center gap-1.5">
                       {isCompleted && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_#34d399]" />}
                       {!isCompleted && !isLocked && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_5px_#fbbf24]" />}
                       <span className={`text-[10px] font-black uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                          {level.title.split(':')[0]}
                       </span>
                    </div>
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};
