import React from "react";
import { Container } from "react-bootstrap";
import Button from '../../../common/Button/Button';

const MicroOverview = ()=>{
  return(
    <section className="section micro_overview text-center pb-0">
      <Container>
        <div className="title">
          <h1 className="pr_name">MVN Aero One</h1>
          <h6 className="location">Bangalore</h6>
        </div>

        <p className="extra">ASCEND TO THE PINNACLE OF SOPHISTICATION</p>

        <p>Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.</p>
      </Container>

      <Button className="btn_style4">Download Brochure</Button>
    </section>
  )
}

export default MicroOverview;