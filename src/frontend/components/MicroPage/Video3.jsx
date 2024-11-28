import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PartyLoader from "../../../common/Loader/micro/partyLoader/Index";
import Watermark from "../../../common/watermark/Index";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Video3 = ({ data }) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const totalFrames = window.innerWidth <= 768 ? 696 : 77;
  const frameRefs = useRef([]);
  const loadedCount = useRef(0); // Track number of loaded images

  const { title, desc } = data.video3;

  useEffect(() => {
    // Preload images
    const loadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = window.innerWidth <= 768 ? `assets/videos/party/mobile/${i}.webp` : `assets/videos/party/desktop/${i}.webp`; // Update with the correct path for your frames

      img.onload = () => {
        loadedCount.current += 1;
        if (loadedCount.current === totalFrames) {
          setLoading(false); // All images are loaded
          setImages(loadedImages);
        }
      };

      img.onerror = (err) => console.error(`Failed to load frame ${i}`, err);

      loadedImages.push(img);
    }
  }, [totalFrames]);

  useEffect(() => {
    if (images.length !== totalFrames) return; // Wait until all images are loaded

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
        // Reset to first frame when scrolling back to the start smoothly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
      onLeave: () => {
        // Reset to last frame when scrolling to the end smoothly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
    });

    return () => {
      scrollAnimation.kill();
    };
  }, [images, totalFrames]);

  useEffect(() => {
    // Animate the title
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

  return (
    <div className="section peacock_section pb-0">
      {/* Loader */}
      {loading && <PartyLoader />} {/* Show loader until all images are loaded */}

      {!loading && (
        <>
          <div ref={containerRef} className="frames_content">
            
          <Watermark className="style1" />
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

          <Container>
            <div className="about">
              <CustomCard title={title} desc={desc} />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Video3;
