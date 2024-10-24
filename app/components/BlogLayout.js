import Header from './Header'
import Link from 'next/link'

export default function BlogLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-custom-bg text-custom-text">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
        {children}
      </main>
      <footer className="w-full py-6 bg-white shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">© 2024 Advaith. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
