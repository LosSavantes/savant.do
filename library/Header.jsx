export default function Header(props) {
  const {
    title = "",
    paragraph = "",
    nextColor = "white",
  } = props;
	
  return (
    // <!-- Page Header-->
    <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
      <div className="page-header-content pt-10">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h1 className="page-header-title mb-3">{title}</h1>
              <p className="page-header-text m-0">{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="svg-border-rounded text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill={nextColor}
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
        </svg>
      </div>
    </header>
  );
};
