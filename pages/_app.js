import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../contexts/AuthContext'
import Footer from '../components/footer'
import "../tester/css/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp