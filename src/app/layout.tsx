import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'TaskFlow | Streamline Your Workflow',
  description: 'TaskFlow is the most powerful task management system for modern teams. Organize, track, and complete your projects with ease.',
  keywords: ['task management', 'kanban', 'productivity', 'project tracking', 'collaboration'],
  authors: [{ name: 'Yogesh Thapa' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}

