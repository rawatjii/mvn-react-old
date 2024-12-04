import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import { useEffect, useRef, useState } from "react";

import "./Header.css";

import { gsap } from "gsap";
import Button from "../../common/Button/Button";
import subscribeBtn from '../assets/images/icons/subscribe_btn.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const channelUrl = "https://www.youtube.com/@MVNInfrastructures?sub_confirmation=1";

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [otherProjectsOpen, setOtherProjectsOpen] = useState(false);

  const menusRef = useRef();
  const headerRef = useRef();
  const logoRef = useRef();
  const toggleRef = useRef();
  const callBtnRef = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("aeroone-gurgaon")) {
      setIsMicro(true);
    }

    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY > 2500) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      // if (window.scrollY > 50) {
      //   setScrolled(true);
      // } else {
      //   setScrolled(false);
      // }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // logo animation

    gsap.from(logoRef.current, {
      y: 30, // Move 50px from the bottom
      opacity: 0, // Start with 0 opacity (invisible)
      duration: 1, // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect
    });

    // menu toggle animation
    gsap.from(toggleRef.current, {
      y: 15, // Move 50px from the bottom
      opacity: 0, // Start with 0 opacity (invisible)
      duration: 0.6, // Animation duration in seconds
      delay: 0.4,
      // ease: "power2" // Easing function for a smooth effect
    });

    // menu toggle animation
    gsap.from(callBtnRef.current, {
      y: 15, // Move 50px from the bottom
      opacity: 0, // Start with 0 opacity (invisible)
      duration: 0.6, // Animation duration in seconds
      delay: 0.4,
      // ease: "power2" // Easing function for a smooth effect
    });
  }, []);

  const toggleMenu = (value) => {
    if (value == "show") {
      document.querySelector(".navbar_collapse").classList.add("show");
    } else {
      document.querySelector(".navbar_collapse").classList.remove("show");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      setInnerWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => null);
  }, []);

  const pathnamesToHideMiddleMenu = ["/aeroone-gurgaon1"];
  return (
    <>
      <Navbar
        ref={headerRef}
        expand="false"
        className={`${scrolled ? "fixed" : ""} ${isMicro ? "micro_nav" : null}`}
      >
        <Container>
          <Navbar.Brand ref={logoRef} className="logo">
            <Link onClick={() => toggleMenu("close")} to={import.meta.env.VITE_APP_URL}>
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn-logo"
                className="img-fluid d-none d-md-block"
                fetchpriority="high"
              />
              <img
                src={CONFIG.IMAGE_URL + "logo_white.webp"}
                alt="mvn-logo"
                className="img-fluid d-md-none"
                fetchpriority="high"
              />
            </Link>
          </Navbar.Brand>

          <div className="right">
            <a href="tel:+918062525105" className="call_btn" ref={callBtnRef}>
              <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="" />
            </a>
            <Navbar.Toggle
              ref={toggleRef}
              aria-controls="basic-navbar-nav"
              onClick={() => toggleMenu("show")}
            >
              <span className="icon"></span>
            </Navbar.Toggle>
          </div>

          <div id="basic-navbar-nav" className="navbar_collapse" ref={menusRef}>
            <div class="overlay-content">
              <div class="inner-overlay">
                <div class="video-area">
                  <img src={CONFIG.IMAGE_URL + 'renders/elevation/2.webp'} alt="" />
                </div>


                <div class="menu-area">
                  <div class="inner-menu">
                    <div class="top-area">
                      <img src="images/mvn-logo.png" />
                      <div class="inner-logo">
                        <p><span>Office:</span> 58A/1, First Floor, Kalu Sarai, New Delhi 110016</p>
                        <p><span>Phone:</span> (+91)-9999 8888 222, (+91)-9999 8888 222</p>
                      </div>
                    </div>

                    <div class="bottom-area">
                      <div class="inner-bottom-area">
                        <div class="left">
                          <h4>Gurugram</h4>
                        <ul>
                          <li><a href="#">MVN Mall </a><a href="#"><span>New Launch</span></a></li>
                          <li><a href="#">MVN Aero One </a><a href="#"><span>New Launch</span></a></li>
                        </ul>

                        <h4>Sohna</h4>
                        <ul>
                          <li><a href="#">MVN Athens</a></li>
                          <li><a href="#">MVN Athens PH-2</a></li>
                        </ul>

                        <h4>Bangalore</h4>
                        <ul>
                          <li><a href="#">MVN</a></li>
                        </ul>

                        <h4>Faridabad</h4>
                        <ul>
                          <li><a href="#">MVN Mall</a></li>
                          <li><a href="#">MVN Athens</a></li>
                        </ul>
                        </div>

                        <div class="right">
                          <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Contact Us</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="closebtn-area">
                  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> Close</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
