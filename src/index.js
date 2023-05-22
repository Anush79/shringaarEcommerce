import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import { useData, DataProvider } from './context/DataContext'
export { useData }
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>

    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);
