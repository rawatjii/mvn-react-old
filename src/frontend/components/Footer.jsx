import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import twitterIcon from '../assets/images/icons/social/twitter.png';
import googlePlus from '../assets/images/icons/social/google-plus.png';
import fbIcon from '../assets/images/icons/social/fb.png';
import instaIcon from '../assets/images/icons/social/instagram.png';
import BtnIcon from '../assets/images/icons/send.png';
// import FormBgImg from '../assets/images/icons/form-bg.png';

const Footer = ()=>{
  return(
    <footer>
      <Container className="footer-bottom-border">
        <Row>
          <Col xs={6} md={6} lg={6}>

          <div className="social_links text-center">
            {/* <h5 className="title">Subscribe Now</h5>
            <form action="">
              <input type="email" maxLength="50" required placeholder="Your Email Id: Example@gmail.com" />
              <button className="bt"><img src={BtnIcon} alt="" className="img-fluid btn-arrow-img" /> </button>
            </form> */}

              <ul>
                <li>
                  <a href="" className="icon">
                    <img src={twitterIcon} alt="mvn-twitter-icon" className="img-fluid " />
                  </a>
                </li>

                <li>
                  <a href="" className="icon">
                    <img src={googlePlus} alt="mvn-google-plus-icon" className="img-fluid" />
                  </a>
                </li>

                <li>
                  <a href="" className="icon">
                    <img src={fbIcon} alt="mvn-fb-icon" className="img-fluid" />
                  </a>
                </li>

                <li>
                  <a href="" className="icon">
                    <img src={instaIcon} alt="mvn-insta-icon" className="img-fluid" />
                  </a>
                </li>

              </ul>
            </div>

          </Col>
          <Col xs={6} md={6} lg={6}>
          <div class="box searchbox-input-box">
              <div class="subscribe">
                <input class="form-control" type="text" placeholder="Your Email" name=""/>
                <button>Subscribe Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="important_links text-center">
          <h5 className="title">
            Important Links
          </h5>

          <ul className="">
            <li>
              <NavLink to='#'>Home</NavLink>
            </li>

            <li>
              <NavLink to='#'>About Us</NavLink>
            </li>

            <li>
              <NavLink to='#'>Real Estate</NavLink>
            </li>

            <li>
              <NavLink to='https://www.mvneducation.com/'>Education</NavLink>
            </li>

            <li>
              <NavLink to='#'>Contact Us</NavLink>
            </li>

            <li>
              <NavLink to='#'>Blogs</NavLink>
            </li>

            <li>
              <NavLink to='#'>Career</NavLink>
            </li>

            <li>
              <NavLink to='#'>Gallery</NavLink>
            </li>

            <li>
              <NavLink to='#'>CSR</NavLink>
            </li>

          </ul>
        </div>

        <div className="contact_details text-center">
          <h5 className="title">
            Contact Details
          </h5>

          <ul>
            <li>
              <p>Bangalore- MVN Group, 2nd Floor, Above McDonald's, Jansons Mall, Downtown Park II, Menakunte, Sadahalli Gate, Bangalore - 562157</p>
              <p>Gurugram- MVN Athens Gurugram Sector 5, Gurugram, Haryana-122102</p>
              <p>Faridabad- Sihi Gate Road, Tigaon Rd, Shiv Colony, Ballabhgarh, Faridabad, Haryana-121004</p>
            </li>
            <li>
              {/* <a href="tel:">(+91) 8826793148</a>, */}
              <a href="tel:">(+91) 88267 93148</a>
            </li>
            <li>
              <a href="mailto:">info@mvngroup.com</a>,
              <a href="mailto:">support@mvngroup.com</a>
            </li>
          </ul>
        </div>



        <div className="flex-bottom-border">
          <div className="disclaimer text-center">
            <Link to="">Disclaimer & Privacy Policy</Link>
          </div>

          <div className="copyright">
          2024-MVN Group. All Right Reserved <span>Curated by: <Link to="#">GTF Technologies</Link></span>
          </div>
        </div>

      </Container>
      
    </footer>
  )
}

export default Footer;