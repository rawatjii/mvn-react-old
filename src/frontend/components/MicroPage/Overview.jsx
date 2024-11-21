import React from "react";
import { Container } from "react-bootstrap";
import Button from '../../../common/Button/Button';
import diamondIMG from '../../assets/images/icons/diamond.png'
import CustomCard from "../Card";

const MicroOverview = ({data})=>{

  const {title, location, extra, desc} = data.overview;
  console.log('data',data);
  console.log('desc',typeof desc);

  return(
    <section className="section micro_overview text-center pb-0">
      <Container>
        <div className="overview_card">
          <div className="diamond_img_strip">
            <img src={diamondIMG} className="img-fluid" alt="image" />
          </div>
          <div className="title">
            <h1 className="pr_name">{title}</h1>
            <h6 className="location">{location}</h6>
          </div>

          {extra && <p className="extra">{extra}</p>}

          {
            desc && Array.isArray(desc) ?  desc.map((el, i)=>(
              <p className="desc" key={`desc-${i}`}>{el}</p>  
            )):  <p>{desc}</p>
          }

        </div>

        {/* <CustomCard data={data} /> */}
        
      </Container>

      <Button className="btn_style4">Download Brochure</Button>
    </section>
  )
}

export default MicroOverview;