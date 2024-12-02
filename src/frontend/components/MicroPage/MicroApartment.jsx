import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import CustomCard from '../Card';

gsap.registerPlugin(ScrollTrigger);

const images= [
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp',
    watermark:'left'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
    watermark:'right'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
    watermark:'left'
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
    watermark:'right'
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
    watermark:'left'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
    watermark:'right'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
    watermark:'right'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
    watermark:'left'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
    watermark:'right'
  },
]

export default function MicroApartment({ data }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);

  return (
    <div className="section renders1_section wrapper center pb-0">
      
        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className='row'>
            

           
 
          {images.map((image, index)=>(
            <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
            <div  className="card center" onClick={() => setIndex(index)}>
              <img src={image.asset} alt="" className='img-fluid apartment-section-img'/>
              <Watermark className={image.watermark} />
            </div>
            </div>
          ))}
          
          </div>
        </div>


        <Container>
          <div className='about'>
            <CustomCard
              className="px-0"
              title="ASCEND TO THE PINNACLE OF SOPHISTICATION" 
              desc="Experience unparalleled luxury, where opulence meets sophistication in every detail. Indulge in bespoke interiors, world-class amenities, and breathtaking views. Redefine your lifestyle with a living experience like no other" 
            />
          </div>
        </Container>


        <Lightbox
          index={index}
          slides={images.map(img=>({src:img.asset}))}
          open={index >= 0}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Zoom]}
        />

    </div>
  );
}
