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

gsap.registerPlugin(ScrollTrigger);

const images= [
  {
    asset:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
    watermark:'right'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
    watermark:'left'
  },
  {
    asset:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
    watermark:'left'
  }
]

export default function MicroElevation({ data }) {
  const sectionsRef = useRef([]);
  const [index, setIndex] = useState(-1);


  return (
    <div className="section renders1_section wrapper center pb-0">

       
        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Elevation</h4>
        </div>

        <div className="cards-container">
        <div className='row'>
          {images.map((image, index)=>(
            <div className='col-sm-12 col-md-4 col-lg-4' key={index}>
            <div  className="card center" onClick={() => setIndex(index)}>
              <img src={image.asset} alt="" className='img-fluid elevation-section-img'/>
              <Watermark className={image.watermark} />
            </div>
            </div>
          ))}
          </div>
        </div>

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
