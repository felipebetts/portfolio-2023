import React, { createContext, useContext, useRef } from 'react'

import { ScrollContext } from '@/utils/scroll-observer'

interface TileProps {
  page: number
  renderContent: (props: { progress: number }) => any
}

interface BackgroundProps {
  children: React.ReactNode
}

interface ContentProps {
  children: React.ReactNode
  index: number
}

interface WrapperProps {
  children: React.ReactNode
  numOfPages: number
}

interface TileContextValue {
  numOfPages: number
  currentPage: number
}

export const TileContext = createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0
})

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages
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
    currentPage = percentY * numOfPages
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={containerRef}
        className="relative bg-black text-white"
        style={{
          height: numOfPages * 100 + 'vh'
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  )
}

export const TileBackground: React.FC<BackgroundProps> = ({ children }) => (
  <div className="absolute h-full w-full">{children}</div>
)

export const TileContent: React.FC<ContentProps> = ({
  children,
  index = 0
}) => (
  <div
    className="absolute h-full w-full overflow-hidden"
    style={{ zIndex: index * 0.1 }}
  >
    {children}
  </div>
)

export const TileContainer: React.FC<BackgroundProps> = ({ children }) => (
  <div className="sticky top-0 h-screen w-full">{children}</div>
)

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext)
  const containerRef = useRef<HTMLDivElement>(null)
  const progress = Math.max(0, currentPage - page)

  // const opacity = 1
  let opacity = Math.min(1, Math.max(0, progress * 4))
  if (progress > 0.75 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4)
  }

  let isCurrent = false

  if (Math.round(Math.abs(currentPage - page)) == 0) {
    isCurrent = true
  }

  return (
    <div
      ref={containerRef}
      className={'absolute top-0 w-full'}
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity,
        zIndex: isCurrent ? 20 : 0
      }}
    >
      {renderContent({ progress })}
    </div>
  )
}
