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

const MicroPage = ()=>{
  return(
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <MicroHero />
        <MicroOverview />
        <PeacockSection />
        <MicroHighlights />
        <MicroPrice />
        <MicroAmenities />
        <MicroMasterPlan />
        <MicroFloorPlan />
        <MicroLocationMap />
        <Enquire />
        <EnquireForm />
      </Suspense>
    </>
  )
}

export default MicroPage