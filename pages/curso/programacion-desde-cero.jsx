import React from 'react'
import Header from "parts/Header";
import Icon from "parts/Icon";

export default function ProgramaciónDesdeCero() {

  return (
    <>
      <Header
        title="Curso De Programación Desde Cero"
        // paragraph="Puedes asistir el primer día sin ningún costo."
      />
      <section className="bg-white py-10">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 pb-5">
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
                  Puedes asistir el primer día sin pagar. Debes realizar
                  el pago antes de la segunda clase o no podrás entrar.
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <h2 className="mb-4">Sobre el curso</h2>
              <p>
                Este curso fue diseñado para preparar profesionalmente a
                aquellos interesados en adentrarse en la creación de software.
                Empezarás conociendo los fundamentos de las ciencias
                computacionales con el lenguaje de programación JavaScript, el
                lenguaje mas versátil del mundo.
              </p>
              <p>
                Irás aprendiendo mediante ejercicios progresivos en el mismo día
                de la clase, solo con la teoría necesaria para desarrollarlos y
                tendrás un material teórico que servirá como complemento de lo
                que ya has aprendido.
              </p>

              <details className="pb-3">
                <summary className="mb-2 p-1">
                  <b>Parte I</b>: Los fundamentos
                </summary>
                <div className="small">
                  <p>
                    En este nivel aprenderás los fundamentos de programación,
                    que te servirán de base para dominar los próximos niveles y
                    la programación en general.
                  </p>
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
                  <p>
                    Aquí aprenderemos técnicas y metodologías avanzadas de
                    programación que usan los desarrolladores profesionales en
                    el mundo real.
                  </p>
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
                    En esta última parte aprenderás a crear aplicaciones y
                    paginas web. Utilizaras las técnicas ya aprendidas en los
                    niveles pasados + los procesos y herramientas que utilizan
                    desarrolladores profesionales en el mundo real.
                  </p>
                  <ul>
                    <li>React.js (para crear interfaces gráficas)</li>
                    <li>Node.js (para crear servidores en JavaScript)</li>
                    <li>Bases de datos</li>
                    <li>Seguridad de aplicaciones</li>
                  </ul>
                </div>
              </details>
              <hr className="my-5" />
              <h4 className="mb-4" id="certification">
                <div className="icon-stack bg-primary text-white mr-2">
                  <Icon name="arrow-right" />
                </div>
                Prueba Final y Certificado
              </h4>
              <p>
                Para obtener el certificado debes de dominar mas de un 70% del
                curso completo. Para eso debes de tomar la prueba final, que es
                un proyecto simulando un escenario real.
              </p>
              <div className="card bg-light shadow-none">
                <div className="card-body">
                  <h6>Notas</h6>
                  <ul className="mb-0">
                    <li className="text-italic">
                      Si no pudiste certificarte, puedes volver a tomar la
                      prueba final todas las veces quieras sin costo adicional.
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-5" />
              <h4>
                <div className="icon-stack bg-primary text-white mr-2">
                  <Icon name="arrow-right" />
                </div>
                El Gremio
              </h4>
              <p>
                Esta es nuestra comunidad solo disponible para todo el que se
                inscriba en el curso de forma permanente.
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
                Dentro del gremio existen niveles que representan el porcentaje
                de dominio de todo el curso. Estos niveles proveen de beneficios
                y privilegios adicionales a los miembros del gremio, mientras
                mayor el nivel, mayores privilegios.
              </p>
              <p>
                Durante el curso, se establecerán desafíos no obligatorios que
                al ser superados aumentaran el nivel del alumno.
              </p>

              <h5 className="pt-3">Anillo de Honor</h5>
              <p>
                Se otorga un anillo de honor al alumno que logre superar todos
                los desafíos y haya alcanzado el nivel máximo dentro del gremio.
              </p>
              <p>
                Este anillo totalmente gratis (cortesía de la casa) y se hará a
                la medida del alumno, en el dedo que prefiera.
              </p>

              <div className="py-5">
                <a
                  className="btn btn-block btn-success font-weight-bold"
                  href="/inscripción"
                >
                  Inscribirme en este curso
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="svg-border-rounded text-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 144.54 17.34"
            preserveAspectRatio="none"
            fill="var(--light)"
          >
            <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
          </svg>
        </div>
      </section>
    </>
  );
}
