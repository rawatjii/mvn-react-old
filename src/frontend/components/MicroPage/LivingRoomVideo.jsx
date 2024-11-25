import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import * as CONFIG from "../../../config/config";
import CustomCard from "../Card";
import LivingRoomVideoLoader from "../../../common/Loader/micro/livingRoomVideo/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideo = ({ data }) => {
  const [loading, setLoading] = useState(true); 
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef();

  const { title, desc } = data.living_room_video;

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
  
    let scrollTriggerInstance;
  
    const disableScrolling = () => {
      document.body.style.overflow = "hidden";
    };
  
    const enableScrolling = () => {
      document.body.style.overflow = "";
    };
  
    const playVideo = () => {
      video.play().catch((error) => {
        console.error("Video playback failed", error);
      });
    };
  
    const pauseVideo = () => {
      video.pause();
    };
  
    const handleVideoEnd = () => {
      enableScrolling(); // Allow scrolling
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill(); // Kill the current ScrollTrigger instance
      }
      ScrollTrigger.refresh(); // Refresh all ScrollTriggers to fix issues below
    };
  
    const setupScrollTrigger = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${video.duration * window.innerHeight}`, // Dynamically adjust based on video duration
        pin: true,
        scrub: false,
        onEnter: () => {
          disableScrolling();
          playVideo();
        },
        onLeaveBack: () => {
          enableScrolling();
          pauseVideo();
        },
        onLeave: () => {
          enableScrolling();
          pauseVideo();
        },
      });
  
      // Add event listener for video end
      video.addEventListener("ended", handleVideoEnd);
    };
  
    // Wait for video metadata to load
    video.addEventListener("loadedmetadata", () => {
      setupScrollTrigger();
    });
  
    return () => {
      // Cleanup
      enableScrolling();
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadedmetadata", setupScrollTrigger);
    };
  }, []);
  
  const handleVideoLoaded = () => {
    setLoading(false); // Hide the loader once the video has loaded
  };

  return (
    <div className="section living_room_video_section py-0" ref={sectionRef}>

      {loading && <LivingRoomVideoLoader />}


      <video
        ref={videoRef}
        src={`${CONFIG.VIDEO_URL}living-room/mobile.mp4`}
        type="video/mp4"
        muted
        autoPlay={false}
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoaded} // Trigger when video has loaded
        style={{ visibility: loading ? "hidden" : "visible", opacity: loading ? 0 : 1 }} // Hide while loading
      />

      {!loading && (
        <Container >
          <div className='about'>
              <CustomCard
                title={title}
                desc={desc}
              />
          </div>

        </Container>
      )}

    </div>
  );
};

export default LivingRoomVideo;