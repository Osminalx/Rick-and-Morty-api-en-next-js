import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
    Este es el _app
    <Component {...pageProps} /></>)
}

export default MyApp
