import React from 'react'

const Profile = () => {
  return (
    <div className="relative z-10 min-h-screen w-full bg-[var(--color-primary-100)] text-[var(--color-primary-500)] text-3xl leading-10">
      <div className="w-full max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36">
        <p className="mb-8">
          <strong>
            Hello, I&apos;m Felipe, a Software Developer with over 3 years of
            experience in Web Development.{' '}
          </strong>
          My journey spans working with large companies, dynamic startups, and
          delivering tailored solutions to freelance clients.
        </p>
        <p>
          Specializing in <strong>Typescript</strong>, <strong>React</strong>,
          and <strong>Node.js</strong>, I craft interactive and responsive web
          applications. My goal is to deliver solutions that are both{' '}
          <strong>high-performing</strong> and{' '}
          <strong>aesthetically pleasing</strong>.
        </p>
      </div>
    </div>
  )
}

export default Profile
