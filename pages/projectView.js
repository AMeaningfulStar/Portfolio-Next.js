import Layout from '../components/layout';
import Head from 'next/head';

export default function ProjectView(){
    return (
        <Layout>
            <Head>
                <title>성장하자 개발하자</title>
                <meta name="description" content="끊임없이 도전하여 성장하는 개발자" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>프로젝트 뷰</h1>
        </Layout>
    );
}