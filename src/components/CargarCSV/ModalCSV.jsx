import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CargarCSV } from "./CargarCSV";

import Cargar from "../../assets/img/cargar-datos.png";

export function ModalCSV() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className="boton" onClick={handleShow}>
        <img className="icono" src={Cargar} alt="carro compra" />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Selecciona o arrastra el CSV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CargarCSV />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

ModalCSV.propTypes = {};
