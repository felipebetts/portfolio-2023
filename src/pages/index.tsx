import Contact from '@/components/contact-form'
import About from '@/components/about'
import Masthead from '@/components/masthead'
import Works from '@/components/works/works'
import Head from 'next/head'
import React from 'react'
import Footer from '@/components/footer'

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
      <Works />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
