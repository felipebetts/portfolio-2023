import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
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
        the Front-End team at{' '}
        <WorkLink href="https://margelo.io/">OneFan</WorkLink>
      </>
    ),
    image: '/images/onefan/osasuna-home.png'
  },
  {
    sub: 'Built',
    main: (
      <>
        a{' '}
        <WorkLink href="https://margelo.io/">digital bank&apos;s MVP</WorkLink>
      </>
    ),
    image: '/images/valepay/1.jpg'
  },
  {
    sub: 'Worked at',
    main: (
      <>
        <WorkLink href="https://margelo.io/">Hurb</WorkLink> as a Software
        Engineer
      </>
    ),
    image: '/images/hurb/hurb-home.png'
  },
  {
    sub: 'Crafted',
    main: (
      <>
        a{' '}
        <WorkLink href="https://margelo.io/">
          Construction Budget Simulator
        </WorkLink>
      </>
    ),
    image: '/images/orcamento_express/cover.png'
  },
  {
    sub: 'and',
    main: (
      <>
        a{' '}
        <WorkLink href="https://margelo.io/">
          Construction Budget Simulator
        </WorkLink>
      </>
    ),
    image: '/images/orcamento_express/cover.png'
  }
]

const Works = () => {
  return (
    <TileWrapper numOfPages={workList.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
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
                  <Image src={el.image} width={840} height={1620} alt="Away" />
                </WorkRight>
              </WorkContainer>
            )}
          />
        </TileContent>
      ))}
    </TileWrapper>
  )
}

export default Works
