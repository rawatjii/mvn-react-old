import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Typology = () => {

  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const contentRefs = useRef([]);
  const isMobile = window.innerWidth <= 768;

  let totalFrames = isMobile ? 289 : 385;
  const [images, setImages] = useState([]);
  const segments = [
    { contentIndex: 0, startFrame: 0, endFrame: 50 },
    { contentIndex: 1, startFrame: 51, endFrame: 200 },
    { contentIndex: 2, startFrame: 201, endFrame: 285 },
  ];

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      isMobile ? img.src = `assets/images/micro/aeroone-gurgaon/mobiles/${i}.webp` : img.src = `assets/images/micro/aeroone-gurgaon/desktop/${i}.webp` ;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length !== totalFrames) return;

    // Setting up ScrollTrigger for image sequence
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`, 
      pin: true,
      scrub: 0.2,
      onUpdate: (self) => {
        const segmentIndex = Math.min(
          Math.floor(self.progress * segments.length),
          segments.length - 1
        );
        const segment = segments[segmentIndex];
        const segmentProgress = (self.progress - segmentIndex / segments.length) * segments.length;
        const frameIndex = segment.startFrame + Math.floor(segmentProgress * (segment.endFrame - segment.startFrame));

        // Show the current frame and hide others
        frameRefs.current.forEach((img, index) => {
          img.style.display = index === frameIndex ? "block" : "none";
        });

        // Toggle content visibility
        contentRefs.current.forEach((el, i) => {
          el.style.opacity = i === segment.contentIndex ? 1 : 0;
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [images]);

  return (
    <>
      <section ref={containerRef} className="typology_section">
        <h1>Typologies</h1>

        {/* Images section */}
        <div className="images">
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

        {/* Content boxes */}
        <div className="typology_content">
          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className="content-box"
            style={{ opacity: 1 }}
          >
            <h1>2 BHK</h1>
            <p>Content for 2 BHK goes here.</p>
          </div>

          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="content-box"
            style={{ opacity: 0 }}
          >
            <h1>3 BHK</h1>
            <p>Content for 3 BHK goes here.</p>
          </div>

          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="content-box"
            style={{ opacity: 0 }}
          >
            <h1>4 BHK</h1>
            <p>Content for 4 BHK goes here.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Typology;
