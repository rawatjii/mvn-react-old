import React from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './gurgaon1-loader.css';

const GurgaonLoader1 = ()=>{
  return(
    <div className="loader_section gurgaon_loader">
      <img src={CONFIG.IMAGE_URL + 'micro/hero/client/1.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />

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

export default GurgaonLoader1;