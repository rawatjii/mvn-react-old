import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DIAMOND from  '../../../frontend/assets/images/icons/diamond.png' ;
import typo1 from '../../assets/images/typologies/1.png';
import typo2 from '../../assets/images/typologies/2.png';
import typo3 from '../../assets/images/typologies/3.png';
gsap.registerPlugin(ScrollTrigger);

const Typology = () => {

  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const contentRefs = useRef([]);
  const [images, setImages] = useState([]);
  const isMobile = window.innerWidth <= 768;

  let totalFrames = isMobile ? 327 : 385;
  let segments = [
    { contentIndex: 0, startFrame: 0, endFrame: 125 },
    { contentIndex: 1, startFrame: 126, endFrame: 172 },
    { contentIndex: 2, startFrame: 173, endFrame: 327 },
  ];


  useEffect(() => {
    // Preload images
    const loadedImages = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      isMobile ? img.src = `assets/images/micro/aeroone-gurgaon/mobiles/${i}.webp` : img.src = `assets/images/micro/aeroone-gurgaon/mobiles/${i}.webp` ;
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
        const frameIndex = Math.min(
          segment.startFrame + Math.floor(segmentProgress * (segment.endFrame - segment.startFrame)),
          totalFrames - 1 // Ensure frameIndex doesn't exceed totalFrames
        );
      
        // Show the current frame and hide others
        frameRefs.current.forEach((img, index) => {
          img.style.display = index === frameIndex ? "block" : "none";
        });
      
        // Toggle content visibility
        contentRefs.current.forEach((el, i) => {
          el.style.display = i === segment.contentIndex ? "block" : "none";
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [images]);

  return (
    <>
      <section ref={containerRef} className="section typology_section">
        
        <div className="sec_title text-center color style1">

          <h4 className="title">Typologies</h4>
        </div>

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
          <div className="typology-before-line">

          
          
          <div className="typology_diamond_btn">
            <img src={DIAMOND} alt="" />
            <img src={DIAMOND} alt="" />
            <img src={DIAMOND} alt="" />
          </div>
          <div
            ref={(el) => (contentRefs.current[0] = el)}
            className="content-box"
            style={{ display: 'block' }}
          >
            <h1>270 degree Panoramic Apartment</h1>
            <p>Spanning an expansive 5,850 sq. ft., these exquisite residences offer a captivating 270-degree panoramic view, seamlessly blending breathtaking vistas with unmatched sophistication. </p>
          </div>

          <div
            ref={(el) => (contentRefs.current[1] = el)}
            className="content-box"
            style={{ display: 'none' }}
          >
            <h1>360 degree Panoramic Apartment</h1>
            <p>At an impressive 11,700 sq. ft., the simplex flats offer a commanding 360-degree panoramic vista, presenting a boundless world of elegance. This is where space, design, and nature converge in perfect harmony. </p>
          </div>

          <div
            ref={(el) => (contentRefs.current[2] = el)}
            className="content-box"
            style={{ display: 'none' }}
          >
            <h1>Penthouse</h1>
            <p>Elevate your lifestyle to new heights with these extraordinary duplex flats, where two levels of unmatched luxury unfold before you. With impeccable attention to detail and a focus on privacy and exclusivity, these residences embody the pinnacle of sophisticated living, where only the most discerning will reside.</p>
          </div>
          </div>
        </div>

        <div className="desktop-view-typo-images">
            <div className="typologies-images">
              <img className="image-1" src={typo1} alt="" />
              <img className="image-2" src={typo2} alt="" />
              <img className="image-3" src={typo3} alt="" />
            </div>
          </div>
      </section>
    </>
  );
};

export default Typology;
