import { useEffect, useState } from "react";
import ProductCard from "./CartProducto.jsx";
import PropTypes from "prop-types";
import "./styleProductCataloge.css";

export function ProductCataloge({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      const updatedProducts = products.filter((product) => {
        const priceInRange =
          (minPrice === "" || product.quantity >= minPrice) &&
          (maxPrice === "" || product.quantity <= maxPrice);
        const matchesSearch = product.descripcion
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const matchesCategory = selectedCategory
          ? product.linea
              .toLowerCase()
              .split(/[\s/]+/) // Dividir por espacios o /
              .includes(selectedCategory.toLowerCase())
          : true;
        return priceInRange && matchesSearch && matchesCategory;
      });
      setFilteredProducts(updatedProducts);
    };

    const timer = setTimeout(filterProducts, 500);

    return () => clearTimeout(timer);
  }, [products, minPrice, maxPrice, searchText, selectedCategory]);

  const renderProductCards = () => {
    if (filteredProducts.length == 0) {
      return (
        <div className="default-background ">
          <p>No se encontraron productos.</p>
        </div>
      );
    }

    if (filteredProducts.length < 5 && filteredProducts.length > 0) {
      return (
        <div className="default-background-5 ">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      );
    }

    return filteredProducts.map((product) => (
      <ProductCard key={product.id} {...product} />
    ));
  };

  return (
    <div className="contenedor">
      <div className="filter-container">
        <div className="box">
          <h2>Filtros</h2>
        </div>
        <div className="filter-list">
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              placeholder="Buscar"
              type="search"
              className="input"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="group">
            <input
              type="number"
              placeholder="Precio mínimo"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="input"
            />
          </div>
          <div className="group">
            <input
              type="number"
              placeholder="Precio máximo"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="input"
            />
          </div>
        </div>
        <div className="box-Categories">
          <h2>Categorias</h2>
        </div>
        <div className="filter-categories">
          <strong>
            {selectedCategory ? selectedCategory : "Ninguna seleccionada"}
          </strong>
        </div>
      </div>
      <div className="product-container">
        <div className="product-list">{renderProductCards()}</div>
      </div>
    </div>
  );
}

ProductCataloge.propTypes = {
  selectedCategory: PropTypes.string,
};
