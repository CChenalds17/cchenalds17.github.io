'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import ModeToggle from "./mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { motion } from "motion/react"

export function Navbar() {
  const router = useRouter()

  const handleLinkClick = (href: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    router.push(href)
  }

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-sm bg-background/60 border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-md font-semibold" asChild>
                <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ scale: { duration: 0.01 } }}
                  onClick={() => handleLinkClick('/')}
                >
                  <motion.div 
                    className="relative inline-block"
                    initial={{ x: 0, y: 0 }}
                    animate={{ transition: { duration: 0.1 }, x: 0, y: 0 }}
                    whileHover={{
                      x: [0, 2, 3, 2, 0, -2, -3, -2, 0],
                      y: [0, -2, 0, 2, 3, 2, 0, -2, 0]
                    }}
                    transition={{
                      x: { duration: 8, repeat: Infinity, ease: "linear" },
                      y: { duration: 8, repeat: Infinity, ease: "linear" },
                    }}
                  >
                    charlie chen
                  </motion.div>
                </motion.div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-md font-medium" asChild>
                  <motion.div
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ scale: { duration: 0.01 } }}
                    onClick={() => handleLinkClick('/projects')}
                  >
                    <div className="relative overflow-hidden inline-block h-6">
                      <motion.div
                        className="flex flex-col"
                        initial={{ y: 0 }}
                        whileHover={{ y: "-50%" }}
                        transition={{ y: { type: 'spring', stiffness: 400, damping: 10 } }}
                      >
                        <span className="inline-block h-6 leading-6">projects</span>
                        <span className="inline-block h-6 leading-6">projects</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="h-6 w-[1px] bg-muted-foreground/30" />
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
