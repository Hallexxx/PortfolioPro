import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroScene3DProps {
  reducedMotion: boolean
}

const DUST_COUNT = 900
const RING_COUNT = 260

/** A quiet cloud of light particles orbiting behind the portrait. No solid shapes. */
export default function HeroScene3D({ reducedMotion }: HeroScene3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' })
    } catch {
      return
    }

    renderer.setClearColor('#000000', 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 6.4)

    const world = new THREE.Group()
    scene.add(world)

    /* ---- soft dust sphere ---- */
    const dustPositions = new Float32Array(DUST_COUNT * 3)
    const dustSeeds = new Float32Array(DUST_COUNT)
    for (let index = 0; index < DUST_COUNT; index += 1) {
      const radius = 1.6 + Math.pow(Math.random(), 0.7) * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      dustPositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      dustPositions[index * 3 + 1] = radius * Math.cos(phi) * 0.78
      dustPositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta) * 0.7
      dustSeeds[index] = Math.random() * Math.PI * 2
    }
    const dustGeometry = new THREE.BufferGeometry()
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3))
    const dustMaterial = new THREE.PointsMaterial({
      color: '#9a8571', size: 0.032, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false,
    })
    const dust = new THREE.Points(dustGeometry, dustMaterial)

    /* ---- a single warm halo ring of particles, echoing the portrait ---- */
    const ringPositions = new Float32Array(RING_COUNT * 3)
    for (let index = 0; index < RING_COUNT; index += 1) {
      const angle = (index / RING_COUNT) * Math.PI * 2
      const radius = 2.42 + (Math.random() - 0.5) * 0.2
      ringPositions[index * 3] = Math.cos(angle) * radius
      ringPositions[index * 3 + 1] = Math.sin(angle) * radius * 0.94
      ringPositions[index * 3 + 2] = (Math.random() - 0.5) * 0.35
    }
    const ringGeometry = new THREE.BufferGeometry()
    ringGeometry.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3))
    const ringMaterial = new THREE.PointsMaterial({
      color: '#d65a41', size: 0.05, transparent: true, opacity: 0, sizeAttenuation: true, depthWrite: false,
    })
    const ring = new THREE.Points(ringGeometry, ringMaterial)
    ring.rotation.set(0.56, 0, -0.18)

    world.add(dust, ring)

    const pointer = { x: 0, y: 0 }
    const eased = { x: 0, y: 0 }
    let scrollOffset = 0
    let easedScroll = 0
    let animationId = 0
    let intro = 0
    const clock = new THREE.Clock()
    const basePositions = dustPositions.slice()

    const resize = () => {
      const width = parent.clientWidth
      const height = parent.clientHeight
      const compact = width < 760
      world.scale.setScalar(compact ? 0.72 : 1)
      world.position.x = compact ? 0 : 1.15
      world.position.y = compact ? 0 : 0.2
      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
    }

    const render = () => {
      const delta = Math.min(clock.getDelta(), 0.05)
      const elapsed = clock.elapsedTime

      intro = Math.min(intro + delta * 0.6, 1)
      const introEase = 1 - Math.pow(1 - intro, 3)

      eased.x += (pointer.x - eased.x) * 0.045
      eased.y += (pointer.y - eased.y) * 0.045
      easedScroll += (scrollOffset - easedScroll) * 0.06

      // Each particle breathes very slightly along its own axis.
      const attribute = dustGeometry.attributes.position as THREE.BufferAttribute
      for (let index = 0; index < DUST_COUNT; index += 1) {
        const drift = Math.sin(elapsed * 0.35 + dustSeeds[index]) * 0.07
        attribute.array[index * 3 + 1] = basePositions[index * 3 + 1] + drift
      }
      attribute.needsUpdate = true

      world.rotation.y = elapsed * 0.035 + eased.x * 0.16
      world.rotation.x = eased.y * 0.08
      world.position.y = (parent.clientWidth < 760 ? 0 : 0.2) - easedScroll * 0.9

      ring.rotation.z = -0.18 + elapsed * 0.045

      dustMaterial.opacity = 0.5 * introEase
      ringMaterial.opacity = (0.72 + Math.sin(elapsed * 0.5) * 0.1) * introEase

      renderer.render(scene, camera)
    }

    const animate = () => {
      render()
      if (!document.hidden) animationId = requestAnimationFrame(animate)
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (event.clientY / window.innerHeight - 0.5) * -2
    }

    const handleScroll = () => {
      scrollOffset = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.4)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId)
        return
      }
      clock.getDelta()
      animationId = requestAnimationFrame(animate)
    }

    resize()

    if (reducedMotion) {
      intro = 1
      render()
    } else {
      animate()
      const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      if (canHover) window.addEventListener('pointermove', handlePointerMove, { passive: true })
      window.addEventListener('scroll', handleScroll, { passive: true })
      document.addEventListener('visibilitychange', handleVisibilityChange)
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      dustGeometry.dispose()
      ringGeometry.dispose()
      dustMaterial.dispose()
      ringMaterial.dispose()
      renderer.dispose()
    }
  }, [reducedMotion])

  return (
    <div className="hero-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
