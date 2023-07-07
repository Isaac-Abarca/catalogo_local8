import { useEffect, useState } from "react";
import ProductCard from "./CartProducto.jsx";
import "./styleProductCataloge.css";

export function ProductCataloge() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="contenedor">
      <div className="filter-list">

      </div>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
