import React, { useEffect, useRef } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Container } from "react-bootstrap";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import expIcon from '../../assets/images/icons/journey/experience.png';
import citiesIcon from '../../assets/images/icons/journey/cities.png';
import completeProjectsIcon from '../../assets/images/icons/journey/complete-projects.png';
import ongoingProjectsIcon from '../../assets/images/icons/journey/ongoing-projects.png';
import millionSqftIcon from '../../assets/images/icons/journey/sqft.png';
import deliveryIcon from '../../assets/images/icons/journey/delivery.png'
import planeIcon from '../../assets/images/icons/plane.jpg';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    icon:expIcon,
    title:'Years Experience',
    count:'40+'
  },
  {
    icon:citiesIcon,
    title:'Cities',
    count:'20'
  },
  {
    icon:completeProjectsIcon,
    title:'Completed Projects',
    count:'9'
  },
  {
    icon:ongoingProjectsIcon,
    title:'Ongoing Projects',
    count:'4'
  },
  {
    icon:millionSqftIcon,
    title:'Million Square Feet',
    count:'2.3'
  },
  {
    icon:deliveryIcon,
    title:'On time Delivery',
    count:'100%'
  }
]

const OurJourney = ()=>{

  const titleRef = useRef();
  const contentRef = useRef([]);

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

    contentRef.current.forEach((conRef, index)=>{
      if(conRef){
        gsap.from(conRef, {
          y: 10,  
          opacity: 0,
          duration: 0.5,

          scrollTrigger:{
            trigger: conRef,
            start: "top 95%",
          }
        })
      }
    })
  }, [])

  return(
    <section className="section journey_section pb-0">
      <Container>
        <SecTitle className="text-center color style2">
          <h4 ref={titleRef} className="title">
            <span>Our Infrastructure </span>
            Real Estate Journey
          </h4>
        </SecTitle>

        <ul className="journey_content">
          <img src={planeIcon} alt="mvn plan icon" className="img-fluid plan_icon" />
          {journeyData?.map((item, index)=>(
            <li className={'single ' + (index % 2 != 0 ? 'right' : '')} key={index}>
              <div className="data" ref={(el)=>(contentRef.current[index] = el)}>
                <div className="top">
                  <img src={item.icon} alt="mvn journey icon" className="img-fluid icon" />
                  <p className="count">{item.value}</p>
                </div>
                <p className="title">{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default OurJourney