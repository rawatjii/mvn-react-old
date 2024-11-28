import React, { useState, useEffect, Suspense } from "react";
import MicroBanner from "../components/MicroBanner/Index";

const ContactPage = React.lazy(() => import('../components/contact/Index'));

import MobilebannerBg from '../assets/images/contact/head-banner_bg.webp';
import DesktopbannerBg from '../assets/images/contact/head-banner_bg-2.webp';
import Enquire from '../components/homepage/Enquire';
import EnquireForm from '../components/homepage/EnquireForm';

const ContactUs = () => {
  window.scrollTo(0, 0);
  const [bannerBg, setBannerBg] = useState(DesktopbannerBg);

  const breadcrumbs = {
    title: 'Contact Us',
    links: [
      { name: 'Home', link: '/' },
      { name: 'Contact Us' }
    ]
  };

  // Update background image dynamically based on screen width
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth <= 768) {
        setBannerBg(MobilebannerBg);
      } else {
        setBannerBg(DesktopbannerBg);
      }
    };

    // Initial check
    updateBackground();

    // Add event listener for screen resize
    window.addEventListener('resize', updateBackground);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, []);

  return (
    <>
      <MicroBanner bg={bannerBg} data={breadcrumbs} />
      <div className="micro_content">
        <div className="micro_data">
            <Suspense fallback="loading">
              <ContactPage />
                <div className="flex-footer-form">
              
                <Enquire />
      
                <EnquireForm projectName={'MVN'}/>
              </div>
            </Suspense>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
