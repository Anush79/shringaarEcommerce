import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

import {useAuth, AuthProvider} from './context/AuthContext'
import { useData, DataProvider } from './context/DataContext'
export { useData }
// Call make Server
makeServer();
export {useAuth}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
          <DataProvider>
        <App />
      </DataProvider>
      </AuthProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);
