import PropTypes from "prop-types";
import { Cargaimg } from "../CargaImg";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import defaultImage from "../../assets/img/producto-sin-imagen.png";
import Modal from "react-bootstrap/Modal";
import { AddToCartIcon, RemoveFromCartIcon } from "../CarritoCompra/Icons.jsx";

import "./stylecard.css";

const CardProducto = ({
  id,
  cod,
  descripcion,
  price,
  quantity,
  image,
  setUploadProducts,
}) => {
  const [show, setShow] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [isProductInCart, setisProductInCart] = useState(false);
  

  useEffect(() => {
    if (image && image.data.length > 0) {
      const imageBlob = new Blob([Uint8Array.from(image.data)]);
      const imageUrl = URL.createObjectURL(imageBlob);
      setImageURL(imageUrl);
    }
  }, [image]);

  const handleClose = () => {
    setShow(false);
    setUploadProducts(true);
  };
  const handleShow = () => setShow(true);

  const handleUploadComplete = (uploadedImageURL) => {
    setImageURL(uploadedImageURL);
    handleClose();
    setUploadProducts(true);
  };

  const botonStyle = {
    backgroundColor: isProductInCart ? 'green'  : '#0d6efd' ,
    color: 'white',
  };
  const changeState = () => {
    setisProductInCart(!isProductInCart)
  }
  
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
          Precio: {price}
          <br />
          Cantidad: {quantity}
        </Card.Text>
      </Card.Body>
      <div className="btn-action">
        <Button style={botonStyle} onClick={changeState}>
        {isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon /> }
        </Button>
        <div>
          <Button onClick={handleShow}>Add img</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Selecciona o arrastra  imagen a subir</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Cargaimg id={id} onUploadComplete={handleUploadComplete} />
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
  price: PropTypes.number.isRequired,
  image: PropTypes.object,
  setUploadProducts: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProducto;
