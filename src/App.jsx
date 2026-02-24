import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import ThemeToggle from './components/ThemeToggle'
import BackToTop from './components/BackToTop'
import SectionDivider from './components/SectionDivider'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <ScrollProgress />
      <ThemeToggle />
      <BackToTop />
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      <div className="animated-bg"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Contact />
        <Footer />
      </motion.div>
    </ThemeProvider>
  )
}

export default App
