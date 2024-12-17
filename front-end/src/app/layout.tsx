import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteApp',
  description: 'A simple note-taking application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} antialiased flex flex-col h-full`}>
        <NavBar />
        <main className="flex-grow bg-gray-50 dark:bg-gray-800 overflow-auto">
            {children}
        </main>
      </body>
    </html>
  )
}