import Head from "next/head";
import Header from "parts/Header";
import Icon from "parts/Icon";

export default function index(props) {
	return (
    <>
      <Head>
        <title>Sobre Nosotros</title>
      </Head>
      <Header title="Sobre Nosotros" paragraph="Nuestra definición" />
      <section className="bg-white py-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <p className="">
                <strong className="h4">savant</strong>
                <br />
                /ˈsav(ə)nt,French savɑ̃/
              </p>
              <em> noun </em>
              <ol className="small mb-5">
                <li
                  title="Traducción: una persona instruida, especialmente un científico
                  distinguido."
                  style={{ cursor: "help" }}
                >
                  <u>a learned person, especially a distinguished scientist</u>
                </li>
              </ol>

              <h2 className="mb-4">¿Quiénes somos?</h2>
              <p>
                Nuestra <em>visión</em> de llevar conocimiento tecnológico y
                crear oportunidades lucrativas a todo aquel que desee obtener
                conocimiento.
              </p>
              <p>
                Nuestra <em>misión</em> es crear un gremio compuesto de
                profesionales en las areas de tecnología, ciencias y artes.
                Donde los miembros puedan aprender libremente y de manera
                flexible, y tener la facilidad de ganar ingresos con sus
                habilidades aprendidas.
              </p>

              <hr className="my-5" />

              <section className="pt-4 centered grid">
                <div className="card card-team" style={{
                  // width:  "50%",
                  // margin: 'auto'
                }}>
                  <div className="card-body">
                    <img
                      className="card-team-img mb-3"
                      src="assets/img/illustrations/profiles/profile-5.png"
                      alt="..."
                    />
                    <div className="card-team-name">Alex Rain</div>
                    <div className="card-team-position mb-3">Fundador</div>
                    <p className="small mb-0">
                      Desarrollador de software web &amp; móvil
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <a
                      className="btn btn-icon btn-transparent-dark mx-1"
                      href="//github.com/PrimeSavant"
                      target="_blank"
                    >
                      <Icon name="github" />
                    </a>
                    <a
                      className="btn btn-icon btn-transparent-dark mx-1"
                      href="//instagram.com/nextsavant"
                      target="_blank"
                    >
                      <Icon name="instagram" />
                    </a>
                  </div>
                </div>
                {/* /card-team */}
              </section>
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
