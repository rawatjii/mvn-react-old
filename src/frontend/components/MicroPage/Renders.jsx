import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

const Renders = ({data})=>{
  const [isRendersShow, setIsRendersShow] = useState(false);
  const [index, setIndex] = useState(-1);

  const renders = data.renders;

  return(
    <section className="section render_section">
      <Container>
        <SecTitle className="text-center color style1">
          <h4  className="title">Renders</h4>
        </SecTitle>

        <Row>
          {renders.map((render, index)=>(
            <Col as={Col} xs={12}>
              <div className="single"  onClick={()=>setIndex(index)}>
                <img src={render.mobile_thumb} alt="mvn-render-image" className="img-fluid" />
              </div>
            </Col>
          ))}
        </Row>

      </Container>

      <Lightbox 
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={renders}
        plugins={[Zoom]}
        carousel={{
          finite: renders.length <= 1,  // Prevent looping if there’s only one image
        }}
        render={{
        buttonNext: renders.length > 1 ? undefined : () => null,
        buttonPrev: renders.length > 1 ? undefined : () => null,
        slide: renders.length > 1 ? undefined : () => null, 
      }} />
    </section>
  )
}

export default Renders;