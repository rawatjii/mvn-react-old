import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import Swiper styles
import 'swiper/css';

import quoteIcon from '../../assets/images/icons/quote.svg';
import testiImg1 from '../../assets/images/testimonials/naina.png';
import testiImg2 from '../../assets/images/testimonials/prabhat.png';
import testiImg3 from '../../assets/images/testimonials/prashant.png';
import testiImg4 from '../../assets/images/testimonials/vikas.png';
import LazyLoad from "react-lazyload";


const testimonialData = [
  { 
     image:testiImg1,
     title:'Going above and beyond',
     msg:'I am so happy in my new MVN home! I would like to express gratitude on behalf of my husband and myself. From start to finish, everyone associated with MVN Infrastructure has gone above and beyond to make things happen for us.',
     name:'~Naina Singhal',
  },
  { 
    image:testiImg2,
    title:'A sense of community',
    msg:'MVN Athens is a beautiful society and, in all probability, the best in Sohna. The atmosphere over here is awesome and it simply feels great to be a part of this thriving community.',
    name:'~Prabhat Mainik',
  },
  { 
    image:testiImg3,
    title:'A heavenly experience',
    msg:'My family and I will always be thankful to everyone at MVN who helped us create our dream home. It was a wonderful experience and we would highly recommend the MVN Athens project if you really are looking to experience heaven on earth!',
    name:'~Prashant Kumar Singh',
  },
  { 
    image:testiImg4,
    title:'A heartening experience',
    msg:'It was our dream to have a home of our own. Today, we are happy to come home to a great environment, created with so much thoughtfulness and dedication. MVN ensured that everything was on schedule.',
    name:'~Vikas Singhal',
  }
]

gsap.registerPlugin(ScrollTrigger);


const Testimonial = ()=>{
  const titleRef = useRef();
  const contentRef = useRef();

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(titleRef.current, {
        y: 50,  
        opacity: 0,
        duration: 1, 
  
        scrollTrigger:{
          trigger: titleRef.current,
          start: "top 95%",
        }
      })
  
      gsap.from(contentRef.current, {
        y: 50,  
        opacity: 0,
        duration: 1, 
  
        scrollTrigger:{
          trigger: contentRef.current,
          start: "top 95%",
        }
      })
    })

    return()=>ctx.revert();

  }, [])

  return(
    <section className="section testimonial_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">What Client Says!</h4>
        </SecTitle>

        <Swiper
          ref={contentRef}
          spaceBetween={50}
          slidesPerView={1}
          className="testimonial_carousel"
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonialData.map((item, index)=>(
            <SwiperSlide key={index}>
              <div className="single">
                <div className="image">
                  <LazyLoad>
                    <img src={item.image} alt="mvn user image" className="img-fluid user_image" />
                  </LazyLoad>
                </div>

                <div className="content">
                  <img src={quoteIcon} alt="mvn quotes icon" className="img-fluid quote_icon" />
                  <h4 className="title">{item.title}</h4>
                  <p className="msg">{item.msg}</p>

                  <h4 className="name">{item.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </Container>
    </section>
  )
}

export default Testimonial