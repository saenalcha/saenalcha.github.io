import '../styles/globals.css'
import { DefaultLayout } from '../layout/Default'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />  
    </DefaultLayout>
  )
}

export default MyApp
