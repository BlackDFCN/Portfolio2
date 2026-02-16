"use client";
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Cambiar tema"
      onClick={toggleTheme}
      className="rounded p-2 bg-gray-100 hover:bg-gray-200 text-yellow-400 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-blue-400 transition-colors"
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined text-xl align-middle">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined text-xl align-middle">light_mode</span>
      )}
    </button>
  );
}
