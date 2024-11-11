import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import scVideo from '../../assets/videos/building_view.mp4';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const totalFrames = 70;
  const frameRefs = useRef([]);

  useEffect(() => {
    // Preload images
    const loadedImages = [];
    for (let i = 2000; i <= 2069; i++) {
      const img = new Image();
      img.src = `assets/videos/video_img/building_view${i}.jpg`; // Update with the correct path for your frames
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length !== totalFrames) return ; // Wait until all images are loaded

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 79px',
      end: `+=${window.innerHeight * 2}`, // Extend scroll distance to fit more frames
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        // Calculate the exact frame based on scroll progress
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        
        // Update frame visibility based on calculated frame index
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === frameIndex ? "block" : "none";
        });

        // images.forEach((img, index) => {
        //   img.style.display = index === frameIndex ? 'block' : 'none';
        // });
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
      }
    });

    return () => {
      scrollAnimation.kill();
    };

  }, [images, totalFrames]);

  return (
    <div ref={containerRef} className="frame-container">
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
  );
};

export default ScrollVideo;
