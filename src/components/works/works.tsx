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
      <>
        the Front-End team at <WorkLink href="/works/onefan">OneFan</WorkLink>
      </>
    ),
    image: '/images/onefan/notebook.png'
  },
  {
    sub: 'Built',
    main: (
      <>
        a{' '}
        <WorkLink href="/works/digital-bank">digital bank&apos;s MVP</WorkLink>
      </>
    ),
    image: '/images/notebook.png'
  },
  {
    sub: 'Worked at',
    main: (
      <>
        <WorkLink href="/works/hurb">Hurb</WorkLink> as a Software Engineer
      </>
    ),
    image: '/images/hurb/notebook.png'
  },
  {
    sub: 'Crafted',
    main: (
      <>
        a{' '}
        <WorkLink href="/works/budget-simulator">
          Construction Budget Simulator
        </WorkLink>
      </>
    ),
    image: '/images/orcamento_express/notebook.png'
  },
  {
    sub: 'and',
    main: (
      <>
        <WorkLink href="/works">more projects</WorkLink>
      </>
    ),
    image: '/images/notebook.png'
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
                    <div className="text-axl md:text-5xl font-semibold tracking-tight">
                      {el.main}
                    </div>
                  </WorkLeft>
                  <WorkRight progress={progress}>
                    <Image
                      src={el.image}
                      width={840}
                      height={1620}
                      alt="Away"
                    />
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
