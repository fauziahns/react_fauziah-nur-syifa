const Footer = ({className}) => {
    return (
<footer className={className}>
  <div className="container-fluid text-center">
    <div className="row bg-dark ">
      <div className="col-8 d-flex flex-row mb-4">
        <img
          src=".\src\assets\image.png"
          className="rounded float-start logo"
          alt="papau's space logo"
        />
        <span className="m-4 mt-5 text-start d-flex flex-column">
          Papau's Space <br />
          Thank you for visiting my website!
          <div className="d-flex felx-row mt-2 icon">
            <a href="https://github.com/fauziahns">
              <i className="fa-brands fa-github" />
            </a>
            <a href="https://www.behance.net/fauziahnursyifa">
              <i className="fa-brands fa-behance ms-2" />
            </a>
            <a href="https://www.instagram.com/fauziahnss/">
              <i className="fa-brands fa-instagram ms-2" />
            </a>
          </div>
        </span>
        <div />
      </div>
      <div className="col-4 text-light text-start mb-3 right">
        <p className="mt-5">
          Jln. Bakti Mas II, Cimahi, Jawa Barat, Indonesia.
        </p>
        <p>089630073190</p>
        <button type="button" className="btn btn-light">
          <a
            href="mailto:fauziahnsf@gmail.com"
            className="text-decoration-none text-dark"
          >
            Contact Me
          </a>
        </button>
      </div>
    </div>
    <div className="row copyright">
      <p className="mt-2 text-center ">© 2023 Fauziah Nur Syifa</p>
    </div>
  </div>
</footer>

    )
}

export default Footer