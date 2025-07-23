import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React from 'react'

import SocialLinks from './social-links'
import TranslationLinks from './translation-links'

const Footer: React.FC = () => {
  const { t } = useTranslation('common')

  const links = [
    {
      label: t('footer.works'),
      href: '/works'
    },
    {
      label: 'contato@felipebetts.com.br',
      href: 'mailto:contato@felipebetts.com.br'
    }
  ]

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
      <TranslationLinks />
    </footer>
  )
}

export default Footer
