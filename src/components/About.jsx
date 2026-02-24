import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
          >
            <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 ">
              I am a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I enjoy building scalable, user-focused web applications that solve real-world problems.
              During my internship as a Software Development Intern, I worked in an Agile environment where I developed RESTful APIs, built dynamic React interfaces, optimized MongoDB queries, and collaborated with cross-functional teams to deliver client-based solutions.
              I have solved 100+ algorithmic problems and continuously strengthen my understanding of Data Structures and Algorithms to write efficient and optimized code.
              I am currently focused on improving my backend architecture skills, system design fundamentals, and deployment practices to become a complete production-ready Full Stack Engineer.
              I believe in continuous learning, clean code practices, and building technology that creates real impact.
              </p>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="relative order-1 md:order-2"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 hover-lift relative overflow-hidden group">
              <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}profilephoto.jpeg`}
                  alt="Yash Gupta"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple/30 to-pink/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
