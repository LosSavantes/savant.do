import Header from "parts/Header";

export default function index(props) {
	return (
    <>
      <Header title="Sobre Nosotros" paragraph="TODO" />
      <div className="container">
        <section className="py-10">
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
        </section>
      </div>
    </>
  );
};
