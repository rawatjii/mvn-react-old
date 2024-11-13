import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import './microBanner.css';

import bannerBg from '../../assets/images/hero/hero_img.webp'

const MicroBanner = ({bg})=>{
  return(
    <section className="section micro_banner">
      <Container>
        <LazyLoad>
          <img src={bg} alt="mvn-microbanner-bg" className="img-fluid microbanner_bg" />
        </LazyLoad>
        <h2 className="microTitle">About Us</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>About Us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </section>
  )
}

export default MicroBanner