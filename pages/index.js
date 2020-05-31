import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

const Index = () => {
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <h1>hello world</h1>

      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </div>
  )
};

export default Index;