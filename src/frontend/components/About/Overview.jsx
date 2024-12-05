import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LazyLoad from "react-lazyload";

import bg from "../../assets/images/about/building_bg.png";
import Desktopabout_img from "../../assets/images/about/desktopabout_img.webp";
import Mobileabout_img from "../../assets/images/about/desktopabout_img.webp";
import AnImage from "../../../common/animations/Image/Index";
import OverviewIcon from "../../assets/images/icons/heading-icon-img.png";


gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const titleRef = useRef();
  const desRefs = useRef([]);
  const imageRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Handle screen resize for mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        toggleActions: "play none none reverse",
      },
    });

    // Description animations
    desRefs.current.forEach((desRef, index) => {
      gsap.from(desRef, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2, // Staggered effect
        scrollTrigger: {
          trigger: desRef,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Image animation with class addition
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 90%",
        onEnter: () => {
          if (imageRef.current) {
            imageRef.current.classList.add("active");
          }
        },
        once: true,
      },
    });

    // Refresh ScrollTrigger on resize for layout consistency
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);
  }, []);

  return (

<>




    <section className="section about_overview pb-0">
      <div className="content_col position-relative page-header-main-heading">
        <LazyLoad>
          <img src={bg} alt="mvn-about-bg" className="img-fluid about_bg" />
        </LazyLoad>

        <Container>
          <SecTitle className="text-center color style1 mb_30">
            <img src={OverviewIcon} alt="" className="img-fluid headpage-icon"/>
            <h4 ref={titleRef} className="title">
              Building spaces <span>that help you grow</span>
            </h4>
          </SecTitle>

          <p ref={(el) => (desRefs.current[0] = el)}>
            At MVN, we are fired by an indomitable will to shape the future.
            We commenced our corporate journey in 1983 and have since evolved into a
            contemporary business entity with interests in education and real estate.
          </p>

          <p ref={(el) => (desRefs.current[1] = el)}>
            Our first educational venture, Modern Vidya Niketan School was conceived in 1983.
            Today it is one of the most respected and acclaimed schools in the field. Several
            other institutions in the NCR region bear our name and are considered the ideal
            learning grounds for budding destinies. Not content to rest on our laurels, we are
            today forging ahead with strategic forays into urban infrastructure development, real
            estate, and hospitality. We have identified prime locations for each of our projects
            and are convinced that these areas would be crucial to our resurgence and growth.
          </p>
        </Container>
      </div>

      {/* Image changes based on screen size */}
      <AnImage ref={imageRef} className="img_col">
        <img
          src={isMobile ? Mobileabout_img : Desktopabout_img}
          alt="mvn-about-bg"
          className="img-fluid about_img"
        />
      </AnImage>
    </section>

    </>


  );
};

export default Overview;
