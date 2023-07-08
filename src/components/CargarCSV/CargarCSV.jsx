import { useState } from "react";

import "./styles.css";

export function CargarCSV() {
  const [file, setFile] = useState(null);
  const [saveChanges, setSaveChanges] = useState(false);

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

    fetch(`http://localhost:9000/api/post/`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setSaveChanges(true);
      })
      .catch((err) => {
        console.log(err);
        setSaveChanges(false);
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
            {saveChanges ? (
              <p>Los cambios se realizaron correctamente.</p>
            ):<p></p>}
          </div>
        </div>
      </div>
    </>
  );
}
