import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import NewDoc from '../components/NewDoc'
import MyDocs from '../components/MyDocs'
import DocumentRow from '../components/DocumentRow'
import { getSession, useSession } from "next-auth/react"

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
    <NewDoc session={session} />
    <MyDocs session={session} />
  
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