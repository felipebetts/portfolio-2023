import React from 'react'

import {
  ParallaxContainer,
  ParallaxSinglePage,
  ParallaxWrapper
} from '@/components/shared/parallax'

const pages = [1, 2, 3, 4]

const ParallaxExamplePage = () => {
  return (
    <div className="relative">
      <ParallaxSinglePage>
        <div className="h-full w-full bg-orange-900 flex justify-center items-center">
          teste {0}
        </div>
      </ParallaxSinglePage>

      <div className="h-[1500px] w-full bg-orange-500"></div>

      <ParallaxWrapper pagesAmount={pages.length}>
        {pages.map((page, i) => (
          <ParallaxContainer page={i} key={page}>
            teste {page}
          </ParallaxContainer>
        ))}
      </ParallaxWrapper>
    </div>
  )
}

export default ParallaxExamplePage
