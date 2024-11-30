import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as CONFIG from "../../../config/config";
import { Container } from 'react-bootstrap';
import Watermark from '../../../common/watermark/Index';

gsap.registerPlugin(ScrollTrigger);

export default function Renders1({ data }) {
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

        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Elevation</h4>
        </div>

        <div className="cards-container">

          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/1.webp'} alt="" />
            <Watermark />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/2.webp'} alt="" />
            <Watermark className="left" />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/elevation/3.webp'} alt="" />
            <Watermark className="left" />
          </div>
        </div>

        <div className="sec_title text-center color style1 mt_50">
          <h4 className="title">Apartment</h4>
        </div>

        <div className="cards-container">
          <div className="card center gradient-green">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/1.webp'} alt="" />
            <Watermark className="left" />
          </div>
          <div className="card center gradient-blue">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/2.webp'} alt="" />
            <Watermark />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/3.webp'} alt="" />
            <Watermark className="left" />
          </div>

          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp'} alt="" />
            <Watermark />
          </div>

          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp'} alt="" />
            <Watermark className="left" />
          </div>

          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp'} alt="" />
            <Watermark  />
          </div>

          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp'} alt="" />
            <Watermark/>
          </div>

          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp'} alt="" />
            <Watermark className="left" />
          </div>
          <div className="card center gradient-purple">
            <img src={CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp'} alt="" />
            <Watermark className="left" />
          </div>
        </div>

    </div>
  );
}
