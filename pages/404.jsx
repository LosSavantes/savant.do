
export default function Custom404() {
  return (
    <section class="bg-white py-10">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mt-4">
              <img
                class="img-fluid p-4"
                src="assets/img/illustrations/404-error.svg"
                alt="..."
              />
              <p class="lead">
                Esta página no se encuentra con nosotros.
              </p>
              <a class="text-arrow-icon" href="/">
                <i class="ml-0 mr-1" data-feather="arrow-left"></i>Regresar al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="svg-border-rounded text-dark">
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
  );
};

export async function getStaticProps() {
	return {
    props: {
      navBackground: 1,
    },
  };
}