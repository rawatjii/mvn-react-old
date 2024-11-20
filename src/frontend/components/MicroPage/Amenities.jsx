import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from "../../../common/Button/Button";
import { Swiper, SwiperSlide } from 'swiper/react';

import bgImg from '../../assets/images/price/bg.webp';
import LazyLoad from "react-lazyload";

// Import Swiper styles
import 'swiper/css';
import chevronLeft from '../../assets/images/icons/chevron_left.svg'
import chevronRight from '../../assets/images/icons/chevron_right.svg'

gsap.registerPlugin(ScrollTrigger);

// const data = [
//   {
//     title: 'Infinity Pool',
//     images: {
//       lg: pool,
//       mb: poolSm
//     }
//   },
//   {
//     title: 'THE STUDY',
//     images: {
//       lg: study,
//       mb: studySm
//     }
//   },
//   {
//     title: 'MODERN ROOFTOP CLUBHOUSE',
//     images: {
//       lg: clubhouse,
//       mb: clubhouseSm
//     }
//   },
//   {
//     title: 'double height balcony',
//     images: {
//       lg: balcony,
//       mb: balconySm
//     }
//   },
//   {
//     title: 'living area',
//     images: {
//       lg: living,
//       mb: livingSm
//     }
//   },
// ]

const MicroAmenities = ({ data }) => {
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const swiperRef = useRef(null);
  const sliderRef = useRef();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // for animation

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      }
    })

    gsap.from(sliderRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top 95%",
      }
    })

    typoRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })

    priceRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 20,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })

    sizeRefs.current.forEach((singleRef, index) => {
      if (singleRef) {
        gsap.from(singleRef, {
          y: 10,
          opacity: 0,
          duration: 0.5,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })
  }, [])

  // Event handlers for custom navigation buttons
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  // Update button states based on Swiper events
  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="section amenities_section pb-0">

      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Amenities</h4>
        </SecTitle>
      </Container>

      <Swiper
        ref={sliderRef}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        slidesPerView={1}
        className="amenity_carousel"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="single">
              <div className="image">
                <LazyLoad>
                  <img src={item.images.lg} alt="mvn amenity thumbnail" className="img-fluid d_lg_block thumbnail" />
                  <img src={item.images.mb} alt="mvn amenity thumbnail" className="img-fluid d_sm_block thumbnail" />
                  {/* <img src={item.images.mb} alt="mvn amenity thumbnail" className="img-fluid thumbnail" /> */}
                </LazyLoad>
              </div>
              <h3 className="title">{item.title}</h3>

            </div>
          </SwiperSlide>
        ))}

        <div className="slider_btns">
          <button className={`prev ${isBeginning ? 'disabled' : ''}`} onClick={handlePrev}>
            <img src={chevronLeft} alt="mvn-chevron-left" className="img-fluid icon" />
          </button>
          <button className={`next ${isEnd ? 'disabled' : ''}`} onClick={handleNext}>
            <img src={chevronRight} alt="mvn-chevron-right" className="img-fluid icon" />
          </button>
        </div>
      </Swiper>
    </section>
  )
}

export default MicroAmenities