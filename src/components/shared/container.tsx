import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Container({
  children,
  size = 'xl',
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-6 lg:px-8 w-full',
        {
          'max-w-(--container-sm)': size === 'sm',
          'max-w-(--container-md)': size === 'md',
          'max-w-(--container-lg)': size === 'lg',
          'max-w-(--container-xl)': size === 'xl',
          'max-w-full': size === 'full',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export default Container;
