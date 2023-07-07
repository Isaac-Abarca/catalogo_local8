import PropTypes from "prop-types";
import { Cargaimg } from "../CargaImg";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import defaultImage from "../../assets/img/producto-sin-imagen.png"; 
import Modal from "react-bootstrap/Modal";

import "./stylecard.css";

const CardProducto = ({ cod, descripcion, quantity, image }) => {
  const [show, setShow] = useState(false);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (image && image.data.length > 0) {
      const imageBlob = new Blob([Uint8Array.from(image.data)]);
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageURL(imageUrl);
    }
  }, [image]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUploadComplete = (uploadedImageURL) => {
    setImageURL(uploadedImageURL);
    handleClose();
  };

  return (
    <Card className="" style={{ width: "18rem" }}>
      {imageURL ? (
        <Card.Img className="img" variant="top" src={imageURL} />
      ) : (
        <Card.Img className="img" variant="top" src={defaultImage} />
      )}
      <Card.Body>
        <Card.Title>{descripcion}</Card.Title>
        <Card.Text>
          Codigo: {cod}
          <br />
          Precio: {quantity}
        </Card.Text>
      </Card.Body>
      <div className="btn-action">
        <Button variant="primary">Add card</Button>
        <div>
          <Button onClick={handleShow}>Add img</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Elige la imagen a subir</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Cargaimg cod={cod} onUploadComplete={handleUploadComplete} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Card>
  );
};

CardProducto.propTypes = {
  cod: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.object
  
  ,
};

export default CardProducto;

