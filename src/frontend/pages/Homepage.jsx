import React from "react";
import Hero from "../components/homepage/Hero";
const Projects = React.lazy(()=>import('../components/homepage/Projects'))
const OtherProjects = React.lazy(()=>import('../components/homepage/OtheProjects'))
const OurJourney = React.lazy(()=>import('../components/homepage/OurJourney'))
const OurTeam = React.lazy(()=>import('../components/homepage/OurTeam'))
const OurBrand = React.lazy(()=>import('../components/homepage/OurBrand'))
const Testimonial = React.lazy(()=>import('../components/homepage/Testimonial'))
const Enquire = React.lazy(()=>import('../components/homepage/Enquire'))
const EnquireForm = React.lazy(()=>import('../components/homepage/EnquireForm'))
const ScrollVideo = React.lazy(()=>import('../components/homepage/ScrollVideo'));
const Typology = React.lazy(()=>import('../components/homepage/Typology'));
const Overview = React.lazy(()=>import('../components/homepage/Overview'));

import { Suspense } from "react";

const Homepage = ()=>{  
  return(
    <>
      <Hero />

      {/* <Suspense fallback="Loading">
        <ScrollVideo />
      </Suspense> */}

      {/* <Suspense fallback="Loading">
        <Typology />
      </Suspense> */}

      {/* <Suspense fallback="Loading">
        <Overview />
      </Suspense> */}

      <Suspense fallback="Loading">
        <Projects />
      </Suspense>

      <Suspense fallback="Loading">
        <OtherProjects />
      </Suspense>

      <Suspense fallback="Loading">
        <OurJourney />
      </Suspense>

      <Suspense fallback="Loading">
        <OurTeam />
      </Suspense>

      <Suspense fallback="Loading">
        <OurBrand />
      </Suspense>

      <Suspense fallback="Loading">
        <Testimonial />
      </Suspense>

      <Suspense fallback="Loading">
        <Enquire />
      </Suspense>

      <Suspense fallback="Loading">
        <EnquireForm />
      </Suspense>
    </>
  )
}

export default Homepage;