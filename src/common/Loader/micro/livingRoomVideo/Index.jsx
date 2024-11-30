import React from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './living_room_loader.css';

const LivingRoomVideoLoader = ()=>{
  return(
    <div className="loader_section gurgaon_loader living_room_video_loader">
      <img src={CONFIG.VIDEO_URL + 'living-room/loader_thumbnail.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />

      <div className="loaderTxt">
        <BarLoader
          color="#8b5e10"
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