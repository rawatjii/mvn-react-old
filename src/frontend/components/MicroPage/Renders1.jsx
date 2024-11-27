import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

export default function Renders1({ data }) {
  const sectionsRef = useRef([]);
  console.log('page data',data);

  return (
    <div className="section renders1_section wrapper center">

        <div className="sec_title text-center color style1">
          <h4 className="title">Landscape</h4>
        </div>

        <div className="cards-container">
          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/1.webp'} alt="" />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/2.webp'} alt="" />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/landscape/3.webp'} alt="" />
          </div>
        </div>

        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Elevation</h4>
        </div>

        <div className="cards-container">
          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/1.webp'} alt="" />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/2.webp'} alt="" />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/3.webp'} alt="" />
          </div>
        </div>

        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/1.webp'} alt="" />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/2.webp'} alt="" />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/3.webp'} alt="" />
          </div>
        </div>

    </div>
  );
}
