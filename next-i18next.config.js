module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt']
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales'
}
