import React, { useState, useEffect, Suspense } from "react";
import Projects from "../components/homepage/Projects";
import OtherProjects from "../components/homepage/OtheProjects";
import OurJourney from "../components/homepage/OurJourney";
import OurTeam from "../components/homepage/OurTeam";
import OurBrand from "../components/homepage/OurBrand";
import Testimonial from "../components/homepage/Testimonial";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import HomepageVideo from '../components/MicroPage/HomepageVideo';
// Lazy-loaded components

const Overview = React.lazy(() => import("../components/homepage/Overview"));

import homeMobileLogo from "../../frontend/assets/mvn-aeroone-logo-img.webp";
import { Container } from "react-bootstrap";

const Homepage = () => {
  // State for determining the screen size
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Hero Section with dynamic image rendering */}
      {/* <img
        src={isMobile ? MobileheronormalImg : DeskopheronormalImg}
        alt="Hero Banner"
        className="img-fluid hero-banner"
      /> */}
      <HomepageVideo isMobile={isMobile} />
              <div className="mobile-view-box">  
                  <Container>
                    <img src={ homeMobileLogo} alt="" className="img-fluid mobile-img-logo" />
                    <h4 className="logo_title">Gurugram</h4>
                    <span className="status">New Launch</span>
                    <a href={import.meta.env.VITE_APP_URL + 'aeroone-gurgaon1'} className="link-btn">Enter The Website </a>
                  </Container>
                </div>
      {/* Lazy-loaded components */}
      <Suspense fallback="Loading...">
        <Overview />
      </Suspense>

      {/* Other Components */}
      <Projects />
      <OtherProjects />
      <OurJourney />
      <OurTeam />
      <OurBrand />
      <Testimonial />

      {/* Enquiry Section */}
      <div className="flex-footer-form">
        <Enquire />
        <EnquireForm projectName={"MVN"} />
      </div>
    </>
  );
};

export default Homepage;
