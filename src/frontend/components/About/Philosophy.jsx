import React from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import planeIcon from '../../assets/images/icons/plane1.png'

const Philosophy = ()=>{
  return(
    <section className="section philosophy_section">
      <Container>
        <SecTitle className="text-center color style1 mb_30">
          <h4 className="title">Our Philosophy</h4>
        </SecTitle>

        <ul className="content">
          <li>
            <h4 className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Vision</h4>
            <p>At MVN, we are fired by an indomitable will to shape the future. We commenced our corporate journey in 1983 and have since evolved into a contemporary business entity with interests in education and real estate.</p>
          </li>

          <li>
            <h4 className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Mission</h4>
            <p>We build exceptional ecosystems that serve India’s high-growth ambitions. As part of our mission, we are creating a legacy of world-class real estate offerings that are locally relevant and sustainable yet meet global standards. We are building universities, urban infrastructure, hotels, and homes with equal zest across ‘aspiring’ to ‘arrived’ India – from Khambi to Bengaluru.</p>
          </li>

          <li>
            <h4 className="title">
              <img src={planeIcon} alt="mvn-plan-icn" className="img-fluid icon" />
              Our Values</h4>
            <ul>
              <li>Enrich lives</li>
              <li>Empower ambitions</li>
              <li>Drive innovation</li>
              <li>Inspire quality</li>
            </ul>
          </li>
        </ul>
      </Container>
    </section>
  )
}

export default Philosophy