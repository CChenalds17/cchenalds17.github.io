'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Custom animated badge component with hover effect
export function AnimatedBadge({ 
  size, 
  className, 
  children 
}: { 
  size?: 'xs' | 'sm'; 
  className?: string;
  children: React.ReactNode 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="inline-block m-1"
    >
      <Badge 
        className={cn("text-sm py-1.5 font-medium rounded-full", 
          size === 'xs' ? "text-xs font-small" : "",
          className
        )}
        variant="secondary"
      >
        {children}
      </Badge>
    </motion.div>
  );
}