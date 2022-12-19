import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/main.css';
// { RouterProvider }
import { BrowserRouter } from "react-router-dom"
// import router from "./routes"

ReactDOM.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter><App/></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

