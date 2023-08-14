import "./global.css";
import "./fonts.css";
import gtm1 from "./gtm-1.js";
import gtm2 from "./gtm-2.js";
import affirm from "./affirm.js";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bodybuilding & BS",
  description:
    "Customized training programs for different types of goals. I focus on your health and lifestyle choices to develop nutritional plans that adjust to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
        <link
          rel="preload"
          href="https://cdn.apisystem.tech/memberships/atck3bt1c4mTHgI43YQm/post-materials/3035d014-e5ab-48d7-92c9-de0c3be8053b/Robinson-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="https://cdn.apisystem.tech/memberships/atck3bt1c4mTHgI43YQm/post-materials/3035d014-e5ab-48d7-92c9-de0c3be8053b/Robinson-Rough.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="https://cdn.apisystem.tech/memberships/atck3bt1c4mTHgI43YQm/post-materials/3035d014-e5ab-48d7-92c9-de0c3be8053b/BigShouldersDisplay-Light.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <link
          rel="preload"
          href="https://cdn.apisystem.tech/memberships/atck3bt1c4mTHgI43YQm/post-materials/3035d014-e5ab-48d7-92c9-de0c3be8053b/BigShouldersDisplay-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQG4XG8LJG"
        ></script>

        <script src={gtm1}></script>
        <script src={gtm2}></script>
        <script src={affirm}></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#eded00" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQCGDF6W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
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
