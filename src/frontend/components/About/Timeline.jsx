import React from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import mvnSchoolSec17 from '../../assets/images/timeline/mvnschool-sector-17.webp';
import mvnSchoolAravali from '../../assets/images/timeline/mvnschool-aravalihills.webp';
import athenFaridabad from '../../assets/images/timeline/athens-faridabad-2008.webp';
import gopalInstitute from '../../assets/images/timeline/gopalsharma-institute-of-engineering-and-technology-palwal.webp';
import mvnSchoolPalwal from '../../assets/images/timeline/mvn-school-palwal.webp';
import mvnSchoolKhambi from '../../assets/images/timeline/mvn-school-khambi.webp';
import mvnUniversityPalwal from '../../assets/images/timeline/mvn-university-palwal.webp';
import planeIcon from '../../assets/images/icons/plane2.webp';

const data = [
  {
    img:mvnSchoolSec17,
    year:'1983',
    title:'MVN School',
    location:'Sector-17, Faridabad'
  },
  {
    img:mvnSchoolAravali,
    year:'2000',
    title:'MVN School',
    location:'Aravali Hills, Faridabad'
  },
  {
    img:athenFaridabad,
    year:'2008',
    title:'Luxury Apartments | Project by Gopal Global Developers Pvt Ltd',
    location:'MVN Athens, Faridabad'
  },
  {
    img:gopalInstitute,
    year:'2008',
    title:'Gopal Sharma Institute of Engineering and Technology | Co.Edu',
    location:'Palwal, Haryana'
  },
  {
    img:mvnSchoolPalwal,
    year:'2009',
    title:'MVN School',
    location:'Haryana'
  },
  {
    img:mvnSchoolKhambi,
    year:'2009',
    title:'Gopal Sharma Modern Vidya Niketan School ',
    location:'Khambi'
  },
  {
    img:mvnUniversityPalwal,
    year:'2012',
    title:'MVN University ',
    location:'Haryana State '
  }
]

const Timeline = ()=>{
  return(
    <section className="timeline_section">
      <Container>
        <SecTitle className="text-center color style1 mb_30">
          <h4 className="title">Our Timeline</h4>
        </SecTitle>

        <ul className="timeline_content">
          <img src={planeIcon} alt="mvn plan icon" className="img-fluid plan_icon" />
          {data.map((item, index)=>(
            <li className={`single ` + (index % 2 != 0 ? 'right' : '') }>
              <div className="thumbnail">
                <img src={item.img} alt="mvn-timeline-image" className="img-fluid" />
              </div>
              <div className="content">
                <p className="year">{item.year}</p>
                <p className="title">{item.title}</p>
                <p className="location">{item.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Timeline;