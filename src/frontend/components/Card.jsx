import React from "react";
import planeIMG from "../assets/images/icons/plane.png";

const CustomCard = ({ className, title, location, extra, desc, extraTxt }) => {
  return (
    <div className={`overview_card ${className}`}>
      <div className="diamond_img_strip">
        <img src={planeIMG} className="img-fluid" alt="image" />
      </div>
      {title && (
        <div className="title">
          <h1 className="pr_name">{title}</h1>
          <h6 className="location">{location}</h6>
        </div>
      )}

      {extra && <p className="extra">{extra}</p>}

      {desc && Array.isArray(desc) ? (
        desc.map((el, i) => (
          <p className="desc" key={`desc-${i}`}>
            {el}
          </p>
        ))
      ) : (
        <p className="desc">{desc}</p>
      )}
      {extraTxt && <h4 className="extraTxt">{extraTxt}</h4>}
    </div>
  );
};

export default CustomCard;