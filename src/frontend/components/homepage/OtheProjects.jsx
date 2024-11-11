import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import mvnSchool from '../../assets/images/other-projects/mvn-school.webp';
import mvnUniversity from '../../assets/images/other-projects/mvn-university.webp'
import mvnSportsAcademy from '../../assets/images/other-projects/mvn-sports-academy.webp'

import arrowIcon from '../../assets/images/icons/arrow.png';
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import AnImage from "../../../common/animations/Image/Index";

const otherProjects = [
  {
    name:'MVN School',
    thumbnail:mvnSchool,
  },
  {
    name:'MVN University',
    thumbnail:mvnUniversity,
  },
  {
    name:'MVN Sports Academy',
    thumbnail:mvnSportsAcademy,
  }
]

gsap.registerPlugin(ScrollTrigger);

const OtherProjects = ()=>{
  const titleRef = useRef();
  const imageDivRefs = useRef([])

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      if(otherProjects.length > 0){
        gsap.from(titleRef.current, {
          y: 50,  
          opacity: 0,
          duration: 1, 
    
          scrollTrigger:{
            trigger: titleRef.current,
            start: "top 95%",
          }
        })
    
        imageDivRefs.current.forEach((imagediv, index)=>{
          if(imagediv){
            gsap.to(imagediv, {
              scrollTrigger: {
                trigger: imagediv,
                start: "top 95%", // When the top of the element reaches 80% of the viewport
                onEnter: () => imagediv.classList.add('active'),
                once: true, // Ensures the animation only happens once
              }
            });
          }
        })
      }
    }, imageDivRefs)

    return ()=>ctx.revert();
    
  }, [otherProjects])

  return(
    <section className="section other_projects_section pb-0">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Other Verticals</h4>
        </SecTitle>

        <Row>
          {otherProjects?.map((item, index)=>(
            <Col key={index} xs={12} className="single_col">
              <div className="single">
                <div className="top">
                  <h4 className="name">{item.name}</h4>
                  <Link>
                    <img src={arrowIcon} alt="mvn arrow icon" className="img-fluid icon" />
                  </Link>
                </div>
                <AnImage ref={(el) => (imageDivRefs.current[index] = el)}>
                  <img src={item.thumbnail} alt="" className="img-fluid" />
                </AnImage>
              </div>
            </Col>
          ))}

          
        </Row>

        <div className="projects">
          
        </div>
      </Container>
    </section>
  )
}

export default OtherProjects