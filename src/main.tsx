import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import {MoviesApp} from "./MoviesApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesApp />
    </BrowserRouter>
  </React.StrictMode>
)
