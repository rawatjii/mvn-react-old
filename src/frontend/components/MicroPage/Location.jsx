import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import SecTitle from "../../../common/SecTitle/Index";

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const titleRef = useRef();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRendered, setSectionRendered] = useState(false);


  const pageData = [
    {
      title: 'Entertainment',
      imgSrc: 'entertainment.jpg'
    },
    {
      title: 'shopping',
      imgSrc: 'shopping.jpg'
    },
    {
      title: 'sports',
      imgSrc: 'sports.jpg'
    },
    {
      title: 'office',
      imgSrc: 'office.jpg'
    },
    {
      title: 'cinema',
      imgSrc: 'cinema.jpg'
    },
  ]

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;


    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=1000",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSlides = swiperInstance.slides.length - 1;
        const targetSlide = Math.floor(progress * totalSlides);

        swiperInstance.slideTo(targetSlide);
      },
      onLeave: () => {
        swiperInstance.slideTo(swiperInstance.slides.length - 1);
      }
    });

    setSectionRendered(true)

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
          <h4 ref={titleRef} className="title">No Pollution Zone</h4>
        </SecTitle>
      </Container>

      {/* Images */}
      <div className="image_col">
        {pageData && pageData.map((image, index) => (
          <li
            key={index}
            style={{
              display: index === activeIndex ? "block" : "none",
            }}
          >
            <img src={`${CONFIG.IMAGE_URL}micro/location/${image.imgSrc}`} alt="" />
          </li>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        // slidesPerView={1}
        // spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
        ref={swiperRef}
        scrollbar={{
          hide: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        modules={[Scrollbar, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >

        {
          pageData && pageData.map((data, index) => (
            <SwiperSlide>
              <div className="content">
                <p className="km_text">Km</p>
                <h4 className="title">{data.title}</h4>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* <span className="abs_number"
        style={{
          backgroundImage: `url(${CONFIG.IMAGE_URL}micro/location/${pageData[activeIndex].imgSrc})`,
          backgroundSize: "cover", // Ensures the background image covers the element
          backgroundPosition: "center", // Centers the image within the element
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >0
      </span> */}
      <span className="abs_number">
        <img
          className="zero_img"
          src={`${CONFIG.IMAGE_URL}micro/location/okm.png`}
          alt="0 km"
        />
      </span>
    </section>
  );
};

export default Location;
