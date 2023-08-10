"use client";

import "./global.css";
import "../../public/fonts/styles.css";
import gtm1 from "./gtm-1.js";
import gtm2 from "./gtm-2.js";
import affirm from "./affirm.js";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bodybuilding & BS",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
        {/* <link
          rel="preload"
          href="/media/fonts/Robinson-Regular.woff2"
          as="Robinson Regular"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/fonts/calibri-regular.woff2"
          as="Calibri"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/fonts/Robinson-Rough.woff2"
          as="Robinson Rough"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/fonts/BigShouldersDisplay-Light.woff2"
          as="Big Shoulders Light"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/fonts/BigShouldersDisplay-Regular.woff2"
          as="Big Shoulders Regular"
          crossOrigin="anonymous"
        /> */}
        <link href="./fonts.css" rel="stylesheet" type="text/css" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQG4XG8LJG"
        ></script>
        <script src={gtm1}></script>
        <script src={gtm2}></script>
        <script src={affirm}></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQCGDF6W"
            height="0"
            width="0"
            style="display: none; visibility: hidden"
          ></iframe>
        </noscript>
        <div id="root">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
