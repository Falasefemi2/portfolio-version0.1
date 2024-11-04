"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { PortfolioTheme } from '@/components/portfolio-theme'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'


export default function PorfolioHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = ['Home', 'About', 'Projects', 'Contact']
    const NavItems = ({ isMobile = false }) => (
        <>
            {navItems.map((item) => (
                <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-primary transition-colors ${isMobile ? 'text-lg py-2' : ''
                        }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => isMobile && setIsOpen(false)}
                >
                    {item}
                </motion.a>
            ))}
        </>
    )

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold">Falase Femi</h1>
                </motion.div>
                <div className="hidden md:flex items-center space-x-4">
                    <NavItems />
                    <PortfolioTheme />
                </div>
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-4 mt-8">
                                <NavItems isMobile />
                                <div className="pt-2">
                                    <PortfolioTheme />
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>

    )
}