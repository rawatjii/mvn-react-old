import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import renderImg1 from '../../assets/images/render-images/1.png'
import renderImg2 from '../../assets/images/render-images/2.png'
import renderImg3 from '../../assets/images/render-images/3.png'

gsap.registerPlugin(ScrollTrigger);

const Renders = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Landscape",
      content: "This is the first slide.",
      imgSrc: renderImg1,
      thumbnail: "https://swiperjs.com/demos/images/nature-1.jpg",
    },
    {
      title: "elevation",
      content: "This is the second slide.",
      imgSrc: renderImg2,
      thumbnail: "https://swiperjs.com/demos/images/nature-2.jpg",
    },
    {
      title: "apartment",
      content: "This is the third slide.",
      imgSrc: renderImg3,
      thumbnail: "https://swiperjs.com/demos/images/nature-3.jpg",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const totalSlides = slides.length;

    // ScrollTrigger for the pinned section
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${section.offsetHeight * totalSlides}`,
      pin: true,
      scrub: true,
      // markers: true, // Enable for debugging
      onUpdate: (self) => {
        // Calculate the active slide index based on progress
        const index = Math.floor(self.progress * totalSlides);
        setActiveIndex(index);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [slides.length]);

  return (
    <section className="render_section" ref={sectionRef}>
      <Container className="topContainer">
        {/* <h4 className="text-center mainhead">Landscape</h4> */}
        <div className="slider-container">
          {/* Large Slides */}
          <div className="slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
                <h4 className="text-center mainhead">{slide.title}</h4>
                <div className="renders-images">
                  {/* <div className="images img3">
                    <img className="w-100 img-fluid" src={renderImg2} alt="" />
                  </div> */}
                  <div className="images img2">
                    <img className="w-100 img-fluid" src={slide.imgSrc} alt="" />
                  </div>
                  <div className="images img1">
                    <img className="w-100 img-fluid" src={slide.imgSrc} alt="" />
                  </div>
                  <div className="images img2">
                    <img className="w-100 img-fluid" src={slide.imgSrc} alt="" />
                  </div>
                  {/* <div className="images img3">
                    <img className="w-100 img-fluid" src={renderImg3} alt="" />
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="thumbnails">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  gsap.to(window, {
                    scrollTo: {
                      y: sectionRef.current.offsetTop + index * window.innerHeight,
                    },
                    duration: 1,
                  });
                  setActiveIndex(index);
                }}
              >
                <div className="thum_in w-100">
                  <div className="rounded_div">
                    <img className="rounded_img" src={slide.thumbnail} alt={`Thumbnail ${index + 1}`} />
                  </div>
                  <span>{slide.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Renders;
