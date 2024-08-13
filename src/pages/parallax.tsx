import {
  ParallaxBrick,
  ParallaxContainer,
  ParallaxWrapper
} from '@/components/parallax'
import React from 'react'

const pages = [1, 2, 3, 4]

const ParallaxExamplePage = () => {
  return (
    <ParallaxWrapper pagesAmount={pages.length}>
      {pages.map((page, i) => (
        <ParallaxContainer page={i} key={page}>
          <ParallaxBrick>teste {page}</ParallaxBrick>
        </ParallaxContainer>
      ))}
    </ParallaxWrapper>
  )
}

export default ParallaxExamplePage
