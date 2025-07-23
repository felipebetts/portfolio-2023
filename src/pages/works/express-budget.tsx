import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import { WorkImage } from '@/components/layout/works/work'
import Carousel from '@/components/shared/carousel'
import CarouselItem from '@/components/shared/carousel-item'
import LazyImage from '@/components/shared/lazy-image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const ExpressBudget = () => {
  const images = ['cover.png', '1.png', '2.png', '3.png']
  const { t } = useTranslation('express-budget')
  const challenges = t('challenges.items', { returnObjects: true })
  const highlights = t('highlights.items', { returnObjects: true })
  const approaches = t('approach.items', { returnObjects: true })
  return (
    <WorkDetails sub={t('subtitle')} title={t('title')}>
      <section className="py-3">
        <Carousel className="mx-auto">
          {images.map((el, i) => (
            <CarouselItem index={i} key={i}>
              <LazyImage alt="cover" src={`/images/orcamento_express/${el}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="py-3">
        <PillData tag="Link">
          <Link
            href="https://orcamento.ibuildconstrutora.com.br/"
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
          <p>Axios, Styled Components</p>
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
        {/* <p className="text-lg mb-6">
          Express Budget is a web-based application designed to help businesses
          optimize their lead qualification process by providing an interactive
          and visual budget simulation experience. The platform enables users to
          input key financial parameters and receive instant budget estimates,
          allowing potential clients to understand pricing structures before
          reaching out to sales representatives. This approach helps companies
          filter out unqualified leads, improving conversion rates and
          operational efficiency.
        </p>
        <p className="text-lg mb-6">
          From a technology perspective, Express Budget was built using a modern
          front-end stack, ensuring a seamless and engaging user experience. The
          application features dynamic animations, smooth transitions, and a
          state-preserving architecture that maintains user inputs across
          multiple steps. Additionally, it integrates with the Bitrix24 API to
          automatically capture lead information and streamline the sales
          process.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🚀 Key Technical Challenges
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">
            <strong>Advanced interactive experience:</strong> Smooth animations,
            carousels, and seamless transitions.
          </li>
          <li className="text-lg">
            <strong>State management:</strong> Preserving data across multiple
            routes.
          </li>
          <li className="text-lg">
            <strong>External API integration:</strong> Communication with the
            Bitrix24 API, overcoming documentation challenges.
          </li>
          <li className="text-lg">
            <strong>Custom financial calculations:</strong> Implementing
            specific formulas provided by the client.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🛠 My Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">
            Defining scope and aligning with the client.
          </li>
          <li className="text-lg">
            Implementing front-end and system architecture.
          </li>
          <li className="text-lg">
            Integrating APIs and developing financial calculations.
          </li>
          <li className="text-lg">
            Deploying and configuring hosting, including DNS setup.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📈 Impact and Results
        </h2>
        <p className="mb-6 text-lg">
          The client reported a{' '}
          <strong>significant reduction in unqualified leads</strong>, allowing
          the sales team to focus on more relevant opportunities. While no
          quantitative metrics are available, the project fully met the client's
          expectations and continues to be used.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🔍 Learnings and Future Improvements
        </h2>
        <p className="text-lg">
          This project was a major learning experience in implementing
          interactive designs and applying complex financial calculations within
          a dynamic visual experience. Future improvements could include{' '}
          <strong>automated testing and performance optimizations</strong> for
          better scalability.
        </p> */}

        {/* <p className="my-2">
          This web application is a home building budget simulator. I was asked
          by a brazilian realstate company to make this web application, in
          order to simplify the budgeting process for their clients. Before this
          webapp went live, the company&apos;s budgeting department was
          struggling with clients that asked for house budgets, only to find out
          that the budget was too high for them, generating work that
          didn&apos;t turned to revenue. The main goal of the app was to
          generate leads with loads of data about the clients, and to optimize
          the budgeting department&apos;s time.
        </p>
        <WorkImage alt="cover" src="/images/orcamento_express/2.png" />
        <p className="my-2">
          Based on the user&apos;s input of their income and other financial
          parameters, it performs a mortgage simulation. With that, it generates
          the average value of the mortgage, wich will be used as the maximum
          budget for the house construction.
        </p>
        <WorkImage alt="cover" src="/images/orcamento_express/1.png" />
        <p className="my-2">
          After the financial part, the user is then redirected to an
          interactive form, where he/she will choose house styles, number of
          pavements, rooms, bathrooms and many more. Throughout the process the
          user is able to see how much of the budget is already allocated and
          how much of it is still available.
        </p>
        <WorkImage alt="cover" src="/images/orcamento_express/3.png" />
        <p className="my-2">
          At the end, the user is asked for contact information in order to have
          access to the final report. By my client&apos;s request, this data is
          sent to Bitrix24, via their own api, and stored as a lead. Finally the
          user is able to see a resumed report of their choices and final budget
          generated.
        </p> */}
      </section>
    </WorkDetails>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'express-budget']))
    }
  }
}

export default ExpressBudget
