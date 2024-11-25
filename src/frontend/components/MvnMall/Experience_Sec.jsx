import React from "react";
import Diamond from "../../assets/images/mvn-mall/diamond.png";
import Exp_Img from "../../assets/images/mvn-mall/exp-1.png";


const Experience_Sec = () => {
  return (
    <section class="section experience-section">
      <div class="image-exp">
        <img class="img-fluid w-100" src={Exp_Img} alt="" />
      </div>
      <div class="exp-content">
        <h4>A Culinary Experience Bigger Than Your Imagination</h4>
      </div>
      <div class="diamond-icons">
        <img class="active" src="images/diamond-dark.png" alt="" />
        <img class="" src={Diamond} alt="" />
        <img class="" src={Diamond} alt="" />
        {Array.from({ length: 2 }, (_, i) => (
          <img key={i} className="" src={Diamond} alt="Diamond" />
        ))}
      </div>
    </section>
  );
};

export default Experience_Sec;
