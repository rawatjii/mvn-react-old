import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import CustomCard from "../Card";
import MasterBedroomLoader from "../../../common/Loader/micro/masterBedroom/Index";
import Watermark from "../../../common/watermark/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MasterBedroom = ({ data, onLoadComplete }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const totalFrames = window.innerWidth <= 768 ? 183 : 101;
  const frameRefs = useRef([]);

  // Title Animation
  useEffect(() => {
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
    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = window.innerWidth <=768 ? `assets/videos/master-bedroom/mobile/${i}.webp` : `assets/videos/master-bedroom/desktop/${i}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoading(false); // All images are loaded
          onLoadComplete();
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
  if (isLoading || images.length !== totalFrames) return;

  // Refresh ScrollTrigger after images and about section are rendered
  const refreshScrollTrigger = () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Allow enough time for rendering
  };

  refreshScrollTrigger();

  // Image sequence animation
  const scrollAnimation = ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top top",
    end: `+=${window.innerHeight * 4}`, // Extend scroll distance to fit more frames
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

  return () => {
    scrollAnimation.kill();
  };
}, [images, isLoading, totalFrames]);

  const { title, desc } = data.masterBedroom;

  return (
    <>
    <div className="section peacock_section master_bedroom pb-0">
      {isLoading && <MasterBedroomLoader />}
      {!isLoading && (
        <>
          <div
            ref={containerRef}
            className="frames_content"
          >
            <Watermark className="style3 left" />
            {images.map((img, index) => (
              <img
                key={index}
                ref={(el) => (frameRefs.current[index] = el)}
                src={img.src}
                alt={`Frame ${index}`}
                className="frame"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  display: index === 0 ? "block" : "none",
                }}
              />
            ))}
          </div>

          <Container>
            <div className="about">
              <CustomCard title={title} desc={desc} />
            </div>
          </Container>
   
        </>
      )}
    </div>
  
           
    </>
  );
};

export default MasterBedroom;
