import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';
import Philosophy from "../components/About/Philosophy";
import Timeline from "../components/About/Timeline";

import micro_bg from '../assets/images/about/micro_bg.jpg'

const AboutUs = ()=>{
  return(
    <>
      <MicroBanner bg={micro_bg} />
      <div className="micro_content">
        <div className="micro_data">
          <AboutOverview />
          <Philosophy />
          <Timeline />
        </div>
      </div>
    </>
  )
}

export default AboutUs