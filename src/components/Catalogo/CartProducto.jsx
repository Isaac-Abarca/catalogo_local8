import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultImage from '../../assets/img/producto-sin-imagen.png';

import './stylecard.css';

const CardProducto = ({ cod, descripcion, quantity, image }) => {
  return (
    <Card className="" style={{ width: '18rem' }}>
      {image ? (
        <Card.Img className="img" variant="top" src={image} />
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
        <Button variant="primary">Add card</Button>
      </Card.Body>
    </Card>
  );
};

CardProducto.propTypes = {
  cod: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string,
};


export default CardProducto;
