import { ScrollContext } from '@/utils/scroll-observer'
import Image from 'next/image'
import React, { useCallback, useContext, useRef, useState } from 'react'

const Masthead: React.FC = () => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const { scrollY } = useContext(ScrollContext)
    
    let progress = 0
    
    const containerRef = useRef<HTMLDivElement>(null)
    const { current: containerEl } = containerRef

    if (containerEl) {
        progress = Math.min(1, scrollY / containerEl.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])
    
    return (
        <div
            ref={containerRef}
            className='min-h-screen flex flex-col justify-center items-center sticky top-0 -z-10'
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src='/videos/matrix-bg.mp4' type='video/mp4; codecs=hvc1' />
                <source src='/videos/matrix-bg.webm' type='video/webm; codecs=vp9' />
            </video>
            {/* <div className="flex-grow-0 pt-10 z-10"></div> */}
            <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 z-10 
                ${imageLoaded ?  'opacity-100' : 'opacity-0'}
            `}>
                <Image src='/images/profile.jfif' width={128 / 3} height={144 / 3} alt='logo' onLoad={handleImageLoaded} />
            </div>
            <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex flex-1 items-center justify-center flex-col">
                <h1 className='mb-6 text-4xl xl:text-5xl'>Felipe Betts</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl -tracking-tight'>
                    <span>Software Developer</span>
                </h2>
            </div>
            <div 
                className={`flex-grow-0 pb-20 md:pb-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]
             transition-all duration-1000 z-10  ${
                imageLoaded ?  'opacity-100' : 'opacity-0 -translate-y-10'
             }
                `}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}

export default Masthead