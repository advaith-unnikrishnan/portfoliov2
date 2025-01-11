'use client'

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, ExternalLink, Mail, Instagram } from "lucide-react"
import Header from '../Header'
import { useState } from 'react'
import Head from 'next/head'

const bizProjects = [
  { id: 1, title: "Product | Carpooling", tags: ["Product", "Research", "Go To Market", "MVP"], image: "/images/cover/product.svg", link: "https://advaithu.notion.site/Product-Carpooling-aef7c8bf3aea48589fb64c10c6eb0497" },
  { id: 2, title: "Operations | Strategy | Cars4All", tags: ["Supply Chain Management", "Finance", "Operations"], image: "/images/cover/operations.svg", link: "https://advaithu.notion.site/Operations-Strategy-Cars4All-d29847e9c8254c26b226cffd565a47bd" },
  { id: 3, title: "Finance | Juice Labs", tags: ["Finance", "Growth"], image: "/images/cover/finance.svg", link: "https://advaithu.notion.site/Finance-Juice-Labs-6aadee97e9d742a8af12140fd07f305f" },
  { id: 4, title: "Zero to One | Foodtech", tags: ["Growth", "Research", "Marketing", "Product", "Strategy"], image: "/images/cover/zerotone.svg", link: "https://advaithu.notion.site/Zero-to-One-Foodtech-6d870a1ca726409e80ff975491c4275b" },
  { id: 5, title: "Business Communication | Shaadi.com", tags: ["Research", "Marketing", "Strategy", "Analysis"], image: "/images/cover/bizcom.svg", link: "https://advaithu.notion.site/Business-Communication-Shaadi-com-13056db48084413aace46e73c2227f32" },
]

const codingProjects = [
  { 
    id: 1, 
    title: "Portfolio Website", 
    description: "A responsive portfolio website built with Next.js and Tailwind CSS", 
    link: "https://advaith.co",
    usedAI: true
  },
  { 
    id: 2, 
    title: "FOF Globe", 
    description: "3D visualization of FOF Communities built using WebGL", 
    link: "https://fofoglobe.vercel.app",
    usedAI: false
  },
  { 
    id: 3, 
    title: "Mendor Space", 
    description: "A mentorship platform built using Bootstrap and HTML/CSS", 
    link: "https://www.producthunt.com/products/mendor-space",
    usedAI: false
  },
  { 
    id: 4, 
    title: "Config India", 
    description: "List of Config'23 watch parties happening in India", 
    link: "https://www.config23.in/",
    usedAI: false
  },
]

const tagColors = {
  Marketing: "bg-blue-100 text-blue-800",
  Research: "bg-green-100 text-green-800",
  Finance: "bg-yellow-100 text-yellow-800",
  Strategy: "bg-purple-100 text-purple-800",
  Operations: "bg-red-100 text-red-800",
  Growth: "bg-indigo-100 text-indigo-800",
  Analysis: "bg-pink-100 text-pink-800",
  Product: "bg-teal-100 text-teal-800",
  "Go To Market": "bg-orange-100 text-orange-800",
  MVP: "bg-cyan-100 text-cyan-800",
  "Supply Chain Management": "bg-lime-100 text-lime-800",
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('biz')

  const currentProjects = [
    {
      title: "Mendor.space",
      description: "Building Mendor.space with a focus on how mentorship will evolve with the advent of AI, specifically targeting college students in Kerala.",
      stage: "Engaging with potential users to identify key pain points before developing the prototype.",
      link: "https://www.producthunt.com/products/mendor-space"
    },
    {
      title: "Kurious Kathakal",
      description: "A podcast sharing the fascinating journeys of tech professionals from Kerala.",
      stage: "Three episodes released, with improvements made after each one.",
      link: "https://bio.link/kurious"
    },
    {
      title: "Kurious Jobs",
      description: "Sharing a wide array of opportunities I encounter, intending to make them accessible to a broader audience, primarily focusing on startup roles.",
      stage: "Setting up, in collaboration with my friend Kiran.",
      link: "https://kuriousjobs.substack.com/"
    }
  ];

  const contactLinks = [
    { icon: Mail, href: "mailto:mail@advaith.co", label: "Email" },
    { icon: Twitter, href: "https://twitter.com/advaith_u", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/advaithu/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/advaith-unnikrishnan", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/advaith.co", label: "Instagram" },
  ]

  const consultingClients = [
    { name: "Hoppscotch", logo: "/images/logos/hoppscotch.svg", link: "https://hoppscotch.com" },
    { name: "Jigsawstack", logo: "/images/logos/jigsawstack.svg", link: "https://jigsawstack.com" },
  ];

  const previousWorkplaces = [
    { name: "Figma", logo: "/images/logos/figma.svg", link: "https://figma.com" },
    { name: "Tinkerhub", logo: "/images/logos/tinkerhub.svg", link: "https://tinkerhub.org" },
  ];

  return (
    <>
      <Head>
        <title>Advaith U | Home</title>
        <meta name="title" content="Advaith U | Home" />
        <meta name="author" content="Advaith U" />
        <meta
          name="description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />
        <meta
          name="keywords"
          content="Advaith, Advaith U, Web Development, DSC Lead , Explore ML facilitator, Microsoft Student Ambassador, React Developer, Product Manager, Program Manager, Community evangelist in South India, Community Manager in South India, Tech Speaker, Friends of Figma, Friends of Figma India"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advaith.co/" />
        <meta property="og:title" content="Advaith U | Home" />
        <meta
          property="og:description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />
        <meta property="og:image" content="/advaith.JPG" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://advaith.co/" />
        <meta property="twitter:title" content="Advaith U | Home" />
        <meta
          property="twitter:description"
          content="Advaith is the India Regional Lead of Friends of Figma communities. He is a developer and community builder, who has a keen interest in product and growth strategy."
        />
        <meta property="twitter:image" content="/advaith.JPG" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <section className="w-full h-screen relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/advaith.JPG')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight text-custom-coral">
                Advaith
              </h1>
              <p className="text-xl sm:text-2xl mb-6 font-light tracking-wide">
                [ad-vay-th] • അദ്വൈത്
              </p>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed">
                  mostly curious about the world, and how things work
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed mt-2">
                  enjoy building solutions.
                </p>
              </div>
              <div className="mt-8">
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-custom-coral text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 max-w-screen-lg mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-black">👋 About Me</h2>
              <div className="space-y-4 text-gray-700 md:text-lg">
                <p>
                  I am an engineer by degree but a <a href="https://fs.blog/generalized-specialist/#:~:text=A%20generalizing%20specialist%20has%20a,and%20a%20few%20shallow%20ones." className="text-custom-coral font-semibold">generalized specialist</a> in work. I took a break at the start of the year to learn more about the non-engineering aspects of a business, and that's when I joined Stoa's General Management Program, it helped me acquire strong business fundamentals. Right now, I am looking for the next step in my career.
                </p>
                <h3 className="text-2xl font-semibold text-black">A bit about the way I think and operate:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Whatever I am working on, the <span className="font-semibold">'why'</span> is very important to me, that keeps me going</li>
                  <li>I like to take ownership of things from <span className="font-semibold">0 → 1</span> and love to work together in a team</li>
                  <li>I am a quick learner and go getter (<a href="https://www.linkedin.com/in/nadiahussain/" className="text-custom-coral font-semibold">Nadia</a> can vouch for this)</li>
                  <li>When approaching a problem I consider myself an amateur, not an expert know-it-all to avoid preconceived notions</li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-black">Notable Achievements</h3>
                <ul className="space-y-4 list-disc pl-5 text-gray-700">
                  <li>
                    Scaled the <a href="https://friends.figma.com/" target="_blank" rel="noopener noreferrer" className="text-custom-coral font-semibold hover:underline">friends of figma program</a> to 4x in India in 2 years, solving challenges during COVID times.
                  </li>
                  <li>
                    Led learning initiatives at <a href="https://tinkerhub.org/" target="_blank" rel="noopener noreferrer" className="text-custom-coral font-semibold hover:underline">Tinkerhub Foundation</a>, designing and executing over 5 learning programs.
                  </li>
                  <li>
                    Built <a href="https://www.producthunt.com/products/mendor-space" target="_blank" rel="noopener noreferrer" className="text-custom-coral font-semibold hover:underline">mendor space</a>, a product that attracted users but didn't ultimately take off.
                  </li>
                  <li>
                    Raised sponsorship worth over  <b>$15,000</b> for <a href="https://wiki.advaith.co/journey/ingress-hack" target="_blank" rel="noopener noreferrer" className="text-custom-coral font-semibold hover:underline">ingress hack</a>. This was the first hackathon in India sponsored by Figma and the first in Kerala sponsored by O'Reilly.
                  </li>
                  <li>
                    Most favorite one is building the <b>GDSC community</b> at my college, here's a <a href="https://gdscmbcet.com/magazine.html" target="_blank" rel="noopener noreferrer" className="text-custom-coral font-semibold hover:underline">glimpse</a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 text-center text-black">Previously worked at</h3>
                <div className="flex justify-center items-center space-x-8">
                  {previousWorkplaces.map((workplace, index) => (
                    <a 
                      key={index}
                      href={workplace.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={workplace.logo}
                          alt={workplace.name}
                          layout="fill"
                          objectFit="contain"
                          className="transition-opacity duration-300 group-hover:opacity-80"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="current-projects" className="w-full py-12 md:py-24 lg:py-32 bg-custom-coral">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">Currently Working On</h2>
              
              <p className="text-lg mb-6 text-center text-white">
                Here are some projects I'm currently focused on:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="group relative rounded-lg border bg-white p-6 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <span className="font-semibold text-black">Current Stage:</span>
                      <p className="text-gray-600">{project.stage}</p>
                    </div>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-blue-500 hover:underline"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
            </div>
          </section>

          <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 max-w-screen-lg mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-black">Need help with building your community?</h2>
              <div className="space-y-4 text-gray-700 md:text-lg text-center">
                <p>
                  If you're a founder who needs help with building community, content and operations, reach out to us!
                </p>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="https://cal.com/iamadvaith/consulting-discovery-call" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-custom-coral text-white font-semibold rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Let's talk
                </a>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6 text-center text-black">Previous Consulting Clients</h3>
                <div className="flex justify-center items-center space-x-8">
                  {consultingClients.map((client, index) => (
                    <a 
                      key={index}
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          layout="fill"
                          objectFit="contain"
                          className="transition-opacity duration-300 group-hover:opacity-80"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-custom-coral">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-white">Glimpse of my work</h2>
              
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setActiveTab('biz')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'biz' ? 'bg-white text-custom-coral' : 'bg-custom-coral text-white border border-white'}`}
                >
                  Business
                </button>
                <button
                  onClick={() => setActiveTab('coding')}
                  className={`px-4 py-2 rounded-md ${activeTab === 'coding' ? 'bg-white text-custom-coral' : 'bg-custom-coral text-white border border-white'}`}
                >
                  Coding
                </button>
              </div>
              
              <p className="text-lg mb-6 text-center text-white">
                {activeTab === 'biz' 
                  ? "During the career break I took Stoa's management program to dive deep into business fundamentals. These are some of my favorite works:"
                  : "Here are some of my favorite coding projects, there are more in my github that didn't make out of the local host"}
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeTab === 'biz' ? (
                  bizProjects.map((project) => (
                    <div 
                      key={project.id} 
                      className="group relative rounded-lg border bg-white p-6 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl"
                    >
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-md"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`text-xs rounded-full px-2 py-1 ${tagColors[tag] || "bg-gray-100 text-gray-800"}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-500 hover:underline"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  ))
                ) : (
                  codingProjects.map((project) => (
                    <div key={project.id} className="group relative rounded-lg border bg-white p-6 hover:border-gray-300 transition-all shadow-lg hover:shadow-xl">
                      <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      {project.usedAI && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                          Used AI
                        </span>
                      )}
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-blue-500 hover:underline"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-12 text-center">
                <a 
                  href="https://github.com/advaith-unnikrishnan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-custom-coral font-semibold rounded-md hover:bg-gray-100 transition duration-300"
                >
                  View More Projects <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-black">Get in Touch</h2>
              <p className="text-gray-500 md:text-xl mb-8 text-center">
                Feel free to reach out if you want to collaborate on a project, have any questions, or just want to connect.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-600 hover:bg-custom-coral hover:text-white transition-colors duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full py-6 bg-white shadow-md">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 Advaith. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
              <Link className="text-sm text-gray-600 hover:text-custom-coral transition-colors" href="/journey">
                Journey
              </Link>
              <a 
                className="text-sm text-gray-600 hover:text-custom-coral transition-colors" 
                href="https://youtube.com/@kuriouskathakal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Podcast
              </a>
              <a 
                className="text-sm text-gray-600 hover:text-custom-coral transition-colors" 
                href="https://advaithu.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notes
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}