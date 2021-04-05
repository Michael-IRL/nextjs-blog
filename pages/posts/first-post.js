import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';

const FirstPost = () => (
  <>
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  </>
);
export { FirstPost as default };
