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

interface ParallaxSinglePageProps {
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
        className="relative bg-[var(--color-primary-500)] text-[var(--color-primary-100)]"
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
  const { currentPage, pagesAmount } = useContext(ParallaxContext)
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
          page !== pagesAmount - 1
            ? `translateY(-${progress * 220}px)`
            : undefined
      }}
    >
      {children}
    </div>
  )
}

export const ParallaxSinglePage: React.FC<ParallaxSinglePageProps> = ({
  children
}) => {
  const { scrollY } = useContext(ScrollContext)

  let progress = 0

  const containerRef = useRef<HTMLDivElement>(null)
  const { current: containerEl } = containerRef

  if (containerEl) {
    progress = Math.min(1, scrollY / containerEl.clientHeight)
  }

  return (
    <div
      ref={containerRef}
      className="h-max sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >
      {children}
    </div>
  )
}
