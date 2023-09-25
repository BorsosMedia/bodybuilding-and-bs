import "./global.css";
import "./fonts.css";
import gtm1 from "./gtm-1.js";
import gtm2 from "./gtm-2.js";
import affirm from "./affirm.js";
import metaPixel from "./metaPixel.js";
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QQG4XG8LJG"
        ></script>

        <script src={gtm1}></script>
        <script src={gtm2}></script>
        <script src={affirm}></script>
        <script src={metaPixel}></script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=819676513021429&ev=PageView&noscript=1"
          />
        </noscript>

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
