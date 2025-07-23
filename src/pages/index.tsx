import React from 'react'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import Contact from '@/components/layout/contact-form'
import About from '@/components/layout/about'
import Masthead from '@/components/layout/masthead'
import Works from '@/components/layout/works/works'
import Profile from '@/components/layout/profile'

const Home: React.FC = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
      </Head>
      <Masthead />
      <Profile />
      <About />
      <Works />
      <Contact />
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
    }
  }
}

export default Home
