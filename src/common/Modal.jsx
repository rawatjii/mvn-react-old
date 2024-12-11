import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "./Button/Button";
import Modal from "react-bootstrap/Modal";
import SecTitle from "./SecTitle/Index";
// import headingIconImg from "./../frontend/assets/images/icons/heading-icon-img.png";
import Formlogo from "../../public/assets/images/logo_white.webp";
import Loader from "./Loader/loader";


const CustomModal = ({ show, hide, projectName }) => {
  const [formDetails, setFormDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

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
    }else{
      setLoading(true);
      fetch(apiUrl, {
        method: "GET", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
        // body: JSON.stringify(formDetails), // Convert the data to JSON string
      })
        .then((data) => {
          console.log("Success:", data); // Handle the response
          alert("Enquiry Details Sent Successfully!");
          const newTab = window.open("/thanks", "_blank");

          // Close the current tab
          if (newTab) {
            // If the new tab opened successfully, close the current tab
            window.close();
          }
          setFormDetails({});
          setLoading(false);
          hide();
        })
        .catch((error) => {
          console.error("Error:", error); // Handle any errors
          setLoading(false);
        });
    }
    
  };

  const modalRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!modalRef.current.contains(e.target)) {
        console.log('closed')
        hide();
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <Modal show={show} className="enquire_form custom_modal floor_plan_popup">
      <div ref={modalRef}>
        <Modal.Body>
          <Container style={{ position: "relative" }}>
            <SecTitle className="text-center color style1">
              <img
                src={Formlogo}
                alt=""
                className="img-fluid headingIcon"
              />


              <h4 className="title">Get In Touch With Us</h4>
            </SecTitle>
            <span
              className="close"
              onClick={hide}
              style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
            >
              &times;
            </span>
            {/* {loading  ? <Loader  /> : '' } */}
            <Form onSubmit={loading ? () => null : handleSubmit}>
              <Row>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name:"
                    value={formDetails.name ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="E-Mail:"
                    value={formDetails.email ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Phone:"
                    value={formDetails.number ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="message"
                    placeholder="Message:"
                    value={formDetails.message ?? ""}
                    onChange={handleFormChange}
                  />
                </Form.Group>
              </Row>

              <Button type="submit" className="btn_style3" disabled={loading ? true:false}>
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default CustomModal;

{
  /* <Modal.Header>
        <Modal.Title>Enquire Now</Modal.Title>
        <span className="close" onClick={hide}>
          &times;
        </span>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control type="text" name="name" placeholder="Your Name:" onChange={handleFormChange}/>
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your E-Mail:"
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="number"
                name="number"
                placeholder="Your Phone:"
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="form-group" as={Col} xs="12">
              <Form.Control
                type="text"
                name="message"
                placeholder="Your Message:"
                onChange={handleFormChange}
              />
            </Form.Group>
          </Row>

          <Button type="submit" className="btn_style3">
            Submit
          </Button>
        </Form>
      </Modal.Body> */
}
