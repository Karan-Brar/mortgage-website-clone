import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/mortgage-fox-logo-resized.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
