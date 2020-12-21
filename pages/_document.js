import React from 'react'
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/x-icon" href="/assets/img/favicon.png" />
          <link href="/css/main.css" rel="stylesheet" />
          <link href="/css/styles.css" rel="stylesheet" />
          <link
            href="https://unpkg.com/aos@next/dist/aos.css"
            rel="stylesheet"
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P7Q5MDFS77"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 
`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-P7Q5MDFS77');
`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
            crossOrigin="anonymous"
          ></script>
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script src="/js/scripts.js"></script>
          <script src="/js/init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
