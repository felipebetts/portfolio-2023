import React from 'react'
import Head from 'next/head'

import Breadcrumbs from '../../shared/breadcrumbs'
import s from '@/styles/animations.module.css'

interface Props {
  children: React.ReactNode
  sub?: string
  title?: string
}

const WorkDetails: React.FC<Props> = ({ children, sub, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Hello, I'm Felipe, a Software Developer with over 4 years of
            experience in Web Development."
        />
      </Head>
      <header className="w-full max-w-[var(--max-w)] min-h-[20vh] md:min-h-[22.5vh] flex flex-col justify-between mx-auto">
        <div className="p-4 md:p-6">
          <Breadcrumbs />
        </div>
        <div className={`p-4 md:p-6 ${s.opacity_enter}`}>
          {sub && <h2 className="text-xl md:text-2xl mb-2 md:mb-4">{sub}</h2>}
          {title && <h1 className="text-4xl md:text-6xl">{title}</h1>}
        </div>
      </header>
      <main className="w-full bg-[var(--color-primary-100)] text-black">
        <article
          className={`w-full max-w-[var(--max-w)] mx-auto p-4 md:p-6 ${s.slide_enter}`}
        >
          {children}
        </article>
      </main>
    </div>
  )
}

export default WorkDetails
