import React, { useEffect, useRef, useState } from "react";
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazyload';
// import hero_img from '../../../frontend/assets/images/micro_hero/hero_img.webp'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ImgMail from '../../assets/images/icons/email.png'

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data }) => {
  const [images, setImages] = useState([]);
  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const totalFrames = 226;

  useEffect(() => {
    // Preload images
    const loadedImages = [];

    for (let i = 1; i <= 226; i++) {
      const img = new Image();
      img.src = `assets/images/micro/hero/${i}.jpg`; // Update with the correct path for your frames
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


  return (
    <>
      <section className="section micro_hero_section p-0">
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
        {
          data.micro_hero_section && Array.isArray(data.micro_hero_section) && data.micro_hero_section.map((imgs, index) => (
            <div key={index} className="hero-img">
              <img src={imgs.imgDesk} alt={`mvn-hero-image-${index}`} className="img-fluid d_lg_block" fetchPriority="high" />
              <img src={imgs.imgMb} alt={`mvn-hero-image-sm-${index}`} className="img-fluid d_sm_block" fetchPriority="high" />
            </div>
          ))
        }
        {
          data.bannerHighLight &&  <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
        }


        {
          data.enquiryBTN && data.enquiryBTN.isshow === true && <div className="enquiry_btn">
          <a href={`mailto:${data.enquiryBTN.mail}`} className="btn btn_enquire">
            <img src={ImgMail} className="img-fluid mail_enqiry_icon" alt="" />
            Enquire Now
          </a>
        </div>
        }

        {/* <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div> */}

      </section>
    </>
  )
}

export default MicroHero;