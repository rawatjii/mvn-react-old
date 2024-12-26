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
    watermark:'left',
    title:'Panaromic Living Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
    watermark:'right',
    title:'Living Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
    watermark:'left',
    title:'Cucina Kitchen',
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
    watermark:'right',
    title:'Master Bedroom – Platinum',
  },  
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
    watermark:'left',
    title:'Master Bedroom – Platinum',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
    watermark:'right',
    title:'Bathroom',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
    watermark:'right',
    title:'Master Bedroom – Royale',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
    watermark:'left',
    title:'Study Room',
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
    watermark:'right',
    title:'Kids Room',
  },
]

export default function MicroApartment({ data }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);

  return (
    <div className="section renders1_section wrapper center pb-0 Apartment-section">
      
        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className='row'>
            {images.map((image, index)=>(
              <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
                <div  className="card center" onClick={() => setIndex(index)}>
                  <div className="img">
                    <img src={image.asset} alt="" className='img-fluid apartment-section-img' loading='lazy' />
                    <Watermark className={image.watermark} />
                  </div>
                  <div className="content">
                    <h4 className='title_style1'>{image.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <Container>
          <div className='about'>
            <CustomCard
              className="px-0"
              title="Every corner a symphony of style & opulence" 
              desc="Experience ultra-luxury living in this exclusive apartment boasting plush interiors and bespoke design. The spacious layout includes a designer bathroom with premium fittings, a modern Cucina kitchen for culinary excellence, and a state-of-the-art home theatre for entertainment. A thoughtfully designed kids' room ensures comfort and fun, completing a perfect sanctuary for a sophisticated, family-friendly lifestyle." 
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
