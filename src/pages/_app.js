import Layout from "@/components/Layout"
import '@/styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createContext } from "react"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const value = {

  }
  return (
    <MyContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext.Provider>
  )
}
