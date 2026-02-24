import { useState, useEffect } from 'react'

const TypingEffect = ({ strings, typeSpeed = 100, backSpeed = 50, loop = true }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentString.length) {
          setCurrentText(currentString.substring(0, currentText.length + 1))
          setTypingSpeed(typeSpeed)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
          setTypingSpeed(backSpeed)
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentString.substring(0, currentText.length - 1))
          setTypingSpeed(backSpeed)
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false)
          if (loop || currentStringIndex < strings.length - 1) {
            setCurrentStringIndex((prev) => (prev + 1) % strings.length)
          }
          setTypingSpeed(typeSpeed)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentStringIndex, strings, typeSpeed, backSpeed, loop, typingSpeed])

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect

