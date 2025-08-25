'use client'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/app/logo'

const NAVIGATION_LINKS = [
  {
    label: 'our founders',
    href: '/our-founders',
  },
  {
    label: 'our companies',
    href: '/our-companies',
  },
  {
    label: 'our team',
    href: '/our-team',
  },
  {
    label: 'stories',
    href: '/stories',
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="px-4 pt-4 md:px-12 md:pt-8 relative sticky top-0 w-full pt-4 bg-white dark:bg-zinc-950 z-50">
      <div className="flex items-center justify-between">
        {/* Logo with animation */}
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Logo />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16">
          {NAVIGATION_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className="font-extralight text-black dark:text-white uppercase text-sm">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Search with animation */}
        <AnimatePresence mode="wait">
          {!isMenuOpen && (
            <motion.button 
              className="hidden md:block cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-[30px] h-[30px] stroke-[0.5px]" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center justify-end gap-6">
          {/* Mobile Search with animation */}
          <AnimatePresence mode="wait">
            {!isMenuOpen && (
              <motion.button 
                className="cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="w-[30px] h-[30px] stroke-[0.5px]" />
              </motion.button>
            )}
          </AnimatePresence>
          
          {/* Menu Toggle */}
          <motion.button 
            className="cursor-pointer z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                null
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Menu className="w-[30px] h-[30px] stroke-[0.5px]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 bg-white dark:bg-zinc-950 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button in same position as hamburger */}
            <div className="absolute top-4 right-4">
              <motion.button 
                className="cursor-pointer z-50 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: "easeInOut" }}
              >
                <X className="w-[30px] h-[30px] stroke-[0.5px]" />
              </motion.button>
            </div>

            {/* Navigation Links - Centered */}
            <motion.div 
              className="flex flex-col items-center justify-center h-full space-y-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
            >
              {NAVIGATION_LINKS.map((link, index) => (
                <motion.div 
                  key={link.label} 
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.2 + (index * 0.1),
                    ease: "easeInOut" 
                  }}
                >
                  <Link 
                    href={link.href} 
                    className="font-extralight text-black dark:text-white uppercase text-2xl hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 mt-4 md:mt-8"></div>
    </header>
  )
}
