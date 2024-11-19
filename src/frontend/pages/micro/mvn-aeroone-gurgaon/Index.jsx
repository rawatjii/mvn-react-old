import React from "react";
import MicroPage from "../../Micro";

const data = {
  overview:{
    title:'MVN Aero One',
    location:'Gurgaon',
    extra:'ASCEND TO THE PINNACLE OF SOPHISTICATION',
    desc:'Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.',
  },
  video1:{
    title:'EXPERIENCE THE BLISS OF ENDLESS VISTAS',
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
  },
  video2:{
    title:'ESCAPE TO EXCLUSIVITY',
    desc:'Dive into your own private pool with a grand view, just a few steps away from your living room',
  },
  video3:{
    title:'ELEVATED LIVING',
    desc:'OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION',
  },
  masterBedroom:{
    title:'MASTER BEDROOM',
    desc:'If You Think You Know What Lavishness Means It\'s Time You Got A New Perspective',
  }
}

const AeroOneGurgaon = ()=>{
  return(
    <MicroPage data={data} />
  )
}

export default AeroOneGurgaon;