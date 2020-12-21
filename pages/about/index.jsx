import Header from "parts/Header";

export default function index(props) {
	return (
    <>
      <Header title="Sobre Nosotros" paragraph="TODO" />
      <section className="py-10">
        <div className="container">
          <div className="row align-items-center pb-10">
            <div className="col-lg-6 text-center">
              <img
                src="https://via.placeholder.com/400"
                className="rounded-circle"
              />
            </div>
            <div className="col-lg-6">
              <h3 style={{ fontSize: "2.5rem" }}>Alex Rein</h3>
              <p className="lead">Desarrollador Full-Stack</p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center">
              <img
                src="https://via.placeholder.com/400"
                className="rounded-circle"
              />
            </div>
            <div className="col-lg-6">
              <h3 style={{ fontSize: "2.5rem" }}>Johan Pimentel</h3>
              <p className="lead">Desarrollador Full-Stack</p>
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
