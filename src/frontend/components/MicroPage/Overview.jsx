import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from '../../../common/Button/Button';
import diamondIMG from '../../assets/images/icons/plane1.png'
import CustomCard from "../Card";
import Rera from "./Rera";
import CustomModal from "../../../common/Modal";

import AboutUsBg from '../../assets/images/aero-gurgaon/aboutUs-bg.jpg'

const MicroOverview = ({data})=>{
  const [isShowModal, setIsShowModal] = useState(false)
  const {title, location, extra, desc} = data.overview;


  return(
    <section className="section micro_overview text-center pb-0">
      <Container>
        <div className="overview_card px-0">
          <div className="aboutUs-card_heading">
            <div className="diamond_img_strip">
              <img src={diamondIMG} className="img-fluid" alt="image" />
            </div>
            <div className="title">
              <h1 className="pr_name">{title}</h1>
              <h6 className="location">{location}</h6>
            </div>
          </div>

          {extra && <p className="extra">{extra}</p>}
  
          <div className="aboutUs-box">
          {
            desc && Array.isArray(desc) ?  desc.map((el, i)=>(
              <p className="desc" key={`desc-${i}`}>{el}</p>  
            )):  <p>{desc}</p>
          }
          </div>

          <span className="bar"></span>

        </div>

        {/* <CustomCard data={data} /> */}

        <p className="rera-number">RERA Registration no : RERA-GRG-PROJ-1729- 2024
          {/* <br/>
          Bank A/C Name: M/s MVN Infrastructure Projects LLP<br/>
          HDFC A/C NO : 9991340000999<br/>
          IFSC CODE : HDFC0000279<br/> */}
        </p>
      </Container>


      {/* <img src={AboutUsBg} alt="" className="img-fluid aboutUs-bg"/> */}

    </section>
  )
}

export default MicroOverview;