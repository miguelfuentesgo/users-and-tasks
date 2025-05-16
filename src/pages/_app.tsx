import type { AppProps } from 'next/app'
import DefaultLayout from '@/components/layout/DefaultLayout'
import '@/styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}