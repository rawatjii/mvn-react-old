import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import LivingRoomVideoLoader from "../../../common/Loader/micro/livingRoomVideo/Index";
import * as CONFIG from "../../../config/config";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data }) => {
  const [loading, setLoading] = useState(true); // Track if the video is loading
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { title, desc } = data.living_room_video;

  useEffect(()=>{
    const section = sectionRef.current;
    const video = videoRef.current;

    let scrollTriggerInstance;

    const setupScrollTrigger = ()=>{
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: section,
        start:"top top",
        pin:true,
        end:()=>`+=${video.duration * window.innerHeight}`, // Dynamically adjust based on video duration
        scrub:false,
      })
    }

    video.addEventListener("loadmetadata", ()=>{
      setupScrollTrigger();
    })

  }, [])

  const handleVideoLoaded = () => {
    setLoading(false); // Hide the loader after the video is fully loaded
  };

  return (
    <div className="section living_room_video_section design1 pb-0" ref={sectionRef}>
      {/* Video */}
      <video
        ref={videoRef}
        src={`${CONFIG.VIDEO_URL}living-room/desktop.mp4`}
        type="video/mp4"
        muted
        autoPlay={true}
        loop={true}
        playsInline
        preload="metadata"
      />
        <Container>
          <div className="about">
            <CustomCard title={title} desc={desc} />
          </div>
        </Container>
    </div>
  );
};

export default LivingRoomVideoGurugram;
