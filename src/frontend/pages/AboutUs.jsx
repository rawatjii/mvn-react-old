import React from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';
import Philosophy from "../components/About/Philosophy";
import Timeline from "../components/About/Timeline";

const AboutUs = ()=>{
  return(
    <>
      <MicroBanner />
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