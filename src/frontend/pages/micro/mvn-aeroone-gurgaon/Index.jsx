import React from "react";
import MicroPage from "../../Micro";

const data = {
  overview:{
    title:'MVN Aero One',
    location:'Gurgaon',
    extra:'ASCEND TO THE PINNACLE OF SOPHISTICATION',
    desc:'Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.',
  }
}

const AeroOneGurgaon = ()=>{
  return(
    <MicroPage data={data} />
  )
}

export default AeroOneGurgaon;