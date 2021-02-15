import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

function SuccessfulModal() {
  const context = useContext(Context);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <p>
            Thank you {context.state.name} for your purchase!
            <p>
              Your Payment was successful for the amount of €
              {context.state.totalOrder}.
            </p>{" "}
            You will recieve a confirmation email at {context.state.email}.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          <Modal.Header closeButton></Modal.Header>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessfulModal;
