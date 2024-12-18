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
import { Container } from "react-bootstrap";
import InitialLoading from "../skeleton/Initial/Index";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

import ModalSelectBox from "../../common/ModalSelectBox";

// Lazy-loaded components

const Overview = React.lazy(() => import("../components/homepage/Overview"));

import * as CONFIG from '../../config/config'

import DeskopheronormalImg from "../../frontend/assets/images/hero/hero_img.webp";
import MobileheronormalImg from "../../frontend/assets/images/hero/hero_img_sm.webp";

// banner2
import banner2_desktop from "../../frontend/assets/images/hero/hero_img2.webp";
import banner2_mobile from "../../frontend/assets/images/hero/hero_img_sm2.webp";

import DeskopheronormalImg2 from "../../frontend/assets/images/hero/strip-banner.webp";
import MobileheronormalImg2 from "../../frontend/assets/images/hero/strip-banner-mobile.webp";

import homeMobileLogo from "../../frontend/assets/mvn-aeroone-logo-img.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import CustomModal from "../../common/Modal";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Homepage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isOffer, setIsOffer] = useState(false);
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const isHideModal = () => {
    setIsShowModal(false);
    setIsOffer(false)
  };

  const showCustomModal = (offer)=>{
    if(offer){
      setIsOffer(true)
      setIsShowModal(true);
    }else{
      setIsShowModal(true);
    }
  }

  const smootherRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [newLoadingCount, setNewLoadingCount] = useState(
    Number(localStorage.getItem("count"))
  );

  useEffect(() => {
    if (newLoadingCount >= 100) {
      const timer = setTimeout(() => {
        setNewLoadingCount(101);
        setIsPageLoaded(true); // Mark page as loaded
      }, 500); // 1 seconds delay before removing InitialLoading

      return () => clearTimeout(timer);
    }
  }, [newLoadingCount]);

  useEffect(() => {
    localStorage.removeItem('count');
    setNewLoadingCount(Number(localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isPageLoaded) {
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
              className="btn ink-btn btn_style3 r_100"
            >
              Click Here
            </a>
            {/* <button
              className="enquire_btn"
              onClick={() => setIsShowModal(true)}
              style={{ marginLeft: "27px" }}
            >
              enquire now
            </button> */}
          </div>
        </div>
      </div>

      

      {/* <ModalSelectBox
        hide={isHideModal}
        show={isShowModal}
        type="enquire"
        offer={isOffer ? true:false}
        // projectNameOptions={[
        //   "MVN Aero One Gurugram",
        //   "MVN Mall Gurugram",
        //   "MVN Aero One Bangalore",
        // ]}
      /> */}

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
            className="btn btn_style3 r_100 mt-3 mt-md-4"
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

      <div className="offers_section">
        <div className="single" style={{cursor:'pointer'}} onClick={()=>showCustomModal(false)}>
          <video src={CONFIG.IMAGE_URL + "offer/offer1.mp4"} loop muted autoPlay className="img-fluid d-none d-md-block" playsInline />
          <video src={CONFIG.IMAGE_URL + "offer/offer1_sm.mp4"} loop muted autoPlay className="img-fluid d-md-none" playsInline />
        </div>

        <div className="single" style={{cursor:'pointer'}} onClick={()=>showCustomModal(true)}>
          <img
            src={isMobile ? CONFIG.IMAGE_URL + 'offer/offer2_sm.webp' : CONFIG.IMAGE_URL + 'offer/offer2.webp'}
            alt="Hero Banner"
            className="img-fluid hero-banner"
          />
        </div>
      </div>

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

      <CustomModal hide={isHideModal} show={isShowModal} type="enquire" projectName="MVN Aeroone" isOffer={isOffer}  />
    </Layout>
  );
};

export default Homepage;
