import React, { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import LazyLoad from 'react-lazyload';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import hero_img from '../../../frontend/assets/images/hero/hero_img.webp'

gsap.registerPlugin(ScrollTrigger);

const Hero = ()=>{
  const titleRef = useRef();
  const desRef = useRef();

  useEffect(()=>{
    // logo animation

    gsap.from(titleRef.current, {
      y: 50,           // Move 50px from the bottom
      opacity: 0,      // Start with 0 opacity (invisible)
      duration: 1,   // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect

      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 95%",
      }
    })

    gsap.from(desRef.current, {
      y: 50,           // Move 50px from the bottom
      opacity: 0,      // Start with 0 opacity (invisible)
      duration: 1,   // Animation duration in seconds
      // ease: "power2" // Easing function for a smooth effect

      scrollTrigger:{
        trigger: desRef.current,
        start: "top 95%",
      }
    })

  }, [])

  return(
    <>
      <section className="section hero_section p-0">
        <div className="hero-img">
          <img src={hero_img} alt="mvn-hero-image" className="img-fluid" fetchPriority="high" />
        </div>

        
        <Container>
          <div className="hero_content">
            <h1 className="hero_title" ref={titleRef}>40+ years of delivering trust and projects on time</h1>
            <h5 className="hero_desc" ref={desRef}>MVN Group is one of the best entities focused on Education and Real Estate. As per The Hindustan Times-C Fore Top Schools Survey, the leading newspaper of India, MVN is known as the first educational group to be Ranked no.1 for Eight years in Academic Performance.</h5>
          </div>
        </Container>
        
      </section>
    </>
  )
}

export default Hero;