import React from "react";
import Header from "parts/Header";
import Icon from "parts/Icon";
import Heading from "./_Heading";
import Head from "next/head";

export default function ProgramaciónDesdeCero() {
  return (
    <>
      <Head>
        <title>Curso de programación desde cero</title>
      </Head>
      <Header
        title="Curso De Programación Desde Cero"
        paragraph="Aprende el lenguaje JavaScript, el mas versátil del mundo"
      />
      <section className="bg-white py-10">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <ul className="list-group list-group-flush list-group-careers">
                <li className="list-group-item">
                  <b>Duración:</b> 4 meses
                </li>
                <li className="list-group-item align-items-start ">
                  <b>Días:</b>{" "}
                  <span className="text-right">
                    Sábado y Domingo <br /> 1:00 PM - 5:00 PM
                  </span>
                </li>
                <li className="list-group-item align-items-start">
                  <b>Tiempo:</b>4 horas
                </li>
                <li className="list-group-item">
                  <b>Precio:</b> <span>RD$ 2,500 / mes</span>
                </li>
                <li className="text-info font-weight-bold  list-group-item align-items-start">
                  Puedes asistir el primer día gratis. Realiza el pago antes de
                  la segunda clase o no podrás entrar.
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <section>
                <h2 className="mb-4">
                  <div className="icon-stack bg-primary text-white mr-2">
                    <Icon name="arrow-right" />
                  </div>
                  Requerimientos
                </h2>
                <p>
                  Ninguno, este curso esta hecho para principiantes sin ningun
                  conocimiento previo de programacion.
                </p>
                {/* <p>
                Irás aprendiendo mediante ejercicios progresivos en el mismo día
                de la clase, solo con la teoría necesaria para desarrollarlos y
                tendrás un material teórico que servirá como complemento de lo
                que ya has aprendido.
              </p> */}
              </section>

              <hr className="my-5" />

              <section>
                <h2 className="mb-4">
                  <div className="icon-stack bg-primary text-white mr-2">
                    <Icon name="arrow-right" />
                  </div>
                  Contenido del curso
                </h2>
                <p>
                  En este curso aprenderás los fundamentos del desarrollo de
                  software con el lenguaje de programación <em>JavaScript</em>,
                  el lenguaje mas versátil del mundo en la actualidad.
                </p>
                <p>
                  Este lenguaje tienes sus inicios en las páginas web, pero con
                  el tiempo ha ido evolucionando a tal punto que se puede hacer
                  cualquier cosa; apps de teléfono, apps de escritorio, paginas
                  web, servidores, y hasta programar robots.
                </p>
                <details className="pb-3">
                  <summary className="mb-2 p-1">
                    <b>Parte I</b>: Los fundamentos
                  </summary>
                  <div className="small">
                    <ul className="">
                      <li>Tipos de datos y variables</li>
                      <li>Expresiones</li>
                      <li>Estructuras de control</li>
                      <li>Funciones</li>
                      <li>Estructuras de datos </li>
                      <li>Programación Orientada a Objetos (OOP, POO)</li>
                      <li>Manejo de errores</li>
                    </ul>
                  </div>
                </details>
                <details className="pb-3">
                  <summary className="mb-2 p-1">
                    <b>Parte II</b>: Técnicas avanzadas
                  </summary>
                  <div className="small">
                    <ul>
                      <li>Expresiones regulares (Regex)</li>
                      <li>Recursión</li>
                      <li>Promesas</li>
                      <li>Generadores</li>
                      <li>Objetos complejos</li>
                      <li>Optimización de memoria</li>
                      <li>Calidad de código</li>
                      <li>Pruebas de unidad</li>
                      <li>Debugging</li>
                    </ul>
                  </div>
                </details>
                <details className="">
                  <summary className="mb-2 p-1">
                    <b>Parte III</b>: El desarrollo de una aplicación
                  </summary>
                  <div className="small">
                    <p>
                      Aprenderás a crear una aplicación web desde cero junto con
                      todos tus compañeros. Utilizarás todos los conocimientos
                      cubiertos hasta este punto para lograr la creación
                      completa de un proyecto.
                    </p>
                  </div>
                </details>
              </section>

              <hr className="my-5" />
              <section>
                <Heading>Metodología</Heading>
                <p>
                  Después de cada explicación, realizaras una practica simple
                  con los conocimientos que ya aprendiste. Las practicas son
                  progresivas, y nunca serán demasiado difíciles ni demasiado
                  fáciles, y tampoco aburridas.
                </p>
                <p>
                  Al final del curso, trabajaras en equipo con el resto de la
                  clase, para crear un solo proyecto completo en una simulación
                  realista, lo que te enseñara como trabajan los equipos en la
                  vida real para desarrollar software.
                </p>
              </section>

              <hr className="my-5" />

              <section>
                <h4>
                  <div className="icon-stack bg-primary text-white mr-2">
                    <Icon name="arrow-right" />
                  </div>
                  El Gremio
                </h4>
                <p>
                  Esta es nuestra comunidad solo disponible para quienes se
                  inscriban en el curso. Esta membresía es permanente y no tiene
                  costo.
                </p>
                <p>Entre los beneficios que ofrece el gremio se destacan:</p>
                <ul>
                  <li>
                    Seguir en comunicación con todos los miembros del curso,
                    incluyendo el instructor.
                  </li>
                  <li>Información sobre posiciones laborales abiertas.</li>
                  <li>Noticias relacionadas con software y tecnología.</li>
                  <li>Tutoriales complementarios gratuitos.</li>
                </ul>

                <h5 className="pt-3">Desafíos y Niveles</h5>
                <p>
                  Luego de terminado el curso, podrás participar en desafíos que
                  te permitirán subir de nivel. Cada nivel otorga privilegios
                  extra dentro del gremio, tales como:
                </p>
                <ul>
                  <li>Prioridad en ofertas laborales</li>
                  <li>Tutoriales exclusivos, sin costo</li>
                  <li>Comisiones oficiales asignadas por Savantes</li>
                  <li>Descuentos en otros cursos</li>
                  <li>Regalos aleatorios</li>
                </ul>

                <h5 className="pt-3">Anillo de Honor</h5>
                <p>
                  Alcanza el nivel máximo dentro del gremio y recibirás un
                  anillo de honor como premio por tu dedicación. Este anillo es
                  cortesía de la casa y se hará a tu medida.
                </p>

                <div className="py-5">
                  <a
                    className="btn btn-block btn-success font-weight-bold"
                    href="/inscripcion"
                  >
                    Inscribirme en este curso
                  </a>
                </div>
              </section>
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
}
