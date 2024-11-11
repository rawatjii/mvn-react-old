import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import commitmentIcon from '../../assets/images/icons/brand/commitment.jpg';
import excellenceIcon from '../../assets/images/icons/brand/excellence.jpg';
import customizedIcon from '../../assets/images/icons/brand/customized.jpg';
import brandBG from '../../assets/images/brand/bg_sm.webp';

gsap.registerPlugin(ScrollTrigger);

const brandData = [
  {
    title:'Commitment',
    para:'MVN develops and heightens competencies that show..',
    icon:commitmentIcon
  },
  {
    title:'Excellence',
    para:'We deliver our clients with quality services and aim to..',
    icon:excellenceIcon
  },
  {
    title:'Customized Solutions',
    para:'We offer customer-focused solutions with a high level..',
    icon:customizedIcon
  }
]

const OurBrand = ()=>{ 

  const titleRef = useRef();
  const dataRefs = useRef([]);
  
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

    dataRefs.current.forEach((singleRef, index)=>{
      if(singleRef){
        gsap.from(singleRef, {
          y: 20,  
          opacity: 0,
          duration: 0.6,

          scrollTrigger: {
            trigger: singleRef,
            start: "top 95%", // When the top of the element reaches 80% of the viewport
          }
        });
      }
    })
  }, [])

  return(
    <section className="section our_brand_section">
      <LazyLoad>
        <img src={brandBG} alt="mvn brand-bg" className="brand_bg" />
      </LazyLoad>

      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Our Brand Ethos</h4>
        </SecTitle>

        <div className="brand_content">
          <Row>
            {
              brandData?.map((item, index)=>(
                <Col key={index} xs={12} className="single_col">
                  <div ref={(el)=>(dataRefs.current[index] = el)} className="single">
                    <div className="icon">
                      <img src={item.icon} alt="mvn brand icon" className="img-fluid" />
                    </div>

                    <div className="content">
                      <h4 className="title">{item.title}</h4>
                      <p>{item.para}</p>
                      <Link to="#" className="link">Read More</Link>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default OurBrand;