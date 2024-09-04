import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Advaith's Portfolio",
  description: 'A showcase of my projects and skills',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
