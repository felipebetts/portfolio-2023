import React from 'react'
import Pill from './pill'

interface Props {
  children: React.ReactNode
  tag: string
}

const PillData: React.FC<Props> = ({ children, tag }) => {
  return (
    <div className="flex items-center gap-4">
      <Pill>{tag}</Pill>
      {children}
    </div>
  )
}

export default PillData
