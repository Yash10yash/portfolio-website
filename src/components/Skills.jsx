import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
  SiIntellijidea,
} from 'react-icons/si'
import { FaCode,
  FaAws,
  FaDocker,
  FaCodeBranch,
 } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('all')
  const shouldReduceMotion = useReducedMotion()

  const skillCategories = [
    {
      title: 'Languages',
      category: 'languages',
      skills: [
        { name: 'Java', icon: FaCode, color: '#ED8B00' },
        { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'SQL', icon: SiPostgresql, color: '#336791' },
      ],
    },
    {
      title: 'Frontend',
      category: 'frontend',
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      category: 'backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiNodedotjs, color: '#000000' },
        { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
      ],
    },
    {
      title: 'Databases',
      category: 'databases',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ],
    },
    {
      title: 'Tools',
      category: 'tools',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
        { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#000000' },
      ],
    },
      {
      title: 'DevOps & Cloud',
      category: 'devops',
      skills: [
        { name: 'AWS', icon: FaAws, color: '#FF9900' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'GitLab CI/CD', icon: FaCodeBranch, color: '#E24329' },
      ],
    },
    {
      title: 'Core CS',
      category: 'core',
      skills: [
        { name: 'Data Structures & Algorithms', icon: FaCode, color: '#ED8B00' },
        { name: 'DBMS', icon: SiPostgresql, color: '#336791' },
        { name: 'OOP', icon: FaCode, color: '#ED8B00' },
      ],
    },
  ]

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
    { id: 'core', label: 'Core CS' },
  ]

  const filteredCategories = filter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === filter)

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        {/* Filter Buttons - Responsive */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          {filters.map((filterOption) => (
            <motion.button
              key={filterOption.id}
              onClick={() => setFilter(filterOption.id)}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full font-semibold transition-all whitespace-nowrap ${
                filter === filterOption.id
                  ? 'bg-gradient-to-r from-purple via-pink to-violet text-white shadow-lg glow-purple'
                  : 'glass text-gray-700 dark:text-gray-300 hover:glow-purple'
              }`}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterOption.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : categoryIndex * 0.1 }}
              className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift group"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 glass rounded-lg group-hover:glow-purple transition-all cursor-pointer"
                      whileHover={shouldReduceMotion ? {} : { scale: 1.15, y: -5, rotate: 5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: shouldReduceMotion ? 0 : categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <Icon className="text-lg sm:text-2xl flex-shrink-0" style={{ color: skill.color }} />
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium truncate max-w-[120px] sm:max-w-none">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
 
            </motion.div>
            
            

          ))}
        </div>
  
      </div>
    </section>
  )
}

export default Skills
