import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../helpers/gtag";

function MyDocument() {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Html lang="en">
      <Head>
        <Script
          src={
            "//stickervillain.com/15/14/bb/1514bb63026873a9d4c7be3578d7c447.js"
          }
          strategy="afterInteractive"
        />

        {/* <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" /> */}
        {/* enable analytics script only for production */}
        {isProduction && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8M0MV4GMY6"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-8M0MV4GMY6');
          `,
          }}
        /> */}
      </Head>
      <body className="bg-[#111111] relative text-zinc-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
