import { ScrollContext } from '@/utils/scroll-observer'
import { createContext, useContext, useRef } from 'react'
import s from '../styles/parallax.module.css'

interface ParallaxContextValue {
  pagesAmount: number
  currentPage: number
}

interface ParallaxWrapperProps {
  pagesAmount: number
  children: React.ReactNode
}

interface ParallaxContainerProps {
  children: React.ReactNode
  page?: number
}

interface ParallaxBrickProps {
  children: React.ReactNode
}

export const ParallaxContext = createContext<ParallaxContextValue>({
  pagesAmount: 0,
  currentPage: 0
})

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  pagesAmount,
  children
}) => {
  const { scrollY } = useContext(ScrollContext)
  const containerRef = useRef<HTMLDivElement>(null)
  let currentPage = 0

  const { current: containerEl } = containerRef
  if (containerEl) {
    const { clientHeight, offsetTop } = containerEl
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    currentPage = percentY * pagesAmount
  }

  return (
    <ParallaxContext.Provider value={{ pagesAmount, currentPage }}>
      <div
        ref={containerRef}
        className="relative bg-black text-white"
        style={{
          height: pagesAmount * 100 + 'vh'
        }}
      >
        {children}
      </div>
    </ParallaxContext.Provider>
  )
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  page = 0
}) => {
  const { currentPage } = useContext(ParallaxContext)
  const progress = currentPage - page - 0.5
  let isCurrent = false

  if (Math.round(Math.abs(currentPage - page)) == 0) {
    isCurrent = true
  }

  return (
    <div
      className={`sticky h-screen w-full top-0 ${s.container}`}
      style={{
        zIndex: page + 1,
        transform:
          currentPage > page ? `translateY(-${progress * 100}px)` : undefined
      }}
    >
      {children}
    </div>
  )
}

export const ParallaxBrick: React.FC<ParallaxBrickProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-full w-full flex justify-center items-center">
      {children}
    </div>
  )
}
