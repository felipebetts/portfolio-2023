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
    <div className={clsx('relative mx-auto w-max h-max', className)}>
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
        width={width}
        height={height}
        alt={alt}
        onLoad={handleImageLoaded}
        className={clsx(
          'relative transition-opacity duration-300',
          'rounded-md drop-shadow-2xl',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  )
}

export default LazyImage
