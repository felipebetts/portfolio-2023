import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const SocialLinks = () => (
  <section className="flex justify-center items-center pt-6">
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/felipebetts"
      className="transition-opacity duration-300 opacity-100 hover:opacity-80"
    >
      <IoLogoGithub className="h-14 w-14 p-2 mx-3 " />
    </Link>
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/felipe-betts/"
      className="transition-opacity duration-300 opacity-100 hover:opacity-80"
    >
      <IoLogoLinkedin className="h-14 w-14 p-2 mx-3 " />
    </Link>
  </section>
)

export default SocialLinks
