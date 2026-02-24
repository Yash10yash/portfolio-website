import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const education = {
    degree: 'Mackystech Pvt Ltd - Software Engineer Intern',
    period: 'Jan 2024 – Jun 2024 (6 Months)',
  }

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover-lift relative overflow-hidden group">
            {!shouldReduceMotion && (
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple/30 to-pink/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
            )}

            <div className="relative z-10">
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 gradient-text inline-block"
                whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
              >
                <FaGraduationCap />
              </motion.div>

              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
              >
              <h3>Mackystech Pvt Ltd -</h3>
              <h6>Software Engineer Intern</h6>

              </motion.h3>

              <motion.p
                className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
              >
                <ul className="list-disc pl-5 space-y-2">
             <li>Developed scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).</li>
             <li>Designed and implemented secure RESTful APIs for real-time data handling.</li>
             <li>Optimized MongoDB queries to enhance application performance.</li>
             <li>Built responsive and dynamic UI components using React.js.</li>
             <li>Collaborated in Agile sprints to deliver client-focused solutions on time.</li>
             </ul>
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
              >
                <div className="px-3 sm:px-4 py-2 glass rounded-lg">
                  <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Period: </span>
                  <span className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base">{education.period}</span>
                </div>
                 <div className="px-3 sm:px-4 py-2 glass rounded-lg">
                  <span className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base"><a href="https://mackystech.vercel.app/">www.mackystech.com</a></span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
