import React, { useEffect, useRef, useState } from "react";
import SecTitle from "../../../common/SecTitle/Index";
import { Container } from "react-bootstrap";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// import expIcon from '../../assets/images/icons/journey/experience.png';
import citiesIcon from '../../assets/images/icons/journey/cities.png';
import completeProjectsIcon from '../../assets/images/icons/journey/complete-projects.png';
import ongoingProjectsIcon from '../../assets/images/icons/journey/ongoing-projects.png';
import millionSqftIcon from '../../assets/images/icons/journey/sqft.png';
import deliveryIcon from '../../assets/images/icons/journey/delivery.png'

import expIcon from '../../assets/images/icons/journey/new-icons/icon-1.png';


// import planeIcon from '../../assets/images/icons/plane.jpg';
import diamondIcon from '../../assets/images/icons/diamond.png';

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
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const initializeAnimations = ()=>{
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

    // ScrollTrigger.create({
    //   trigger: journeyRef.current,
    //   start: "top 50%",  // Add class when the top of journey_content reaches 50% of the viewport
    //   onEnter: () => {
    //     if (planeRef.current && !isClassAdded) {
    //       planeRef.current.classList.add("rotated");
    //       isClassAdded = true;
    //     }
    //   },
    //   onUpdate: (self) => {
    //     if (planeRef.current) {  // Check if planeRef.current exists
    //       // If scrolling back up, remove the class (before reaching the end)
    //       if (self.direction === -1 && isClassAdded) {  // -1 means scrolling up
    //         planeRef.current.classList.remove("rotated");
    //         isClassAdded = false;
    //       }
      
    //       if (self.direction === 1 && !isClassAdded) {
    //         planeRef.current.classList.add("rotated");
    //         isClassAdded = true;
    //       }
    //     }
    //   },
    //   onLeave: () => {
    //     // Remove the class when scrolling past the end of journey_content
    //     if (planeRef.current) {
    //       planeRef.current.classList.remove("rotated");
    //       isClassAdded = false;
    //     }
    //   }
    // });
    

    // Animation 2: Pin the plane at the center and release at the end
    // gsap.to(planeRef.current, {
    //   yPercent: -50,  // Center vertically
    //   scrollTrigger: {
    //     trigger: ".journey_content",
    //     start: "top 50%",  // Fix position when journey_content reaches 50%
    //     end: "bottom 50%",  // Release when journey_content ends
    //     pin: planeRef.current,
    //     pinSpacing: false,
    //     scrub: true
    //   }
    // });
  }

  useEffect(()=>{
    if(imagesLoaded === journeyData.length){
      setTimeout(()=>{
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 300)
    }

    window.addEventListener('resize',ScrollTrigger.refresh())

    return()=>window.removeEventListener('resize',ScrollTrigger.refresh())
    
  }, [imagesLoaded])

  const handleImageLoad = ()=>{
    setImagesLoaded((prev) => prev + 1);
  }

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
          <div className="plane">
            <img src={diamondIcon} alt="mvn plan icon" className="img-fluid diamond_icon" />
          </div>
          {journeyData?.map((item, index)=>(
            <li className={'single ' + (index % 2 != 0 ? 'right' : '')} key={index}>
              <div className="data" ref={(el)=>(contentRef.current[index] = el)}>
                <div className="top">
                  <img src={item.icon} alt="mvn journey icon" className="img-fluid icon" onLoad={handleImageLoad} />
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