import React from "react";
import Hero from "../components/homepage/Hero";
import Projects from '../components/homepage/Projects';
import OtherProjects from '../components/homepage/OtheProjects';
import OurJourney from '../components/homepage/OurJourney';
import OurTeam from '../components/homepage/OurTeam';
import OurBrand from '../components/homepage/OurBrand';
import Testimonial from '../components/homepage/Testimonial';
import Enquire from '../components/homepage/Enquire';
import EnquireForm from '../components/homepage/EnquireForm';
const ScrollVideo = React.lazy(()=>import('../components/homepage/ScrollVideo'));
const Typology = React.lazy(()=>import('../components/homepage/Typology'));
const Overview = React.lazy(()=>import('../components/homepage/Overview'));

import { Suspense } from "react";
import TestOverview from "../components/homepage/TestOverview";

const Homepage = ()=>{  
  return(
    <>
      <Hero />

      <Suspense fallback="Loading">
        <ScrollVideo />
      </Suspense>

      {/* <Suspense fallback="Loading">
        <Typology />
      </Suspense> */}

       <Suspense fallback="Loading">
        <Overview />
      </Suspense>

      {/* <TestOverview /> */}

        <Projects />

        <OtherProjects />

        <OurJourney />

        <OurTeam />

        <OurBrand />

        <Testimonial />

        <Enquire />

        <EnquireForm />
    </>
  )
}

export default Homepage;