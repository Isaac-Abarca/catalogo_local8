import { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

export function Cargaimg(id) {
  const [file, setFile] = useState(null);
  const [saveChanges, setSaveChanges] = useState("");

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandlerLimpiar = () => {
    document.getElementById("fileinput").value = null;
    setFile(null);
  }

  const sendHandler = () => {
    if (!file) {
      alert("you must upload file");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);

    fetch(`http://localhost:9000/api/images/put/${id.id}`, {
      method: "PUT",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setSaveChanges(res);
      })
      .catch((err) => {
        console.log(err);
        setSaveChanges(err);
      });

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

Cargaimg.prototype = {
  id: PropTypes.string.isRequired,
};
