import Footer from '@/src/components/footer/footer'
import Header from '@/src/components/header/header'
import MainLayout from '@/src/components/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  
  </>
  )
}
