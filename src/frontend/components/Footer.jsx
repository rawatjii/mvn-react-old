import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import twitterIcon from '../assets/images/icons/social/twitter.png';
import googlePlus from '../assets/images/icons/social/google-plus.png';
import fbIcon from '../assets/images/icons/social/fb.png';
import instaIcon from '../assets/images/icons/social/instagram.png';

const Footer = ()=>{
  return(
    <footer>
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
              <NavLink to='#'>Education</NavLink>
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
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </li>
            <li>
              <a href="tel:">(+91) 88267 93148</a>,
              <a href="tel:">(+91) 88267 93148</a>
            </li>
            <li>
              <a href="mailto:">info@mvngroup.com</a>,
              <a href="mailto:">support@mvngroup.com</a>
            </li>
          </ul>
        </div>

        <div className="social_links text-center">
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

        <div className="disclaimer text-center">
          <Link to="">Disclaimer & Privacy Policy</Link>
        </div>

        <div className="copyright">
        2024-MVN Group. All Right Reserved <span>Curated by: <Link to="#">GTF Technologies</Link></span>
        </div>

      </Container>
      
    </footer>
  )
}

export default Footer;