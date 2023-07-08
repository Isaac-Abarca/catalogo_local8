import './style.css'

import { useId } from 'react'
import {  ClearCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types'
import CarritoIMG from "../../assets/img/carro-compra.png";

function CartItem ({ title, thumbnail, price, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <div className='cont-cart'>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <img className="icono"src={CarritoIMG} alt="" />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>

        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </div>
  )
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
}
