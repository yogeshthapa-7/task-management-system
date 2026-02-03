'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gradient">
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 2C7.89543 2 7 2.89543 7 4V8C7 9.10457 7.89543 10 9 10H13C14.1046 10 15 9.10457 15 8V4C15 2.89543 14.1046 2 13 2H9Z" />
            <path d="M9 14C7.89543 14 7 14.8954 7 16V20C7 21.1046 7.89543 22 9 22H13C14.1046 22 15 21.1046 15 20V16C15 14.8954 14.1046 14 13 14H9Z" />
          </svg>
          <span>TaskFlow</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Home
          </Link>
          <Link href="#features" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
            About
          </Link>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
