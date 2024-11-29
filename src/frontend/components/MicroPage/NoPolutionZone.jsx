import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import SecTitle from "../../../common/SecTitle/Index";
import dotImg from "../../assets/images/icons/dot.png"

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import CustomCard from "../Card";


gsap.registerPlugin(ScrollTrigger);

const NoPolutionZone = () => {
  const titleRef = useRef();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionRendered, setSectionRendered] = useState(false);


  const pageData = [
    {
      title: 'Entertainment',
      imgSrc: window.innerWidth <= 768 ? 'entertainment.webp' : 'desktop/entertainment.jpg'
    },
    {
      title: 'shopping',
      imgSrc: window.innerWidth <= 768 ? 'shopping.webp' : 'desktop/shopping.jpg'
    },
    {
      title: 'sports',
      imgSrc: window.innerWidth <= 768 ? 'sports.webp' : 'desktop/sports.jpg'
    },
    {
      title: 'office',
      imgSrc: window.innerWidth <= 768 ? 'office.webp' : 'desktop/office.jpg'
    },
    {
      title: 'cinema',
      imgSrc: window.innerWidth <= 768 ? 'cinema.jpg' : 'desktop/cinema.jpg'
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
    <div>
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
            <img src={`${CONFIG.IMAGE_URL}/no-pollution/${image.imgSrc}`} alt="" />
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
                <img src={`${dotImg}`} alt="" className="golden-icon-no-pollution" />
                <h4 className="title">{data.title}</h4>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      
      <span className="abs_number">
        <img
          className="zero_img"
          src={`${CONFIG.IMAGE_URL}micro/location/okm.png`}
          alt="0 km"
        />
      </span>
    </section>

<CustomCard className="style2" desc="Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave." />
    </div>
  );
};

export default NoPolutionZone;
