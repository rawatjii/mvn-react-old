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
    value:'40+'
  },
  {
    icon:citiesIcon,
    title:'Cities',
    value:'20'
  },
  {
    icon:completeProjectsIcon,
    title:'Completed Projects',
    value:'9'
  },
  {
    icon:ongoingProjectsIcon,
    title:'Ongoing Projects',
    value:'4'
  },
  {
    icon:millionSqftIcon,
    title:'Million Square Feet',
    value:'2.3'
  },
  {
    icon:deliveryIcon,
    title:'On time Delivery',
    value:'100%'
  }
]

const OurJourney = ()=>{

  const titleRef = useRef();
  const contentRef = useRef([]);
  const planeRef = useRef();
  const journeyRef = useRef();

  useEffect(()=>{
    let isClassAdded = false;
    
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

    // Rotate the plane when journey_content reaches 50% of viewport
    // gsap.to(planeRef.current, {
    //   rotation: 180, // Rotate plane to face downward
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: ".journey_content",
    //     start: "top 50%", // Rotate when journey_content reaches 50% viewport
    //     end: "top 50%",
    //     onEnter: () => gsap.set(planeRef.current, { rotation: 90 }), // Ensure rotation completes
    //   }
    // });

    // Move the plane downwards following scroll after rotation
    // gsap.to(planeRef.current, {
    //   rotation: 90, // Rotate plane downward
    //   scrollTrigger: {
    //     trigger: ".journey_content",
    //     start: "top 50%", // Start rotation when content reaches 50% of viewport
    //     end: "bottom 50%", // Release the pin when content scrolls out of view
    //     pin: planeRef.current, // Pin plane at 50% viewport
    //     pinSpacing: false, // Keeps layout consistent without adding extra space
    //     scrub: true, // Smooth transition with scroll
    //     onEnter: () => gsap.set(planeRef.current, { rotation: 90 }), // Set rotation immediately when entering
    //     onLeaveBack: () => gsap.set(planeRef.current, { rotation: 0 }) // Reset rotation if scrolling back up
    //   }
    // });

    // Animation 1: Add/remove class for rotation effect
    // ScrollTrigger.create({
    //   trigger: journeyRef.current,
    //   start: "top 50%",  // When journey_content reaches 50% of the viewport
    //   onEnter: () => planeRef.current.classList.add("rotated"),
    // });

    // ScrollTrigger.create({
    //   trigger: journeyRef.current,
    //   start: "bottom 50%",  // When journey_content reaches 50% of the viewport
    //   onLeaveBack: () => planeRef.current.classList.remove("rotated")
    // });

    ScrollTrigger.create({
      trigger: journeyRef.current,
      start: "top 50%",  // Add class when the top of journey_content reaches 50% of the viewport
      onEnter: () => {
        if (!isClassAdded) {
          planeRef.current.classList.add("rotated");
          isClassAdded = true;
        }
      },
      onUpdate: (self) => {
        // If scrolling back up, remove the class (before reaching the end)
        if (self.direction === -1 && isClassAdded) {  // -1 means scrolling up
          planeRef.current.classList.remove("rotated");
          isClassAdded = false;
        }

        if(self.direction === 1 && !isClassAdded){
          planeRef.current.classList.add("rotated");
          isClassAdded = true;
        }
      },
      onLeave: () => {
        // Remove the class when scrolling past the end of journey_content
        planeRef.current.classList.remove("rotated");
        isClassAdded = false;
      }
    });

    // Animation 2: Pin the plane at the center and release at the end
    gsap.to(planeRef.current, {
      yPercent: -50,  // Center vertically
      scrollTrigger: {
        trigger: ".journey_content",
        start: "top 50%",  // Fix position when journey_content reaches 50%
        end: "bottom 50%",  // Release when journey_content ends
        pin: planeRef.current,
        pinSpacing: false,
        scrub: true
      }
    });
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

        <ul ref={journeyRef} className="journey_content">
          <div ref={planeRef} className="plane">
            <img src={planeIcon} alt="mvn plan icon" className="img-fluid plan_icon" />
          </div>
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