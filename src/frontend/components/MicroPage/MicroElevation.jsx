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

const images = [
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/1_sm.webp',
    },
    watermark: 'right'
  },
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/2_sm.webp',
    },
    watermark: 'left'
  },
  {
    assets: {
      desktop:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
      mobile:CONFIG.IMAGE_URL + 'renders/elevation/3_sm.webp',
    },
    watermark: 'left'
  }
];

export default function MicroElevation({ data = images }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);
  const imageDivRefs = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);  // Add imagesLoaded state

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
      <div className="sec_title text-center color style1 mt_50">
        <h4 className="title">Elevation</h4>
      </div>

      <div className="cards-container">
        <div className='row'>
          {images.map((image, index) => (
            <div className='col-sm-12 col-md-4 col-lg-4' key={index}>
              <div className="card center" onClick={() => setIndex(index)}>
                {/* Wrapping image in AnImage component for animation */}
                <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
                  <img src={image.assets.desktop} alt="" className='img-fluid elevation-section-img d-none d-md-block' onLoad={handleImageLoad} />
                  <img src={image.assets.mobile} alt="" className='img-fluid elevation-section-img d-md-none' />
                  <Watermark className={image.watermark} />
                </AnImage>
              </div>
            </div>
          ))}
        </div>

        <Container>
          <div className='about'>
            <CustomCard
              className="px-0"
              title="Pinnacle of Sophisticated Luxury" 
              desc="This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits." 
            />
          </div>
        </Container>
      </div>

      <Lightbox
        index={index}
        slides={images.map(img => ({ src: img.assets.desktop }))}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Zoom]}
      />
    </div>
  );
}
