import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    default: "Advaith's Portfolio",
    template: "%s | Advaith's Portfolio"
  },
  description: "Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy.",
  keywords: ['Advaith', 'Portfolio', 'Developer', 'Community Builder', 'Product Strategy', 'Growth Strategy'],
  authors: [{ name: 'Advaith' }],
  creator: 'Advaith',
  publisher: 'Advaith',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
