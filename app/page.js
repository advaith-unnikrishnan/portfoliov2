import Home from './components/home/page'

export const metadata = {
  openGraph: {
    title: "Advaith's Portfolio",
    description: "on a curious pursuit",
    url: 'https://advaith.co',
    siteName: "Advaith's Portfolio",
    images: [
      {
        url: 'https://advaith.co/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Page() {
  return <Home />;
}
