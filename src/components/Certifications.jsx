import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const certifications = [
    {
      title: 'Learn Java',
      issuer: 'IBM SkillsBuild',
      description: 'Comprehensive Java programming certification covering core concepts, OOP principles, and advanced topics.',
      date: '2024',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025',
      subtitle: 'Certified AI Foundations Associate',
      issuer: 'Oracle',
      description: 'Certification demonstrating expertise in AI foundations and Oracle Cloud Infrastructure services.',
      date: '2025',
    },
  ]

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <FlipCard key={cert.title} cert={cert} index={index} isInView={isInView} shouldReduceMotion={shouldReduceMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FlipCard = ({ cert, index, isInView, shouldReduceMotion }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.2 }}
      className="h-56 sm:h-64 perspective-1000"
      onMouseEnter={() => !shouldReduceMotion && setIsFlipped(true)}
      onMouseLeave={() => !shouldReduceMotion && setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: shouldReduceMotion ? 0 : (isFlipped ? 180 : 0) }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center hover-lift">
          <motion.div
            className="text-4xl sm:text-5xl mb-3 sm:mb-4 gradient-text"
            whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
          >
            <FaCertificate />
          </motion.div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 gradient-text text-center">
            {cert.title}
          </h3>
          {cert.subtitle && (
            <h4 className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2 text-center">{cert.subtitle}</h4>
          )}
          <p className="text-gray-500 dark:text-gray-500 text-sm sm:text-base">{cert.issuer}</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-center"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text">{cert.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{cert.description}</p>
          <div className="mt-auto">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">Issued: {cert.date}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Certifications
