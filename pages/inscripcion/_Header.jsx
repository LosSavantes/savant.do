import Icon from "parts/Icon";

export default function Header() {
  return (
    <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
      <div className="page-header-content pt-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <h1 className="page-header-title">
                ¿Quieres saber programar al nivel de las empresas grandes?
              </h1>
              <p className="page-header-text mb-4">
                Necesitaras un curso que valla directo al punto, a lo que realmente necesitas aprender.
              </p>
              <a
                className="btn btn-teal font-weight-500 mr-2"
                href="/curso/programacion-desde-cero"
              >
                Ver curso <Icon name="arrow-right" size={14} className="ml-2" /> 
              </a>
            </div>
            <div
              className="col-lg-6 d-none d-lg-block"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                background: "white",
                borderRadius: "50%",
              }}
            >
              <img
                className="img-fluid"
                src="assets/img/illustrations/programming.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="svg-border-rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="var(--light)"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
        </svg>
      </div>
    </header>
  );
};
