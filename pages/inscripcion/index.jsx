import Head from "next/head";
import Header from "library/Header";

export default function index() {
	return (
    <>
      <Head>
        <title>Inscripción</title>
      </Head>
      <Header
        title="Inscripción"
        paragraph="Sigue los pasos para inscribirte en uno de nuestros cursos."
      />

      <section className="bg-white py-10">
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <h2 className="mb-4">Procedimiento</h2>
              <ol className="mb-5" style={{ paddingLeft: "1rem" }}>
                <li>Llena y envía el formulario de inscripción.</li>
                <li>
                  Dentro de 24 horas recibirás un correo con instrucciones para
                  acceder al curso y realizar el pago.
                </li>
                <li>
                  Antes de la segunda clase, debes realizar el pago del primer
                  mes.
                </li>
              </ol>
            </div>
            <div className="col-lg-8 p-0 p-lg-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSforlfvpHXtCfhtTNhHHiH5Wp4RcoaUfQl2Tupy8GRM7rgKDQ/viewform?embedded=true"
                width="640"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                style={{
                  width: "100%",
                }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="var(--dark)"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>
    </>
  );
};
