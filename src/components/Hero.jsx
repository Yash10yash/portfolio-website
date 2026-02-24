import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si'
import TypingEffect from './TypingEffect'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only track mouse on desktop for performance
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  useEffect(() => {
    // Reduce particles on mobile for better performance
    const particleCount = isMobile ? 20 : 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(newParticles)
  }, [isMobile])

  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const techIcons = [
    { icon: SiReact, color: '#61DAFB', delay: 0 },
    { icon: SiNodedotjs, color: '#339933', delay: 0.2 },
    { icon: SiMongodb, color: '#47A248', delay: 0.4 },
  ]

  return (
    <section id="home" className="section flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Floating Particles - Reduced on mobile */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-purple/30 to-pink/30"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={shouldReduceMotion ? {} : {
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Animated Gradient Blobs - Reduced on mobile */}
      {!shouldReduceMotion && !isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{ left: '10%', top: '20%' }}
          />
          <motion.div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-pink/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{ right: '10%', bottom: '20%' }}
          />
          <motion.div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-violet/20 rounded-full blur-3xl"
            animate={{
              x: mousePosition.x * 0.2,
              y: mousePosition.y * 0.2,
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            style={{ left: '50%', top: '50%' }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            Hi, I'm{' '}
            <span className="gradient-text block sm:inline">Yash Gupta</span>
          </motion.h1>

          <motion.div
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 h-8 sm:h-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <TypingEffect
              strings={['Full Stack Developer', 'AI SaaS Builder', 'Problem Solver']}
              typeSpeed={100}
              backSpeed={50}
              loop={true}
            />
          </motion.div>

          {/* 3D Floating Tech Icons - Responsive */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6, duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            {techIcons.map(({ icon: Icon, color, delay }) => (
              <motion.div
                key={color}
                className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift"
                whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5, y: -10 }}
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{
                  y: shouldReduceMotion ? {} : { duration: 2, repeat: Infinity, delay },
                  hover: { duration: 0.3 },
                }}
              >
                <Icon className="text-3xl sm:text-4xl md:text-5xl" style={{ color }} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple via-pink to-violet rounded-lg font-semibold text-sm sm:text-base text-white shadow-lg glow-purple magnetic hover-effect"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-strong rounded-lg font-semibold text-sm sm:text-base text-gray-700 dark:text-white hover:glow-purple magnetic hover-effect"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 1, duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            {[
              { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: FaEnvelope, href: 'mailto:yg745192@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 hover:text-purple transition-colors hover-effect"
                whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

    
    </section>
  )
}

export default Hero
