import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";

import "swiper/css";
import "swiper/css/navigation";
import SecTitle from "../../../common/SecTitle/Index";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const titleRef = useRef();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // To track the active slide index

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    // GSAP ScrollTrigger to pin and control the animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1000", // Adjust based on scroll distance needed
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress; // Progress is from 0 to 1
        const totalSlides = swiperInstance.slides.length - 1;
        const targetSlide = Math.floor(progress * totalSlides);

        // Change to the corresponding slide based on scroll progress
        swiperInstance.slideTo(targetSlide);
      },
      onLeave: () => {
        swiperInstance.slideTo(swiperInstance.slides.length - 1); // Ensure it ends on the last slide
      }
    });

    // Handle slide change to update the active index
    swiperInstance.on("slideChange", () => {
      setActiveIndex(swiperInstance.activeIndex);
    });
  }, []);

  return (
    <section
      className="section location_section"
      ref={sectionRef}
    >
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Location Section</h4>
        </SecTitle>
      </Container>

      {/* Images */}
      <div className="image_col">
        {[
          "entertainment.jpg",
          "shopping.jpg",
          "sports.jpg",
          "office.jpg",
          "cinema.jpg",
          "test.jpg",
        ].map((image, index) => (
          <li
            key={index}
            style={{
              display: index === activeIndex ? "block" : "none", // Show only the active image
            }}
          >
            <img src={`${CONFIG.IMAGE_URL}micro/location/${image}`} alt="" />
          </li>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
        modules={[Navigation]}
        ref={swiperRef}
      >
        <SwiperSlide>
          <div className="content">
            <h4 className="title">Entertainment</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4 className="title">Luxury Shopping</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4 className="title">Sports</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4 className="title">Office</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content">
            <h4 className="title">Cinemas</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Location;
