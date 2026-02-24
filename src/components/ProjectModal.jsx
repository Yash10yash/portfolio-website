import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-600 dark:text-gray-300 hover:text-purple text-2xl transition-colors"
              >
                <FaTimes />
              </button>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 glass rounded-lg text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass rounded-lg text-gray-700 dark:text-white hover:glow-purple transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple via-pink to-violet rounded-lg text-white shadow-lg glow-purple hover:scale-105 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

