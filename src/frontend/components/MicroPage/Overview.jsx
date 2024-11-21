import React from "react";
import { Container } from "react-bootstrap";
import Button from '../../../common/Button/Button';
import diamondIMG from '../../assets/images/icons/diamond.png'
import CustomCard from "../Card";

const MicroOverview = ({data})=>{

  const {title, location, extra, desc} = data.overview;

  return(
    <section className="section micro_overview text-center pb-0">
      <Container>
        <CustomCard title={title} location={location} extra={extra} desc={desc} />
      </Container>

      <Button className="btn_style4">Download Brochure</Button>
    </section>
  )
}

export default MicroOverview;