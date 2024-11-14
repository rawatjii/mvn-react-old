import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import LazyLoad from "react-lazyload";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import AnImage from "../../../common/animations/Image/Index";

import teamImg from '../../assets/images/team/team.webp'

gsap.registerPlugin(ScrollTrigger);

const OurTeam = ()=>{
  const titleRef = useRef();
  const imageRef = useRef();
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
  
      gsap.to(imageRef.current, {
        scrollTrigger:{
          trigger: imageRef.current,
          start: "top 95%",
          onEnter: () => {
            if(imageRef.current){
              imageRef.current.classList.add('active')
            }
          },
          once: true, // Ensures the animation only happens once
        }
      })
    })

    return ()=>ctx.revert();
  }, [])

  return(
    <section className="section our_team_section">
    <Container>
      <SecTitle className="text-center color style1">
        <h4 ref={titleRef} className="title">People Behind</h4>
      </SecTitle>
    </Container>

    <AnImage ref={imageRef}>
      <img src={teamImg} alt="mvn team image" className="img-fluid team_img" />
    </AnImage>

    <p ref={contentRef}>MVN Group is backed up by a team of experienced professionals who are committed to offering high standards of professional conduct in real estate practices.</p>

  </section>
  )
}

export default OurTeam