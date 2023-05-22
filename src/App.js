import {Routes, Route} from 'react-router-dom'

import "./App.css";
import MockApi from './components/MockMan'
import Header from './components/Header'
import About from './mainPages/About/index'
import Home from './mainPages/Home/index'
import Cart from './mainPages/Cart/index'
import Profile from './mainPages/Profile/index'
import Shop from './mainPages/Shop'
import Login from './mainPages/Login/index'
import Footer from './components/Footer';
import ProductDetails from './mainPages/ProductDetails/index'
import Error from './mainPages/Error'


function App() {
  return (
    <div className="App">
      <Header />
     <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/mockman' element={<MockApi />}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/profile' element={<Profile/>}/>
        <Route path= '/login' element = {<Login/>} />
        <Route path= '/products/:prodID' element={<ProductDetails/>}/>
        <Route path= '/browse' element = {<Shop/>} />
        <Route path= '*' element = {<Error/>} />
        
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
