import React from 'react'

interface Props {
  children: React.ReactNode
}

const Pill: React.FC<Props> = ({ children }) => {
  return (
    <span className="uppercase leading-tight bg-[var(--color-primary-500)] text-[var(--color-primary-200)] text-sm px-2 rounded-sm">
      {children}
    </span>
  )
}

export default Pill
