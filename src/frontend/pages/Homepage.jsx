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
import HomepageVideo from "../components/MicroPage/HomepageVideo";


import { Suspense } from "react";
import TestOverview from "../components/homepage/TestOverview";
import ScrollToTop from "../../common/ScrollToTop";
// import TestOverview from "../components/homepage/TestOverview";
// import Header from "../components/Header/Header";



const Homepage = ()=>{  
  window.scrollTo(0, 0);

  const dataa={
    title:"asdfasf",
     des:"sfsafa"

  }
  return(
    <>
  <HomepageVideo data={dataa} />
      {/* <Hero /> */}
      {/* <Suspense fallback="Loading">
        <Header />
      </Suspense> */}

      {/* <Suspense fallback="Loading">
        <ScrollVideo />
      </Suspense>  */}

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
        
        <div className="flex-footer-form">
          
        <Enquire />

        <EnquireForm projectName={'MVN'}/>
        </div>
    </>
  )
}

export default Homepage;