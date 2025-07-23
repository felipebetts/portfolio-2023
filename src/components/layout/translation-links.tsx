import React from 'react'
import { useRouter } from 'next/router'

const locales = [
  {
    label: 'EN',
    value: 'en'
  },
  {
    label: 'PT',
    value: 'pt'
  }
]

const TranslationLinks = () => {
  const router = useRouter()
  const currentLocale = router.locale

  const handleChangeLocale = (newLocale: string): void => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, {
      locale: newLocale,
      scroll: false
    })
  }

  return (
    <div className="flex gap-6 text-lg">
      {locales.map(locale => (
        <button
          className={
            currentLocale === locale.value
              ? 'font-bold'
              : 'underline underline-offset-8 decoration-1'
          }
          onClick={() => handleChangeLocale(locale.value)}
          disabled={currentLocale === locale.value}
          key={locale.value}
        >
          {locale.label}
        </button>
      ))}
    </div>
  )
}

export default TranslationLinks
