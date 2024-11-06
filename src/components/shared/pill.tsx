import React from 'react'

interface Props {
  children: React.ReactNode
}

const Pill: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[var(--color-primary-500)] text-[var(--color-primary-200)] leading-tight uppercase font-bold text-sm rounded-sm py-1 px-2 my-2">
      {children}
    </div>
  )
}

export default Pill
