import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import { WorkImage } from '@/components/layout/works/work'

const DigitalBank = () => {
  return (
    <WorkDetails sub="Valepay" title="Digital Bank">
      <section className="py-3">
        <WorkImage alt="cover" src="/images/valepay/1.jpg" />
      </section>
      <section className="py-3">
        <PillData tag="Link">
          <Link
            href="https://plataforma.valepay.com.br/login"
            className="underline underline-offset-4 decoration-1 hover:decoration-2 text-[var(--color-primary-300)] flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            Platform <IoExitOutline />
          </Link>
        </PillData>
        <PillData tag="Stack">
          <p>React, Next.js, Styled Components</p>
        </PillData>
        <PillData tag="Other Technologies">
          <p>Axios, Chart.js, Quill</p>
        </PillData>
      </section>
      <section className="py-3">
        <p className="py-2">
          Este projeto é uma plataforma de banco digital construída para atender
          às necessidades específicas da indústria do turismo. Ele pode realizar
          transações, antecipar pagamentos, gerenciar usuários e muito mais.
        </p>
        <p className="py-2">
          Fui responsável pela construção do projeto front-end para os diversos
          escopos da plataforma. Eu usei o Next.js, um framework de produção
          React. O estilo foi implementado usando Styled Components. Isso me
          permitiu criar componentes personalizados, como calendários, barra
          lateral responsiva, tabelas paginadas e muitos outros. O Axios foi
          usado para realizar as requisições ao servidor. Usando axios, consegui
          tratar requisições e respostas com middlewares customizados,
          adicionando autenticação e tratamento de erros.
        </p>
      </section>
    </WorkDetails>
  )
}

export default DigitalBank
