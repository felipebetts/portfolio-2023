import React from 'react'
import Breadcrumbs from '../breadcrumbs'

interface Props {
  children: React.ReactNode
  sub: string
  title: string
}

const WorkDetails: React.FC<Props> = ({ children, sub, title }) => {
  return (
    <div>
      <header className="w-full max-w-[var(--max-w)] min-h-[30vh] bg-black flex flex-col justify-end mx-auto">
        <div className="p-6">
          <Breadcrumbs />
          <h2 className="text-2xl mt-6 mb-4">{sub}</h2>
          <h1 className="text-6xl">{title}</h1>
        </div>
      </header>
      <main className="w-full bg-[var(--white)] text-black">
        <article className="w-full max-w-[var(--max-w)] mx-auto p-6">
          {children}
        </article>
      </main>
    </div>
  )
}

export default WorkDetails
