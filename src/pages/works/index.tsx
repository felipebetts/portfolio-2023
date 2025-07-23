import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import s from '@/styles/works.module.css'
import WorkDetails from '@/components/layout/works/work-details'

const WorksPage = () => {
  const { t } = useTranslation('works')
  const works = [
    {
      title: t('onefan.title'),
      sub: t('onefan.subtitle'),
      image: '/images/onefan/osasuna-home.png',
      href: '/works/onefan'
    },
    // {
    //   title: 'FitDance Sales Page',
    //   sub: 'OneFan',
    //   image: '/images/onefan/osasuna-home.png',
    //   href: '/works/onefan'
    // },
    {
      title: t('hurb.title'),
      sub: t('hurb.subtitle'),
      image: '/images/hurb/hurb-home.png',
      href: '/works/hurb'
    },
    {
      title: t('digital-bank.title'),
      sub: t('digital-bank.subtitle'),
      image: '/images/valepay/1.jpg',
      href: '/works/digital-bank'
    },
    {
      title: t('express-budget.title'),
      sub: t('express-budget.subtitle'),
      image: '/images/orcamento_express/cover.png',
      href: '/works/express-budget'
    },
    {
      title: t('donations.title'),
      sub: t('donations.subtitle'),
      image: '/images/ajudapet/cover.png',
      href: '/works/donations'
    }
  ]
  return (
    <WorkDetails title={t('title')} sub="">
      <div className="w-full max-w-[var(--max-w)] py-2 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
          {works.map((item, i) => (
            <Link key={i} href={item.href}>
              <div
                className={`w-full flex flex-col justify-center items-center ${s.work_card}`}
              >
                <div className="relative w-full h-auto aspect-[16/10] overflow-hidden rounded-md shadow-xl">
                  <Image
                    fill
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-xl mt-2 text-center">
                  {item.title}
                </h3>
                {/* <h4>{item.sub}</h4> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </WorkDetails>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'works']))
    }
  }
}

export default WorksPage
