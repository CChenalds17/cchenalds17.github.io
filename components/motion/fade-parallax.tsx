'use client';

import { 
  motion,
  MotionValue,
  useScroll,
  useSpring, 
  useTransform 
} from 'motion/react';
import * as React from 'react';

// Helper hook to create parallax effect based on scroll progress
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [distance, 0]);
}

type FadeParallaxProps = { 
  direction?: 'up' | 'down';
  children: React.ReactNode;
  className?: string; 
  distance?: number;
  end?: number;
};

export function FadeParallax({
  direction = 'up',
  children, 
  className = '', 
  distance = 50,
  end = 50,
}: FadeParallaxProps) {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', `end ${end}%`],
  });
  
  // Create smooth spring effect for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001
  });
  
  // Create parallax transform value based on scroll progress
  const y = useParallax(smoothProgress, direction === 'up' ? distance : -distance);
  
  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0 }}
      style={{ opacity: smoothProgress, y }}
    >
      {children}
    </motion.div>
  );
}