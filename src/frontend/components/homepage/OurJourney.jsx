import React, { useEffect, useRef, useState } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import diamondIcon from "../../assets/images/icons/diamond.png";
import expIcon from "../../assets/images/icons/journey/new-icons/icon-1.png";
import citiesIcon from "../../assets/images/icons/journey/new-icons/icon-2.png";
import completeProjectsIcon from "../../assets/images/icons/journey/new-icons/icon-3.png";
import ongoingProjectsIcon from "../../assets/images/icons/journey/new-icons/icon-4.png";
import millionSqftIcon from "../../assets/images/icons/journey/new-icons/icon-5.png";
import deliveryIcon from "../../assets/images/icons/journey/new-icons/icon-6.png";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  { icon: expIcon, title: "Years Experience", value: "40+" },
  { icon: citiesIcon, title: "Cities", value: "20" },
  { icon: completeProjectsIcon, title: "Completed Projects", value: "9" },
  { icon: ongoingProjectsIcon, title: "Ongoing Projects", value: "4" },
  { icon: millionSqftIcon, title: "Million Square Feet", value: "2.3" },
  { icon: deliveryIcon, title: "On time Delivery", value: "100%" },
];

const OurJourney = () => {
  const titleRef = useRef();
  const contentRef = useRef([]);
  const journeyRef = useRef();
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = () => {
    // Title Animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    // List Items Animation
    contentRef.current.forEach((conRef) => {
      if (conRef) {
        gsap.from(conRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: conRef,
            start: "top 95%",
          },
        });
      }
    });
  };

  useEffect(() => {
    if (imagesLoaded === journeyData.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section className="section journey_section pb-0">
      <Container>
        <SecTitle className="text-center color style2">
          <h4 ref={titleRef} className="title">
            <span>Our Infrastructure </span>
            Real Estate Journey
          </h4>
        </SecTitle>

        <ul ref={journeyRef} className="journey_content">
          <div className="plane">
            <img src={diamondIcon} alt="mvn plan icon" className="img-fluid diamond_icon" />
          </div>
          {journeyData?.map((item, index) => (
            <li className={"single " + (index % 2 !== 0 ? "right" : "")} key={index}>
              <div className="data" ref={(el) => (contentRef.current[index] = el)}>
                <div className="top">
                  <img
                    src={item.icon}
                    alt="mvn journey icon"
                    className="img-fluid icon"
                    onLoad={handleImageLoad}
                  />
                  <p className="count">{item.value}</p>
                </div>
                <p className="title">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default OurJourney;
