import Link from 'next/link'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer py-5 mt-auto bg-dark footer-dark">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <div className="footer-brand">
              {process.env.NEXT_PUBLIC_NAME}&reg;{" "}
            </div>
            {/* <div className="mb-3">Design made easy</div> */}
            <div className="my-3 justify-content-center track">
              <Link href="/curso/programacion-desde-cero">
                <a className="text-nowrap">Programación Desde Cero</a>
              </Link>
              <Link href="/about">
                <a className="">Nosotros</a>
              </Link>
              <Link href="/contact">
                <a className="">Contacto</a>
              </Link>
              <Link href="/inscripcion">
                <a>Inscripción</a>
              </Link>
            </div>
            <div className="icon-list-social justify-content-center">
              <a
                className="icon-list-social-link"
                href="//instagram.com/lossavantes"
              >
                <Icon name="instagram" />
              </a>
              <a
                className="icon-list-social-link"
                href="//github.com/LosSavantes"
              >
                <Icon name="github" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <span className="col-md-6 small py-1">
            &copy; {process.env.NEXT_PUBLIC_NAME}&reg; (
            {new Date().getFullYear()})
          </span>
          <div className="col-md-6 justify-content-md-end small track">
            <Link href="/privacy">
              <a className="">Política de privacidad</a>
            </Link>
            <Link href="/terms">
              <a className="">Términos &amp; Condiciones</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
