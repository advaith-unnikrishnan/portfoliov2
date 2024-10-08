import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

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
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ofcgjx2jbj");
          `}
        </Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
