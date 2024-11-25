import React, { useEffect, useRef, useState } from "react"
import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Modal from 'react-bootstrap/Modal';


import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import * as CONFIG from '../../../config/config'

// Import Swiper styles
import 'swiper/css';
import "yet-another-react-lightbox/styles.css";

import location_map_sm from '../../assets/images/location-advantage/location_map_sm.webp'
import Button from "../../../common/Button/Button";

gsap.registerPlugin(ScrollTrigger);



// const locationData = [
//   {
//     distance:'15 Min',
//     title:'Kempegowda Intl. Airport',
//   },
//   {
//     distance:'12 Min',
//     title:'Devanahalli Trumpet Flyover',
//   },
//   {
//     distance:'06 Min',
//     title:'Mini Vidhana Soudha',
//   },
//   {
//     distance:'12 Min',
//     title:'K.I.Airport Halt',
//   },
//   {
//     distance:'13 Min',
//     title:'Proposed Metro Line',
//   },
//   {
//     distance:'05 Min',
//     title:'Sports Village',
//   },
// ]

const MicroLocationMap = ({data})=>{
  const titleRef = useRef();
  const typoRefs = useRef([]);
  const priceRefs = useRef([]);
  const sizeRefs = useRef([]);
  const [isLocationMapOpen, setIsLocationMapOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const locationMapImg = [{src: data.mapIMG.desktop}]
  
  const handleClose = () => setShowModal(false);


  const handleShow = () => setShowModal(true);

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
    <section className="section location_map_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Location Map</h4>
        </SecTitle>
      </Container>

      <div className="locationMapContent">

        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="thumbnail">

              <button className="location_btn"  onClick={handleShow}>
                <img src={CONFIG.IMAGE_URL + 'icons/yt_color.png'} alt="youtube icon" className="img-fluid yt_icon" />
                Location Video
              </button>

              
              <div onClick={()=>setIsLocationMapOpen(true)}>
                <img src={data.mapIMG.desktop} alt="mvn-master-plan" className="img-fluid d-none d-md-block" />
                <img src={data.mapIMG.mobile} alt="mvn-master-plan" className="img-fluid d-md-none" />
              </div>
            </div>
          </div>
        </div>

        <Container className="desktop_fluid_container">
          <h4 className="title">{data.title}</h4>

          <ul className="location_points">
            <span className="left_road"></span>
            <span className="top_road"></span>
            {data.locationData.map((item,index)=>(
              <li key={index}>
                <h3 className="distance">{item.distance}</h3>
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Lightbox 
        open={isLocationMapOpen}
        close={() => setIsLocationMapOpen(false)}
        slides={locationMapImg}
        plugins={[Zoom]}
        carousel={{
          finite: locationMapImg.length <= 1,  // Prevent looping if there’s only one image
        }}
        render={{
        buttonNext: locationMapImg.length > 1 ? undefined : () => null,
        buttonPrev: locationMapImg.length > 1 ? undefined : () => null,
        slide: locationMapImg.length > 1 ? undefined : () => null, 
      }} />


      <Modal className="location_modal" show={showModal} onHide={handleClose}>
        <span type="button" class="close" onClick={handleClose}>×</span>
        <iframe src="https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv" title="MVN Location Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
      </Modal>
    </section>
  )
}

export default MicroLocationMap