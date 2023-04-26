import { Link } from 'react-router-dom'
import Button from '../Button/ButtonOne'
import './style.css'

const Hero = () => {
    return(
        <div className="hero container-fluid">
        <div className="hero_content">
          <h1 className="ms-5 fw-bold fs-2">
            Better Solutions For Your <br />
            Business
          </h1>
          <p className="hero_p ms-5">
            We are team of talented designers making websites with <br />
            Bootstrap
          </p>
          <div className="hero_button ms-5 mt-5">
            <Link className='btn btn-success' to='/login'> Login </Link>
            <span className="hero_span" href="#">
              Watch Video
            </span>
          </div>
        </div>
        <img src="src\assets\hero-img.png" alt="Banner Picture" />
      </div>      
    )
}

export default Hero