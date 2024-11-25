import React, { useState, useEffect } from "react";
import MicroBanner from "../components/MicroBanner/Index";
import AboutOverview from '../components/About/Overview';
import Philosophy from "../components/About/Philosophy";
import Timeline from "../components/About/Timeline";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import Mobilemicro_bg from '../assets/images/about/about-head-bg-desktop.webp';
import Desktopmicro_bg from '../assets/images/about/about-head-bg-desktop.webp';
import OurTeam from "../components/About/Ourteam";

const AboutUs = () => {
 
  const [microBg, setMicroBg] = useState(Desktopmicro_bg);

  const breadcrumbs = {
    title: 'About Us',
    links: [
      { name: 'Home', link: '/' },
      { name: 'About Us' }
    ]
  };

  // Update background image based on window width
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 768) {
        setMicroBg(Mobilemicro_bg);
      } else {
        setMicroBg(Desktopmicro_bg);
      }
    };

    // Initial check
    updateBackground();

    // Add resize event listener
    window.addEventListener('resize', updateBackground);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <>
      <MicroBanner bg={microBg} data={breadcrumbs} />
      <div className="micro_content">
        <div className="micro_data">
          <AboutOverview />
          <Philosophy />
          <Timeline />
          <OurTeam />
          <div className="flex-footer-form">
            <Enquire />
            <EnquireForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
