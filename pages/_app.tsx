import MainLayout from "../components/MainLayout";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      {/* adsterra social bar ad */}
      {/* <Script
        strategy="lazyOnload"
        type="text/javascript"
        src="//stickervillain.com/de/c6/ae/dec6ae1c3ec3d938847634afdffebc5f.js"
      ></Script> */}
    </>
  );
}

export default App;
