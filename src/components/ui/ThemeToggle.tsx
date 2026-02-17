import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

const ICONS = {
  day: '/icons/day.png',
  night: '/icons/night.png',
};

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [fade, setFade] = useState(false);
  const [current, setCurrent] = useState(theme === 'dark' ? 'night' : 'day');

  const handleClick = () => {
    setFade(true);
    setTimeout(() => {
      toggleTheme();
      setCurrent(theme === 'dark' ? 'day' : 'night');
      setTimeout(() => setFade(false), 350);
    }, 200);
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={handleClick}
      className="relative flex items-center justify-center w-12 h-12 rounded-full bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-400 transition-shadow group"
      style={{ boxShadow: 'none', padding: 0 }}
    >
      {/* Día */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${current === 'day' && !fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: current === 'day' ? 2 : 1 }}
      >
        <Image src={ICONS.day} alt="Día" width={40} height={40} priority />
      </span>
      {/* Noche */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${current === 'night' && !fade ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: current === 'night' ? 2 : 1 }}
      >
        <Image src={ICONS.night} alt="Noche" width={40} height={40} priority />
      </span>
    </button>
  );
}
// ...existing code...
