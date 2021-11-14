import Head from 'next/head'
import Header from '../components/Header'
import NewDoc from '../components/NewDoc'
import MyDocs from '../components/MyDocs'
import { useSession } from "next-auth/react"
import Login from '../components/Login'

export default function Home() {
  const {data: session} = useSession();
  console.log(session)
  
  return (
    <>
    <Head>
      <title>Google Docs Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {!session ? (
      <Login />
    ) : (
      <div>
        <Header />
        <NewDoc />
        <MyDocs />
      </div>
    )}
  </>

  )
}
