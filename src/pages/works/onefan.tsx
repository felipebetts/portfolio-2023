import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'

const Onefan: React.FC = () => {
  const { t } = useTranslation('onefan')
  const challenges = t('challenges.items', { returnObjects: true })
  const highlights = t('highlights.items', { returnObjects: true })
  const approaches = t('approach.items', { returnObjects: true })
  return (
    <WorkDetails sub={t('subtitle')} title={t('title')}>
      <section className="py-3">
        <WorkImage alt="cover" src="/images/onefan/osasuna-home.png" />
      </section>
      <section className="py-3">
        <PillData tag="Link">
          <Link
            href="https://www.osasuna.es/"
            className="underline underline-offset-4 decoration-1 hover:decoration-2 text-[var(--color-primary-300)] flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            Website <IoExitOutline />
          </Link>
        </PillData>
        <PillData tag="Stack">
          <p>React, Next.js</p>
        </PillData>
        <PillData tag={t('other-technologies')}>
          <p>Google AdSense, Google TagManager, CSS</p>
        </PillData>
      </section>
      <section className="py-3">
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">{t('overview')}</p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            {t('challenges.title')}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {challenges.map((challenge, index) => (
              <li key={index}>
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
            {highlights.map((highlight, index) => (
              <li key={index}>
                <strong>{highlight.title}</strong> {highlight.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{t('approach.title')}</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {approaches.map((approach, index) => (
              <li key={index}>
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
      ...(await serverSideTranslations(locale, ['common', 'onefan']))
    }
  }
}

export default Onefan
