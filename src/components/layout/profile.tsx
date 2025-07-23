import React from 'react'
import { useTranslation } from 'next-i18next'

const Profile = () => {
  const { t } = useTranslation('home')
  return (
    <div className="relative z-10 w-full bg-[var(--color-primary-100)] text-[var(--color-primary-500)] text-3xl leading-10">
      <div className="w-full max-w-5xl mx-auto px-10 lg:px-20 py-16 md:py-18 lg:py-24">
        <p className="mb-8">
          <strong>{t('profile.heading')} </strong>
          {t('profile.p1')}
        </p>
        <p
          className="mb-8"
          dangerouslySetInnerHTML={{ __html: t('profile.p2') }}
        />
      </div>
    </div>
  )
}

export default Profile
