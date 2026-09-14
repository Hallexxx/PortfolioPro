import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let animationId = 0

    const resize = () => {
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.floor(window.innerWidth * ratio)
      canvas.height = Math.floor(window.innerHeight * ratio)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const time = prefersReducedMotion ? 0 : frame * 0.006

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#080D12'
      ctx.fillRect(0, 0, width, height)

      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, 'rgba(60, 242, 255, 0.09)')
      gradient.addColorStop(0.46, 'rgba(13, 24, 33, 0.2)')
      gradient.addColorStop(1, 'rgba(255, 43, 43, 0.06)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(127, 234, 255, 0.08)'
      ctx.lineWidth = 1

      for (let x = -80; x < width + 80; x += 72) {
        ctx.beginPath()
        ctx.moveTo(x + Math.sin(time + x * 0.01) * 18, 0)
        ctx.lineTo(x - 120 + Math.cos(time + x * 0.01) * 18, height)
        ctx.stroke()
      }

      for (let y = 48; y < height; y += 92) {
        ctx.beginPath()
        ctx.moveTo(0, y + Math.cos(time + y * 0.01) * 10)
        ctx.lineTo(width, y + Math.sin(time + y * 0.01) * 10)
        ctx.stroke()
      }

      if (!prefersReducedMotion) {
        frame += 1
        animationId = requestAnimationFrame(draw)
      }
    }

    const handleResize = () => {
      resize()
      // setting canvas.width clears the bitmap: the rAF loop repaints it,
      // but in reduced-motion mode nothing would ever redraw it
      if (prefersReducedMotion) draw()
    }

    resize()
    draw()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none opacity-70">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}

export default AnimatedBackground
