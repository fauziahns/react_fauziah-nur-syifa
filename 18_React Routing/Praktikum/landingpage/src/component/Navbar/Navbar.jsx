import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
<nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div 
      className="collapse navbar-collapse position-absolute top-0 end-0 p-2 " 
      id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact
            className={"nav-link bg-primary text-light rounded"} 
            to="/">Home</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink 
            className={"nav-link text-primary"} 
            to="/Product">Product</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink 
            className={"nav-link text-primary"} 
            to="/">Features</NavLink>
        </li>
        <li className="nav-item ms-3">
          <NavLink 
            className={"nav-link text-primary"} 
            to="/">FAQs</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar