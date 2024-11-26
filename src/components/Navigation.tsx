'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  BookmarkIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';

function NavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2
        hover:bg-[#1C5310]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5310] focus-visible:ring-offset-2
        ${isActive 
          ? 'text-[#1C5310] font-semibold bg-[#FFB81C]/10' 
          : 'text-gray-600 hover:text-[#1C5310]'
        }
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Link>
  );
}

function MobileNavLink({ href, children, icon: Icon }: { href: string; children: React.ReactNode; icon: React.ElementType }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        w-full px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3
        hover:bg-[#1C5310]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5310] focus-visible:ring-offset-2
        ${isActive 
          ? 'text-[#1C5310] font-semibold bg-[#FFB81C]/10' 
          : 'text-gray-600 hover:text-[#1C5310]'
        }
      `}
    >
      <Icon className="w-6 h-6" />
      <span className="font-medium">{children}</span>
    </Link>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5310] focus-visible:ring-offset-2 rounded-lg"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden transform transition-transform group-hover:scale-105">
                <Image 
                  src="/FEU-Logo-flat.png" 
                  alt="FEU Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1C5310] font-bold text-lg sm:text-xl">
                  GED0001
                </span>
                <span className="text-gray-600 text-xs sm:text-sm">
                  Digital Reading Portfolio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              <NavLink href="/" icon={HomeIcon}>Home</NavLink>
              <NavLink href="/resources" icon={BookmarkIcon}>Resources</NavLink>
              <NavLink href="/rpw" icon={BookOpenIcon}>Reading Process</NavLink>
              <NavLink href="/reflections" icon={ChatBubbleLeftRightIcon}>Reflections</NavLink>
              <NavLink href="/icare" icon={HeartIcon}>iCARE</NavLink>
              <NavLink href="/documentation" icon={DocumentChartBarIcon}>Documentation</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5310] focus-visible:ring-offset-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-5 h-0.5 bg-[#1C5310] rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 2 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-[#1C5310] rounded-full my-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-5 h-0.5 bg-[#1C5310] rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -2 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div 
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-xl z-50 xl:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-semibold text-[#1C5310]">Menu</span>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5310] focus-visible:ring-offset-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg 
                      className="w-5 h-5 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <motion.nav 
                  className="flex-1 px-3 py-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="space-y-1">
                    <MobileNavLink href="/" icon={HomeIcon}>Home</MobileNavLink>
                    <MobileNavLink href="/resources" icon={BookmarkIcon}>Resources</MobileNavLink>
                    <MobileNavLink href="/rpw" icon={BookOpenIcon}>Reading Process</MobileNavLink>
                    <MobileNavLink href="/reflections" icon={ChatBubbleLeftRightIcon}>Reflections</MobileNavLink>
                    <MobileNavLink href="/icare" icon={HeartIcon}>iCARE</MobileNavLink>
                    <MobileNavLink href="/documentation" icon={DocumentChartBarIcon}>Documentation</MobileNavLink>
                  </div>
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
