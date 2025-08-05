"use client"
 
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type TypingEffectProps = {
  children: React.ReactNode;
  as?: TagType;
  delay?: number;
  className?: string;
  onClick?: () => void;
};

export function TypingEffect({ children = 'Typing Effect', as = 'h2', delay = 0, className, onClick }: TypingEffectProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Validate that children is just text
  const isValidChildren = typeof children === 'string' || typeof children === 'number';
  
  if (!isValidChildren) {
    console.warn('TypingEffect only supports string or number children. Complex elements will not animate correctly.');
  }
  
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
        className={cn(getDefaultClassName(), className)}
        onClick={onClick}
      >
        {String(children).split('').map((letter: string, index: number) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.2, delay: index * 0.15 + delay }}
          >
            {letter}
          </motion.span>
        ))}
      </MotionComponent>
    );
  };

  return renderComponent();
}