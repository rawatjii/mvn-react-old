import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import CustomCard from "../Card";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";

gsap.registerPlugin(ScrollTrigger);

const PeacockSection = ({ data }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [images, setImages] = useState([]);
  const frameRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true); // State to track loading

  const totalFramesDesktop = 379;
  const totalFramesMobile = 256;

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []); // Dependency array doesn't include data to ensure it's initialized once.

  // Load images
  useEffect(() => {
    if (isMobile === null) return; // Wait until `isMobile` is determined.

    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;
    const imagePath = isMobile ? "assets/images/peacock/mobile/" : "assets/images/peacock/desktop/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoading(false); // All images loaded, hide loader.
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile]); // Depend on `isMobile` to reload images when the state changes.

  // GSAP Animation
  useEffect(() => {
    if (images.length === 0 || loading) return;

    // Initialize ScrollTrigger animation
    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 8}`,
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        if (self.progress > 0.1) {
          frameRefs.current.forEach((img, index) => {
            if (img) img.style.display = index === frameIndex ? "block" : "none";
          });
        }
      },
      onLeaveBack: () => {
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
      onLeave: () => {
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
    });
  
    // Refresh ScrollTrigger to account for loaded content
    ScrollTrigger.refresh();
  
    return () => {
      // Clean up ScrollTrigger instance
      scrollAnimation.kill();
    };
  }, [images, isMobile, loading]);

  const { title, desc } = data.video1;

  return (
    <div className="section peacock_section pb-0">

      {/* Show loader if still loading */}
      {loading && (
        <PeacockLoader />
      )}

      {!loading && (
        <>
          <div ref={containerRef} className="frames_content">
            {images.map((img, index) => (
              <img
                key={index}
                ref={(el) => (frameRefs.current[index] = el)}
                src={img.src}
                alt={`Frame ${index}`}
                className="frame"
                style={{ display: index === 0 ? "block" : "none" }}
              />
            ))}
          </div>

          <Container >
            <div className='about'>
                <CustomCard
                  title="Experience The Bliss Of Endless Vistas" 
                  desc="Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings."  
                />
            </div>

          </Container>
        </>
      )}

      

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

export default PeacockSection;
