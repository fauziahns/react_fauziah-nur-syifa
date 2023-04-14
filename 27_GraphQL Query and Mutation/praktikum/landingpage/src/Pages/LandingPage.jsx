import Hero from "../component/Hero/Hero"
import Navbar from "../component/Navbar/Navbar"
import ProductList from "../component/ProductList/ProductList"
import './styleLandingPage.css'

const LandingPage = () => {
    return(
        <>
        <Navbar/>
        <Hero/>
        <ProductList/>
        <footer className="footer">
        <div className="news">
          <h3 className="news_h3">Join Our Newsletter</h3>
          <form action="">
            <label htmlFor="newsletter" id="news_label">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna
            </label>
            <div className="news_button">
              <input type="text" name="newsletter" id="newsletters" required="" />
              <input
                type="submit"
                name=""
                id="news_submit"
                defaultValue="Subscribe"
              />
            </div>
          </form>
        </div>
        <div className="futher_information">
          <div className="grid_item">
            <h3>ARSHA</h3>
            <p className="grid_content">
              A108 Adam Street <br />
              New York, NY 535022 <br />
              United States
              <br />
              <br />
              Phone: +1 5589 55488 55 <br />
              Email: info@example.com
            </p>
          </div>
          <div className="grid_item">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="grid_item">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="grid_item">
            <h3>Our Social Networks</h3>
            <span className="grid_content">
              Cras fermentum odio eu feugiat lide par <br /> naso tierra videa magna
              derita valies
            </span>
            <div className="icon">
              <a href="#">
                <i className="material-icons">facebook</i>
              </a>
              <a href="#">
                <i className="material-icons">facebook</i>
              </a>
              <a href="#">
                <i className="material-icons">facebook</i>
              </a>
              <a href="#">
                <i className="material-icons">facebook</i>
              </a>
              <a href="#">
                <i className="material-icons">facebook</i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <p>© Copyright Arsha. All Rights Reserved</p>
          <p>
            Designed by{" "}
            <a href="#" className="footer_link">
              BootstrapMade
            </a>
          </p>
        </div>
      </footer>
        </>
    )
}

export default LandingPage