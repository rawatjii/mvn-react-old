import React, { Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";
const ContactPage = React.lazy(()=>import('../components/contact/Index'));

import bannerBg from '../assets/images/contact/banner_bg.webp';

const ContactUs = ()=>{
  const breadcrumbs = {
    title:'Contact Us',
    links:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Contact Us'
      }
    ]
  }

  return(
    <>
      <MicroBanner bg={bannerBg} data={breadcrumbs}/>
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