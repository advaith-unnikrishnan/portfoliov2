import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const statusColors = {
  'successful': 'bg-green-100 text-green-800',
  'in progress': 'bg-blue-100 text-blue-800',
  'on hold': 'bg-yellow-100 text-yellow-800',
  'in future': 'bg-gray-100 text-gray-800'
}

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          {project.icon}
          <h2 className="text-xl font-semibold">{project.title}</h2>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
          {project.status}
        </span>
      </div>
      
      <p className="mt-4 text-gray-600">{project.description}</p>
      
      <div className="mt-6 flex items-center justify-between">
        {project.launchDate && (
          <span className="text-sm text-gray-500">
            Launched: {new Date(project.launchDate).toLocaleDateString()}
          </span>
        )}
        {project.url && (
          <Link 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom-coral hover:text-custom-coral-dark flex items-center space-x-1"
          >
            <span>Visit</span>
            <FaExternalLinkAlt className="text-sm" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectCard 