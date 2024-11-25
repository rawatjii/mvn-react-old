import React, { Suspense, useEffect, useState } from "react";
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
import Location from "../components/MicroPage/Location";
import LivingRoomVideo from "../components/MicroPage/LivingRoomVideo";
import GurgaonLoader from "../../common/Loader/micro/gurgaon/Index";
import GurgaonLoader1 from "../../common/Loader/micro/gurgaon1/Index";
import Typology from "../components/homepage/Typology";

const MicroPageGurgaon1 = ({ data }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    if (!heroLoaded) {
      // Add overflow: hidden to the body when heroLoaded is false
      document.body.style.overflow = "hidden";
    } else {
      // Remove overflow: hidden when heroLoaded is true
      document.body.style.overflow = "";
    }

    // Cleanup function to reset the body overflow if the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [heroLoaded]);

  return (
    <>
      {/* Show Loader until hero section is loaded */}
      {!heroLoaded && (
        <GurgaonLoader1 />
      )}

      {/* Render Hero Section */}
      <MicroHero data={data} onLoadComplete={() => setHeroLoaded(true)} />

      {/* Render other components only after Hero Section is loaded */}

      {heroLoaded && (
        <>
          <MicroOverview data={data} /> {/*no isssue*/}
          <PeacockSection data={data} /> {/*no isssue*/}
          {/*no isssue*/}
          {/* {<Video2 data={data} />}  */}
          <div>
            <LivingRoomVideo data={data} /> {/*no isssue*/}
          </div>
          <div>
            <Video3 data={data} /> {/*no isssue*/}
          </div>
          {/* No polution zone location */}

          <div>
            <Location /> {/*no isssue*/}
          </div>

          <div>
            <MasterBedroom data={data} /> {/*no isssue*/}
          </div>
          <div>

            <Walkthrough data={data.Walkthrough} /> {/*no isssue*/}
          </div>
          <div>
            <Renders data={data} />  {/*no isssue*/}
          </div>
          <div>
            <MicroHighlights data={data.highlight} />  {/*no isssue*/}
          </div>

          <div>
            <MicroPrice />  {/*no isssue*/}
          </div>
          <div>
            <MicroAmenities data={data.menities_section} />
          </div>
          <div>
            <MicroFloorPlan data={data.floorPlan} />
          </div>
          <div>
            <MicroLocationMap data={data.locationAdvantage} />
          </div>
          <div>
          <Typology  />
          </div>
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


    </>
  );
};

export default MicroPageGurgaon1;
