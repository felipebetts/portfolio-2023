import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import Carousel from '@/components/shared/carousel'
import CarouselItem from '@/components/shared/carousel-item'
import LazyImage from '@/components/shared/lazy-image'
import { Item } from '../../components/layout/works/types'

const DigitalBank = () => {
  const images = ['1.jpg', '2.jpg', 'login.png']
  const { t } = useTranslation('digital-bank')
  const challenges = t('challenges.items', { returnObjects: true }) as Item[]
  const highlights = t('highlights.items', { returnObjects: true }) as Item[]
  const approach = t('approach.items', { returnObjects: true }) as Item[]
  return (
    <WorkDetails sub={t('subtitle')} title={t('title')}>
      <section className="py-3">
        <Carousel className="mx-auto">
          {images.map((el, i) => (
            <CarouselItem index={i} key={i}>
              <LazyImage alt="cover" src={`/images/valepay/${el}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="py-3">
        <PillData tag="Link">
          <Link
            href="https://plataforma.valepay.com.br/login"
            className="underline underline-offset-4 decoration-1 hover:decoration-2 text-[var(--color-primary-300)] flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            Platform <IoExitOutline />
          </Link>
        </PillData>
        <PillData tag="Stack">
          <p>React, Next.js, Styled Components</p>
        </PillData>
        <PillData tag="Other Technologies">
          <p>Axios, Chart.js, Quill</p>
        </PillData>
      </section>
      <section className="py-3">
        {/* Overview / Introduction */}
        <p
          className="text-lg mb-4"
          dangerouslySetInnerHTML={{ __html: t('description') }}
        />

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
            {approach.map((approach, i) => (
              <li key={approach.title}>
                <strong>{approach.title}</strong> {approach.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{t('outcome.title')}</h3>
          <p className="text-lg">{t('outcome.description')}</p>
        </div>
      </section>
    </WorkDetails>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'digital-bank']))
    }
  }
}

export default DigitalBank
