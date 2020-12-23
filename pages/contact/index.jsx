import Head from "next/head";
import Header from "library/Header";
import { useMemo } from "react";

export default function index() {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE
  const parsedPhone = useMemo(()=> {
    const d = phone.match(/(\d)(\d{3})(\d{3})(\d{4})/);
    return `+${d[1]} ${d[2]}-${d[3]}-${d[4]}`
  }, [])

	return (
    <>
      <Head>
        <title>Contacto</title>
      </Head>
      <Header
        title="Contacto"
        paragraph="Aquí estamos para responder todas tus preguntas"
      />

      <section className="bg-white py-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Dinos que necesitas</h2>
              <p className="lead mb-5">
                Haz click en el botón de la derecha inferior para iniciar una
                conversación con nosotros. O usa alguna de estas vías:
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5">
            {/* <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <div className="section-preheading">Escríbenos un mensaje</div>
              <a href="#!">Abrir el chat</a>
            </div> */}
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <div className="section-preheading">WhatsApp</div>
              <a href={`https://wa.me/${phone}`} target="_blank">{parsedPhone}</a>
            </div>
            <div className="col-lg-4 text-center">
              <div className="section-preheading">Email</div>
              <a href={`mailto:${process.env.NEXT_PUBLIC_INFO_EMAIL}`}>
                {process.env.NEXT_PUBLIC_INFO_EMAIL}
              </a>
            </div>
          </div>
          {/* <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="text-dark" for="inputName">
                  Full name
                </label>
                <input
                  className="form-control py-4"
                  id="inputName"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="text-dark" for="inputEmail">
                  Email
                </label>
                <input
                  className="form-control py-4"
                  id="inputEmail"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="text-dark" for="inputMessage">
                Message
              </label>
              <textarea
                className="form-control py-3"
                id="inputMessage"
                type="text"
                placeholder="Enter your message..."
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary mt-4" type="submit">
                Submit Request
              </button>
            </div>
          </form> */}
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
