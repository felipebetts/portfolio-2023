import React from 'react'

import { ParallaxContainer, ParallaxWrapper } from '@/components/parallax'

const pages = [1, 2, 3, 4]

const ParallaxExamplePage = () => {
  return (
    <>
      <ParallaxWrapper pagesAmount={2}>
        <ParallaxContainer page={0} key={0}>
          teste {0}
        </ParallaxContainer>
        <ParallaxContainer page={1} key={1}>
          teste 1
        </ParallaxContainer>
      </ParallaxWrapper>

      <div className="h-[1500px] w-full bg-orange-500"></div>

      <ParallaxWrapper pagesAmount={pages.length}>
        {pages.map((page, i) => (
          <ParallaxContainer page={i} key={page}>
            teste {page}
          </ParallaxContainer>
        ))}
      </ParallaxWrapper>
    </>
  )
}

export default ParallaxExamplePage
