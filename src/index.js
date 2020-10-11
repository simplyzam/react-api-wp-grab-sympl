/**
 * Code for my Basic wordpress/react rest api tutorial
 *
 * @package             Basic wordpress/react rest api tutorial
 * @author              Stephan Nijman https://since1979.dev
 * @copyright           2020 Stephan Nijman
 * @license             GPL-2.0-or-later
 * @version             1.0.0
 */

/*
 * Import remote dependancies
 */
import React from "react";
import ReactDOM from "react-dom";

/*
 * Import local dependancies
 */
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
