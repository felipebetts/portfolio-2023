import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import WorkDetails from '@/components/layout/works/work-details'
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
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">
          Express Budget is a web application I developed as a freelance project
          for a client aiming to streamline their lead qualification process.
          Through interactive user flows and customized financial calculations,
          visitors can easily simulate various budget scenarios tailored to
          their needs.
        </p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Key Challenges and Solutions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Complex User Experience:</strong> The application required
              a highly visual simulation experience with multi-step routes,
              animations (including carousels), and dynamic state preservation
              across each step. I tackled this by carefully designing the
              component structure and ensuring smooth state management across
              route changes.
            </li>
            <li>
              <strong>API Integration with Limited Documentation:</strong> The
              integration with the Bitrix24 API was challenging due to
              incomplete documentation. I navigated these gaps through extensive
              testing and direct experimentation, ensuring seamless data
              exchange for lead submission.
            </li>
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">My Role</h3>
          <p className="text-lg">
            I was the sole developer, responsible for every phase of the
            project— from initial requirements gathering and scope definition to
            coding, deployment, and DNS configuration. I also orchestrated the
            project timeline using a streamlined waterfall approach to meet the
            client&apos;s deadline efficiently.
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Bitrix24 Integration:</strong> Implemented custom lead
              submission workflows via the Bitrix24 API, bridging the gap
              between front-end user interactions and the client&apos;s CRM
              system.
            </li>
            <li>
              <strong>Complex Financial Formulas:</strong> Although the formulas
              were provided by the client, I was responsible for implementing
              them accurately in the application&apos;s logic. The number and
              complexity of these calculations required meticulous testing.
            </li>
            <li>
              <strong>Design Implementation:</strong> I converted the
              client&apos;s Figma designs into a fully functional UI, ensuring
              fidelity to the provided mockups while maintaining optimal code
              organization and performance.
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Development Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Process:</strong> I employed a streamlined waterfall
              methodology, focusing on rapid delivery and continuous client
              feedback.
            </li>
            <li>
              <strong>Testing:</strong> Due to a fast-paced startup environment,
              testing relied primarily on manual verification rather than
              automated tests. However, I carefully validated user flows and
              calculations to confirm reliable functionality.
            </li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Outcome and Impact</h3>
          <p className="text-lg">
            While no formal metrics were tracked, the client reported fewer
            irrelevant inquiries, effectively relieving the sales team&apos;s
            workload. The solution was well-received, and there were plans to
            expand the project further; however, budget constraints limited
            additional development.
          </p>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Learnings</h3>
          <p className="text-lg">
            Working on Express Budget provided valuable experience in
            implementing intricate designs from scratch, balancing a fast-paced
            development schedule with rigorous manual testing, and navigating
            incomplete third-party documentation. By mastering both the business
            and technical aspects—from contract negotiation to a polished,
            production-ready application—I delivered a solution that effectively
            addressed the client&apos;s lead qualification challenge and
            highlighted my versatility as a front-end software developer.
          </p>
        </div>
        {/* <p className="text-lg mb-6">
          Express Budget is a web-based application designed to help businesses
          optimize their lead qualification process by providing an interactive
          and visual budget simulation experience. The platform enables users to
          input key financial parameters and receive instant budget estimates,
          allowing potential clients to understand pricing structures before
          reaching out to sales representatives. This approach helps companies
          filter out unqualified leads, improving conversion rates and
          operational efficiency.
        </p>
        <p className="text-lg mb-6">
          From a technology perspective, Express Budget was built using a modern
          front-end stack, ensuring a seamless and engaging user experience. The
          application features dynamic animations, smooth transitions, and a
          state-preserving architecture that maintains user inputs across
          multiple steps. Additionally, it integrates with the Bitrix24 API to
          automatically capture lead information and streamline the sales
          process.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🚀 Key Technical Challenges
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">
            <strong>Advanced interactive experience:</strong> Smooth animations,
            carousels, and seamless transitions.
          </li>
          <li className="text-lg">
            <strong>State management:</strong> Preserving data across multiple
            routes.
          </li>
          <li className="text-lg">
            <strong>External API integration:</strong> Communication with the
            Bitrix24 API, overcoming documentation challenges.
          </li>
          <li className="text-lg">
            <strong>Custom financial calculations:</strong> Implementing
            specific formulas provided by the client.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🛠 My Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li className="text-lg">
            Defining scope and aligning with the client.
          </li>
          <li className="text-lg">
            Implementing front-end and system architecture.
          </li>
          <li className="text-lg">
            Integrating APIs and developing financial calculations.
          </li>
          <li className="text-lg">
            Deploying and configuring hosting, including DNS setup.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📈 Impact and Results
        </h2>
        <p className="mb-6 text-lg">
          The client reported a{' '}
          <strong>significant reduction in unqualified leads</strong>, allowing
          the sales team to focus on more relevant opportunities. While no
          quantitative metrics are available, the project fully met the client's
          expectations and continues to be used.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🔍 Learnings and Future Improvements
        </h2>
        <p className="text-lg">
          This project was a major learning experience in implementing
          interactive designs and applying complex financial calculations within
          a dynamic visual experience. Future improvements could include{' '}
          <strong>automated testing and performance optimizations</strong> for
          better scalability.
        </p> */}

        {/* <p className="my-2">
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
        </p> */}
      </section>
    </WorkDetails>
  )
}

export default ExpressBudget
