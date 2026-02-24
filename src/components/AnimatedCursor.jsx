import { useEffect, useState } from 'react'

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY })
      }, 100)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const links = document.querySelectorAll('a, button, .hover-effect, .magnetic')
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter)
      link.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter)
        link.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  // Magnetic effect for buttons
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic')
    
    magneticElements.forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      })
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0, 0)'
      })
    })
  }, [])

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'scale-75' : ''}`}
        style={{
          left: `${position.x - 15}px`,
          top: `${position.y - 15}px`,
          transform: isClicking ? 'scale(0.75)' : isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${dotPosition.x - 3}px`,
          top: `${dotPosition.y - 3}px`,
        }}
      />
    </>
  )
}

export default AnimatedCursor
