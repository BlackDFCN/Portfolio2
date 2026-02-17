"use client";
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      toggleTheme();
      setTimeout(() => setAnimating(false), 600);
    }, 300);
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={handleClick}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-400 transition-shadow group"
      style={{ boxShadow: 'none', padding: 0 }}
    >
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-500 group-hover:scale-125 group-hover:shadow-lg ${
          animating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'
        } ${theme === 'dark' ? 'text-blue-400' : 'text-yellow-400'}`}
        style={{ zIndex: 2 }}
      >
        {theme === 'dark' ? <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🌙</span> : '☀️'}
      </span>
      {/* Animación de transición */}
      {animating && (
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl animate-fade-in-out ${
            theme === 'dark' ? 'text-yellow-400' : 'text-blue-400'
          }`}
          style={{ zIndex: 1 }}
        >
          {theme === 'dark' ? '☀️' : <span style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>🌙</span>}
        </span>
      )}
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: scale(0.8) translate(-50%, -50%); }
          40% { opacity: 1; transform: scale(1.2) translate(-50%, -50%); }
          100% { opacity: 0; transform: scale(1.4) translate(-50%, -50%); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 0.6s;
        }
      `}</style>
    </button>
  );
}
