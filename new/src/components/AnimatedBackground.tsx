import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Gradient mesh animation
    let time = 0
    const animate = () => {
      time += 0.005

      // Create animated gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 200,
        canvas.height / 2 + Math.cos(time) * 150,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      )
      
      gradient.addColorStop(0, 'rgba(60, 242, 255, 0.03)')
      gradient.addColorStop(0.5, 'rgba(255, 43, 43, 0.02)')
      gradient.addColorStop(1, 'rgba(11, 15, 20, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-40" />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3CF2FF]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#FF2B2B]/5 rounded-full blur-3xl"
      />
    </div>
  )
}

export default AnimatedBackground
