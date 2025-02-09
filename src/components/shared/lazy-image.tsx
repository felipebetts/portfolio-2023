import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

interface Props {
  alt: string
  className?: string
  height: number
  src: string
  width: number
}

const LazyImage: React.FC<Props> = ({ alt, className, height, src, width }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }

  return (
    <div
      className={clsx(
        `relative mx-auto w-full aspect-video max-w-3xl`,
        'rounded-md drop-shadow-2xl overflow-hidden',
        className
      )}
    >
      <div
        className={clsx(
          'absolute top-0 h-full w-full',
          'rounded-md bg-neutral-400',
          'animate-pulse transition-opacity duration-300',
          imageLoaded ? 'hidden' : 'block'
        )}
      />
      <Image
        src={src}
        fill
        alt={alt}
        onLoad={handleImageLoaded}
        className={clsx(
          'transition-opacity duration-300 object-cover',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}

export default LazyImage
