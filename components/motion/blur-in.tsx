'use client';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type BlurInProps = {
  children: React.ReactNode;
  as?: TagType;
  className?: string;
  duration?: number;
};

export const BlurIn = ({ 
  children, 
  as = 'h2', 
  className,
  duration = 1.2
}: BlurInProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Set default styling based on tag type
  const getDefaultClassName = () => {
    switch (as) {
      case 'h1': return 'text-4xl font-bold';
      case 'h2': return 'text-3xl font-bold';
      case 'h3': return 'text-2xl font-bold';
      case 'h4': return 'text-xl font-bold';
      case 'h5': return 'text-lg font-bold';
      case 'h6': return 'text-base font-bold';
      case 'p': return 'text-base md:text-lg';
      default: return '';
    }
  };
  
  // Render the appropriate motion component based on tag type
  const renderComponent = () => {
    const MotionComponent = motion[as];
    
    return (
      <MotionComponent
        ref={ref}
        initial={{ filter: 'blur(20px)', opacity: 0 }}
        animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
        transition={{ duration }}
        className={cn(getDefaultClassName(), className)}
      >
        {children}
      </MotionComponent>
    );
  };

  return renderComponent();
};