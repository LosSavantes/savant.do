import Head from "next/head"
import Nav from "parts/Nav";
import Footer from "parts/Footer";

function MyApp({ Component, pageProps }) {
  const { navBackground = 0 } = pageProps;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta
          name="description"
          content="Cursos de programación en línea y en vivo"
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
