"use client";
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

const sizeMap = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2 text-base',
  lg: 'px-7 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export function Button({ children, href, onClick, size = 'md', className, type = 'button' }: ButtonProps) {
  const classes = clsx(
    'rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-950',
    sizeMap[size],
    className
  );
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
