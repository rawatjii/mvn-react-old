import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({show, hide})=>{
  return(
    <Modal show={show} className=" enquire_form custom_modal">
      <Modal.Header>
          <Modal.Title>Enquire Now</Modal.Title>
          <span className="close" onClick={hide}>&times;</span>
        </Modal.Header>
          <Modal.Body >
            <Form>
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

                <Form.Group className="form-group" as={Col} xs="12">
                  <Form.Control
                    type="text"
                    name="message"
                    placeholder="Your Message:"
                  />
                </Form.Group>
                
              </Row>
              
              <Button type="submit" className="btn_style3">Submit</Button>
            </Form>
            </Modal.Body>
        </Modal>
  )
}

export default CustomModal