import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codemart</title>
        <meta name="description" content="Codemart.com - Market of Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-500">Kushal</div>
    </div>
  )
}
