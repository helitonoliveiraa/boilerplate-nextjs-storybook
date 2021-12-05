import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/img/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A simple project started to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
