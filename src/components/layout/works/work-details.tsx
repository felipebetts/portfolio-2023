import React from 'react'
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
      <header className="w-full max-w-[var(--max-w)] min-h-[27.5vh] bg-[var(--color-primary-500)] flex flex-col justify-between mx-auto">
        <div className="p-6">
          <Breadcrumbs />
        </div>
        <div className="p-6">
          {sub && <h2 className="text-2xl mb-4">{sub}</h2>}
          {title && <h1 className="text-6xl">{title}</h1>}
        </div>
      </header>
      <main className="w-full bg-[var(--color-primary-100)] text-black">
        <article
          className={`w-full max-w-[var(--max-w)] mx-auto p-6 ${s.animate_enter}`}
        >
          {children}
        </article>
      </main>
    </div>
  )
}

export default WorkDetails
