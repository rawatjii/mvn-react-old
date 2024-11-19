import React, { useEffect, useRef } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import enquireBg from '../../assets/images/enquire/bg_sm.webp';
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const Enquire = ()=>{
  const titleRef = useRef();
  const contentRef = useRef();
  const btnRef = useRef();

  useEffect(()=>{
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

    gsap.from(btnRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: btnRef.current,
        start: "top 95%",
      }
    })

  }, [])

  return(
    <section className="section enquire_section">
      <LazyLoad>
        <img src={enquireBg} alt="mvn-enquire-bg" className="img-fluid enquire_bg" />
      </LazyLoad>

      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Excited To Meet Us?</h4>
        </SecTitle>

        <p ref={contentRef}>Every query gets answered. You got questions, We got answers.</p>

        {/* <Link ref={btnRef} className="btn btn_style2">Know More</Link> */}
      </Container>
    </section>
  )
}

export default Enquire;