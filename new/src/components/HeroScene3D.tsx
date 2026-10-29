import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface HeroScene3DProps {
  reducedMotion: boolean
}

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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(0, 0, 5.2)

    const sculpture = new THREE.Group()
    scene.add(sculpture)
    let baseY = -0.12

    const ambient = new THREE.AmbientLight('#FFFFFF', 0.7)
    const key = new THREE.DirectionalLight('#fff5e8', 1.55)
    key.position.set(-2.8, 3.6, 5)
    const rim = new THREE.DirectionalLight('#e9ad83', 0.55)
    rim.position.set(4, -1.6, 3)
    const cyan = new THREE.PointLight('#d65a41', 6.5, 7)
    cyan.position.set(1.9, 1.2, 2.8)
    const red = new THREE.PointLight('#f2b36a', 2.8, 6)
    red.position.set(1.4, -1.9, 2.8)
    scene.add(ambient, key, rim, cyan, red)

    const prismMaterial = new THREE.MeshPhysicalMaterial({
      color: '#283535',
      emissive: '#1e2422',
      emissiveIntensity: 0.18,
      metalness: 0.34,
      roughness: 0.28,
      clearcoat: 0.9,
      clearcoatRoughness: 0.2,
    })
    const cyanMaterial = new THREE.MeshPhysicalMaterial({
      color: '#d65a41',
      emissive: '#7a2c1d',
      emissiveIntensity: 0.38,
      metalness: 0.24,
      roughness: 0.3,
      clearcoat: 0.8,
      clearcoatRoughness: 0.18,
    })
    const coralMaterial = new THREE.MeshPhysicalMaterial({
      color: '#f0b876',
      emissive: '#8e5427',
      emissiveIntensity: 0.22,
      metalness: 0.24,
      roughness: 0.42,
      clearcoat: 0.58,
      clearcoatRoughness: 0.24,
    })
    const shadowMaterial = new THREE.MeshStandardMaterial({
      color: '#33433f',
      emissive: '#1b2522',
      emissiveIntensity: 0.16,
      metalness: 0.28,
      roughness: 0.7,
    })

    const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.08, 1), prismMaterial)
    core.position.set(0, 0.02, 0.12)
    core.rotation.set(0.42, -0.34, 0.18)

    const cyanBlock = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.82, 0.82, 2, 2, 2), cyanMaterial)
    cyanBlock.position.set(0.78, 0.78, 0.2)
    cyanBlock.rotation.set(0.28, 0.22, 0.36)

    const coralPrism = new THREE.Mesh(new THREE.DodecahedronGeometry(0.45, 0), coralMaterial)
    coralPrism.position.set(1.23, -0.35, 0.08)
    coralPrism.rotation.set(0.4, -0.12, 0.16)

    const base = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.34, 1.08, 2, 1, 2), shadowMaterial)
    base.position.set(-0.05, -0.96, -0.18)
    base.rotation.set(0.08, 0.26, -0.04)

    const backPlate = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.18, 0.28, 2, 2, 1), shadowMaterial)
    backPlate.position.set(-0.55, 0.1, -0.34)
    backPlate.rotation.set(0.2, -0.34, -0.18)

    sculpture.add(backPlate, core, cyanBlock, coralPrism, base)

    const pointer = { x: 0, y: 0 }
    let animationId = 0
    let lastFrameTime = 0
    const clock = new THREE.Clock()

    const resize = () => {
      const width = parent.clientWidth
      const height = parent.clientHeight
      const isMobile = width < 700

      baseY = isMobile ? -0.28 : -0.12
      sculpture.position.x = 0
      sculpture.position.y = baseY
      sculpture.scale.setScalar(isMobile ? 0.62 : 0.95)

      renderer.setSize(width, height, false)
      camera.aspect = width / Math.max(height, 1)
      camera.updateProjectionMatrix()
    }

    const animate = (timestamp = 0) => {
      if (!reducedMotion && timestamp - lastFrameTime < 16) {
        animationId = requestAnimationFrame(animate)
        return
      }

      lastFrameTime = timestamp
      const delta = clock.getDelta()
      const elapsed = clock.elapsedTime

      if (!reducedMotion) {
        sculpture.rotation.y = -0.22 + Math.sin(elapsed * 0.24) * 0.18 + pointer.x * 0.12
        sculpture.rotation.x = -0.08 + pointer.y * 0.05
        sculpture.position.y = baseY + Math.sin(elapsed * 0.48) * 0.08

        core.rotation.y += delta * 0.14
        core.rotation.z = 0.18 + Math.sin(elapsed * 0.34) * 0.06
        cyanBlock.position.y = 0.78 + Math.sin(elapsed * 0.58) * 0.08
        coralPrism.rotation.x = 0.4 + Math.cos(elapsed * 0.46) * 0.06
        backPlate.rotation.z = -0.18 + Math.sin(elapsed * 0.34) * 0.04
      }

      renderer.render(scene, camera)

      if (!reducedMotion && !document.hidden) {
        animationId = requestAnimationFrame(animate)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
      pointer.y = (event.clientY / window.innerHeight - 0.5) * -2
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
    animate()

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (canHover && !reducedMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true })
    }
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      backPlate.geometry.dispose()
      core.geometry.dispose()
      cyanBlock.geometry.dispose()
      coralPrism.geometry.dispose()
      base.geometry.dispose()
      prismMaterial.dispose()
      cyanMaterial.dispose()
      coralMaterial.dispose()
      shadowMaterial.dispose()
      renderer.dispose()
    }
  }, [reducedMotion])

  return (
    <div className="hero-scene" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}
