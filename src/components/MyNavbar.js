import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function MyNavbar(props) {
  return (
    <div className="container-fluid  d-flex justify-content-center align-items-center " style={{ width: "100%", height: "40px", backgroundColor: "skyblue" }}>
   <strong> {props.title}</strong>
  </div>
  );
}

MyNavbar.prototype = {
  title: PropTypes.string,
  name: PropTypes.string,
};

MyNavbar.defaultProps = {
  title: "give title here",
  name: "give neame here",
};
