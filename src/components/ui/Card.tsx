import React from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('rounded-lg bg-neutral-800 p-6 shadow-md', className)}>
      {children}
    </div>
  );
}
