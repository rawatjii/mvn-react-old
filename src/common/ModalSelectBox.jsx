import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "./Button/Button";
import Modal from "react-bootstrap/Modal";
import SecTitle from "./SecTitle/Index";
import Formlogo from "../../public/assets/images/logo_white.webp";
import * as CONFIG from '../config/config'

const ModalSelectBox = ({
  show,
  hide,
  offer,
  projectNameOptions = [
    "MVN Aero One Gurugram",
    "MVN Mall Gurugram",
    "MVN Aero One Bangalore",
  ],
}) => {
  const [formDetails, setFormDetails] = useState({});
  const [projectName, setProjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate fields
  const validate = () => {
    const newErrors = {};
    if (!projectName) newErrors.projectName = "Please select a project.";
    if (!formDetails.name || formDetails.name.trim() === "")
      newErrors.name = "Name is required.";
    if (
      !formDetails.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDetails.email)
    )
      newErrors.email = "Valid email is required.";
    if (!formDetails.number || formDetails.number.length < 10)
      newErrors.number = "Phone number must be at least 10 digits.";
    if (!formDetails.message || formDetails.message.trim() === "")
      newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleFormChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleProjectChange = (e) => {
    setProjectName(e.target.value);
    setErrors({
      ...errors,
      projectName: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldErrors = validate();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=${projectName}`;

    setLoading(true);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log("Success:", data);
        alert("Enquiry Details Sent Successfully!");
        const newTab = window.open("/thanks", "_blank");

        if (newTab) {
          window.close();
        }
        setFormDetails({});
        setProjectName("");
        setLoading(false);
        hide();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    // const fieldErrors = validate();
    // if (Object.keys(fieldErrors).length > 0) {
    //   setErrors(fieldErrors);
    //   return;
    // }
    
    const apiUrl = `https://api2.gtftech.com/AjaxHelper/AgentInstantQuerySetter.aspx?qAgentID=4804&qSenderName=${formDetails.name}"&qMobileNo=${formDetails.number}&qEmailID=${formDetails.email}&qQueryMessage=${formDetails.message}&qProjectName=MVN Aero One Gurugram`;

    setLoading(true);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log("Success:", data);
        alert("Enquiry Details Sent Successfully!");
        const newTab = window.open("/thanks", "_blank");

        if (newTab) {
          window.close();
        }
        setFormDetails({});
        setProjectName("");
        setLoading(false);
        hide();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const modalRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!modalRef.current.contains(e.target)) {
        hide();
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [hide]);

  if(offer){
    return <Modal size="xl" show={show} className={`enquire_form custom_modal ${offer ? "offer_modal": ""}`} aria-labelledby="contained-modal-title-vcenter" centered>
    <div ref={modalRef}>
      <Modal.Body>
        <div className="left">
          <img src={CONFIG.IMAGE_URL + 'offer/1.webp'} className="img-fluid offer_img" />
        </div>

        <div className="right">
          <SecTitle className="text-center color style1">
            {/* <img src={Formlogo} alt="" className="img-fluid headingIcon" /> */}
            <h4 className="title">Grab an Offer</h4>
          </SecTitle>
          <span
            className="close"
            onClick={hide}
            style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
          >
            &times;
          </span>
          <Form onSubmit={loading ? () => null : handleSubmit1}>
            <Row>

              <Form.Group className="form-group" as={Col} xs="12">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name:"
                  value={formDetails.name ?? ""}
                  onChange={handleFormChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback className="align-left" type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="form-group" as={Col} xs="12">
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="E-Mail:"
                  value={formDetails.email ?? ""}
                  onChange={handleFormChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback className="align-left" type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="form-group" as={Col} xs="12">
                <Form.Control
                  type="number"
                  name="number"
                  placeholder="Phone:"
                  value={formDetails.number ?? ""}
                  onChange={handleFormChange}
                  isInvalid={!!errors.number}
                />
                <Form.Control.Feedback className="align-left" type="invalid">
                  {errors.number}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="form-group" as={Col} xs="12">
                <Form.Control
                  type="text"
                  name="message"
                  placeholder="Message:"
                  value={formDetails.message ?? ""}
                  onChange={handleFormChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback className="align-left" type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button
              type="submit"
              className="btn_style3"
              disabled={loading ? true : false}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </div>
  </Modal>
  }

  return (
    <Modal show={show} className={`enquire_form custom_modal floor_plan_popup ${offer ? "offer_modal": ""}`}>
      <div ref={modalRef}>
        <Modal.Body>
          <Container style={{ position: "relative" }}>
            <SecTitle className="text-center color style1">
              <img src={Formlogo} alt="" className="img-fluid headingIcon" />
              <h4 className="title">Get In Touch With Us</h4>
            </SecTitle>
            <span
              className="close"
              onClick={hide}
              style={{ position: "absolute", top: 0, right: 10, fontSize: 30 }}
            >
              &times;
            </span>
            <Form onSubmit={loading ? () => null : handleSubmit}>
              <Row>
                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Select
                    value={projectName}
                    onChange={handleProjectChange}
                    isInvalid={!!errors.projectName}
                  >
                    <option value="">Select Project</option>
                    {projectNameOptions?.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback className="align-left" type="invalid">
                    {errors.projectName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name:"
                    value={formDetails.name ?? ""}
                    onChange={handleFormChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback className="align-left" type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="E-Mail:"
                    value={formDetails.email ?? ""}
                    onChange={handleFormChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback className="align-left" type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Phone:"
                    value={formDetails.number ?? ""}
                    onChange={handleFormChange}
                    isInvalid={!!errors.number}
                  />
                  <Form.Control.Feedback className="align-left" type="invalid">
                    {errors.number}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="message"
                    placeholder="Message:"
                    value={formDetails.message ?? ""}
                    onChange={handleFormChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback className="align-left" type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button
                type="submit"
                className="btn_style3"
                disabled={loading ? true : false}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </Form>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalSelectBox;
