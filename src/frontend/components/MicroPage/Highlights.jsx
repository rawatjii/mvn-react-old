import React, { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// const data = [
//     'Power backup for common facilities.',
//     'Italian/Imported Marble flooring.',
//     'Television points in living and bedrooms.',
//     'Telephone points in living and master bedroom.',
//     'Split AC provision in living and bedrooms.',
//     'Premium emulsion paint finish.',
// ]

const MicroHighlights = ({data})=>{
  
  
  const titleRef = useRef();
  const datasRef = useRef([]);

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

    datasRef.current.forEach((singleRef, index) => {
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
  }, [])

  return(
    <section className="section highlights_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">{data.title}</h4>
          {
          data.desc &&
          <p className="text-center mt-4">{data.desc}</p>
        }
        </SecTitle>
        

        <ul className="content">
          {data.point.map((item, index)=>(
            <li key={index} ref={(el)=>(datasRef.current[index]=el)}>
              <div className="data">
                <span className="count">0{index + 1}</span>
                {item}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default MicroHighlights