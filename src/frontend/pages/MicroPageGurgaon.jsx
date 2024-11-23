import React, { Suspense } from "react";
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

const MicroPageGurgaon = ({ data }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <MicroHero data={data} /> {/*no isssue*/}
        <MicroOverview data={data} /> {/*no isssue*/}
        <LargeElevationSection data={data.LargeElevationSection} /> {/*no isssue*/}
        <PeacockSection data={data} /> {/*no isssue*/}
         {/*no isssue*/}
        {/* {<Video2 data={data} />}  */}
        <LivingRoomVideo data={data} /> {/*no isssue*/}
        <Video3 data={data} /> {/*no isssue*/}
        {/* No polution zone location */}
        <Location /> {/*no isssue*/}
        <MasterBedroom data={data} /> {/*no isssue*/}
        <Walkthrough data={data.Walkthrough} /> {/*no isssue*/}
        <Renders data={data} />  {/*no isssue*/}
        <MicroHighlights data={data.highlight} />  {/*no isssue*/}
        <MicroPrice />  {/*no isssue*/}
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
      </Suspense>
    </>
  );
};

export default MicroPageGurgaon;
