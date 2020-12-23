import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - No encontrado</title>
      </Head>
      <section className="bg-white py-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mt-4">
                <img
                  className="img-fluid p-4"
                  src="assets/img/illustrations/404-error.svg"
                  alt="..."
                />
                <p className="lead">
                  Esta página no se encuentra con nosotros.
                </p>
                <a className="text-arrow-icon" href="/">
                  <i className="ml-0 mr-1" data-feather="arrow-left"></i>
                  Regresar al inicio
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export async function getStaticProps() {
	return {
    props: {
      navBackground: 1,
    },
  };
}