import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { Form } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EnquireForm = ({career})=>{
  const titleRef = useRef();
  const formRef = useRef();

  useEffect(()=>{
    gsap.from(titleRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: titleRef.current,
        start: "top 95%",
      }
    })

    gsap.from(formRef.current, {
      y: 50,  
      opacity: 0,
      duration: 1, 

      scrollTrigger:{
        trigger: formRef.current,
        start: "top 95%",
      }
    })

  }, [])

  const handleSubmit = (e)=>{ 
    e.preventDefault();
  }

  return(
    <section className="section enquire_form">
      <Container>
        <SecTitle className="text-center color style1">
          <h4 ref={titleRef} className="title">Enquire Now</h4>
        </SecTitle>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name:"
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your E-Mail:"
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="number"
                name="number"
                placeholder="Your Phone:"
              />
            </Form.Group>
            {
              career && career === true && (
                <>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="text"
                      name="designation"
                      placeholder="Designation"
                    />
                  </Form.Group>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="text"
                      name="experience"
                      placeholder="Experience"
                    />
                  </Form.Group>
                </>
              )
            }




            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="text"
                name="message"
                placeholder="Your Message:"
              />
            </Form.Group>
            {
              career && career === true && (
                <>
                  <Form.Group className="form-group" as={Col} xs="12">
                    <Form.Control
                      type="file"
                      name="resume"
                      placeholder="Your Resume"
                    />
                  </Form.Group>
                </>
              )
            }

          </Row>
          
          <Button type="submit" className="btn_style3">Submit</Button>
        </Form>
      </Container>
    </section>
  )
}

export default EnquireForm