import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

function ErrorModal() {
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
            Sorry there is a payment error wtih your purchase!
            <p>Please try again.</p>
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

export default ErrorModal;
