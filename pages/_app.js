import { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </Fragment>
}

export default MyApp
