import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import twitterIcon from '../assets/images/icons/social/twitter.png';
import googlePlus from '../assets/images/icons/social/google-plus.png';
import fbIcon from '../assets/images/icons/social/fb.png';
import instaIcon from '../assets/images/icons/social/instagram.png';
import BtnIcon from '../assets/images/icons/send.png';
// import FormBgImg from '../assets/images/icons/form-bg.png';
import FooterMiddleLogo from '../assets/images/logomvn.png';
import FooterBgImg from '../assets/images/footer-bg-img.jpg';

const Footer = () => {
  return (
    <footer>

        <LazyLoad height={200}>
              <img src={FooterBgImg} alt="mvn-about-bg" className="img-fluid about_bg" />
            </LazyLoad>

      <Container className="footer-bottom-border">
        <Row>
          <Col xs={12} md={6} lg={6}>

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
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="box searchbox-input-box">
              <div className="subscribe">
                <input className="form-control" type="text" placeholder="Your Email" name="" />
                <button>Subscribe Now</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="flex-row">
          <div className="custom-col">
            <div className="box office-details-box">
              <h4 className="footer-second-heading">Contact Details</h4>
              <p className="address-details"><span>Meet:</span> MVN Group, 2nd Floor, Sadahalli Gate, Bangalore - 562157, MVN Athens Gurugram Sector 5, Gurugram, Haryana-122102, Faridabad- Sihi Gate Road, Ballabhgarh, Faridabad, Haryana-121004</p>
              <p className="phone-details"><span>Talk:</span> +91 88267 93148</p>
              <p className="mail-details"><span>Write:</span> info@mvngroup.in</p>
            </div>
          </div>
          <div className="custom-col flex-middel-col">
            <img src={FooterMiddleLogo} alt="" className="footerM" />
          </div>
          <div className="custom-col">
            <div className="box footer-links-box">
              <div className="inner-box">
                <div className="footer-menu">
                <h4 className="footer-second-heading">Important Links</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Real Estate</a></li>
                    <li><a href="#">Educations</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <h4 className="footer-second-heading">More Links</h4>
                  <ul>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">gallery</a></li>
                    <li><a href="#">Csr</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Disclaimer</a></li>
                  </ul>
                </div>
              </div>
              </div>
          </div>
        </div>
        <Col  xs={12} md={12} lg={12} className="text-center">
        <div className="border-top-footer">
        <p className="main-pera"><i className="fa fa-copyright" aria-hidden="true"></i> 2024 - MVN Group. All Right Reserved.
        |<a href="http://gtftechnologies.com/" target="blank"> Curated by: <b>GTF Technologies</b></a></p>
        </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
