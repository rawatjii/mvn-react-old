import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import jsonData from '../../assets/images/data2.json'
import * as CONFIG from '../../../config/config'

import ImgMail from "../../assets/images/icons/email.png";

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data, onLoadComplete }) => {
  const [loading, setLoading] = useState(true); // Loader state
  const [totalFrames, setTotalFrames] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null); // Reference for the canvas element
  const lottieAnimation = useRef(null); // Reference to store the Lottie animation instance

  // Use a flag to prevent re-initialization
  const [isLottieLoaded, setIsLottieLoaded] = useState(false);

  useEffect(() => {
    // Set total frames dynamically based on device type
    const isMobile = window.innerWidth <= 768;
    let frameCount = isMobile ? 522 : 522;
    if (!data.micro_hero_section.client) frameCount = isMobile ? 274 : 292;
    setTotalFrames(frameCount);
  }, [data]);

  useEffect(() => {
    // Initialize Lottie animation only once
    if (loading || !canvasRef.current || isLottieLoaded) return;

    lottieAnimation.current = lottie.loadAnimation({
      container: canvasRef.current,
      renderer: "canvas", // Using canvas renderer for better performance
      loop: true, // Adjust depending on the desired effect
      autoplay: false, // Control manually using GSAP
      path: jsonData, // The path to your Lottie JSON file
      onDOMLoaded: () => {
        setIsLottieLoaded(true); // Prevent re-initializing
        onLoadComplete(); // Call onLoadComplete once Lottie is loaded
        setLoading(false); // Set loading to false after the animation is loaded
      }
    });

    // ScrollTrigger setup for the Lottie animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`, // Adjust scroll distance for your animation
      pin: true,
      scrub: 0.5, // Adjust speed to your preference
      onUpdate: (self) => {
        const progress = self.progress;

        // Update Lottie animation progress based on scroll position
        if (lottieAnimation.current) {
          lottieAnimation.current.goToAndStop(progress * lottieAnimation.current.totalFrames, true);
        }
      },
      onLeave: () => {
        // Ensure the animation stops when scrolling past the section
        if (lottieAnimation.current) {
          lottieAnimation.current.stop();
        }
      },
      onLeaveBack: () => {
        // Ensure the animation resets when scrolling back
        if (lottieAnimation.current) {
          lottieAnimation.current.goToAndStop(0, true);
        }
      },
    });

    return () => {
      scrollAnimation.kill();
      if (lottieAnimation.current) {
        lottieAnimation.current.destroy();
      }
    };
  }, [loading, data, isLottieLoaded]);

  return (
    <section className="section micro_hero_section p-0" ref={containerRef}>
      {/* Show Loader */}
      {loading && <div>Loading...</div>}

      {/* Lottie Animation Canvas */}
      {!loading && (
        <div className="frames_content">
          <canvas ref={canvasRef} />
        </div>
      )}

      {/* Other Content */}
      {!loading && data.micro_hero_section.images && (
        <div className="hero-img">
          {data.micro_hero_section.images.map((imgs, index) => (
            <img
              key={index}
              src={imgs.imgDesk}
              alt={`mvn-hero-image-${index}`}
              className="img-fluid d_lg_block"
              fetchPriority="high"
            />
          ))}
        </div>
      )}

      {/* Additional Sections */}
      {!loading && data.micro_hero_section.bannerHighLight && (
        <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
      )}

      {/* Enquiry Button */}
      {!loading && data.micro_hero_section.enquiryBTN && data.micro_hero_section.enquiryBTN.isshow && (
        <div className="enquiry_btn">
          <a href={`mailto:${data.micro_hero_section.enquiryBTN.mail}`} className="btn btn_enquire">
            <img src={ImgMail} className="img-fluid mail_enqiry_icon" alt="Enquire Now" />
            Enquire Now
          </a>
        </div>
      )}
    </section>
  );
};

export default MicroHero;
