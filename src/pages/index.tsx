import About from '@/components/layout/about'
import Masthead from '@/components/layout/masthead'
import Work from '@/components/works/works'
import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Felipe Betts - Software Developer</title>
        <meta
          name="description"
          content="Hello! I'm a Fullstack Software Developer from Brazil"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Masthead />
      <About />
      <Work />
      <div className="min-h-screen bg-red-600"></div>
    </>
  )
}

export default Home
