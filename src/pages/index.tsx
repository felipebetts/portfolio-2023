import React from 'react'
import Head from 'next/head'

import Contact from '@/components/layout/contact-form'
import About from '@/components/layout/about'
import Masthead from '@/components/layout/masthead'
import Works from '@/components/layout/works/works'
import Profile from '@/components/layout/profile'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Felipe Betts - Software Developer</title>
        <meta
          name="description"
          content="Hello! I'm a Software Developer from Brazil"
        />
      </Head>
      <Masthead />
      <Profile />
      <About />
      <Works />
      <Contact />
    </>
  )
}

export default Home
