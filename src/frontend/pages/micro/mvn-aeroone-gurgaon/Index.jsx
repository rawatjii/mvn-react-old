import React from "react";
import MicroPage from "../../Micro";
import hero_img_mb from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import './aeroGuragaon.css'

const data = {
  micro_hero_section: [{ imgMb: hero_img_mb, imgDesk: hero_img_desk }],
  overview: {
    title: "MVN Aero One",
    location: "Gurgaon",
    extra: "ASCEND TO THE PINNACLE OF SOPHISTICATION",
    desc: "Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.",
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
    isVdo: false
  },
  video2: {
    title: 'ESCAPE TO EXCLUSIVITY',
    desc: 'Dive into your own private pool with a grand view, just a few steps away from your living room',
    isVdo: false
  },
  video3: {
    title: 'ELEVATED LIVING',
    desc: 'OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION',
    isVdo: false
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
    isVdo: false
  },
  LargeElevationSection: {
    title: "an epitome of contemporary elegance",
    isAllow: true
  }
};

const AeroOneGurgaon = () => {
  return <MicroPage data={data} />;
};

export default AeroOneGurgaon;
