import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import WorkDetails from '@/components/layout/works/work-details'
import Carousel from '@/components/shared/carousel'
import CarouselItem from '@/components/shared/carousel-item'
import LazyImage from '@/components/shared/lazy-image'
import PillData from '@/components/shared/pill-data'
import { Item } from '../../components/layout/works/types'

const images = [
  'cover.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png'
]
const Donations = () => {
  const { t } = useTranslation('donations')
  const challenges = t('challenges.items', { returnObjects: true }) as Item[]
  const highlights = t('highlights.items', { returnObjects: true }) as Item[]
  const approach = t('approach.items', { returnObjects: true }) as Item[]
  return (
    <WorkDetails title={t('title')}>
      <section className="py-3">
        <Carousel className="mx-auto">
          {images.map((el, i) => (
            <CarouselItem index={i} key={i}>
              <LazyImage alt="cover" src={`/images/ajudapet/${el}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="py-3">
        <PillData tag="Stack">
          <p className="text-lg">React, Next.js, Node.js</p>
        </PillData>
        <PillData tag="Other Technologies">
          <p className="text-lg">Material UI, Axios, Express</p>
        </PillData>
      </section>
      <section className="py-3">
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">{t('description')}</p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            {t('challenges.title')}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {challenges.map((challenge, i) => (
              <li key={challenge.title}>
                <strong>{challenge.title}</strong> {challenge.description}
              </li>
            ))}
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{t('role.title')}</h3>
          <p className="text-lg">{t('role.description')}</p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            {t('highlights.title')}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {highlights.map((highlight, i) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong> {highlight.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{t('approach.title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {approach.map((item, i) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{t('outcome.title')}</h3>
          <p className="text-lg">{t('outcome.description')}</p>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">
            {t('learnings.title')}
          </h3>
          <p className="text-lg">{t('learnings.description')}</p>
        </div>
      </section>
    </WorkDetails>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'donations']))
    }
  }
}

export default Donations
