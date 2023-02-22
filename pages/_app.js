import Head from "next/head"
import Script from "next/script"
import "../styles/globals.css"
import "../styles/videos.module.css"
// bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Header } from "../components/Header"
import MainLayout from "../components/MainLayout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Error from "next/error"
import NotFound from "./NotFound"

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Instructor dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />        
      </Head>
      <Script type="module" src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js" />     
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></Script>
      
      <Header />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp