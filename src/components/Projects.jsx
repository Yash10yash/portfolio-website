import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const projects = [
    {
      title: 'Freelancing Marketplace Platform',
      description: 'A comprehensive platform connecting freelancers with clients, featuring job posting, bidding, role-based dashboards, and real-time communication.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Socket.io'],
      features: [
        'Job posting & bidding system',
        'Role-based dashboards (Client/Freelancer)',
        'Real-time chat functionality',
        'Secure JWT authentication',
        'Payment integration ready',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Travel Tour Booking Website',
      description: 'An intuitive travel booking platform with destination browsing, booking inquiries, and integrated mapping services.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Google Maps Platform'],
      features: [
        'Browse destinations with filters',
        'Booking inquiry system',
        'REST API backend',
        'Interactive maps integration',
        'Responsive design',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Full-Stack AI SaaS Application',
      description: 'A powerful AI-powered SaaS platform built with PERN stack, offering content generation, resume analysis, and image processing capabilities.',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Clerk', 'Vercel', 'Neon'],
      features: [
        'AI content generation',
        'Resume analysis & optimization',
        'Image generation & background removal',
        'Clerk authentication',
        'Deployed on Vercel + Neon',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section id="projects" className="section" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
              My <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
                onOpenModal={() => openModal(project)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

const ProjectCard = ({ project, index, isInView, onOpenModal, shouldReduceMotion }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleMouseMove = (e) => {
    if (isMobile || shouldReduceMotion) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.2 }}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover-lift relative overflow-hidden cursor-pointer h-full flex flex-col"
        style={{
          transform: !isMobile && !shouldReduceMotion ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : 'none',
        }}
        whileHover={shouldReduceMotion || isMobile ? {} : { y: -10 }}
        onClick={onOpenModal}
      >
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3 text-sm sm:text-base flex-grow">
            {project.description}
          </p>

          <div className="mb-3 sm:mb-4">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs glass rounded-md text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-1 text-xs glass rounded-md text-gray-700 dark:text-gray-300">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto">
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, '_blank')
              }}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 glass rounded-lg text-gray-700 dark:text-white hover:glow-purple transition-all text-sm"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              <span>GitHub</span>
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.demo, '_blank')
              }}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple via-pink to-violet rounded-lg text-white text-sm shadow-lg glow-purple hover:scale-105 transition-all"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt />
              <span>Demo</span>
            </motion.button>
          </div>
        </div>

        {/* Glow Effect - Reduced on mobile */}
        {!isMobile && !shouldReduceMotion && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple/20 via-pink/20 to-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
            animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default Projects
