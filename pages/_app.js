import "@/styles/globals.css";
import NavigationBar from "@/components/NavigationBar";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Sky Mortgages</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Mortgage company text"
        />
      </Head>
      <NavigationBar />
      <Component {...pageProps} classNames={"opacity - 1 "} />
      <Footer />
    </div>
  );
}
