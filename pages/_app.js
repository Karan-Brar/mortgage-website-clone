import "@/styles/globals.css";
import NavigationBar from "@/components/NavigationBar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Mortgage Fox</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Mortgage Fox is a mortgage company based in Winnipeg, specializing in providing tailored mortgage solutions to meet the unique needs of every client. With a team of experienced professionals, we are committed to helping individuals and families achieve their homeownership dreams. "
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/mortgage-fox-logo-resized.png"
        />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta property="og:url" content="https://www.mortgagefox.ca/"></meta>
        <meta
          property="og:image"
          content="/assets/images/mortgage-fox-thumbnail.png"
        ></meta>
      </Head>
      <NavigationBar />
      <Component {...pageProps} classNames={"opacity - 1 "} />
      <Footer />
    </div>
  );
}
