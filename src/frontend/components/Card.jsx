import React from "react";
import diamondIMG from '../assets/images/icons/diamond.png';

const CustomCard = ({title, location, extra, desc})=>{
  
  return(
    <div className="overview_card">
      <div className="diamond_img_strip">
        <img src={diamondIMG} className="img-fluid" alt="image" />
      </div>
      {title && (
        <div className="title">
        <h1 className="pr_name">{title}</h1>
        <h6 className="location">{location}</h6>
      </div>
      )}
      

      {extra && <p className="extra">{extra}</p>}

      {
        desc && Array.isArray(desc) ?  desc.map((el, i)=>(
          <p className="desc" key={`desc-${i}`}>{el}</p>  
        )):  <p  className="desc">{desc}</p>
      }

    </div>
  )
}

export default CustomCard;