import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as CONFIG from "../../../config/config";
import OtherProjects from "../homepage/OtheProjects";

import mvnSchoolMobile from "../../assets/images/other-projects/mvn-school.webp";
import mvnUniversityMobile from "../../assets/images/other-projects/mvn-university.webp";
import mvnSportsAcademyMobile from "../../assets/images/other-projects/mvn-sports-academy.webp";

import mvnSchoolDesktop from "../../assets/images/other-projects/mvn-school-desktop.webp";
import mvnUniversityDesktop from "../../assets/images/other-projects/mvn-university-desktop.webp";
import mvnSportsAcademyDesktop from "../../assets/images/other-projects/mvn-sports-academy-desktop.webp";
import Watermark from "../../../common/watermark/Index";

gsap.registerPlugin(ScrollTrigger);

const amenityData = [
  {
    name: "MVN School",
    Mobilethumbnail: mvnSchoolMobile,
    Desktophumbnail: mvnSchoolDesktop,
  },
  {
    name: "MVN University",
    Mobilethumbnail: mvnUniversityMobile,
    Desktophumbnail: mvnUniversityDesktop,
  },
  {
    name: "MVN Sports Academy",
    Mobilethumbnail: mvnSportsAcademyMobile,
    Desktophumbnail: mvnSportsAcademyDesktop,
  },
];

export default function Amenities({ data }) {
  const amenities = data;
  const sectionsRef = useRef([]);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="amenities_section main_am">
        <div className="cards-container">
          <div className="sec_title text-center color style1">
            <h4 className="title">Amenities</h4>
          </div>
          
          {amenities.map((single, index)=>(
            <div key={index} className='col-sm-12 col-md-4 col-lg-4'>
              <div className="card center" onClick={() => setIndex(index)}>
                <img src={CONFIG.IMAGE_URL + 'amenities/'+single.imgSrc.mobile} alt="" className="img-fluid d-md-none" />
                <img src={CONFIG.IMAGE_URL + 'amenities/'+single.imgSrc.desktop} alt="" className="img-fluid d-none d-md-block" />
                <Watermark />
              </div>
              <div className="content">
                <h4 className="title style2">{single.name}</h4>
                <p className="desc">{single.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="amenities-container">
        <OtherProjects
          data={amenityData}
          title={"sdfjkjshdkfshdfkasdf"}
          subTitle={"sdkfsldfjsdklfjskldjfklsd"}
          mobContent={12}
        />
      </div>
    </>
  );
}
