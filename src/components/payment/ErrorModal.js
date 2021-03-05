import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";

function ErrorModal() {
  const context = useContext(Context);

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <p>
            Sorry {context.state.name} there is a payment error with your
            purchase! Please try again.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;
