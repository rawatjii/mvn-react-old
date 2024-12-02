import React, { useState, useEffect, Suspense } from "react";
import Projects from "../components/homepage/Projects";
import OtherProjects from "../components/homepage/OtheProjects";
import OurJourney from "../components/homepage/OurJourney";
import OurTeam from "../components/homepage/OurTeam";
import OurBrand from "../components/homepage/OurBrand";
import Testimonial from "../components/homepage/Testimonial";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";

// Lazy-loaded components
const ScrollVideo = React.lazy(() => import("../components/homepage/ScrollVideo"));
const Typology = React.lazy(() => import("../components/homepage/Typology"));
const Overview = React.lazy(() => import("../components/homepage/Overview"));

// Hero images for desktop and mobile
import DeskopheronormalImg from "../../frontend/assets/images/hero/hero-normal-img.webp";
import MobileheronormalImg from "../../frontend/assets/images/hero/hero-normal-img-mobile.webp";
import homeMobileLogo from "../../frontend/assets/mvn-aeroone-logo-img.webp";

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
      <img
        src={isMobile ? MobileheronormalImg : DeskopheronormalImg}
        alt="Hero Banner"
        className="img-fluid hero-banner"
      />
              <div className="mobile-view-box">  

<img src={ homeMobileLogo} alt="" className="img-fluid mobile-img-logo" />
<a href="https://beta1.mvn.in/aeroone-gurgaon1" className="link-btn">Enter The Website </a>

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
