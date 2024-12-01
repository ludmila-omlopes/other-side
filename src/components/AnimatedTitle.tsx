'use client'

import React, { useState, useEffect } from 'react'

interface AnimatedTitleProps {
  text: string
  className?: string
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100) // Adjust the speed of typing here

    return () => clearInterval(typingInterval)
  }, [text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Adjust the speed of cursor blinking here

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <h1 className={`${className} font-mono`}>
      {displayText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </h1>
  )
}

export default AnimatedTitle

