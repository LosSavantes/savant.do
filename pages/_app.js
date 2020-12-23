import Head from "next/head"
import Nav from "library/Nav";
import Footer from "library/Footer";
import "scss/elegant.scss";

function MyApp({ Component, pageProps }) {
  const { navBackground = 0 } = pageProps;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>
          {process.env.NEXT_PUBLIC_SITE_DESCRIPTION} |{" "}
          {process.env.NEXT_PUBLIC_NAME}
        </title>
        <meta
          name="description"
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION}
        />
        <meta name="author" content={process.env.NEXT_PUBLIC_NAME} />
      </Head>
      <Nav bg={navBackground} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
