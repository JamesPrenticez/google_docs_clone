import Head from 'next/head'
import Header from '../components/Header'
import NewDoc from '../components/NewDoc'
import MyDocs from '../components/MyDocs'
import { getSession, useSession } from "next-auth/react"
import Login from '../components/Login'

export default function Home() {
  const {data: session} = useSession();
  
  if(!session) return <Login />

  return (
    <>
    <Head>
      <title>Google Docs Clone</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <NewDoc />
    <MyDocs />
  </>

  )
}

export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}