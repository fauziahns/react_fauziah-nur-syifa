const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid shadow-sm pb-2">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link active text-light bg-primary rounded px-3 me-3" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary me-3" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary me-3" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary me-3" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary me-3" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
