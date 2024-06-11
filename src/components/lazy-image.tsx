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

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  console.log('imageLoaded:', imageLoaded)

  return (
    <div className={clsx('relative', className)}>
      <div
        className={clsx(
          'absolute top-0 h-full w-full',
          'aspect-[2] rounded-md bg-neutral-400',
          'animate-pulse transition-opacity duration-300',
          imageLoaded ? 'opacity-0' : 'opacity-100'
        )}
      ></div>
      <div
        className={clsx(
          'transition-opacity duration-300',
          imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          onLoad={handleImageLoaded}
          className="rounded-md drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

export default LazyImage
