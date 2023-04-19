import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from 'next/app'
import { Quicksand } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Quicksand({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
