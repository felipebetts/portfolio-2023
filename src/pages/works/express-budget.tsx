import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import WorkDetails from '@/components/layout/works/work-details'
import LazyImage from '@/components/shared/lazy-image'
import PillData from '@/components/shared/pill-data'
import { WorkImage } from '@/components/layout/works/work'

const ExpressBudget = () => {
  return (
    <WorkDetails sub="iBuild" title="Express Budget">
      <section className="py-3">
        <WorkImage alt="cover" src="/images/orcamento_express/cover.png" />
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
        <PillData tag="Other Technologies">
          <p>Axios, Styled Components</p>
        </PillData>
      </section>
      <section className="py-3">
        <p className="my-2">
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
        </p>
      </section>
    </WorkDetails>
  )
}

export default ExpressBudget
