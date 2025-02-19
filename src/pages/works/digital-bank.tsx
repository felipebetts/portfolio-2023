import React from 'react'
import Link from 'next/link'
import { IoExitOutline } from 'react-icons/io5'

import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import { WorkImage } from '@/components/layout/works/work'
import Carousel from '@/components/shared/carousel'
import CarouselItem from '@/components/shared/carousel-item'
import LazyImage from '@/components/shared/lazy-image'

const DigitalBank = () => {
  const images = ['1.jpg', '2.jpg', 'login.png']
  return (
    <WorkDetails sub="Valepay" title="Digital Bank">
      <section className="py-3">
        <Carousel className="mx-auto">
          {images.map((el, i) => (
            <CarouselItem index={i} key={i}>
              <LazyImage alt="cover" src={`/images/valepay/${el}`} />
            </CarouselItem>
          ))}
        </Carousel>
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
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">
          <strong>Digital Bank – Valepay</strong> is a cutting-edge digital
          banking platform designed specifically for the tourism industry. As
          the sole front-end developer on a lean, agile team—comprising a
          designer and a back-end co-founder—I was responsible for every aspect
          of the client-side development, from technology and architectural
          decisions to coding the entire user interface from scratch. This close
          collaboration ensured an exceptional and secure user experience.
        </p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Key Challenges and Solutions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Complex Role-Based Authentication:</strong> Implementing a
              robust system to handle multiple user roles (agencies, managers,
              sellers), each with tailored access and distinct dashboard views.
            </li>
            <li>
              <strong>Financial Transaction Security:</strong> Integrating
              secure financial functionalities such as PIX and credit card
              transactions, while managing the intricacies of date variations
              and calendar compositions for payment scheduling.
            </li>
            <li>
              <strong>Custom UI Components:</strong> Creating reusable
              components like interactive calendars, responsive sidebars, and
              paginated tables to maintain a consistent design system and ensure
              a user-friendly interface.
            </li>
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">My Role</h3>
          <p className="text-lg">
            I served as the sole front-end developer, owning the entire
            client-side architecture and implementation. I chose and implemented
            technologies such as Next.js and Styled Components to build a
            dynamic, scalable, and production-ready platform, collaborating
            closely with both the designer and back-end developer to optimize
            the user experience.
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Next.js &amp; React:</strong> Leveraged for superior
              production performance and building dynamic, responsive
              interfaces.
            </li>
            <li>
              <strong>Styled Components:</strong> Utilized to establish a
              consistent and customizable design system through reusable UI
              components.
            </li>
            <li>
              <strong>Axios with Custom Middleware:</strong> Streamlined API
              communications by automatically injecting authentication tokens
              and handling errors uniformly.
            </li>
            <li>
              <strong>Chart.js and Quill:</strong> Integrated to deliver
              responsive data visualizations and enhance CRM functionalities by
              enabling the generation of promotional content.
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Development Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Agile Kanban:</strong> Employed to ensure rapid
              development and iterative progress in a fast-paced startup
              environment.
            </li>
            <li>
              <strong>Efficient Collaboration:</strong> Worked in close sync
              with the designer and back-end co-founder to deliver a
              production-ready platform.
            </li>
            <li>
              <strong>Focus on Delivery:</strong> While unit tests were not
              implemented to maintain agility, rigorous manual testing
              guaranteed reliable functionality.
            </li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Outcome and Impact</h3>
          <p className="text-lg">
            Digital Bank was built from the ground up as the front-end
            foundation for Valepay&apos;s digital banking platform. Although
            formal metrics are unavailable, the platform remains live at its
            designated URL and continues to support the startup&apos;s expansion
            in the tourism sector. This project demonstrates my ability to build
            secure, scalable, and user-centric applications that effectively
            address complex business challenges.
          </p>
        </div>
      </section>
    </WorkDetails>
  )
}

export default DigitalBank
