import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
// import { Player } from "@lottiefiles/react-lottie-player";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from '../../../config/config'; 

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Video3 = ({ data }) => {
  const titleRef = useRef();
  const lottiePlayerRef = useRef();

  useEffect(() => {
    // GSAP animation for the title
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });
  }, []);

  useEffect(() => {
    // Scroll-based playback for Lottie animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: lottiePlayerRef.current.container, // The Lottie container
      start: "top top",
      end: `+=${window.innerHeight * 3}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress * 100; // Convert to percentage
        lottiePlayerRef.current.setSeeker(progress); // Set progress in Lottie animation
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, []);

  const { title, desc } = data.video3;

  return (
    <div className="section video3_section pb-0">
      <div className="animation-container">
        <Player
          ref={lottiePlayerRef}
          autoplay={false}
          loop={false}
          src={CONFIG.VIDEO_URL + 'party/party.json'} // Update with the correct path to your JSON file
          style={{ width: "100%", height: "100vh" }}
          keepLastFrame
        />
      </div>

      <div className="content">
        <Container>
          111
          <SecTitle className="text-center color style1">
            <h4 ref={titleRef} className="title">{title}</h4>
          </SecTitle>

          {desc && <p className="desc">{desc}</p>}
        </Container>
      </div>
    </div>
  );
};

export default Video3;
