import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Companions For Life</title>
        <meta name="description" content="A non-profit organization aiming to help pets reconnect with prisoners" />
        <meta name="theme-color" content="#EDEDE9" />
        <meta property="og:image" content="https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg" />
        <link rel="icon" href="https://img.freepik.com/premium-photo/golden-retriever-lying-panting-isolated-white_191971-16974.jpg"></link>

        <meta property="og:title" content="Companions For Life"></meta>
        <meta property="og:description" content="A non-profit organization aiming to help pets reconnect with prisoners" />
        <meta property="og:url" content="https://companions-for-life-theishand.vercel.app/"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
