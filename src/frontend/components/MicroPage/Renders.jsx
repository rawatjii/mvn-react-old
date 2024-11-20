import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

gsap.registerPlugin(ScrollTrigger);

const Renders = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const scrollAnimation = ScrollTrigger.create({
      trigger: ".render_section_in", // Pin based on this section
      start: "top top", // Pin when the top of the section reaches the top of the viewport
      end: `+=${window.innerHeight * 3}`, // Unpin when we scroll past the section (adjust height as needed)
      pin: true, // Pin the section
      scrub: true,
      markers: true, // Enable markers for debugging
    });

    return () => {
      scrollAnimation.kill();
    };
  }, []);
  return (
    <section className="section render_section">
      <div className="render_section_in">
        <div className="content">
          <Container>
            <SecTitle className="text-center color style1">
              <h4 className="title">Renders</h4>
            </SecTitle>

            <div className="data">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="renders_swiper"
                ref={swiperRef}
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
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
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Renders;
