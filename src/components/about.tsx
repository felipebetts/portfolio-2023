import { ScrollContext } from '@/utils/scroll-observer'
import React, { useContext, useRef } from 'react'
import styles from '@/styles/about.module.css'

const blockOpacity = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  let opacity = 0.2
  if (progress >= 0 && progress < 1) {
    opacity = 1
  }
  return opacity
}

const blocks: string[] = [
  'Hello, welcome to this website!',
  "I'm a curious fullstack web developer who's always eager to explore new technologies and programming languages.",
  'Using my experience in React, Next.js and Node, I love crafting interactive and responsive web applications.',
  'My goal is to deliver solutions that are both efficient and aesthetically pleasing.',
  'Since 2021, I have...'
]

const About: React.FC = () => {
  const {} = useContext(ScrollContext)
  const containerRef = useRef<HTMLDivElement>(null)
  const { current: containerEl } = containerRef

  const numOfBlocks = blocks.length
  let progress = 0

  if (containerEl) {
    const { clientHeight, offsetTop } = containerEl
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight
    progress = Math.min(
      numOfBlocks - 0.5,
      Math.max(0.5, percentY * numOfBlocks)
    )
  }

  return (
    <div ref={containerRef} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-5xl md:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          {blocks &&
            blocks.map((block, i) => (
              <div
                key={`about_block_no_${i}`}
                className={`${styles.scrollText} ${
                  i > 0 ? `inline-block after:content-['_']` : ''
                } py-1`}
                style={{
                  opacity: blockOpacity(progress, i)
                }}
              >
                {block}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default About
