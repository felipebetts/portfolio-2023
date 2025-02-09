import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LazyImage from '@/components/shared/lazy-image'

interface LinkProps {
  children: React.ReactNode
  href: string
}

interface SideProps {
  children: React.ReactNode
  progress: number
}

interface ImageProps {
  src: string
  alt: string
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
    <div className="bg-[var(--color-primary-500)] text-[var(--white)] h-[30vh] lg:h-auto"></div>
    <div className="bg-[var(--color-primary-100)] h-[70vh] lg:min-h-screen"></div>
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
  // let translateY = 0

  return (
    <div
      className="flex lg:items-center justify-center h-[70vh] lg:h-screen px-4"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="w-full max-w-2xl pt-10 lg:pt-0 px-10 md:px-0 flex items-center justify-center">
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

export const WorkImage: React.FC<ImageProps> = ({ alt, src }) => (
  <LazyImage
    alt={alt}
    src={src}
    height={360}
    width={640}
    className="mb-4 mx-auto"
  />
)
