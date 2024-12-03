import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImgMail from "../../assets/images/icons/email.png";
import jsondata from '../../../../public/assets/json-frame/aeroone-gurgaon1/data2.json';  // Your Lottie JSON
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data, onLoadComplete }) => {

  const containerRef = useRef(null);
  const lottieContainerRef = useRef(null); // Container for Lottie animation

  useEffect(() => {
    // Initialize the Lottie animation
    const lottieAnimation = lottie.loadAnimation({
      container: lottieContainerRef.current, 
      animationData: jsondata, 
      renderer: "canvas",
      loop: false, 
      autoplay: false, 
    });

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 0.5, 
      onUpdate: (self) => {
        const progress = self.progress;
        const totalFrames = lottieAnimation.totalFrames;
        
        const frameIndex = Math.floor(progress * (totalFrames - 1));

        lottieAnimation.goToAndStop(frameIndex, true); 
      },
      onLeave: () => {
        lottieAnimation.goToAndStop(lottieAnimation.totalFrames - 1, true);
      },
      onLeaveBack: () => {
        lottieAnimation.goToAndStop(0, true);
      },
    });
    onLoadComplete();
    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "110vh" }}>
      <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );

};

export default MicroHero;