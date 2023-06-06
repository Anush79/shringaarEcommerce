import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import MockApi from "./components/MockMan";
import RequiresAuth from "./components/RequiresAuth";

import Header from "./components/Header";
import About from "./mainPages/About/index";
import Home from "./mainPages/Home/index";
import Cart from "./mainPages/Cart/index";
import Profile from "./mainPages/Profile/index";
import Shop from "./mainPages/Shop";
import Login from "./mainPages/Login/index";
import Footer from "./components/Footer";
import ProductDetails from "./mainPages/ProductDetails/index";
import WishList from "./mainPages/WishList/index";
import Error from "./mainPages/Error";
import Orders from "./mainPages/Profile/components/Orders";
import Address from "./mainPages/Profile/components/Address";
import User from "./mainPages/Profile/components/User";
import CheckoutDetails from "./mainPages/Cart/cartComponents/CheckoutDetails";
import ShoppingCart from "./mainPages/Cart/cartComponents/ShoppingCart";
import OrderComplete from "./mainPages/Cart/cartComponents/OrdersComplete";
import Contact from "./mainPages/Contact/index";
import { useAuth } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollUp";

function App() {
  const { token } = useAuth();

  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <div className="mainApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<MockApi />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/cart"
          element={
            <RequiresAuth token={token}>
              {" "}
              <Cart />
            </RequiresAuth>
          }
        >
          <Route path="" element={<ShoppingCart />} />
          <Route path="completedorders" element={<OrderComplete />} />
          <Route path="checkout" element={<CheckoutDetails />} />
        </Route>

        <Route
          path="/wishlist"
          element={
            <RequiresAuth token={token}>
              <WishList />
            </RequiresAuth>
          }
        />

        <Route
          path="/profile"
          element={
            <RequiresAuth token={token}>
              <Profile />
            </RequiresAuth>
          }
        >
          <Route path="" element={<User />} />
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Address />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/products/:prodID" element={<ProductDetails />} />
        <Route path="/browse" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
      <Footer />
    </div>
  );
}

export default App;
