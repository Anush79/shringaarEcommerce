import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { useAuth, AuthProvider } from "./context/AuthContext";
import { useData, DataProvider } from "./context/DataContext";
import { useWish, WishProvider } from "./context/WishListContext";
import { useCart, CartProvider } from "./context/CartContext";
import { useAddress, AddressProvider } from "./context/AddressContext";

export { useData, useWish, useAuth, useCart, useAddress };
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <DataProvider>
          <CartProvider>
            <AddressProvider>
              <WishProvider>
                <App />
              </WishProvider>
            </AddressProvider>
          </CartProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
