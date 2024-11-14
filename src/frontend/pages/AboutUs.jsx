import React, { Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';
import Philosophy from "../components/About/Philosophy";
import Timeline from "../components/About/Timeline";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";

import micro_bg from '../assets/images/about/micro_bg.jpg'

const AboutUs = ()=>{
  const breadcrumbs = {
    title:'About Us',
    links:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About Us'
      }
    ]
  }

  return(
    <>
      <MicroBanner bg={micro_bg} data={breadcrumbs} />
      <div className="micro_content">
        <div className="micro_data">

            <AboutOverview />

            <Philosophy />

            <Timeline />

            <Enquire />

            <EnquireForm />
        </div>
      </div>
    </>
  )
}

export default AboutUs