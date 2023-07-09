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
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Customized Mortgage solutions"
        />
      </Head>
      <NavigationBar />
      <Component {...pageProps} classNames={"opacity - 1 "} />
      <Footer />
    </div>
  );
}
