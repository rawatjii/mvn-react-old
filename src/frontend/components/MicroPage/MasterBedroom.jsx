import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import diamondIcon from '../../assets/images/icons/diamond_light.png'

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MasterBedroom = ({data}) => {
  const containerRef = useRef(null);
  const titleRef = useRef();
  const [images, setImages] = useState([]);
  const totalFrames = 182;
  const frameRefs = useRef([]);

  // for animation

  useEffect(()=>{
    gsap.from(titleRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 95%",
      }
    })
  }, [])

  useEffect(() => {
    // Preload images
    const loadedImages = [];

    for (let i = 1; i <= 182; i++) {
      const img = new Image();
      img.src = `assets/videos/master-bedroom/mobile/${i}.webp`; // Update with the correct path for your frames
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length !== totalFrames) return; // Wait until all images are loaded

    // Image sequence animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: `+=${window.innerHeight * 2}`, // Extend scroll distance to fit more frames
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        
        // Only start changing frames after a scroll progress threshold
        // First condition: Only start changing frames after a scroll progress threshold
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
      }
    });

    return () => {
      scrollAnimation.kill();
    };

  }, [images, totalFrames]);

  const {title, desc} = data.masterBedroom

  return (
    <div className="section master_bedroom_section pb-0">
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

      <div className="divider">
        <img src={diamondIcon} alt="mvn-diamond-icon" className="img-fluid icon" />
        <img src={diamondIcon} alt="mvn-diamond-icon" className="img-fluid icon" />
        <img src={diamondIcon} alt="mvn-diamond-icon" className="img-fluid icon" />
      </div>

      <Container>
        <div className="content">
            <SecTitle className="text-center color style1">
              <h4 ref={titleRef} className="title">{title}</h4>
            </SecTitle>

            {desc && <p className="desc">{desc}</p>}
            
        </div>
      </Container>
    </div>
  );
};

export default MasterBedroom;
