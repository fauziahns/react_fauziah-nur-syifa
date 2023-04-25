import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
          <img src=".\src\assets\logo.png" alt="logo" width="100" height="50" class="d-inline-block align-text-top" />
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
              <NavLink exact
                className={"nav-link"} 
                to="/">Home</NavLink>
              </li>
              <li class="nav-item">
              <NavLink exact
                className={"nav-link "} 
                to="/About">About</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-2" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar