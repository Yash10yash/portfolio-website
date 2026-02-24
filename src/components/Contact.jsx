
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const contactInfo = [
    { icon: FaPhone, label: 'Phone', value: '+91 9713319182', href: 'tel:+919713319182' },
    { icon: FaEnvelope, label: 'Email', value: 'yg745192@gmail.com', href: 'mailto:yg745192@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://linkedin.com' },
    { icon: FaGithub, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com' },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Replace these with your EmailJS service ID, template ID, and user ID
      const serviceID = 'service_xc6lvjj';
      const templateID = 'template_y07xjgc';
      const userID = 'SSNx94XqSCBrQvD8P';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        date: new Date().toLocaleString(),
      };
      emailjs.send(serviceID, templateID, templateParams, userID)
        .then(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSuccess(false), 3000);
        })
        .catch((error) => {
          setIsSubmitting(false);
          setErrors({ submit: 'Failed to send message. Please try again.' });
          console.error('EmailJS error:', error);
        });
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple via-pink to-violet mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text">Contact Information</h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 glass-strong rounded-xl p-3 sm:p-4 hover-lift group hover-effect"
                  whileHover={shouldReduceMotion ? {} : { x: 10 }}
                >
                  <div className="text-2xl sm:text-3xl text-purple group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{info.label}</p>
                    <p className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base truncate">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            onSubmit={handleSubmit}
            className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 relative"
          >
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple/90 via-pink/90 to-violet/90 rounded-xl sm:rounded-2xl flex items-center justify-center z-10"
              >
                <div className="text-center">
                  <FaCheckCircle className="text-4xl sm:text-6xl text-white mx-auto mb-2 sm:mb-4" />
                  <p className="text-xl sm:text-2xl font-bold text-white">Message Sent!</p>
                </div>
              </motion.div>
            )}

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm sm:text-base glass rounded-lg text-gray-800 dark:text-white placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-purple transition-all"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all ${
                  formData.name
                    ? 'top-2 text-xs text-purple'
                    : 'top-3.5 text-sm text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple'
                }`}
              >
                Name
              </label>
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm sm:text-base glass rounded-lg text-gray-800 dark:text-white placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-purple transition-all"
                placeholder="your.email@example.com"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all ${
                  formData.email
                    ? 'top-2 text-xs text-purple'
                    : 'top-3.5 text-sm text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple'
                }`}
              >
                Email
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 text-sm sm:text-base glass rounded-lg text-gray-800 dark:text-white placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-purple transition-all resize-none"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className={`absolute left-4 transition-all ${
                  formData.message
                    ? 'top-2 text-xs text-purple'
                    : 'top-3.5 text-sm text-gray-500 dark:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple'
                }`}
              >
                Message
              </label>
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-purple via-pink to-violet rounded-lg font-semibold text-sm sm:text-base text-white shadow-lg glow-purple disabled:opacity-50 disabled:cursor-not-allowed magnetic hover-effect ripple"
              whileHover={shouldReduceMotion || isSubmitting ? {} : { scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
