import React from "react";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";

import bg from '../../assets/images/about/building_bg.png';
import about_img from '../../assets/images/about/about_img.png';
import LazyLoad from "react-lazyload";

const Overview = ()=>{
  return(
    <section className="section about_overview  pb-0">
      <div className="content_col position-relative">
        <LazyLoad>
          <img src={bg} alt="mvn-about-bg" className="img-fluid about_bg" />
        </LazyLoad>

        <Container>
          <SecTitle className="text-center color style1 mb_30">
            <h4 className="title">Building spaces <span>that help you grow</span></h4>
          </SecTitle>

          <p>At MVN, we are fired by an indomitable will to shape the future. We commenced our corporate journey in 1983 and have since evolved into a contemporary business entity with interests in education and real estate.</p>

          <p>Our first educational venture Modern Vidya Niketan School was conceived in 1983. It is today one of the most respected and acclaimed schools in its category. Several other institutions in the NCR region bear our name and are considered the ideal learning grounds for budding destinies. Not content to rest on our laurels, we are today forgoing ahead with strategic forays into urban infrastructure development, real estate and hospitality. We have identified prime locations for each of our projects and are convinced that these areas would be crucial to our resurgence and growth.</p>
        </Container>
      </div>

      <LazyLoad className="img_col">
        <img src={about_img} alt="mvn-about-bg" className="img-fluid about_img" />
      </LazyLoad>
    </section>
  )
}

export default Overview;