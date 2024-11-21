import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/effect-fade';

gsap.registerPlugin(ScrollTrigger);

const Renders = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slides = section.querySelectorAll(".renders_swiper .swiper-slide");

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%", // Adjust the scroll distance
        pin: true,
        scrub: true,
        markers: true, // Enable markers for debugging
      },
    });

    // Animate each slide based on scroll progress and update thumbsSwiper
    slides.forEach((slide, index) => {
      scrollTimeline.to(
        swiperRef.current.swiper,
        {
          onUpdate: () => {
            swiperRef.current.swiper.slideTo(index);
            if (thumbsSwiper) {
              thumbsSwiper.slideTo(index);
            }
          },
        },
        index * 0.2 // Stagger animations
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [thumbsSwiper]);

  return (
    <section className="section render_section" >
      <div className="render_section_in" ref={sectionRef}>
        <div className="content">
          <Container>
            <h4 className="title text-center">Renders</h4>
          </Container>
          <div className="data">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              // navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, EffectFade, Navigation, Thumbs]}
              className="renders_swiper"
              effect={'fade'}
              ref={swiperRef}
            >
              <SwiperSlide>
                <div className="content_div">
                  <h1>slide 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content_div">
                  <h1>slide 2</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="content_div">
                  <h1>slide 3</h1>
                </div>
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="renders_swiper_thumbs"
            >
              <SwiperSlide className="thum_slide">
                <div className="slide_thum">
                  <div className="rounded_img">
                    <img className="slide_thum_in" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                  </div>
                  <div className="thum_content">
                    <span className="title_thum">Landscape</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="thum_slide">
                <div className="slide_thum">
                  <div className="rounded_img">
                    <img className="slide_thum_in" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                  </div>
                  <div className="thum_content">
                    <span className="title_thum">Elevation </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="thum_slide">
                <div className="slide_thum">
                  <div className="rounded_img">
                    <img className="slide_thum_in" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                  </div>
                  <div className="thum_content">
                    <span className="title_thum">Apartment</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Renders;
