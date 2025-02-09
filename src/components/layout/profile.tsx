import React from 'react'

const Profile = () => {
  return (
    <div className="relative z-10 w-full bg-[var(--color-primary-100)] text-[var(--color-primary-500)] text-3xl leading-10">
      <div className="w-full max-w-5xl mx-auto px-10 lg:px-20 py-16 md:py-18 lg:py-24">
        <p className="mb-8">
          <strong>
            Hello, I&apos;m Felipe, a Software Developer with over 4 years of
            experience in Web Development.{' '}
          </strong>
          During this time, I&apos;ve had the opportunity of working with large
          companies, fast paced startups, and delivering tailored solutions to
          freelance clients.
        </p>
        <p className="mb-8">
          Specializing in <strong>Typescript</strong>, <strong>React</strong>,
          and <strong>Node.js</strong>, I craft interactive and responsive web
          applications. I am committed to delivering solutions that are both{' '}
          <strong>high-performing</strong> and{' '}
          <strong>aesthetically pleasing</strong>.
        </p>
      </div>
    </div>
  )
}

export default Profile
