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

const MicroPage = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <MicroHero />
        <MicroOverview />
        <PeacockSection />
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
  )
}

export default MicroPage