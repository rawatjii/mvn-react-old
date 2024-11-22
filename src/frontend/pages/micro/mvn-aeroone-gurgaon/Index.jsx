import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro_hero/hero_img.webp";

import "./aeroGuragaon.css";

const data = {
  micro_hero_section:
  {
    isVdo: true,
    images: false,
    bannerHighLight: false,
    enquiryBTN: false
  },
  overview: {
    title: "MVN Aero One",
    location: "Gurgaon",
    extra: "ASCEND TO UNRIVALED HEIGHTS OF PURE SOPHISTICATION",
    // desc: "Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.",
    desc: [
      'Luxury Reimagined. Elegance Reborn.',
      'Step into a world of unparalleled luxury, where every detail blends sophistication with style. Relish in tailored interiors, exceptional amenities, and panoramic views. Transform your lifestyle with an extraordinary living experience beyond compare.',
    ],
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
    isVdo: true,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: true,
  },
  video3: {
    title: "ELEVATED LIVING",
    desc: "OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION",
    isVdo: true,
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
    isVdo: true,
  },
  highlights: [
    "Power backup for common facilities.",
    "Italian/Imported Marble flooring.",
    "Television points in living and bedrooms.",
    "Telephone points in living and master bedroom.",
    "Split AC provision in living and bedrooms.",
    "Premium emulsion paint finish.",
  ],
  walkthrough: {
    isshow: true,
    desc: "IF YOU THINK YOU'VE EXPERIENCED TRUE LUXURY IT'S TIME TO RAISE YOUR EXPECTATION",
    masterBedroom: {
      title: "MASTER BEDROOM",
      desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
      isVdo: true,
    },
  },
  LargeElevationSection: {
    title: "an epitome of contemporary elegance",
    isAllow: true,
  },
  renders: [
    {
      src: CONFIG.IMAGE_URL + 'renders/1_desktop.webp',
      mobile_thumb: CONFIG.IMAGE_URL + 'renders/1_mobile.webp',
    },
    {
      src: CONFIG.IMAGE_URL + 'renders/2_desktop.webp',
      mobile_thumb: CONFIG.IMAGE_URL + 'renders/2_mobile.webp',
    },
    {
      src: CONFIG.IMAGE_URL + 'renders/3_desktop.webp',
      mobile_thumb: CONFIG.IMAGE_URL + 'renders/3_mobile.webp',
    },
    {
      src: CONFIG.IMAGE_URL + 'renders/4_desktop.webp',
      mobile_thumb: CONFIG.IMAGE_URL + 'renders/4_mobile.webp',
    },
    {
      src: CONFIG.IMAGE_URL + 'renders/5_desktop.webp',
      mobile_thumb: CONFIG.IMAGE_URL + 'renders/5_mobile.webp',
    }
  ],
  menities_section: [
    {
      title: 'Spa',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
      }
    },
    {
      title: 'Mini Theater',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
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
      title: 'Business Centre',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
      }
    },
    {
      title: 'Library',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
      }
    },
    {
      title: 'Gym Area',
      images: {
        lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
        mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
      }
    },
  ],
  highlight:{
    isshow: true,
    title: "Highlight",
    point:[
      'Power backup for common facilities.',
    'Italian/Imported Marble flooring.',
    'Television points in living and bedrooms.',
    'Telephone points in living and master bedroom.',
    'Split AC provision in living and bedrooms.',
    'Premium emulsion paint finish.',
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    mapIMG: CONFIG.IMAGE_URL + 'aero-bangalore/location.jpg',
    locationData : [
      {
        distance:'15 Min',
        title:'Kempegowda Intl. Airport',
      },
      {
        distance:'12 Min',
        title:'K.I.Airport Halt (Railway Station)',
      },
      {
        distance:'05 Min',
        title:'Sports Village',
      },
      {
        distance:'06 Min',
        title:'Mini Vidhana Soudha',
      },
      {
        distance:'02 Min',
        title:'Anjaneya Temple',
      },
      {
        distance:'11 Min',
        title:'KIADB Aerospace SEZ',
      },
    ]
  },
  floorPlan:{

    floorPlanData : [
      {
        title:'1 BHK Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/1-BHK.jpg',
      },
      {
        title:'2 BHK Panoramic floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/2-BHK-Panoramic-Flats.jpg',
      },
      {
        title:'2 BHK Luxury floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/2-BHK-Luxury.jpg',
      },
      {
        title:'3 BHK Luxury floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/3-BHK-Luxury.jpg',
      },
      
    ]
  }
};

const AeroOneGurgaon = () => {
  return <MicroPage data={data} />;
};

export default AeroOneGurgaon;
