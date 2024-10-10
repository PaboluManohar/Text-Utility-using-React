import { useState } from "react";
import "./App1.css";
import Alert from "./components/Alert";
import MyNavbar from "./components/MyNavbar";
import TextField from "./components/TextField";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/about";

export default function App() {
  const [alert, setalert] = useState(null);

  const makeAlert = (msg, ty, color) => {
    setalert({
      msg: msg,
      type: ty,
      color: color,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      <MyNavbar name="" title="TextUtilities" />
      <div className="container my-3">
        <Alert alert={alert} />
        <TextField makeAlert={makeAlert} />
        {/* <BrowserRouter>
        <MyNavbar name="" title="TextUtilities"  />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-3 ">
                <TextField makeAlert={makeAlert} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter> */}
      </div>
    </>
  );
}
