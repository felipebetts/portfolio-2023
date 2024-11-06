import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import Link from 'next/link'
import React from 'react'
import { IoExitOutline } from 'react-icons/io5'

const Onefan: React.FC = () => {
  return (
    <WorkDetails sub="Onefan" title="Osasuna's Official Website">
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
        <PillData tag="Other Technologies">
          <p>Google AdSense, Google TagManager, CSS</p>
        </PillData>
      </section>
      <section className="py-3">
        <p className="py-2"></p>
        <p className="py-2"></p>
      </section>
    </WorkDetails>
  )
}

export default Onefan
