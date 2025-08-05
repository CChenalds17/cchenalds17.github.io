'use client';

import Link from 'next/link';
import { FadeParallax } from '@/components/motion/fade-parallax';
import { motion } from 'motion/react';
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="space-y-6 max-w-lg">
        <FadeParallax direction="up" distance={40}>
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-2">404</h1>
          <div className="h-1 w-20 bg-primary mx-auto my-6"></div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        </FadeParallax>
        
        <FadeParallax direction="up" distance={60}>
          <p className="text-muted-foreground text-lg mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </FadeParallax>
        
        <FadeParallax direction="up" distance={80}>
          <Link 
            href="/" 
            className="inline-block bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
          >
            <motion.span 
              className="inline-block" 
              whileHover={{ x: [0, -5, 0], transition: { repeat: Infinity, duration: 0.6 }}}
            >
              ← Back to Home
            </motion.span>
          </Link>
        </FadeParallax>
      </div>
    </div>
  );
}