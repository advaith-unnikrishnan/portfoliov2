'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/workspace', label: 'Workspace' },
    { href: '/journey', label: 'Journey' },
    { href: 'https://youtube.com/@kuriouskathakal', label: 'Podcast', external: true },
    { href: 'https://advaithu.substack.com', label: 'Notes', external: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
      <div className="container mx-auto px-4 flex h-14 items-center justify-end">
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-14 md:top-0 left-0 right-0 bg-white md:bg-transparent py-4 md:py-0 items-center space-y-4 md:space-y-0 md:space-x-6 text-sm font-medium`}>
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-coral transition-colors text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-custom-coral transition-colors ${
                  pathname === item.href ? 'text-custom-coral font-semibold' : 'text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
        <button className="md:hidden p-2 ml-auto" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}
