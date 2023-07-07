import  { useState } from "react";
import {NavBar} from "../../components/NavBar";
import { ProductCataloge } from "../../components/Catalogo";
import "./style.css";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="">
       <NavBar onCategorySelect={setSelectedCategory} />
      <ProductCataloge selectedCategory={selectedCategory} />
    </div>
  );
};