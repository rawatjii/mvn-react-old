import React, { Suspense } from "react";
import MicroHero from "../components/MicroPage/Hero";
import MicroOverview from "../components/MicroPage/Overview";
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
import LargeElevationSection from '../components/MicroPage/LargeElevationSection'
import Renders from "../components/MicroPage/Renders";
import LargeElevationSection from "../components/MicroPage/LargeElevationSection";

const MicroPage = ({ data }) => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <MicroHero data={data} />
        <MicroOverview data={data} />
        {data.video1.isVdo === true && <PeacockSection data={data} />}
        {data.video2.isVdo === true && <Video2 data={data} />}
        {data.video3.isVdo === true && <Video3 data={data} />}
        {data.masterBedroom.isVdo === true && <MasterBedroom data={data} />}
        {data.LargeElevationSection.isAllow === true && <LargeElevationSection data={data.LargeElevationSection} />}
        <Walkthrough data={data} />
        <Renders data={data} />
        {data.LargeElevationSection &&
          data.LargeElevationSection.isAllow === true && (
            <LargeElevationSection data={data.LargeElevationSection} />
          )}
        {/* {data.Walkthrough && <Walkthrough data={data} />} */}
        <MicroHighlights />
        <MicroPrice />
        <MicroAmenities />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <MicroMasterPlan />
            </div>
            <div className="col-sm-6">
              <MicroFloorPlan />
            </div>
          </div>
        </div>
        <MicroLocationMap />
        {data.Slides && data.Slides.isshow === true && <Slides />}

        <div className="container-fluid">
          <div className="row">
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

export default MicroPage;
