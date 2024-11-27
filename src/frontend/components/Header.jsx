import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as CONFIG from "root/config/config";
import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMicro, setIsMicro] = useState(false);
  const menusRef = useRef();
  const headerRef = useRef();
  const logoRef = useRef();
  const toggleRef = useRef();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("aeroone-gurgaon")) {
      setIsMicro(true);
    }

    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY > 2960) {
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
  }, []);

  const toggleMenu = (value) => {
    if (value == "show") {
      document.querySelector(".navbar_collapse").classList.add("show");
    } else {
      document.querySelector(".navbar_collapse").classList.remove("show");
    }
  };

  return (
    <>
      <Navbar
        ref={headerRef}
        expand="false"
        className={`${scrolled ? "fixed" : ""} ${isMicro ? "micro_nav" : null}`}
      >
        <Container>
          <Navbar.Brand ref={logoRef} className="logo">
            <Link to="/" onClick={() => toggleMenu("close")}>
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

          <Navbar.Toggle
            ref={toggleRef}
            aria-controls="basic-navbar-nav"
            onClick={() => toggleMenu("show")}
          >
            <span className="icon"></span>
          </Navbar.Toggle>

          <div id="basic-navbar-nav" className="navbar_collapse" ref={menusRef}>
            <Container>
              <div className="header">
                <Navbar.Brand className="logo">
                  <Link to={`${import.meta.env.VITE_APP_URL}`} onClick={() => toggleMenu("close")}>
                    <img
                      src={CONFIG.IMAGE_URL + "logo.png"}
                      alt="mvn-logo"
                      className="img-fluid"
                      fetchpriority="high"
                    />
                  </Link>
                </Navbar.Brand>

                <span className="close" onClick={() => toggleMenu("close")}>
                  &times;
                </span>
              </div>

              <ul className="menus">

              <li className="menuFlexBox">
                <ul>
                <li className="nav-link">
                  <NavLink to={`${import.meta.env.VITE_APP_URL}`} onClick={() => toggleMenu("close")}>
                    Home
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink
                    to={`${import.meta.env.VITE_APP_URL}about-us`}
                    onClick={() => toggleMenu("close")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-link">
                  <NavLink
                    to={`${import.meta.env.VITE_APP_URL}media-center`}
                    onClick={() => toggleMenu("close")}
                  >
                    Media Center
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink
                    to={`${import.meta.env.VITE_APP_URL}blogs/`}
                    onClick={() => toggleMenu("close")}
                  >
                    Blogs
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink
                    to={`${import.meta.env.VITE_APP_URL}career/`}
                    onClick={() => toggleMenu("close")}
                  >
                    Career
                  </NavLink>
                </li>

                <li className="nav-link">
                  <NavLink
                    to={`${import.meta.env.VITE_APP_URL}contact-us`}
                    onClick={() => toggleMenu("close")}
                  >
                    Contact Us
                  </NavLink>
                </li>
                </ul>
              </li>

              <li className="menuFlexBox middle-menu">
              <li className="nav-link">
                  <NavLink>Real Estate</NavLink>
                  <ul className="sub_menu">
                    <li className="nav-link">
                      <label htmlFor="gurgaon">Gurgaon</label>
                      <NavLink
                        to={`${import.meta.env.VITE_APP_URL}mvn-mall-gurgaon`}
                        className="new-launch"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN Mall <span className="status">New Launch</span>
                      </NavLink>
                     
                      <NavLink
                        to={`${import.meta.env.VITE_APP_URL}aeroone-gurgaon1`}
                        className="new-launch"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN Aero One <span className="status">New Launch</span>
                      </NavLink>
                    </li>

                    <li className="nav-link">
                      <label htmlFor="bangalore">Bangalore</label>
                      <NavLink
                        to={`${import.meta.env.VITE_APP_URL}aeroone-bangalore`}
                        onClick={() => toggleMenu("close")}
                      >
                        MVN Aero One
                      </NavLink>
                    </li>

                    <li className="nav-link">
                      <label htmlFor="sohna">Sohna</label>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}mvn-athens-sohna`} onClick={() => toggleMenu("close")}>
                        MVN Athens
                      </NavLink>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}mvn-athens-ph2-sohna`} onClick={() => toggleMenu("close")}>MVN Athens PH-2</NavLink>
                    </li>

                    <li className="nav-link">
                      <label htmlFor="faridabad">Faridabad</label>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}mvn-athens-faridabad`} onClick={() => toggleMenu("close")}>
                        MVN Athens
                      </NavLink>
                    </li>
                  </ul>
                </li>

              </li>

                <li className="menuFlexBox">
         
                <li className="nav-link">
                  <NavLink
                    to={"/education/"}
                    onClick={() => toggleMenu("close")}
                  >
                    Education
                  </NavLink>
                  <ul className="sub_menu">
                    <li className="nav-link">
                      <label htmlFor="school">School</label>
                      <NavLink
                        to={"https://www.mvneducation.com/sector-17/"}
                        target="_blank"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN School, Sec-17, Faridabad
                      </NavLink>
                      <NavLink
                        to={"https://www.mvnpalwal.com/"}
                        target="_blank"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN School, Palwal, Faridabad
                      </NavLink>
                      <NavLink
                        to={"https://www.mvneducation.com/mvn-aravali/"}
                        target="_blank"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN School, Aravali Hills, Faridabad
                      </NavLink>
                      <NavLink
                        to={"https://www.mvn88.com/"}
                        target="_blank"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN School, Sector 88, Greater Faridabad
                      </NavLink>
                    </li>

                    <li className="nav-link">
                      <label htmlFor="university">University</label>
                      <NavLink to={`${import.meta.env.VITE_APP_URL}mvn-university-haryana`} onClick={() => toggleMenu("close")}>
                        MVN university Haryana
                      </NavLink>
                    </li>

                    <li className="nav-link">
                      <label htmlFor="Sports-Academy">Sports Academy</label>
                      <NavLink
                        to={"https://www.mvn88.com/exercise-sports-academy/"}
                        target="_blank"
                        onClick={() => toggleMenu("close")}
                      >
                        MVN 88
                      </NavLink>
                    </li>
                  </ul>
                </li>
                </li>

                

                <ul className="sub_menu">
                  <li>
                    <label htmlFor="school">Social Media</label>
                    <ul className="social_links">
                      <li>
                        <Link onClick={() => toggleMenu("close")}>
                          <img
                            src={`${CONFIG.IMAGE_URL + "social/fb.png"}`}
                            alt="mvn-fb-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggleMenu("close")}>
                          <img
                            src={`${CONFIG.IMAGE_URL + "social/instagram.png"}`}
                            alt="mvn-insta-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggleMenu("close")}>
                          <img
                            src={`${CONFIG.IMAGE_URL + "social/linkedin.png"}`}
                            alt="mvn-linkedin-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link onClick={() => toggleMenu("close")}>
                          <img
                            src={`${CONFIG.IMAGE_URL + "social/youtube.png"}`}
                            alt="mvn-youtube-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </Container>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
