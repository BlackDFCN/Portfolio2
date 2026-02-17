import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect } from 'react';

const ICONS = {
  day: '/icons/day.png',
  night: '/icons/night.png',
};

export function ThemeToggle({ size = 40 }: { size?: number }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const current = theme === 'dark' ? 'night' : 'day';

  if (!mounted) {
    // Placeholder: círculo animado (spinner minimalista)
    return (
      <span
        className="inline-block animate-spin bg-gray-200 dark:bg-gray-700 rounded-full"
        style={{ width: size, height: size }}
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
      className="relative flex items-center justify-center"
      style={{ width: size + 8, height: size + 8, boxShadow: 'none', padding: 0, borderRadius: '9999px' }}
    >
      {current === 'day' ? (
        <Image src={ICONS.day} alt="Día" width={size} height={size} priority />
      ) : (
        <Image src={ICONS.night} alt="Noche" width={size} height={size} priority />
      )}
    </button>
  );
}
// ...existing code...
