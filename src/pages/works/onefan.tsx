import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'

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
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">
          OneFan is a fan engagement platform for soccer enthusiasts, and in
          this project we focused on engaging supporters of the Spanish team
          Osasuna by keeping them informed with dynamic, real-time updates. At
          OneFan, I began my journey as a Senior Front-end Developer and quickly
          advanced to Tech Lead of the web team.
        </p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Key Challenges and Solutions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Modernizing Legacy Systems:</strong> Upgraded outdated
              code to align with modern performance and scalability standards.
            </li>
            <li>
              <strong>First-Time Tech Leadership:</strong> Transitioned into a
              leadership role where I defined architectural strategies,
              streamlined processes, and guided a diverse front-end team.
            </li>
            <li>
              <strong>Real-Time Engagement:</strong> Integrated with an internal
              API to deliver live game updates automatically, ensuring fans
              received timely information during critical match events.
            </li>
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">My Role</h3>
          <p className="text-lg">
            Initially hired as a Senior Front-end Developer, I was promoted to
            Tech Lead within a few months. My responsibilities evolved from
            developing innovative front-end solutions to managing the team,
            orchestrating task distribution, planning architectural
            improvements, and refining our development processes. I also
            provided ongoing mentorship and support to help elevate the overall
            team performance.
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Scalable Architecture:</strong> Leveraged React, Next.js,
              TypeScript, and Axios to build a robust platform that supports
              over 100k monthly active users with an uptime exceeding 99.9%.
            </li>
            <li>
              <strong>Live Updates Feature:</strong> Developed real-time site
              updates for live game events, significantly enhancing fan
              engagement by delivering immediate match information.
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Development Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Agile & Scrum:</strong> Employed agile methodologies with
              daily stand-ups, sprint planning, and regular code reviews to
              maintain high-quality output and continuous improvement.
            </li>
            <li>
              <strong>Process Optimization:</strong> Instituted automated
              testing and rigorous review cycles, ensuring our code remained
              robust and maintainable while fostering an environment that
              encouraged innovation.
            </li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Outcome and Impact</h3>
          <p className="text-lg">
            The project now actively engages around 100k users each month, with
            significant traffic peaks during live games and key events. By
            modernizing legacy systems and implementing real-time data
            integration, we achieved a high-performance platform with
            exceptional scalability and reliability.
          </p>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Learnings</h3>
          <p className="text-lg">
            Leading the front-end team at OneFan was a transformative
            experience. I honed my technical expertise and leadership skills by
            balancing process discipline with creative innovation. This role
            deepened my understanding of scalable system design, real-time data
            handling, and effective team collaboration in a fast-paced,
            high-stakes environment.
          </p>
        </div>
      </section>
    </WorkDetails>
  )
}

export default Onefan
