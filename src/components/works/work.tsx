import React from 'react'
import Link from 'next/link'

interface LinkProps {
  children: React.ReactNode
  href: string
}

interface SideProps {
  children: React.ReactNode
  progress: number
}

export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
)

export const WorkBackground: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black text-[var(--white)] h-[30vh] lg:h-auto"></div>
    <div className="bg-[var(--white)] h-[70vh] lg:min-h-screen"></div>
  </div>
)

export const WorkLeft: React.FC<SideProps> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50)
  if (progress > 0.75) {
    translateY = Math.max(-50, -(progress - 0.75) * 2 * 50)
  }

  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-4xl h-[30vh] lg:h-auto px-4"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  )
}

export const WorkRight: React.FC<SideProps> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50)

  return (
    <div
      className="flex lg:items-center justify-center h-[70vh] lg:h-screen px-4"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export const WorkLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href} className="underline underline-offset-8 decoration-1">
    {children}
  </Link>
)
