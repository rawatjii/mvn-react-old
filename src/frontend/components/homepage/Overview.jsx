import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import bg from '../../assets/images/overview/bg.webp';
import buildingImg from '../../assets/images/overview/building.webp';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const imageRef = useRef();
  const secRef = useRef();

  useEffect(() => {
    const img = imageRef.current.querySelector("img");

    const setupAnimation = () => {
      gsap.fromTo(
        imageRef.current,
        { y: -200 },
        {
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: 1,
            markers: true,
          },
        }
      );
      
      // Delay ScrollTrigger refresh slightly to ensure all elements have loaded
      setTimeout(() => ScrollTrigger.refresh(), 100);
    };

    // Set up the animation only after the image is fully loaded
    if (img.complete) {
      setupAnimation();
    } else {
      img.onload = setupAnimation;
    }

    return () => {
      img.onload = null; // Clean up the event listener
    };
  }, []);

  return (
    <section ref={secRef} className="overview_section">
      <img src={bg} alt="mvn-overview-bg" className="img-fluid bg_img" />

      <div ref={imageRef} className="image">
        <img src={buildingImg} alt="mvn building image" className="img-fluid" />
      </div>
    </section>
  );
}

export default Overview;
