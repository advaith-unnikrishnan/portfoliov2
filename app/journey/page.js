'use client'

import Header from '../components/Header'
import JourneyTimeline from '../components/JourneyTimeline'

export default function Journey() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section id="journey" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Journey</h2>
            <JourneyTimeline />
          </div>
        </section>
      </main>
      {/* You can add the footer here if you want it on the Journey page as well */}
    </div>
  )
}
