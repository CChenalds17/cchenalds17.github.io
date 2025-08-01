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
              <NavigationMenuLink className="text-md font-semibold hover:scale-105" asChild>
                <Link 
                  href="/" 
                  onClick={() => handleLinkClick('/')} 
                >
                  charlie chen
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-md font-medium hover:scale-105 transition-transform" asChild>
                  <Link href="/projects" onClick={() => handleLinkClick('/projects')}>projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="h-6 w-[1px] bg-muted-foreground/20" />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
