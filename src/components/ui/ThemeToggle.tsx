import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';

const ICONS = {
  day: '/icons/sun.png',
  night: '/icons/moon.png',
};

export function ThemeToggle({ size = 40 }: { size?: number }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const current = theme === 'dark' ? 'night' : 'day';
  // Reduce default size for better header fit
    // Maximize icon size for best fit in container
    const iconSize = size || 38;

  if (!mounted) {
    // Placeholder: círculo animado (spinner minimalista)
    return (
      <span
        className="inline-block animate-spin bg-gray-200 dark:bg-gray-700 rounded-full"
        style={{ width: iconSize, height: iconSize }}
        aria-label="Cargando tema"
      />
    );
  }

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button
      aria-label="Cambiar tema"
      onClick={handleClick}
      className="relative flex items-center justify-center border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-200 shadow-sm rounded-full h-10 w-10 p-0 hover:bg-blue-50 active:bg-blue-100"
      style={{ boxShadow: '0 2px 8px 0 #00000011' }}
    >
      <span
        className="transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
      >
        {current === 'day' ? (
          <Image src={ICONS.day} alt="Día" width={iconSize} height={iconSize} priority />
        ) : (
          <Image src={ICONS.night} alt="Noche" width={iconSize} height={iconSize} priority />
        )}
      </span>
    </button>
  );
}
// ...existing code...
