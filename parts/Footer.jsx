import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer py-5 mt-auto bg-dark footer-dark">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-9">
            <div className="footer-brand">{process.env.NEXT_PUBLIC_NAME} </div>
            {/* <div className="mb-3">Design made easy</div> */}
            <div className="my-3">
              <Link href="curso/programacion-desde-cero">
                <a>Programación Desde Cero</a>
              </Link>
              <Link href="/about">
                <a className="inline-block ml-3">Nosotros</a>
              </Link>
              <Link href="/contact">
                <a className="inline-block mx-3">Contacto</a>
              </Link>
              <Link href="/inscripcion">
                <a>Inscripción</a>
              </Link>
            </div>
            <div className="icon-list-social justify-content-center">
              <a className="icon-list-social-link" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="icon-list-social-link" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="icon-list-social-link" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">Product</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#!">Landing</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Pages</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Sections</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Documentation</a>
                  </li>
                  <li>
                    <a href="#!">Changelog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <div className="text-uppercase-expanded text-xs mb-4">
                  Technical
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#!">Documentation</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Changelog</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Theme Customizer</a>
                  </li>
                  <li>
                    <a href="#!">UI Kit</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <div className="text-uppercase-expanded text-xs mb-4">Includes</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#!">Utilities</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Components</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Layouts</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Code Samples</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Products</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Affiliates</a>
                  </li>
                  <li>
                    <a href="#!">Updates</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="text-uppercase-expanded text-xs mb-4">Legal</div>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#!">License</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <hr className="my-5" />
        <div className="row align-items-center">
          <div className="col-md-6 small">
            &copy; {process.env.NEXT_PUBLIC_NAME}{" "}
            {Math.min(2021, new Date().getFullYear())}
          </div>
          <div className="col-md-6 text-md-right small">
            <Link href="/privacy">
              <a>Política de privacidad</a>
            </Link>{" "}
            <Link href="/refunds">
              <a className="mx-3">Política de devoluciones</a>
            </Link>
            <Link href="/terms">
              <a>Términos &amp; Condiciones</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
