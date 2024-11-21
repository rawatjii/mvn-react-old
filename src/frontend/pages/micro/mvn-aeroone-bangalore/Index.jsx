import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro/aeroone_bangalore/hero_mobile.jpg";
import hero_img_desk from "../../../../frontend/assets/images/micro/aeroone_bangalore/hero_desk.jpg";
import highlightbgIMG from '../../../assets/images/bg/112.jpg'

const data = {
  micro_hero_section: 
  {
    isVdo: false,
    images:[{ imgMb: hero_img_mb, imgDesk: hero_img_desk, }],
    bannerHighLight:true,
    enquiryBTN:{
      isshow: true,
      mail: `info@example.com`
    } 
  },
  bannerHighLight: {
    isshow: true,
  },
  overview: {
    title: "MVN AERO ONE",
    location: "BANGALORE",
    extra: "",
    desc:[
      'At MVN, we are fired by an indomitable will to shape the future. We commenced our corporate journey in 1983 and have since evolved into a contemporary business entity with interests in education and real estate.',
      'Our first educational venture Modern Vidya Niketan School was conceived in 1983. It is today one of the most respected and acclaimed schools in its category. Several other institutions in the NCR region bear our name and are considered the ideal learning grounds for budding destinies.'
    ]
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
    isVdo: false,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: false,
  },
  video3: {
    title: "ELEVATED LIVING",
    desc: "OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION",
    isVdo: false,
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
    isVdo: false,
  },
  Slides: {
    isshow: true,
  },
  enquiryBTN:{
    isshow:true,
    mail: "info@example.in",
  },
  menities_section: [
    {
      title: 'Infinity Pool',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/pool.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/poolSm.webp',
      }
    },
    {
      title: 'THE STUDY',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/study.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/studySm.webp',
      }
    },
    {
      title: 'MODERN ROOFTOP CLUBHOUSE',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/clubhouse.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/clubhouseSm.webp',
      }
    },
    {
      title: 'double height balcony',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/balcony.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/balconySm.webp',
      }
    },
    {
      title: 'living area',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/living.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/livingSm.webp',
      }
    },
    
  ],
  highlightbg: {
    isshow: true,
    img: highlightbgIMG
  }
  
};

console.log(data.menities_section[0].images.lg);


const AeroOneBangalore = () => {
  return (
    <MicroPage data={data} />
  )
};

export default AeroOneBangalore;
