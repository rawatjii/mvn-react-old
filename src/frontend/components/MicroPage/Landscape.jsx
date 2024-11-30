import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import AnImage from "../../../common/animations/Image/Index"; // Assuming AnImage is being used for animations

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';

gsap.registerPlugin(ScrollTrigger);

// Original landscape data array
const landscapeData = [
  {
    asset: CONFIG.IMAGE_URL + 'renders/landscape/1.webp',
    watermark: 'left'
  },
  {
    asset: CONFIG.IMAGE_URL + 'renders/landscape/2.webp',
    watermark: 'right'
  },
  {
    asset: CONFIG.IMAGE_URL + 'renders/landscape/3.webp',
    watermark: 'right'
  }
];

// Component using landscapeData
export default function MicroLandscape({ data = landscapeData, title, subTitle, mobContent = 12 }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);
  const imageRefs = useRef([]); // To track images for animation
  const imageDivRefs = useRef([]); // To track AnImage components
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = () => {
    if (data.length > 0) {
      gsap.from(sectionsRef.current, {
        y: 50,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionsRef.current,
          start: "top 95%",
        },
      });

      imageRefs.current.forEach((imagediv, index) => {
        if (imagediv) {
          gsap.to(imagediv, {
            scrollTrigger: {
              trigger: imagediv,
              start: "top 95%",
              onEnter: () => imagediv.classList.add("active"),
              once: true,
            },
          });
        }
      });

      // Add animation for AnImage components using imageDivRefs
      imageDivRefs.current.forEach((imagediv, index) => {
        if (imagediv) {
          gsap.to(imagediv, {
            scrollTrigger: {
              trigger: imagediv,
              start: "top 95%",
              onEnter: () => imagediv.classList.add("active"),
              once: true,
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      ScrollTrigger.refresh();
    };

    if (imagesLoaded === data.length) {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded, data.length]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <div className="section renders1_section wrapper center pb-0">
      <div className="sec_title text-center color style1" ref={sectionsRef}>
        <h4 className="title">{title || "Landscape"}</h4>
      </div>

      <div className="cards-container">
        <div className="row">
          {data.map((image, index) => (
            <div className="col-sm-12 col-md-4 col-lg-4" key={index}>
              <div className="card center" onClick={() => setIndex(index)}>
                {/* Wrapping image in AnImage component for animation */}
                <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
                  <img src={image.asset} alt="" onLoad={handleImageLoad} />
                </AnImage>
                <Watermark className={image.watermark} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        index={index}
        slides={data.map(img => ({ src: img.asset }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
