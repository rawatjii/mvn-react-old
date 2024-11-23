import React from "react";
import * as CONFIG from '../../../../config/config'

const GurgaonLoader = ()=>{
  return(
    <div className="loader_section gurgaon_loader">
        <img src={CONFIG.IMAGE_URL + 'micro/hero/mobile/1.webp'} alt="mvn-micro-loader" className="img-fluid micro_thumbnail" />
    </div>
  )
}

export default GurgaonLoader;