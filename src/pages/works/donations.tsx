import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import Carousel from '@/components/shared/carousel'
import CarouselItem from '@/components/shared/carousel-item'
import LazyImage from '@/components/shared/lazy-image'
import PillData from '@/components/shared/pill-data'
import React from 'react'

const Donations = () => {
  const images = [
    'cover.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png'
  ]
  return (
    <WorkDetails title="Donations Agreggator">
      <section className="py-3">
        <Carousel className="mx-auto">
          {images.map((el, i) => (
            <CarouselItem index={i} key={i}>
              <LazyImage alt="cover" src={`/images/ajudapet/${el}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </section>
      <section className="py-3">
        <PillData tag="Stack">
          <p className="text-lg">React, Next.js, Node.js</p>
        </PillData>
        <PillData tag="Other Technologies">
          <p className="text-lg">Material UI, Axios, Express</p>
        </PillData>
      </section>
      <section className="py-3">
        {/* Overview / Introduction */}
        <p className="text-lg mb-4">
          Donations Aggregator is a platform designed to streamline charitable
          donations for abandoned animals by funding treatment and shelter
          initiatives. In response to a client’s vision, the platform leverages
          QR codes in pet shops to guide pet lovers through a secure and
          user-friendly donation process. Each pet shop acts as an affiliate,
          earning a commission per donation while contributing to a sustainable
          ecosystem that benefits both the cause and the business.
        </p>

        {/* Key Challenges and Solutions */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">
            Key Challenges and Solutions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Balancing Security and Simplicity:</strong> Implemented
              SMS authentication using the smstoken API via a dedicated
              Backend-for-Frontend (BFF) in Next.js, unifying a legacy mobile
              login flow for a consistent experience.
            </li>
            <li>
              <strong>Seamless Payment Integration:</strong> Integrated Mercado
              Pago’s API to support both credit card and PIX transactions,
              ensuring that sensitive payment data was securely tokenized on the
              backend.
            </li>
          </ul>
        </div>

        {/* My Role */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">My Role</h3>
          <p className="text-lg">
            I led the development of Donations Aggregator, transforming the
            client’s vision into a robust, secure platform. I engineered the SMS
            authentication flow, revamped the legacy login process, and
            implemented a seamless, on-site checkout experience by integrating
            Mercado Pago’s API for secure payment processing.
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Technical Highlights</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Secure Authentication:</strong> Leveraged the smstoken API
              with a dedicated BFF in Next.js to create a unified and secure
              login process.
            </li>
            <li>
              <strong>Payment Integration:</strong> Seamlessly integrated
              Mercado Pago’s API for both credit card and PIX payments, with
              tokenization of sensitive data enhancing security.
            </li>
            <li>
              <strong>Cohesive UI/UX:</strong> Adopted Material UI to build a
              consistent, modern interface that met the client’s specifications
              and improved usability, despite the absence of a dedicated
              designer.
            </li>
          </ul>
        </div>

        {/* Development Approach */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Development Approach</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>Client Collaboration:</strong> Worked closely with the
              client to define design and functionality, ensuring the platform
              was both secure and easy to use.
            </li>
            <li>
              <strong>Modernizing Legacy Systems:</strong> Integrated new
              technologies into an existing legacy environment, delivering a
              unified authentication and payment experience.
            </li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Outcome and Impact</h3>
          <p className="text-lg">
            Donations Aggregator effectively streamlines the donation process
            for abandoned animals while generating sustainable revenue for pet
            shop affiliates. As one of my first major freelance projects, it
            stands as a testament to my ability to build secure, scalable
            digital solutions that meet both business and user needs.
          </p>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Key Learnings</h3>
          <p className="text-lg">
            This project reinforced the importance of integrating modern
            authentication and payment systems into legacy architectures. I
            learned to balance robust security measures with simplicity,
            ensuring a seamless and cohesive user experience throughout the
            platform.
          </p>
        </div>
      </section>
    </WorkDetails>
  )
}

export default Donations
