import React, { useCallback, useState } from 'react'
import Image from 'next/image'

import { ParallaxSinglePage } from './parallax'
import SocialLinks from './social-links'

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true)
  }, [])

  return (
    <ParallaxSinglePage>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover -z-10"
      >
        <source src="/videos/oceano.mp4" type="video/mp4" />
      </video>
      <div className="min-h-screen h-full w-full flex flex-col justify-center items-center bg-black/60">
        <div
          className={`
                    p-12 font-bold z-10 text-[var(--color-primary-100)] drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-1 items-center justify-center flex-col
                    transition-opacity duration-1000 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }
          `}
        >
          <Image
            src="/images/profile.jfif"
            width={128}
            height={144}
            alt="Profile picture"
            onLoad={handleImageLoaded}
            className="rounded-full drop-shadow-2xl mb-6"
          />
          <h1 className="mb-6 text-4xl xl:text-5xl">Felipe Betts</h1>
          <h2 className="mb-2 text-2xl xl:text-3xl -tracking-tight">
            Software Developer
          </h2>
          <SocialLinks />
        </div>
        <div
          className={`flex-grow-0 pb-20 md:pb-10 text-[var(--color-primary-100)] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
             transition-all duration-1000 z-10 animate-bounce ${
               imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'
             }
                `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
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
