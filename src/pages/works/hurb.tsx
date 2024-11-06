import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'

const Hurb: React.FC = () => {
  return (
    <WorkDetails sub="Hurb" title="Online Travel Agency">
      <section className="py-3">
        <WorkImage alt="cover" src="/images/hurb/hurb-home.png" />
      </section>
      <section className="py-3">
        <PillData tag="Link">
          <Link
            href="https://www.hurb.com/"
            className="underline underline-offset-4 decoration-1 hover:decoration-2 text-[var(--color-primary-300)] flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            Website <IoExitOutline />
          </Link>
        </PillData>
        <PillData tag="Stack">
          <p>React, Next.js, Node.js</p>
        </PillData>
        <PillData tag="Other Technologies">
          <p>Docker, GraphQL, MJML, CSS</p>
        </PillData>
      </section>
      <section className="py-3">
        <p className="py-2">
          Trabalhei como Desenvolvedor de Software Fullstack na Hurb no ano de
          2023. Integrei a equipe de Customer Experience, com foco em melhorar a
          experiência do usuário e do suporte. Durante esse período conheci
          desenvolvedores extremamente experientes, e aprendi muito com eles
          sobre diversas linguagens de programação e script. A estrutura do
          projeto era toda em microsserviços e micro-frontends, o que acelerou
          grandemente a minha evolução profissional ao me expor a múltiplas
          linguagens simultaneamente.
        </p>
        <p className="py-2">
          Atuei desenvolvendo páginas do website em Next.js com CSS modules,
          produzindo templates de email com MJML, criando queries e mutations
          com GraphQL, desenvolvendo funcionalidades no BFF em Node.js, rotas no
          backend em Django e muito mais.
        </p>
      </section>
    </WorkDetails>
  )
}

export default Hurb
