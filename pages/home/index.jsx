import Header from 'pages/home/_Header'
import Icon from 'library/Icon';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>¡Gana dinero, aprende a desarrollar aplicaciones!</title>
      </Head>
      <Header />
      <section className="bg-light py-10">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-9 col-lg-6 order-1 order-lg-0"
              data-aos="fade-right"
            >
              <div className="content-skewed content-skewed-right">
                <img
                  className="img-fluid rounded-lg"
                  src="assets/img/illustrations/undraw_coding.svg"
                  alt="..."
                />
              </div>
            </div>
            <div
              className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0"
              data-aos="fade-left"
            >
              <div className="mb-5">
                <h2>¿Cuánto dinero gana un programador?</h2>
                <p className="lead">
                  En República Dominicana, se estima que el salario promedio de
                  un desarrollador de software <br />
                  es de RD$50,000 - RD$150,000 mensual.
                </p>
                <p>
                  <strong>¿No te gustaría tener un trabajo así?</strong>
                  <br />
                  Para eso necesitas estar bien preparado.
                </p>
                <a
                  className="btn btn-primary font-weight-500"
                  href="/curso/programacion-desde-cero"
                >
                  Ir al curso
                  <Icon name="arrow-right" className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="svg-border-rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="white"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <Icon name="home" />
              </div>
              <h3>Desde tu casa</h3>
              <p className="mb-0">
                No hay que gastar gasolina o pasaje, las clases son en línea.
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <Icon name="video" />
              </div>
              <h3>En vivo</h3>
              <p className="mb-0">
                Podrás hacer preguntas en el momento, y tendrás la clase grabada
                al final
              </p>
            </div>
            <div className="col-lg-4">
              <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4">
                <Icon name="write" />
              </div>
              <h3>Más práctica que teoría</h3>
              <p className="mb-0">
                Aprenderás haciendo ejercicios solo con la teoría necesaria
              </p>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-light">
          {/* <!-- Rounded SVG Border--> */}
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
      {/* whats included */}
      <section className="bg-light py-10">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-9 col-lg-6 order-1 order-lg-0"
              data-aos="fade-right"
            >
              <div className="content-skewed content-skewed-right">
                <img
                  className="content-skewed-item img-fluid shadow-lg rounded-lg"
                  src="assets/img/photos/coding.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div
              className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0"
              data-aos="fade-left"
            >
              <div className="mb-5">
                <h2>Curso de Programacion Desde Cero</h2>
                <p className="lead">
                  Este curso te preparará sólidamente en el área laboral de
                  desarrollo de software. Estas son algunas cosas que incluye:
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h6>Ofertas laborales</h6>
                  <p className="small mb-1">
                    Al inscribirte recibirás ofertas laborales publicadas en
                    nuestra comunidad.
                  </p>
                  <a
                    className="small text-arrow-icon"
                    href="/curso/programacion-desde-cero"
                  >
                    Saber más <Icon name="arrow-right" className="ml-2" />
                  </a>
                </div>
                <div className="col-md-6 mb-4">
                  <h6>Gremio</h6>
                  <p className="mb-1 small">
                    Únete a nuestra comunidad y recibe contenido exclusivo.
                  </p>
                  <a
                    className="small text-arrow-icon"
                    href="/curso/programacion-desde-cero"
                  >
                    Saber más <Icon name="arrow-right" className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h6>Concursos</h6>
                  <p className="small mb-1">
                    En nuestra comunidad podrás participar en concursos y ganar premios.
                  </p>
                  <a
                    className="small text-arrow-icon"
                    href="/curso/programacion-desde-cero"
                  >
                    Saber más <Icon name="arrow-right" className="ml-2" />
                  </a>
                </div>
                <div className="col-md-6 mb-4">
                  <h6>Desafíos &amp; Niveles</h6>
                  <p className="mb-1 small ">
                    Supera nuestros desafíos, sube de nivel para obtener
                    tu anillo de honor.
                  </p>
                  <a
                    className="small text-arrow-icon"
                    href="/curso/programacion-desde-cero"
                  >
                    Saber más <Icon name="arrow-right" className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a className="btn btn-success font-weight-bold" href="/inscripcion">
              ¡Inscribirme en el curso!
            </a>
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
}
