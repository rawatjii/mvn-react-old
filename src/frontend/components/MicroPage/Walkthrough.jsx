import React from "react";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";

const Walkthrough = ()=>{
  return(
    <section className="section walkthrough_section">
      <iframe src="https://www.youtube.com/embed/PhkCdCg9k4k?si=3_kg6NJbn51bzDCr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
      <Container>
        <div className='about'>
            <CustomCard
              title="Walkthrough" 
              desc="Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you."  
            />
        </div>

    </Container>
    </section>
    
  )
}

export default Walkthrough