import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import Footer from '@/components/layout/footer'
import '@/styles/globals.css'
import ScrollObserver from '@/utils/scroll-observer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
      <Footer />
    </ScrollObserver>
  )
}

export default appWithTranslation(App)
