import React from 'react'
import Icon from "./Icon";
import Link from 'next/link'

export default function Nav(props) {
  const { bg = 0 } = props;

  return (
    <nav
      className={`navbar navbar-marketing navbar-expand-lg ${
        !bg ? "bg-transparent" : "bg-gradient-primary-to-secondary"
      } navbar-dark fixed-top`}
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand text-white">
            {process.env.NEXT_PUBLIC_NAME}
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon name="menu" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-lg-5">
            <li className="nav-item dropdown dropdown-sm no-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Cursos
                <Icon name="chevron-right" className="dropdown-arrow" />
              </a>
              <div className="dropdown-menu dropdown-menu-right mr-lg-n20 mr-xl-n15 animated--fade-in-up">
                <Link href="/curso/programacion-desde-cero">
                  <a className="dropdown-item py-3">
                    <div className="icon-stack bg-primary-soft text-primary mr-4">
                      <i data-feather="book-open"></i>
                    </div>
                    <div>Programación Desde Cero</div>
                  </a>
                </Link>
                {/* <div className="dropdown-divider m-0"></div> */}
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">Nosotros</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contacto</a>
              </Link>
            </li>
          </ul>
          <Link href="/inscripcion">
            <a className="btn font-weight-500 ml-lg-4 btn-teal">
              Inscribirse <Icon name="arrow-right" size={14} className="ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
