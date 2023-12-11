import Layout from "@/components/Layout"
import '@/styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { createContext } from "react"


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
