import React from 'react'
import {
  Tile,
  TileBackground,
  TileContainer,
  TileContent,
  TileWrapper
} from './tile'
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight
} from './work'
import Image from 'next/image'

const workList = [
  {
    sub: '',
    main: (
      <>
        The official website of an{' '}
        <WorkLink href="/works/onefan">European Footbal Club</WorkLink>
      </>
    ),
    image: '/images/onefan/notebook.png',
    video: '/videos/oceano.mp4'
  },
  {
    sub: '',
    main: (
      <>
        a known brazilian{' '}
        <WorkLink href="/works/hurb">online travel agency</WorkLink>
      </>
    ),
    image: '/images/hurb/notebook.png'
  },
  {
    sub: '',
    main: (
      <>
        a Fintech&apos;s{' '}
        <WorkLink href="/works/digital-bank">digital banking platform</WorkLink>
      </>
    ),
    image: '/images/notebook.png'
    // video: '/videos/oceano.mp4'
  },

  // {
  //   sub: 'Crafted',
  //   main: (
  //     <>
  //       a{' '}
  //       <WorkLink href="/works/budget-simulator">
  //         Construction Budget Simulator
  //       </WorkLink>
  //     </>
  //   ),
  //   image: '/images/orcamento_express/notebook.png'
  // },
  {
    sub: '',
    main: (
      <>
        and <WorkLink href="/works">more projects</WorkLink>
      </>
    ),
    image: '/images/notebook.png'
    // video: '/videos/oceano.mp4'
  }
]

const Works = () => {
  return (
    <TileWrapper numOfPages={workList.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContainer>
        {workList.map((el, i) => (
          <TileContent key={`work_${i}`}>
            <Tile
              page={i}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>{el.sub}</div>
                    <div className="text-axl md:text-5xl font-semibold tracking-tight px-4">
                      {el.main}
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <div className="relative h-full w-full">
                      <div className="absolute h-[55.5%] w-[75.25%] left-[12.6%] top-[2%] lg:h-[65.5%] lg:top-[4%] aspect-[672/485]">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute w-full h-full object-cover"
                        >
                          <source src={el.video} type="video/mp4" />
                        </video>
                      </div>
                      <Image
                        src={el.image}
                        width={1260}
                        height={2430}
                        alt="notebook"
                        className="relative z-10"
                      />
                    </div>
                  </WorkRight>
                </WorkContainer>
              )}
            />
          </TileContent>
        ))}
      </TileContainer>
    </TileWrapper>
  )
}

export default Works
