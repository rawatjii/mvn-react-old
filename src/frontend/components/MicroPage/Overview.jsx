import React from "react";
import { Container } from "react-bootstrap";
import Button from '../../../common/Button/Button';

const MicroOverview = ({data})=>{
  const {title, location, extra, desc} = data.overview

  return(
    <section className="section micro_overview text-center pb-0">
      <Container>
        <div className="title">
          <h1 className="pr_name">{title}</h1>
          <h6 className="location">{location}</h6>
        </div>

        {extra && <p className="extra">{extra}</p>}

        <p>{desc}</p>
      </Container>

      <Button className="btn_style4">Download Brochure</Button>
    </section>
  )
}

export default MicroOverview;