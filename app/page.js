import Home from './components/home/page'

export const metadata = {
  openGraph: {
    title: "Advaith's Portfolio",
    description: "Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy.",
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
