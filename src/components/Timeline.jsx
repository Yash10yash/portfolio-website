import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Timeline = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const timelineItems = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science',
      organization: 'Technocrats Institute of Technology, Bhopal',
      period: '2022–2026',
      description: 'Pursuing Bachelor of Technology with a focus on software development, algorithms, and system design.',
      cgpa: 'CGPA: 7.83',
      icon: FaGraduationCap,
    },
    {
      type: 'education',
      title: 'Senior Secondary School (Class 12th)',
      organization: 'HP Public Higher Secondary School, Gairatganj, District Raisen (M.P.)',
      period: '2021',
      description: 'Completed Senior Secondary education with focus on Science and Mathematics.',
      percentage: 'Percentage: 74.2%',
      icon: FaGraduationCap,
    },
    {
      type: 'education',
      title: 'Secondary School (Class 10th)',
      organization: 'HP Public Higher Secondary School, Gairatganj, District Raisen (M.P.)',
      period: '2019',
      description: 'Completed Secondary education with strong foundation in core subjects.',
      percentage: 'Percentage: 76.8%',
      icon: FaGraduationCap,
    },
  ]

  return (
    <section id="education" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Responsive */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-purple via-pink to-violet transform md:-translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isInView={isInView}
              isLeft={index % 2 === 0}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const TimelineItem = ({ item, index, isInView, isLeft, shouldReduceMotion }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : index * 0.2 }}
      className={`relative mb-8 sm:mb-12 md:flex md:items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot - Responsive */}
      <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-purple to-pink rounded-full border-2 sm:border-4 border-white dark:border-gray-900 z-10 shadow-lg glow-purple"></div>

      {/* Content Card */}
      <div
        className={`md:w-1/2 ${
          isLeft ? 'md:pr-8 lg:pr-12 md:text-right' : 'md:pl-8 lg:pl-12 md:text-left ml-12 sm:ml-16 md:ml-0'
        }`}
      >
        <motion.div
          className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift group"
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        >
          <div className={`flex items-center gap-2 sm:gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <div className="text-xl sm:text-2xl gradient-text flex-shrink-0">
              <Icon />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl font-bold gradient-text truncate">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm truncate">{item.organization}</p>
            </div>
          </div>
          <p className="text-purple font-semibold mt-2 text-sm sm:text-base">{item.period}</p>
          {item.cgpa && (
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">{item.cgpa}</p>
          )}
          {item.percentage && (
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">{item.percentage}</p>
          )}
          <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm sm:text-base">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Timeline
