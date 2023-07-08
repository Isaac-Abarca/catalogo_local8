import { createContext } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export function CartProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
