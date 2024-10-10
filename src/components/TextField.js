import React, { useState } from "react";
import "./TextField.css";

export default function TextField(props) {
  const [text, setText] = useState("enter state");

  const clickupperbutton = () => {
    setText(text.toUpperCase());
    props.makeAlert("converted to upper case","success","success");
  };

  const handleonchange = (e) => {
    setText(e.target.value);
  };

  const clicklowerbutton = () => {
    setText(text.toLowerCase());
    props.makeAlert("converted to lower case","success","success");
  };

  // State to track the currently selected button
  const [selectedColor, setSelectedColor] = useState("blue");

  const [mystyle, setmystyle] = useState({
    backgroundColor: "#d3fcfa",
    color: "#049d98",
    border: "3px solid rgb(0, 186, 183)",
  });

  const blue = () => {
    setmystyle({
      backgroundColor: "#d3fcfa",
      color: "#049d98",
      border: "3px solid rgb(0, 186, 183)",
    });
    setSelectedColor("blue");
    props.makeAlert("converted to Bluecolour","success","info");
  };

  const red = () => {
    setmystyle({
      backgroundColor: "#fcd3d3",
      color: "#9d0404",
      border: "3px solid rgb(186, 0, 0)",
    });
    setSelectedColor("red");
    props.makeAlert("converted to Red colour","success", "danger");

  };

  const orange = () => {
    setmystyle({
      backgroundColor: "#fcf0d3",
      color: "#9d6a04",
      border: "3px solid rgb(186, 124, 0)",
    });
    setSelectedColor("orange");
    props.makeAlert("converted to Orange colour","success", "warning");

  };

  const copy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(text.value);
    props.makeAlert("copied to clipboard", "success", "secondary");
  };

  // State for font size
  const [fontsi, setFontsi] = useState(15); // Initial font size

  const plus = () => {
    setFontsi(fontsi * 1.2); // Increase font size by 20%
  };

  const minus = () => {
    setFontsi(fontsi * 0.85); // Decrease font size by 15%
  };

  return (
    <div >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>Enter Text</h3>
        </label>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            onChange={handleonchange}
          ></textarea>
        </div>
        <div className="my-auto align-center ">
          <button
            className="btn btn-primary m-3"
            onClick={clickupperbutton}

          >
            Change text to uppercase
          </button>
          <button
            className="btn btn-primary "
            onClick={clicklowerbutton}
          >
            Change text to lowercase
          </button>
        </div>
      </div>

      <div className="container my-2 mx-auto justify-content-center">
        <b>
          <h5>
            Number of words:{" "}
            {text.split(" ").filter((word) => word.length > 0).length}
          </h5>
          <h5>Number of characters: {text.length}</h5>
          <h5>Number of paragraphs: {text.split("\n").length}</h5>
          <h5>
            Reading speed:{" "}
            {(
              text.split(" ").filter((word) => word.length > 0).length * 0.008
            ).toFixed(2)}{" "}
            minutes
          </h5>
        </b>
      </div>
      <hr></hr>
      <div className="container readingmode mt-5 h3">READING MODE</div>
      <div className="container text-center mt-5 mb-2">
        <div className="row row-cols-auto">
          <div className="col">
            <div className="container">
              <button
                id="blue"
                className="btn mx-auto"
                onClick={blue}
                style={{
                  backgroundColor: "#d3fcfa",
                  color: "#049d98",
                  border:
                    selectedColor === "blue" ? "3px solid #049d98" : "none",
                }}
              >
                blue
              </button>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <button
                id="orange"
                className="btn mx-auto"
                onClick={orange}
                style={{
                  backgroundColor: "#fcf0d3",
                  color: "#9d6a04",
                  border:
                    selectedColor === "orange" ? "3px solid #9d6a04" : "none",
                }}
              >
                orange
              </button>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <button
                id="red"
                className="btn mx-auto"
                onClick={red}
                style={{
                  backgroundColor: "#fcd3d3",
                  color: "#9d0404",
                  border:
                    selectedColor === "red" ? "3px solid #9d0404" : "none",
                }}
              >
                red
              </button>
            </div>
          </div>

          <div className="col">
            <div className="container">
              <button
                id="plus"
                className="btn mx-auto"
                onClick={plus}
                style={{
                  color: "#040c9d",
                  backgroundColor: "#d6d3fc",
                  border: "3px solid rgba(3, 0, 186, 0)",
                }}
              >
                size ++
              </button>
            </div>
          </div>

          <div className="col">
            <div className="container">
              <button
                id="minus"
                className="btn mx-auto"
                onClick={minus}
                style={{
                  color: "#040c9d",
                  backgroundColor: "#d6d3fc",
                  border: "3px solid rgba(3, 0, 186, 0)",
                }}
              >
                size --
              </button>
            </div>
          </div>

          <div className="col">
            <div className="container">
              <button
                id="copy"
                className="btn mx-auto"
                onClick={copy}
                style={{
                  color: "#040c9d",
                  backgroundColor: "#d6d3fc",
                  border: "3px solid rgba(3, 0, 186, 0)",
                }}
              >
                copy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="preview container"
        style={{ ...mystyle, fontSize: fontsi + "px" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
