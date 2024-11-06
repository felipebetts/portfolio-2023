import Footer from '@/components/layout/footer'
import '@/styles/globals.css'
import ScrollObserver from '@/utils/scroll-observer'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
      <Footer />
    </ScrollObserver>
  )
}
