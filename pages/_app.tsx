import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NCKUCTF</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          property="og:description"
          key="description"
          content="NCKUCTF - 來自成大的資訊安全社團"
        />
        <meta
          property="og:title"
          name="twitter:title"
          key="title"
          content="NCKUCTF - 來自成大的資訊安全社團"
        />
        <meta property="og:site_name" content="NCKUCTF" />
        <meta property="og:url" key="url" content="https://nckuctf.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" name="twitter:image" content="/logo.png" />
        <meta property="og:locale" key="locale" content="zh_TW" />
        <meta property="fb:app_id" content="110257429064833" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          key="twitter:description"
          content="NCKUCTF - 來自成大的資訊安全社團"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
