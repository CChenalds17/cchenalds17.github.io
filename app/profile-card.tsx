'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/custom-icons";
import { motion } from "motion/react";
import { BlurIn } from "@/components/motion/blur-in";

export default function ProfileCard() {
  return (
    <BlurIn as="div">
      <Card className="w-full md:w-[320px] px-6 py-12 shadow-lg">
        <CardContent className="p-0 space-y-6">
          {/* Profile Image */}
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/headshot.jpg" alt="Charlie Chen" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>

          {/* Name and Contact */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold">Charlie Chen</h3>
            <motion.a 
              href="mailto:charliechen@college.harvard.edu" 
              className="text-muted-foreground hover:text-primary transition-colors block"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97, y: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              charliechen@college.harvard.edu
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-between px-12">
          <motion.a 
            href="https://github.com/cchenalds17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            >
            <GitHubIcon className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/charliechen1742"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            >
            <LinkedInIcon className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            whileTap={{ scale: 0.9 }}
            >
            <FileText className="w-6 h-6" />
          </motion.a>
        </div>
      </CardContent>
      </Card>
    </BlurIn>
  )
}