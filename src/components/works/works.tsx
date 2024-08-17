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
    sub: 'Lead',
    main: (
      <span>
        the Front-End team at <WorkLink href="/works/onefan">OneFan</WorkLink>
      </span>
    ),
    image: '/images/onefan/notebook.png',
    video: '/videos/oceano.mp4'
  },
  {
    sub: 'Built',
    main: (
      <>
        a{' '}
        <WorkLink href="/works/digital-bank">digital bank&apos;s MVP</WorkLink>
      </>
    ),
    image: '/images/notebook.png',
    video: '/videos/oceano.mp4'
  }
  // {
  //   sub: 'Worked at',
  //   main: (
  //     <>
  //       <WorkLink href="/works/hurb">Hurb</WorkLink> as a Software Engineer
  //     </>
  //   ),
  //   image: '/images/hurb/notebook.png'
  // },
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
  // {
  //   sub: 'and',
  //   main: (
  //     <>
  //       <WorkLink href="/works">more projects</WorkLink>
  //     </>
  //   ),
  //   image: '/images/notebook.png'
  // }
]

const Works = () => {
  return (
    <TileWrapper numOfPages={workList.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContainer>
        {workList.map((el, i) => (
          <TileContent key={`work_${i}`} index={i}>
            <Tile
              page={i}
              renderContent={({ progress }) => (
                <WorkContainer>
                  <WorkLeft progress={progress}>
                    <div>{el.sub}</div>
                    <div className="text-axl md:text-5xl font-semibold tracking-tight">
                      {el.main}
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <div className="relative h-full w-full">
                      <div className="absolute h-[45.5%] w-[75.25%] left-[12.6%] top-[2%] lg:h-[65.5%] lg:top-[4%]">
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
