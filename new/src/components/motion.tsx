import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import './motion.css'

const EASE = [0.22, 1, 0.36, 1] as const

type Dir = 'up' | 'down' | 'left' | 'right' | 'none'

const offset: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 42 },
  down: { x: 0, y: -42 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({ children, dir = 'up', delay = 0, amount = 0.2, className, blur = true, as = 'div' }: {
  children: ReactNode
  dir?: Dir
  delay?: number
  amount?: number
  className?: string
  blur?: boolean
  as?: 'div' | 'section' | 'article' | 'span' | 'li' | 'p'
}) {
  const reduced = useReducedMotion()
  const Tag = motion[as]
  if (reduced) return <Tag className={className}>{children}</Tag>
  const from = offset[dir]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, x: from.x, y: from.y, filter: blur ? 'blur(7px)' : 'none' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, delay, ease: EASE }}
    >
      {children}
    </Tag>
  )
}

/** Heading that reveals word by word, each word rising from a clipped line. */
export function SplitText({ text, className, delay = 0, stagger = 0.045, as: Tag = 'span' }: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  // The inner spans are clipped by their mask, so IntersectionObserver must watch the wrapper.
  const inView = useInView(ref, { once: true, amount: 0.1 })
  if (reduced) return <Tag className={className}>{text}</Tag>
  const words = text.split(' ')
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((word, index) => (
        // A real space between words, so a wrapped line does not start with a leftover gap.
        <Fragment key={`${word}-${index}`}>
          {index > 0 && ' '}
          <span className="split-word" aria-hidden="true">
            <motion.span
              initial={{ y: '105%', rotate: 4 }}
              animate={inView ? { y: '0%', rotate: 0 } : { y: '105%', rotate: 4 }}
              transition={{ duration: 0.8, delay: delay + index * stagger, ease: EASE }}
            >
              {word}
            </motion.span>
          </span>
        </Fragment>
      ))}
    </Tag>
  )
}

/** Button/link wrapper that leans toward the cursor. */
export function Magnetic({ children, className, strength = 0.32 }: { children: ReactNode; className?: string; strength?: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  if (reduced) return <span className={className}>{children}</span>

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
      onPointerMove={event => {
        if (event.pointerType !== 'mouse') return
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
      }}
      onPointerLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.span>
  )
}

/** Translates its content as the page scrolls past it. */
export function Parallax({ children, distance = 70, className }: { children: ReactNode; distance?: number; className?: string }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance])
  const y = useSpring(raw, { stiffness: 80, damping: 22, mass: 0.5 })
  return <div ref={ref} className={className}><motion.div style={reduced ? undefined : { y }}>{children}</motion.div></div>
}

/** Counts up to `value` the first time it enters the viewport. */
export function Counter({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [shown, setShown] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView || reduced) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setShown(Math.round(value * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, reduced, value, duration])

  return <span ref={ref}>{shown}{suffix}</span>
}

/** Horizontal strip that loops forever. */
export function Marquee({ items, speed = 38, reverse = false, className }: { items: string[]; speed?: number; reverse?: boolean; className?: string }) {
  const reduced = useReducedMotion()
  const sequence = [...items, ...items]
  return (
    <div className={`marquee ${className || ''}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={reduced ? undefined : { animationDuration: `${speed}s`, animationDirection: reverse ? 'reverse' : 'normal' } as CSSProperties}
      >
        {sequence.map((item, index) => <span key={`${item}-${index}`}>{item}<i /></span>)}
      </div>
    </div>
  )
}

/** Card that tilts in 3D under the cursor. */
export function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 })
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 20 })

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={event => {
        if (event.pointerType !== 'mouse') return
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return
        ry.set(((event.clientX - rect.left) / rect.width - 0.5) * max * 2)
        rx.set(((event.clientY - rect.top) / rect.height - 0.5) * -max * 2)
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0) }}
    >
      {children}
    </motion.div>
  )
}

/** Types through a list of words, one character at a time. */
export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(reduced ? words[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) return
    const word = words[index % words.length]
    if (!deleting && text === word) {
      const hold = window.setTimeout(() => setDeleting(true), 1900)
      return () => window.clearTimeout(hold)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex(current => (current + 1) % words.length)
      return
    }
    const step = window.setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 38 : 72,
    )
    return () => window.clearTimeout(step)
  }, [text, deleting, index, words, reduced])

  return <span className={className}>{text}{!reduced && <i className="type-caret" aria-hidden="true" />}</span>
}

/** Thin progress rail that fills while its section is on screen. */
export function ScrollRail() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  return <div ref={ref} className="scroll-rail" aria-hidden="true"><motion.i style={{ scaleY }} /></div>
}
