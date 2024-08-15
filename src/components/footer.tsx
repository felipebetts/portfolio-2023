import Link from 'next/link'
import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import SocialLinks from './social-links'

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
    <footer className="flex flex-col gap-8 items-center justify-center bg-[var(--color-primary-500)] text-[var(--color-primary-100)] p-16 relative z-10">
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
      <SocialLinks />
    </footer>
  )
}

export default Footer
