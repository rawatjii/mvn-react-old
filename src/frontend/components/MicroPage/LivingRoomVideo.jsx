import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from "../../../config/config";
import CustomCard from "../Card";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideo = ({ data }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef();

  const { title, desc } = data.living_room_video;

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const video = videoRef.current;

  //   // Function to disable scrolling
  //   const disableScrolling = () => {
  //     document.body.style.overflow = "hidden";
  //   };

  //   // Function to enable scrolling
  //   const enableScrolling = () => {
  //     document.body.style.overflow = "";
  //   };

  //   // Play video when the section becomes active
  //   const playVideo = () => {
  //     video.play().catch((error) => {
  //       console.error("Video playback failed", error);
  //     });
  //   };

  //   // Pause video when the section is left
  //   const pauseVideo = () => {
  //     video.pause();
  //   };

  //   // Handle when video ends
  //   const handleVideoEnd = () => {
  //     enableScrolling(); // Allow scrolling
  //     ScrollTrigger.refresh(); // Refresh ScrollTrigger to release the pinned section
  //   };

  //   // ScrollTrigger setup
  //   const scrollTriggerInstance = ScrollTrigger.create({
  //     trigger: section,
  //     start: "top top",
  //     end: () => `+=${video.duration * 1000}`, // Pin until the video ends
  //     pin: true,
  //     scrub: false, // No scroll-based scrubbing
  //     onEnter: () => {
  //       disableScrolling(); // Lock scrolling
  //       playVideo();
  //     },
  //     onLeaveBack: () => {
  //       enableScrolling(); // Allow scrolling when scrolling up
  //       pauseVideo();
  //     },
  //   });

  //   // Event listener for when the video ends
  //   video.addEventListener("ended", handleVideoEnd);

  //   return () => {
  //     // Cleanup
  //     enableScrolling();
  //     video.removeEventListener("ended", handleVideoEnd);
  //     scrollTriggerInstance.kill();
  //   };
  // }, []);

  return (
    <div className="section living_room_video_section pb-0" ref={sectionRef}>
      <video
        ref={videoRef}
        src={`${CONFIG.VIDEO_URL}living-room/mobile.mp4`}
        type="video/mp4"
        muted
        autoPlay={false}
        playsInline
        preload="auto"
      />

    <Container >
        <div className='about'>
            <CustomCard
              title={title}
              desc={desc}
            />
        </div>

    </Container>

      {/* <div className="content">
        <Container>
          <SecTitle className="text-center color style1">
            <h4 ref={titleRef} className="title">{title}</h4>
          </SecTitle>

          {desc && <p className="desc">{desc}</p>}
        </Container>
      </div> */}
    </div>
  );
};

export default LivingRoomVideo;
