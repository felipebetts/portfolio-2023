import React, { createContext, useCallback, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { clsx } from 'clsx'

import styles from '@/styles/carousel.module.css'
// import CarouselPrevButton from './carousel-prev-button'
// import CarouselNextButton from './carousel-next-button'

interface ContextValue {
  embla: EmblaCarouselType | undefined
  selectedIndex: number
  scrollPrev?: () => void
  scrollNext?: () => void
  scrollTo?: (index: number) => void
}

interface Props {
  children: React.ReactNode
  className?: string
  //   withButtons?: boolean
}

export const CarouselContext = createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1
})

const Carousel: React.FC<Props> = ({ children, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false
    },
    [Autoplay()]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        embla: emblaApi,
        selectedIndex,
        scrollPrev,
        scrollNext,
        scrollTo
      }}
    >
      <div className="relative">
        <div
          ref={viewportRef}
          className={clsx(
            'w-full max-w-3xl overflow-hidden relative rounded-md drop-shadow-lg',
            className || '',
            styles.viewport
          )}
        >
          <div
            className={clsx(
              'flex relative h-full min-h-[240px]',
              styles.container
            )}
          >
            {children}
          </div>

          {/* {withButtons && (
            <div className="flex absolute bottom-0 right-2 z-10 m-4">
              <CarouselPrevButton />
              <CarouselNextButton />
            </div>
          )} */}
        </div>
        <div className="w-full mt-4">
          <div className="h-3 max-w-md mx-auto flex justify-center items-end gap-4">
            {emblaApi?.slideNodes().map((slide, i) => {
              console.log(selectedIndex, i, selectedIndex === i)
              return (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(i)}
                  className={clsx(
                    'h-2 rounded-md flex-1 bg-[var(--color-primary-500)]',
                    'max-w-12 drop-shadow-xl',
                    'transition-all opacity-100 hover:h-3',
                    selectedIndex !== i && 'opacity-30 hover:opacity-70'
                  )}
                />
              )
            })}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export default Carousel
