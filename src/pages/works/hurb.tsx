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
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">
          At Hurb, a leading online travel agency, I worked as a Fullstack
          Software Developer in 2023 within the Customer Experience team. My
          role was front-end heavy, yet I contributed to both front-end and
          back-end projects. Working in an environment structured around
          micro-frontends and microservices, I gained exposure to multiple
          programming languages and innovative technologies, accelerating my
          professional growth.
        </p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Key Challenges and Solutions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Diverse Technology Stacks:</strong> Each module was built
              using different languages like Node, PHP, Go, and Python. This
              modular architecture required me to learn and adapt to varying
              protocols of communication between services.
            </li>
            <li>
              <strong>Container Orchestration:</strong> All projects ran locally
              on an internal container orchestration system—custom-built for
              Hurb—similar to Kubernetes, ensuring efficient development.
            </li>
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">My Role</h3>
          <p className="text-lg">
            As a Fullstack Developer, I contributed to both the front-end and
            back-end, with a heavier focus on the front-end. I developed website
            pages using Next.js with CSS modules + Sass, produced email
            templates with MJML, crafted GraphQL queries and mutations, and
            implemented backend functionalities in Node.js and Django.
            Collaborating with a tech lead, designer, project manager, and other
            devs, I ensured that every part of the project was aligned with
            Hurb&apos;s high standards for user experience.
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Modern Web Stack:</strong> Leveraged React, Next.js, and
              Node.js for robust development, complemented by CSS Modules with
              Sass for maintainable styling.
            </li>
            <li>
              <strong>Advanced Tooling:</strong> Utilized GraphQL for efficient
              data operations and MJML for responsive email template creation.
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Development Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Scrum Methodology:</strong> Participated in daily
              stand-ups, weekly planning, refining sessions, and code reviews,
              all of which fostered a high-quality, collaborative work
              environment.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Employed automated tests and,
              in some projects, TDD to maintain robust code standards, ensuring
              reliable and efficient feature delivery.
            </li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Outcome and Impact</h3>
          <p className="text-lg">
            Although my tenure at Hurb was brief, I significantly contributed to
            the team by suggesting architectural improvements that reduced
            feature development time by over 30 hours. This experience not only
            improved team efficiency but also deepened my understanding of
            scalable systems and multi-language integration in a dynamic,
            fast-paced environment.
          </p>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Learnings</h3>
          <p className="text-lg">
            Working at Hurb provided an intense learning curve, where I absorbed
            best practices in Linux, Docker, and command-line tools. I also
            expanded my skill set by learning basic PHP, Go, and advanced tools
            like MJML and GraphQL. This collaborative and agile setting
            reinforced the importance of structured development processes and
            continuous learning, preparing me to tackle complex challenges in
            modern software development.
          </p>
        </div>
      </section>
    </WorkDetails>
  )
}

export default Hurb
