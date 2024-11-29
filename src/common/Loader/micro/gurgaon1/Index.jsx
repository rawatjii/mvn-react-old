import React, { useState, useEffect } from "react";
import * as CONFIG from '../../../../config/config';
import BarLoader from "react-spinners/BarLoader";

import './gurgaon1-loader.css';

const GurgaonLoader1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 768px
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Listen for window resizing

    return () => window.removeEventListener("resize", checkIsMobile); // Cleanup
  }, []);

  // Set the image URL based on the device type
  const imageUrl = isMobile
    ? `${CONFIG.IMAGE_URL}micro/hero/client/mobile/1.webp`
    : `${CONFIG.IMAGE_URL}micro/hero/client/desktop/1.webp`;

  return (
    <div className="loader_section gurgaon_loader">
      <img
        src={imageUrl}
        alt="mvn-micro-loader"
        className="img-fluid micro_thumbnail"
      />

      <div className="loaderTxt">
        <BarLoader color="#fff" height={2} width={100} className="bar" />
        <p>Loading Experience</p>
      </div>
    </div>
  );
};

export default GurgaonLoader1;
