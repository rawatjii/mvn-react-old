import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImgMail from "../../assets/images/icons/email.png";
import HomePagerLoader from "../../../common/Loader/Homepage/Index";
import lottie from "lottie-web";




gsap.registerPlugin(ScrollTrigger);

const HomepageVideo = ({ data,isMobile }) => {
  const [images, setImages] = useState([]);
  const [mobile, setMobile] = useState(false);

  const [loading, setLoading] = useState(true); // Loader state
  const [totalFrames, setTotalFrames] = useState(0);
  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const mouseScrollRef = useRef()
  const lottieContainerRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (loading) {
      // Add overflow: hidden to the body when heroLoaded is false
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when heroLoaded is true
      document.body.style.overflow = "";
    }
  
    // Cleanup function to reset the body overflow if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);


  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const importedData = isMobile
          ? await import("../../../../public/assets/json-frame/Homepage/Mobile/data.json")
          : await import("../../../../public/assets/json-frame/Homepage/Desktop/data.json");

        setAnimationData(importedData.default);
        setLoading();
      } catch (error) {
        console.error("Error loading animation data:", error);
      }
    };

    loadAnimationData();
  }, [isMobile]);

  useEffect(() => {
    if (!animationData || !lottieContainerRef.current || !containerRef.current) return;

    const lottieAnimation = lottie.loadAnimation({
      container: lottieContainerRef.current,
      animationData,
      renderer: "svg",
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
    return () => {
      scrollAnimation.kill();
      lottieAnimation.destroy();
    };
  }, [animationData]);

  return (
    <section className="section micro_hero_section p-0">
      {/* Show Loader */}
      {loading && (
        <HomePagerLoader  mobile={mobile} />
      )}

      {!loading && (
        <div ref={containerRef} className="frames_content">
          <div ref={lottieContainerRef} style={{ width: "100%", height: "100%" }}></div>
        </div>
      )}
    </section>
  );
};

export default HomepageVideo;
