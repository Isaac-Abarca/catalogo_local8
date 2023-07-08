import { useState } from "react";
import Papa from "papaparse";

import "./styles.css";

export function CargarCSV() {
  const [file, setFile] = useState(null);
  const [saveChanges, setSaveChanges] = useState("");

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandlerLimpiar = () => {
    document.getElementById("fileinput").value = null;
    setFile(null);
    setSaveChanges(false);
  };

  const sendHandler = () => {
    if (!file) {
      alert("Debes subir un archivo");
      return;
    }
  
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const csvData = e.target.result;
      Papa.parse(csvData, {
        header: true,
        complete: function (results) {
          let jsonArray = results.data;
          console.log(jsonArray);
  
          // Filtrar y eliminar elementos sin información
          jsonArray = jsonArray.filter((item) => {
            return item.cod && item.linea && item.descripcion && item.price && item.quantity;
          });
  
          // Modificar la opción 'price' del JSON
          jsonArray = jsonArray.map((item) => {
            return {
              ...item,
              price: item.price.replace(/,/g, "").replace(".00", "")
            };
          });
  
          fetch("http://localhost:9000/api/productos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonArray)
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setSaveChanges('Todo salio bien');
            })
            .catch((error) => {
              //console.error(error);
              setSaveChanges('Ocurrió un error al cargar el archivo' + error);
            });
        }
      });
    };
  
    fileReader.readAsText(file);
  
    document.getElementById("fileinput").value = null;
    setFile(null);
  };
  
  return (
    <>
      <div className="">
        <div className=" ">
          <div className="cont-w">
            <div className="">
              <input
                id="fileinput"
                onChange={selectedHandler}
                className="form-control"
                type="file"
              />
            </div>
            <div className="col con-btn">
              <button
                onClick={sendHandler}
                className="btn btn-primary px-3 py-2"
                type="button"
              >
                Cargar
              </button>
              <button
                onClick={sendHandlerLimpiar}
                className="btn btn-primary px-3 py-2"
                type="button"
              >
                Limpiar
              </button>
            </div>
            <p>{saveChanges}</p>
          </div>
        </div>
      </div>
    </>
  );
}
