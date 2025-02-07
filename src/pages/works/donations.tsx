import { WorkImage } from '@/components/layout/works/work'
import WorkDetails from '@/components/layout/works/work-details'
import PillData from '@/components/shared/pill-data'
import React from 'react'

const Donations = () => {
  return (
    <WorkDetails title="Donations Agreggator">
      <section className="py-3">
        <WorkImage alt="cover" src="/images/ajudapet/cover.png" />
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
        <p className="my-2 text-lg">
          Donations Aggregator is a platform designed to{' '}
          <strong>streamline charitable donations for abandoned animals</strong>{' '}
          by funding treatment and shelter initiatives. Developed in response to
          a client’s vision, the platform leverages <strong>QR codes</strong>{' '}
          placed in pet shops to direct pet lovers to a{' '}
          <strong>secure, user-friendly donation process</strong>. Each
          participating pet shop acts as an affiliate, earning a modest
          commission per donation and contributing to a{' '}
          <strong>sustainable ecosystem</strong> that benefits both the cause
          and the business.
        </p>
        <p className="my-2 text-lg">
          The primary objective was to create an experience that combines{' '}
          <strong>robust security</strong> with simplicity. To achieve this, I
          implemented <strong>SMS authentication using the smstoken API</strong>{' '}
          and integrated it via a dedicated{' '}
          <strong>Backend-for-Frontend (BFF) within Next.js</strong>. This
          integration involved modifying the legacy login flow of an existing
          mobile application, <strong>unifying the user base</strong> and
          ensuring a consistent authentication process across platforms.
        </p>
        <WorkImage src="/images/ajudapet/3.png" alt="donations agreggator" />
        <WorkImage alt="donations agreggator" src="/images/ajudapet/4.png" />
        <p className="my-2 text-lg">
          A critical aspect of the project was developing a{' '}
          <strong>seamless payment process</strong>. I integrated{' '}
          <strong>Mercado Pago’s API</strong> to support both{' '}
          <strong>credit card transactions and PIX payments</strong>—the latter
          being Brazil’s instant bank transfer system. The checkout process
          remains entirely on-site, with sensitive payment data{' '}
          <strong>tokenized on the backend</strong> before transmission.
          Incorporating <strong>familiar Mercado Pago icons</strong> reinforces
          trust and maintains clarity throughout the transaction, ensuring a
          smooth user experience.
        </p>
        <p className="my-2 text-lg">
          Design decisions were made in{' '}
          <strong>close collaboration with the client</strong>. Without a
          dedicated designer, I utilized <strong>Material UI</strong> to
          establish a <strong>consistent, modern interface</strong> that met the
          client’s specifications while enhancing usability. This approach
          resulted in a <strong>cohesive design system</strong> that supported
          both the functionality and aesthetic requirements of the platform.
        </p>
        <p className="my-2 text-lg">
          Overall, Donations Aggregator stands as a reflection of my{' '}
          <strong>hands-on experience</strong> in creating{' '}
          <strong>secure, user-focused solutions</strong>. This project, one of
          my <strong>first major freelance engagements</strong>, offered{' '}
          <strong>valuable lessons</strong> in{' '}
          <strong>integrating modern features into a legacy system</strong> and
          balancing innovation with practical constraints. I’m proud of the work
          delivered, and I believe it effectively demonstrates my commitment to
          building <strong>scalable and reliable digital experiences</strong>{' '}
          that meet both business and user needs.
        </p>
        <p className="my-2 text-lg"></p>

        <WorkImage src="/images/ajudapet/5.png" alt="donations agreggator" />
        <WorkImage alt="donations agreggator" src="/images/ajudapet/6.png" />
        <WorkImage src="/images/ajudapet/7.png" alt="donations agreggator" />
        <WorkImage src="/images/ajudapet/8.png" alt="donations agreggator" />
      </section>
    </WorkDetails>
  )
}

export default Donations
