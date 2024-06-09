import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const links = [
  {
    label: 'works',
    href: '/works'
  },
  {
    label: 'contato@felipebetts.com.br',
    href: 'mailto:contato@felipebetts.com.br'
  }
]

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-8 items-center justify-center bg-black text-white p-16 relative z-10">
      <section className="flex gap-8 items-center justify-center">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="underline underline-offset-8 decoration-1"
          >
            {link.label}
          </Link>
        ))}
      </section>

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
    </footer>
  )
}

export default Footer
