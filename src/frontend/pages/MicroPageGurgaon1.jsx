import React, { Suspense, useEffect, useState ,useRef} from "react";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";
import MicroHighlights from "../components/MicroPage/Highlights";
import MicroPrice from "../components/MicroPage/Price";
import MicroAmenities from "../components/MicroPage/Amenities";
import MicroMasterPlan from "../components/MicroPage/MasterPlan";
import MicroFloorPlan from "../components/MicroPage/FloorPlan";
import MicroLocationMap from "../components/MicroPage/LocationMap";
import Enquire from "../components/homepage/Enquire";
import EnquireForm from "../components/homepage/EnquireForm";
import PeacockSection from "../components/MicroPage/PeacockSection";
import Video2 from "../components/MicroPage/Video2";
import Video3 from "../components/MicroPage/Video3";
import MasterBedroom from "../components/MicroPage/MasterBedroom";
import Slides from "../components/MicroPage/Slides";
import Walkthrough from "../components/MicroPage/Walkthrough";
import Renders from "../components/MicroPage/Renders";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GurgaonLoader from "../../common/Loader/micro/gurgaon/Index";
import GurgaonLoader1 from "../../common/Loader/micro/gurgaon1/Index";
import Typology from "../components/homepage/Typology";
import LivingRoomVideoGurugram from "../components/MicroPage/LivingRoomVideoGurugram";
import SecSliding from "../components/MicroPage/SecSliding";
import MicroAmenities1 from "../components/MicroPage/Amenities1";

import Testing from "../components/MicroPage/Testing";
import RendersSliding from "../components/MicroPage/Testing";
import Renders1 from "../components/MicroPage/Renders1";
import CustomModal from "../../common/Modal";
import MicroHeader from './../components/MicroHeader';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import NoPolutionZone from "../components/MicroPage/NoPolutionZone";
import MicroLandscape from "../components/MicroPage/Landscape";
import MicroElevation from './../components/MicroPage/MicroElevation';
import MicroApartment from './../components/MicroPage/MicroApartment';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const MicroPageGurgaon1 = ({ data }) => {

  const [heroLoaded, setHeroLoaded] = useState(false);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sectionRefs = useRef({});
  const smootherRef = useRef(null);

  const scrollToSection = (sectionKey) => {
    const target = sectionRefs.current[sectionKey];
    if (target && smootherRef.current) {
      smootherRef.current.scrollTo(target, true);
    }
  };
  


  useEffect(() => {
    if (!heroLoaded) {
      // Add overflow: hidden to the body when heroLoaded is false
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when heroLoaded is true
      document.body.style.overflow = "";
    }

    // Cleanup function to reset the body overflow if the component unmounts
    return () => (document.body.style.overflow = "");
  }, [heroLoaded]);

  useEffect(()=>{
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // Smoothing duration
      effects: true, // Enable data-speed and data-lag effects
      smoothTouch: 1.4, // Smooth scrolling on touch devices
    });


    return ()=>{
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    }
  }, [])

  return (
    <>
      <MicroHeader scrollToSection={scrollToSection} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
      {/* Show Loader until hero section is loaded */}
      {!heroLoaded && (
        <GurgaonLoader1 />
      )}

      {/* Render Hero Section */}
      <div  ref={(el) => (sectionRefs.current.microOverview = el)}>
      <MicroHero data={data} onLoadComplete={() => setHeroLoaded(true)}  />
      </div>
      {/* Render other components only after Hero Section is loaded */}

      {heroLoaded && (
        <>
          <MicroOverview data={data} /> {/*no isssue*/}
          <LargeElevationSection data={data.LargeElevationSection} />
          <PeacockSection data={data} /> {/*no isssue*/}
          {/*no isssue*/}
          {/* {<Video2 data={data} />}  */}
          <div>
            <LivingRoomVideoGurugram  data={data} />
            {/* <LivingRoomVideo data={data} /> */}
          </div>
          <div>
            <Video3 data={data} />
          </div>

          <div>
            <MasterBedroom data={data} /> {/*no isssue*/}
          </div>
          <div ref={(el) => (sectionRefs.current.Walkthrough = el)}>

            <Walkthrough data={data.Walkthrough} /> {/*no isssue*/}
          </div>
          {/*<div>
            <Renders data={data} />  /~no isssue~/
          </div>*/}
          <div ref={(el) => (sectionRefs.current.MicroLandscape = el)}>
            <MicroLandscape />
          </div>

          <div ref={(el) => (sectionRefs.current.MicroElevation = el)}>
            <MicroElevation />
          </div>
          <div ref={(el) => (sectionRefs.current.MicroApartment = el)}>
            <MicroApartment />
          </div>

          <Renders1 />
          {/* <div>
            {data?.renders.map((render, index) => (
              <SecSliding key={index} data={render} />
            ))}
          </div> */}
          {/* <div>
            {data?.renders.map((render, index)=>(
              <SecSliding key={index} data={render} />
            ))}
            
          </div> */}
          {/* No polution zone location */}

          <div>
            {/* <MicroHighlights data={data.highlight} />  */}
          </div>
            {/* <MicroAmenities1 data={data.amenities} /> */}
           <div ref={(el) => (sectionRefs.current.MicroAmenities = el)}>
           <MicroAmenities data={data.amenities} />
           </div>

          <div ref={(el) => (sectionRefs.current.MicroTypology = el)}>
          <Typology   />
          </div>
          <div ref={(el) => (sectionRefs.current.MicroFloorPlan = el)}>
            <MicroFloorPlan data={data.floorPlan} />
          </div>
          <div ref={(el) => (sectionRefs.current.MicroLocationMap = el)}>
            <MicroLocationMap data={data.locationAdvantage} />
          </div>
          <div ref={(el) => (sectionRefs.current.NoPolutionZone = el)}>
            <NoPolutionZone /> {/*no isssue*/}
          </div>

          {/* <div>
            <MicroPrice /> 
          </div> */}
          {/* <MicroAmenities data={data.menities_section} /> */}
          {/* <MicroFloorPlan data={data.floorPlan} /> */}
          {/* <MicroLocationMap data={data.locationAdvantage} /> */}
          {/* <Slides /> */}
          <div className="container-fluid micro_footer">
            <div className="row ">
              <div className="col-sm-6 px-0">
                <Enquire />
              </div>
              <div className="col-sm-6 px-0">
                <EnquireForm />
              </div>
            </div>
          </div>

        </>
      )}

</div>
</div>
    </>
  );
};

export default MicroPageGurgaon1;
