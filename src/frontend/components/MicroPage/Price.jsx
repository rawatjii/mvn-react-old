import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from "../../../common/Button/Button";

import bgImg from '../../assets/images/price/bg.webp';
import LazyLoad from "react-lazyload";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
      type:'1 BHK Luxury Apartments',
      price:'2.51 Cr*',
      size:'1200 Sq.Ft.',
    },
    {
      type:'2 BHK Luxury Apartments',
      price:'4.11 Cr*',
      size:'800 Sq.Ft.',
    },
    {
      type:'3 BHK Luxury Apartments',
      price:'7.49 Cr*',
      size:'1600 Sq.Ft.',
    },
]

const MicroPrice = ()=>{
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);

  // for animation

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

  return(
    <section className="section price_section pb-0">
      <LazyLoad>
        <img src={bgImg} alt="mvn-price-bg" className="img-fluid price_bg" />
      </LazyLoad>

      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Price List</h4>
        </SecTitle>

        <ul className="price_content">
          {data.map((item, index)=>(
            <li key={index}>
              <h5 ref={(el)=>(typoRefs.current[index]=el)} className="typo">{item.type}</h5>
              <h3 ref={(el)=>(priceRefs.current[index]=el)} className="price"><span>₹</span> {item.price}</h3>
              <div ref={(el)=>(sizeRefs.current[index]=el)} className="sizes">
                <p className="size"><span>Size:</span> {item.size}</p>
                <Button className="btn_style1">Enquire Now</Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default MicroPrice