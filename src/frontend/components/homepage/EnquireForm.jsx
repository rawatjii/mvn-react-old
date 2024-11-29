import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import { Form } from "react-bootstrap";
import Button from "../../../common/Button/Button";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import headingIconImg from "../../assets/images/icons/heading-icon-img.png";

gsap.registerPlugin(ScrollTrigger);

const EnquireForm = ({ career, projectName }) => {
  const titleRef = useRef();
  const formRef = useRef();

  const [formDetails, setFormDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 95%",
      },
    });

    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,

      scrollTrigger: {
        trigger: formRef.current,
        start: "top 95%",
      },
    });
  }, []);

  // `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=&qIP=".getUserIP().`

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}`;
    if (
      !formDetails.name ||
      !formDetails.email ||
      !formDetails.number ||
      !formDetails.message
    ) {
      alert("Please fill all details!");
    } else {
      setLoading(true);
      fetch(apiUrl, {
        method: "GET", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        // body: JSON.stringify(formDetails), // Convert the data to JSON string
      })
        .then((data) => {
          // console.log("Success:", data); // Handle the response
          setFormDetails({});
          setLoading(false);
          alert("Enquiry Details Sent Successfully!");
          window.location.href = "/thanks";
        })
        .catch((error) => {
          console.error("Error:", error); // Handle any errors
          setLoading(false);
        });
    }
  };

  return (
    <section className="section enquire_form">
      <Container>
        <SecTitle className="text-center color style1">
          <img src={headingIconImg} alt="" className="img-fluid headingIcon" />
          <h4 ref={titleRef} className="title">
            Enquire Now
          </h4>
        </SecTitle>

        <Form ref={formRef} onSubmit={loading ? () => null : handleSubmit}>
          <Row>
            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name:"
                value={formDetails.name ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your E-Mail:"
                value={formDetails.email ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="number"
                name="number"
                placeholder="Your Phone:"
                value={formDetails.number ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>
            {career && career === true && (
              <>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    onChange={handleFormChange}
                  />
                </Form.Group>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="experience"
                    placeholder="Experience"
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="text"
                name="message"
                placeholder="Your Message:"
                value={formDetails.message ?? ""}
                onChange={handleFormChange}
              />
            </Form.Group>
            {career && career === true && (
              <>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="file"
                    name="resume"
                    placeholder="Your Resume"
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </>
            )}
          </Row>

          <Button type="submit" className="btn_style3">
            {loading ? "Sending" : "Submit"}
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EnquireForm;
