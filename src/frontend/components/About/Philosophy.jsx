import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LazyLoad from "react-lazyload";

import planeIcon from '../../assets/images/icons/plane1.png';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const titleRef = useRef();
  const miniTitleRefs = useRef([]);
  const desRefs = useRef([]);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
        end: "bottom 75%",
        toggleActions: "play none none reverse",
      }
    });

    // Mini titles animation
    miniTitleRefs.current.forEach((title, index) => {
      if (title) {
        gsap.from(title, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.2, // Stagger effect
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          }
        });
      }
    });

    // Descriptions animation
    desRefs.current.forEach((des, index) => {
      if (des) {
        gsap.from(des, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: index * 0.3, // Stagger effect
          scrollTrigger: {
            trigger: des,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "play none none reverse",
          }
        });
      }
    });

    // Refresh ScrollTrigger on resize
    window.addEventListener("resize", ScrollTrigger.refresh);
    return () => window.removeEventListener("resize", ScrollTrigger.refresh);

  }, []);

  return (
    <section className="section philosophy_section pb-0">
      <Container>
        <SecTitle className="text-center color style1 mb_30">
          <h4 ref={titleRef} className="title">Our Philosophy</h4>
        </SecTitle>

        <ul className="content">
          <li>
            <h4 ref={(el) => miniTitleRefs.current[0] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Vision
            </h4>
            <p ref={(el) => desRefs.current[0] = el}>
            We aim to set new standards in value across education, urban infrastructure, hospitality, and real estate – the key pillars of highly transformative and alluring urbanscapes.
            </p>
          </li>

          <li>
            <h4 ref={(el) => miniTitleRefs.current[1] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Mission
            </h4>
            <p ref={(el) => desRefs.current[1] = el}>
              We build exceptional ecosystems that serve India’s high-growth ambitions. As part of our mission, we are creating a legacy of world-class real estate offerings that are locally relevant and sustainable yet meet global standards. We are building universities, urban infrastructure, hotels, and homes with equal zest across ‘aspiring’ to ‘arrived’ India – from Khambi to Bengaluru.
            </p>
          </li>

          <li>
            <h4 ref={(el) => miniTitleRefs.current[2] = el} className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Values
            </h4>
            <ul ref={(el) => desRefs.current[2] = el}>
              <li>Enrich lives</li>
              <li>Empower ambitions</li>
              <li>Drive innovation</li>
              <li>Inspire quality</li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Philosophy;
