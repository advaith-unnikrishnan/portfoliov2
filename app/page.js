import { Mail } from 'lucide-react';

const matrixColumns = [
  { left: '3%', delay: '-9s', duration: '18s', opacity: 0.34, text: '0101 rebuild 1010 ship 0011' },
  { left: '11%', delay: '-3s', duration: '22s', opacity: 0.22, text: '0010 iterate 1101 craft 0100' },
  { left: '19%', delay: '-13s', duration: '20s', opacity: 0.28, text: '1110 design 0011 build 1011' },
  { left: '28%', delay: '-6s', duration: '24s', opacity: 0.18, text: '0100 notes 1010 ideas 0110' },
  { left: '38%', delay: '-15s', duration: '19s', opacity: 0.32, text: '1011 launch 0101 soon 1100' },
  { left: '48%', delay: '-4s', duration: '21s', opacity: 0.2, text: '0011 system 1110 focus 0101' },
  { left: '58%', delay: '-11s', duration: '23s', opacity: 0.3, text: '1100 update 0111 page 1001' },
  { left: '68%', delay: '-2s', duration: '18s', opacity: 0.24, text: '0110 signal 1001 work 0010' },
  { left: '78%', delay: '-16s', duration: '25s', opacity: 0.16, text: '1001 polish 0010 live 1110' },
  { left: '88%', delay: '-7s', duration: '20s', opacity: 0.3, text: '1111 curious 0001 build 0111' },
  { left: '96%', delay: '-12s', duration: '23s', opacity: 0.2, text: '0101 refresh 1011 ready 0001' },
];

export const metadata = {
  title: "Advaith's Portfolio | Under Construction",
  description: "Advaith's portfolio is being updated. Reach out by email for anything urgent.",
  openGraph: {
    title: "Advaith's Portfolio | Under Construction",
    description: "Advaith's portfolio is being updated. Reach out by email for anything urgent.",
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
  const email = 'mail@advaith.co';

  return (
    <main className="min-h-screen bg-[#04110f] text-[#f3fff9]">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-12 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[#04110f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(57,255,190,0.18),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(255,185,94,0.1),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(117,255,210,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(117,255,210,0.07)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,15,0.18),rgba(4,17,15,0.72)_62%,rgba(4,17,15,0.95))]" />

          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {matrixColumns.map((column) => (
              <div
                key={column.left}
                className="matrix-column absolute top-0 w-5 select-none text-center font-mono text-sm leading-7 text-[#73ffd4]"
                style={{
                  left: column.left,
                  animationDelay: column.delay,
                  animationDuration: column.duration,
                  opacity: column.opacity,
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => (
                  <span className="block" key={index}>
                    {column.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#73ffd4]">
              Portfolio update in progress
            </p>
            <h1 className="text-5xl font-semibold leading-none tracking-normal text-[#f3fff9] sm:text-6xl md:text-7xl">
              Site under construction.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b5c9c1] sm:text-xl">
              I am refreshing this portfolio and will have the new version live soon.
              If something is urgent, feel free to reach out by email.
            </p>
          </div>

          <a
            href={`mailto:${email}`}
            className="inline-flex w-fit items-center gap-3 rounded-full border border-[#73ffd4]/40 bg-[#73ffd4] px-6 py-4 text-base font-semibold text-[#04110f] shadow-[0_0_34px_rgba(115,255,212,0.22)] transition hover:border-[#ffd08a]/70 hover:bg-[#ffd08a] focus:outline-none focus:ring-4 focus:ring-[#73ffd4]/25"
            aria-label={`Email ${email}`}
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            {email}
          </a>
        </div>
      </section>
    </main>
  );
}
