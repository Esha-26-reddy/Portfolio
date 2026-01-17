import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Quick AI – AI SaaS Platform',
      duration: 'Nov 2025 - Dec 2025',
      description:
        'A full-stack PERN-based AI SaaS platform offering multi-feature services including text generation, image creation, background removal, and resume review. Integrated advanced AI capabilities with a modern, responsive UI.',
      techStack: [
        'PostgreSQL',
        'Express.js',
        'React.js',
        'Node.js',
        'AI APIs',
        'Tailwind CSS',
        'Vercel',
      ],
      problemSolved:
        'Centralizes multiple AI-powered services into a single platform, reducing dependency on multiple tools and improving productivity.',
      github: null,
      live: 'https://quick-ai-lyart-seven.vercel.app/',
    },
    {
      title: 'Smart PDF Quiz Generator',
      duration: 'August 2025',
      description:
        'An AI-powered platform that extracts content from large PDF files (up to 100MB) to generate summaries and intelligent quizzes with adaptive difficulty.',
      techStack: [
        'React 18',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'Multer',
        'PDF-Parse',
        'Gemini AI',
      ],
      problemSolved:
        'Converts static learning material into interactive assessments, improving learning efficiency and engagement.',
      github: 'https://github.com/Esha-26-reddy/Smart-quiz-generator',
      live: null,
    },
    {
      title: 'AI-Integrated Salon Service Web App',
      duration: 'May 2025 - June 2025',
      description:
        'A full-stack salon management platform with secure payments, automated invoice generation, email notifications, and an AI-powered chatbot for customer support.',
      techStack: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Razorpay',
        'Nodemailer',
        'OpenAI',
        'Flask',
      ],
      problemSolved:
        'Automates salon operations including bookings, billing, and customer communication, significantly improving efficiency.',
      github: 'https://github.com/Esha-26-reddy/Beauty_Parlour',
      live: null,
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-800/50">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="card animate-slide-up group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.duration}</p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Problem Solved
              </h4>
              <p className="text-gray-300 text-sm">
                {project.problemSolved}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
