import Link from 'next/link'
import { FaExternalLinkAlt, FaYoutube } from 'react-icons/fa'
import { BsSubstack } from "react-icons/bs"
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "Kurious കഥകൾ",
    description: "Conversations with 'അടിപൊളി' people in tech",
    url: "https://www.youtube.com/@kuriouskathakal",
    status: "on hold",
    launchDate: "2024-05-12",
    icon: <FaYoutube className="text-red-600" />
  },
  {
    title: "Kurious Jobs",
    description: "A weekly newsletter sharing curated non-engineering opportunities in tech companies",
    url: "https://kuriousjobs.substack.com/",
    status: "successful",
    launchDate: "2024-09-03",
    icon: <BsSubstack className="text-orange-500" />
  },
  {
    title: "Grado",
    description: "Tool easily color grade images from a reference image",
    url: "https://grado.ynotlabs.com/",
    status: "successful",
    launchDate: "2025-03-24",
    icon: <FaExternalLinkAlt className="text-blue-500" />
  },
  {
    title: "Indie Finder",
    description: "Directory to discover home grown brands from India",
    url: "",
    status: "in future",
    launchDate: "",
    icon: <FaExternalLinkAlt className="text-gray-400" />
  },
  {
    title: "Invoice Generator",
    description: "Minimal invoice generator for individual freelancers",
    url: "",
    status: "in progress",
    launchDate: "",
    icon: <FaExternalLinkAlt className="text-gray-400" />
  },
  {
    title: "Thumbnail Generator",
    description: "Generate high quality thumbnails for your niche using GPT 4o",
    url: "",
    status: "in progress",
    launchDate: "",
    icon: <FaExternalLinkAlt className="text-gray-400" />
  },
  {
    title: "Habbit Tracker",
    description: "Desktop version of habit tracker inspired from commit",
    url: "",
    status: "in progress",
    launchDate: "",
    icon: <FaExternalLinkAlt className="text-gray-400" />
  }
]

const statusColors = {
  'successful': 'bg-green-100 text-green-800',
  'in progress': 'bg-blue-100 text-blue-800',
  'on hold': 'bg-yellow-100 text-yellow-800',
  'in future': 'bg-gray-100 text-gray-800'
}

export default function Projects() {
  return (
    <div className="min-h-screen bg-custom-bg text-custom-text">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-lg text-gray-600 mb-12">
          A collection of my projects, both completed and in progress. Each project represents a unique challenge and learning opportunity.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
} 