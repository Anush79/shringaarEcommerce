import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
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
            <h2>ShringaaR</h2>
            <p>Your Jewelry House</p>
          </div>
        </div>
        <div className="navbarIcons">
          <SearchIcon />
          <AddShoppingCartIcon/>
          <ShoppingCartIcon/>
          <LoginRoundedIcon/>
          <LogoutRoundedIcon/>
        </div>
      </div>
      {isMenuClicked && (
        <div className="sideNav">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>

            <li>
              <select
                value={category}
                name="categoryChoose"
                onChange={handleCategory}
                id="chooseCategory"
              >
                <option value="SELECT CATEGORY">SELECT CATEGORY</option>
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
