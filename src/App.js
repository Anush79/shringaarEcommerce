import {Routes, Route} from 'react-router-dom'

import "./App.css";
import MockApi from './components/MockMan'
import Header from './components/Header'
import About from './mainPages/About/index'
import Home from './mainPages/Home/index'
import Cart from './mainPages/Cart/index'
import Profile from './mainPages/Profile/index'
import Login from './mainPages/Login/index'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
     {/* <Home /> */}

{/* <About/> */}
     <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/mockman' element={<MockApi />}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/profile' element={<Profile/>}/>
        <Route path= '/login' element = {<Login/>} />

     </Routes>
     {/* <Footer /> */}
    </div>
  );
}

export default App;
