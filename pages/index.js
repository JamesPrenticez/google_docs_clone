import Head from 'next/head'
import Header from '../components/Header'
import NewDoc from '../components/NewDoc'
import MyDocs from '../components/MyDocs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header />
    <NewDoc />
    <MyDocs />
    </div>
  )
}
