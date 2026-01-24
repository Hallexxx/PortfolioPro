import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface PageTransitionProps {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState<'fadeIn' | 'fadeOut'>('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  const onAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setDisplayLocation(location)
      setTransitionStage('fadeIn')
      window.scrollTo(0, 0)
    }
  }

  return (
    <div
      className={`page-transition ${transitionStage === 'fadeOut' ? 'page-exit' : 'page-enter'}`}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  )
}

export default PageTransition
