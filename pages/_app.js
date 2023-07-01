import "@/styles/globals.css";
import NavigationBar from "@/components/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar />
      <Component {...pageProps} classNames={"opacity - 1 "} />
    </div>
  );
}
