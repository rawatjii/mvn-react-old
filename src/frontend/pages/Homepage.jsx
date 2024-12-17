import React, { useState, useEffect, Suspense, useRef } from "react";
import Layout from "../components/Layout";
import Projects from "../components/homepage/Projects";
import Projectsmobile from "../components/homepage/Projectsmobile";
import OtherProjects from "../components/homepage/OtheProjects";
import OurJourney from "../components/homepage/OurJourney";
import OurTeam from "../components/homepage/OurTeam";
import OurBrand from "../components/homepage/OurBrand";
import Testimonial from "../components/homepage/Testimonial";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import HomepageVideo from "../components/MicroPage/HomepageVideo";
import CussorPointer from "../../frontend/assets/images/icons/swipe-up.gif";

import DeskopheronormalImg from "../../frontend/assets/images/hero/hero_img.webp";
import MobileheronormalImg from "../../frontend/assets/images/hero/hero_img_sm.webp";

import DeskopheronormalImg2 from "../../frontend/assets/images/hero/strip-banner.webp";
import MobileheronormalImg2 from "../../frontend/assets/images/hero/strip-banner-mobile.webp";

import ModalSelectBox from "../../common/ModalSelectBox";

// Lazy-loaded components

const Overview = React.lazy(() => import("../components/homepage/Overview"));

import homeMobileLogo from "../../frontend/assets/mvn-aeroone-logo-img.webp";
import { Container } from "react-bootstrap";
import InitialLoading from "../skeleton/Initial/Index";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const isHideModal = () => {
    setIsShowModal(false);
  };

  const smootherRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );

  useEffect(() => {
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, [localStorage.getItem("count")]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (newLoadingCount === 100) {
      const timer = setTimeout(() => {
        setNewLoadingCount(101);
      }, 500); // 1 seconds delay before removing InitialLoading

      return () => clearTimeout(timer);
    }
  }, [newLoadingCount]);

  if (newLoadingCount <= 100) {
    return (
      <InitialLoading
        loadingCount={newLoadingCount}
        setLoadingCount={setNewLoadingCount}
        fast="true"
        second="true"
      />
    );
  }

  return (
    <Layout>
      <div className="parent-box-div">
        <a
          href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
          className="hero-banner-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={isMobile ? MobileheronormalImg : DeskopheronormalImg}
            alt="Hero Banner"
            className="img-fluid hero-banner"
          />
        </a>

        <div className="slider-content">
          <p className="slider-heading">Enter The Experience Center</p>
          <div className="btns">
            <a
              href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
              className="link-btn"
            >
              Click Here
            </a>
            <button
              className="enquire_btn"
              onClick={() => setIsShowModal(true)}
              style={{ marginLeft: "27px" }}
            >
              enquire now
            </button>
          </div>
        </div>
      </div>

      <ModalSelectBox
        hide={isHideModal}
        show={isShowModal}
        type="enquire"
        // projectNameOptions={[
        //   "MVN Aero One Gurugram",
        //   "MVN Mall Gurugram",
        //   "MVN Aero One Bangalore",
        // ]}
      />

      <div className="mobile-view-box">
        <Container>
          <img
            src={homeMobileLogo}
            alt=""
            className="img-fluid mobile-img-logo"
          />
          <h4 className="logo_title">Gurugram</h4>
          <span className="status">New Launch</span>
          <p className="slogan-heading">
            Behold to Experience the complete view!
          </p>
          <a
            href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
            className="link-btn"
          >
            Click Here
          </a>
        </Container>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Overview />
      </Suspense>

      <a
        href={import.meta.env.VITE_APP_URL + "aeroone-gurgaon"}
        className="hero-banner-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={isMobile ? MobileheronormalImg2 : DeskopheronormalImg2}
          alt="Hero Banner"
          className="img-fluid degree-img"
        />
      </a>

      {isMobile ? <Projectsmobile /> : <Projects />}
      <OtherProjects />
      <OurJourney />
      <OurTeam />
      <OurBrand />
      <Testimonial />

      <div className="flex-footer-form">
        <Enquire />
        <EnquireForm projectName={"MVN Infrastructure"} />
      </div>
    </Layout>
  );
};

export default Homepage;
