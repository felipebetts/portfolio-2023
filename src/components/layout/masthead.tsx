import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { ParallaxSinglePage } from '@/components/shared/parallax'
import SocialLinks from './social-links'

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch(err => console.error('Erro ao iniciar vídeo:', err))
    }
  }, [])

  return (
    <ParallaxSinglePage>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/oceano.mp4" type="video/mp4" />
      </video>
      <div className="min-h-screen h-full w-full flex flex-col justify-center items-center">
        <div className="absolute w-full h-full z-10 bg-black/60"></div>
        <div
          className={`
                    p-12 font-bold z-20 text-[var(--color-primary-100)] drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-1 items-center justify-center flex-col
                    
          `}
        >
          <Image
            src="/images/profile.jfif"
            width={128}
            height={144}
            alt="Profile picture"
            onLoad={handleImageLoaded}
            className={`rounded-full drop-shadow-2xl mb-6 transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <h1 className="mb-6 text-4xl xl:text-5xl">Felipe Betts</h1>
          <h2 className="mb-2 text-2xl xl:text-3xl -tracking-tight">
            Software Developer
          </h2>
          <SocialLinks />
        </div>
        {/* ${
               imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
             } */}
        <div
          className={`flex-grow-0 pb-20 md:pb-10 text-[var(--color-primary-100)] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
             transition-all duration-1000 z-10 animate-bounce 
             
                `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </ParallaxSinglePage>
  )
}

export default Masthead
