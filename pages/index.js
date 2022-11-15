import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Introduction from '../components/Home/Introduction'
import Animation from '../components/Home/animation'

export default function Home() {
  return (
    <Layout>

      <Head>
        <title>성장하자 개발하자</title>
        <meta name="description" content="끊임없이 도전하여 성장하는 개발자" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">            
          <Introduction/>
          <Animation/>
        </div>
      </section>
      
    </Layout>
  )
}
