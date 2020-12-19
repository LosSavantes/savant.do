export default function Terms(props) {
	const { terms } = props;
  return (
    <section className="bg-white py-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 mt-5">
            <div dangerouslySetInnerHTML={{ __html: terms }} />
            <hr className="my-5" />
            <div className="card z-1 mb-n10">
              <div className="card-body text-center py-5">
                <h2 className="mb-3">Estamos para ayudarte</h2>
                <a className="btn btn-primary font-weight-500" href="/contact">
                  Contáctanos
                </a>
              </div>
            </div>
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
  );
};

export async function getStaticProps() {
	const fs = require('fs')
	const marked = require('marked')
	const path = require('path').resolve("public/md/terms.md")
	const content = fs.readFileSync(path, "utf8");

  return {
    props: {
			navBackground: 1,
			terms: marked(content)
    },
  };
}
