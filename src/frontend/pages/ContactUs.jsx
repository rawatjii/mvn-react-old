import React, { Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";
const ContactPage = React.lazy(()=>import('../components/contact/Index'));

import bannerBg from '../assets/images/contact/banner-bg.webp';

const ContactUs = ()=>{
  return(
    <>
      <MicroBanner title="Contact Us" bgImg={bannerBg} />
      <div className="micro_content">
        <div className="micro_data">
            <Suspense fallback="loading">
              <ContactPage />
            </Suspense>
        </div>
      </div>
    </>
  )
}

export default ContactUs