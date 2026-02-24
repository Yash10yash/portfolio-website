import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 w-14 h-14 glass-strong rounded-full flex items-center justify-center text-xl text-purple hover:glow-purple transition-all hover-effect"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

