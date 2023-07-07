
import {NavBar} from "../../components/NavBar";
import { ProductCataloge } from "../../components/Catalogo";
import "./style.css";

export const Home = () => {
  return (
    <div className="">
      <NavBar/>
      <ProductCataloge/>
    </div>
  );
};