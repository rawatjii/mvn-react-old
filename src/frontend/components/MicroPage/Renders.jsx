import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import * as CONFIG from '../../../config/config';

import "yet-another-react-lightbox/styles.css";
import 'swiper/css';

import quoteIcon from '../../assets/images/icons/quote.png';
import testiImg1 from '../../assets/images/testimonials/naina.png';
import testiImg2 from '../../assets/images/testimonials/prabhat.png';
import testiImg3 from '../../assets/images/testimonials/prashant.png';
import testiImg4 from '../../assets/images/testimonials/vikas.png';

gsap.registerPlugin(ScrollTrigger);

const testimonialData = [
  { 
     image: testiImg1,
     title: 'Going above and beyond',
     msg: 'I am so happy in my new MVN home! I would like to express gratitude on behalf of my husband and myself. From start to finish, everyone associated with MVN Infrastructure has gone above and beyond to make things happen for us.',
     name: '~Naina Singhal',
  },
  { 
    image: testiImg2,
    title: 'A sense of community',
    msg: 'MVN Athens is a beautiful society and, in all probability, the best in Sohna. The atmosphere over here is awesome and it simply feels great to be a part of this thriving community.',
    name: '~Prabhat Mainik',
  },
  { 
    image: testiImg3,
    title: 'A heavenly experience',
    msg: 'My family and I will always be thankful to everyone at MVN who helped us create our dream home. It was a wonderful experience and we would highly recommend the MVN Athens project if you really are looking to experience heaven on earth!',
    name: '~Prashant Kumar Singh',
  },
  { 
    image: testiImg4,
    title: 'A heartening experience',
    msg: 'It was our dream to have a home of our own. Today, we are happy to come home to a great environment, created with so much thoughtfulness and dedication. MVN ensured that everything was on schedule.',
    name: '~Vikas Singhal',
  }
];

const Renders = ({ data }) => {
  const [isRendersShow, setIsRendersShow] = useState(false);
  const [index, setIndex] = useState(-1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const contentRef = useRef();
  const renders = data.renders;

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: () => "+=" + sectionRef.current.offsetHeight,
  //       pin: true,
  //       scrub: true,
  //       onUpdate: (self) => {
  //         if (swiperRef.current) {
  //           const swiperInstance = swiperRef.current.swiper;
  //           const progress = self.progress * (testimonialData.length - 1);
  //           swiperInstance.slideTo(Math.round(progress), false);
  //         }
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section ref={sectionRef} className="section render_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 className="title">Renders</h4>
        </SecTitle>

        <div className="content">
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
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
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
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
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={renders}
        plugins={[Zoom]}
        carousel={{
          finite: renders.length <= 1,
        }}
        render={{
          buttonNext: renders.length > 1 ? undefined : () => null,
          buttonPrev: renders.length > 1 ? undefined : () => null,
          slide: renders.length > 1 ? undefined : () => null,
        }}
      />
    </section>
  );
};

export default Renders;
