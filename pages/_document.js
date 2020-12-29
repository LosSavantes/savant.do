import React from "react";
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
          {/* <!-- Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P7Q5MDFS77"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-P7Q5MDFS77');
`,
            }}
          />
          {/* <!-- End Google Analytics --> */}

          {/* <!-- Facebook Pixel Code --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '384335429300835');
fbq('track', 'PageView');
`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
            <img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=384335429300835&ev=PageView&noscript=1"
            />
          `,
            }}
          />
          {/* <!-- End Facebook Pixel Code --> */}
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
