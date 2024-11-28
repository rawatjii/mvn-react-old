import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';

gsap.registerPlugin(ScrollTrigger);

export default function MicroLandscape({ data }) {
  const sectionsRef = useRef([]);
  console.log('page data',data);

  return (
    <div className="section renders1_section wrapper center pb-0">

        <div className="sec_title text-center color style1">
          <h4 className="title">Landscape</h4>
        </div>

        <div className="cards-container">
          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/1.webp'} alt="" />
            <Watermark className="left" />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/2.webp'} alt="" />
            <Watermark />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/3.webp'} alt="" />
            <Watermark />
          </div>
        </div>
    </div>
  );
}
