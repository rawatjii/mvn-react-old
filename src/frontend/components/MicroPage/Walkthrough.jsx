import React from "react";
import CustomCard from "../Card";
import { Container } from "react-bootstrap";

const Walkthrough = ()=>{
  return(
    <section className="section walkthrough_section">
     <iframe src="https://www.youtube.com/embed/PhkCdCg9k4k?autoplay=1&loop=1&playlist=PhkCdCg9k4k" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen="1"></iframe>

      <Container>
        <div className='about'>
          <CustomCard
            title="A GLIMPSE INTO A LIFE EXTRAORDINARY" 
            desc="Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you." 
            extraTxt="Exclusive entrance and exit for the residents."
          />
        </div>
      </Container>
    </section>
    
  )
}

export default Walkthrough