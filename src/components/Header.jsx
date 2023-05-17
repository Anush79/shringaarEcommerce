import { useState } from "react";
import { NavLink } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";

import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [category, setCategory] = useState("");
  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <div className="headerContainer">
        <div className="categories">
          
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Necklaces</li>
            <li>Earrings</li>
       
        </div>
        <div className="headerLeft">
          <div
            className={isMenuClicked ? "expandMenu" : "menuBar"}
            onClick={handleMenu}
          >
            <span class="sideBarMenu">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </span>
          </div>
          <div className="logoContatiner">
          <NavLink to='/'>
                <h2>ShringaaR</h2>
                <p>Your Jewelry House</p>
              </NavLink>
            
            
          </div>
        </div>
        <div className="navbarIcons">
        
            <NavLink to='/about'>
              <li onClick={handleMenu}>ABOUT</li>
            </NavLink>
            <NavLink to='contact'>
              <li onClick={handleMenu}>CONTACT</li>
            </NavLink>
          <span className="search">
            <SearchIcon />
          </span>
          <span className="wishList">
            <Badge badgeContent={1} color="secondary" sx={{ color: "#5f3926" }}>
              <NavLink to='favorite'>
                <FavoriteBorderIcon />
              </NavLink>

            </Badge>


          </span>
          <span className="emptyCart">
            <Badge badgeContent={3} color="secondary" sx={{ color: "#5f3926" }}>
              <NavLink to='/cart'>
              <ShoppingCartIcon/>
              </NavLink>

            </Badge>
          </span>
          <span className="login">
            <NavLink to='/login'>

              <LoginRoundedIcon />
            </NavLink>

          </span>

          {/*  <AddShoppingCartIcon /> */}

          {/* <LogoutRoundedIcon/> */}
          {/*  <FavoriteRoundedIcon /> */}


        </div>
      </div>
      {isMenuClicked && (
        <div className="sideNav" >
          <ul >
            <NavLink to='/'>
              <li onClick={handleMenu}>HOME</li>
            </NavLink>
            <NavLink to='/about'>
              <li onClick={handleMenu}>ABOUT</li>
            </NavLink>
            <NavLink to='contact'>
              <li onClick={handleMenu}>CONTACT</li>
            </NavLink>


            <li>
              <select
                value={category}
                name="categoryChoose"
                onChange={handleCategory}
                id="chooseCategory"
              
              >
                <option value="SHOP">SHOP CATEGORY</option>
                <option value="RINGS">RINGS</option>
                <option value="BRACELETS">BRACELETS</option>
                <option value="EARRINGS">EARRINGS</option>
                <option value="NECKLACES">NECKLACES</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
