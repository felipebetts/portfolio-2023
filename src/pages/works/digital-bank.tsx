import LazyImage from '@/components/shared/lazy-image'
import WorkDetails from '@/components/layout/works/work-details'
import React from 'react'
import Pill from '@/components/shared/pill'
import Link from 'next/link'

const DigitalBank = () => {
  return (
    <WorkDetails sub="Valepay" title="Digital Bank">
      <section className="py-3">
        <LazyImage
          alt="cover"
          src="/images/valepay/1.jpg"
          height={600}
          width={1200}
        />
      </section>
      <section className="py-3">
        <div className="flex gap-4">
          <Pill>Link</Pill>
          <Link
            href="https://plataforma.valepay.com.br/login"
            className="underline underline-offset-8 decoration-1"
            target="_blank"
            rel="noreferrer"
          >
            Platform
          </Link>
        </div>
        <Pill>Stack</Pill>
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
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          dapibus arcu quis odio hendrerit rutrum. Phasellus mollis augue
          lectus, ut cursus enim ultricies a. Integer vel aliquet est. Nullam a
          tincidunt turpis, a viverra sem. Praesent quam sapien, pretium at
          nulla et, porta mollis quam. Morbi a lectus turpis. Sed rhoncus
          sollicitudin orci a ullamcorper. Etiam ac arcu pretium, sagittis
          lectus non, lobortis felis. Morbi libero ipsum, interdum in eros
          vitae, lacinia commodo leo. Curabitur leo lacus, bibendum ac fringilla
          vitae, pharetra quis sapien. Sed est enim, aliquam vitae venenatis ut,
          suscipit in sapien. Vestibulum iaculis finibus blandit.
        </p>
        <p className="py-2">
          Nunc ultricies aliquam nisi eget convallis. Aenean vel eros ultrices,
          luctus odio eu, accumsan leo. Etiam euismod laoreet pulvinar. Quisque
          elit libero, elementum eu libero ut, consequat posuere risus. Fusce
          ullamcorper aliquam neque eu congue. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
          viverra lacinia libero a maximus. Donec lacinia porttitor tincidunt.
          Duis rhoncus arcu feugiat tortor rutrum cursus. Vestibulum egestas
          tempor mattis. Donec sit amet auctor dui. Praesent ut molestie nisl.
          Donec viverra porta dolor, eget facilisis augue vulputate ut. Duis
          congue est mi, id malesuada orci cursus et. In eu libero hendrerit,
          finibus diam eu, venenatis libero. Mauris semper justo eu justo
          volutpat facilisis.
        </p>
        <p className="py-2">
          Duis non faucibus magna. Cras dapibus velit in dui bibendum vehicula.
          Pellentesque semper gravida mauris. Proin non sem eget orci blandit
          fringilla vitae elementum ipsum. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Proin accumsan,
          odio eu pulvinar facilisis, est mi elementum lectus, non ullamcorper
          est sapien vel nulla. Nulla facilisi. Sed viverra, ipsum pellentesque
          tincidunt venenatis, tellus sem vehicula erat, sit amet euismod neque
          mauris at nisl. Mauris urna est, blandit ut elit nec, porttitor
          lobortis arcu. Nam sollicitudin, nisl vel facilisis gravida, nisi
          massa elementum augue, id elementum ligula nisl eu lacus. Proin sed
          elit nulla.
        </p>
      </section>
    </WorkDetails>
  )
}

export default DigitalBank
