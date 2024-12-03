import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import * as CONFIG from "../../../config/config";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import LivingRoomVideoLoader from "../../../common/Loader/micro/livingRoomVideo/Index";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete ,isMobile}) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [videoFinished, setVideoFinished] = useState(false);
  const frameRefs = useRef([]);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  const { title, desc } = data.living_room_video;



  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const importedData = isMobile
          ? await import("../../../../public/assets/json-frame/aeroone-gurgaon1/Peacock/Mobile/data.json")
          : await import("../../../../public/assets/json-frame/aeroone-gurgaon1/Peacock/Desktop/data.json");

        setAnimationData(importedData.default);
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimationData();
  }, [isMobile]);

  // Initialize Lottie and ScrollTrigger
  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current) return;

    const lottieAnimation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      animationData,
      renderer: "canvas",
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        clearCanvas: true,
      },
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

    // Set loading to false after both the animation and Lottie are ready
    lottieAnimation.addEventListener("DOMLoaded", () => setLoading(false));
    onLoadComplete();
    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, [animationData]);



  return (
    <>
    {/* Show loader if still loading */}
    {loading && (
        <LivingRoomVideoLoader />
      )}

    {!loading && (
      <>
        <CustomCard className="style2" title={title} />
          <div className="section living_room_video_section design1 pb-0" ref={sectionRef} id="livingRoomSlidingDoor">
          
            <div ref={containerRef} className="frames_content">
            <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>

            </div>
            <Container>
              <div className="about">
                <CustomCard title={title} desc={desc} />
              </div>
            </Container>
          </div>
        </>
      )}
     
    </>
  );
};

export default LivingRoomVideoGurugram;
