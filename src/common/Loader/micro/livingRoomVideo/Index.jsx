import React from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './peacock_loader.css';

const LivingRoomVideoLoader = ()=>{
  return(
    <div className="loader_section gurgaon_loader">
      <img src={CONFIG.VIDEO_URL + 'living-room/thumbnail_sm.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />

      <div className="loaderTxt">
        <BarLoader
          color="#fff"
          height={2}
          width={100}
          className="bar" 
        />
        <p>Loading Experience</p>
      </div>
      
      
    </div>
  )
}

export default LivingRoomVideoLoader;