import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Badge from "@mui/material/Badge";
import LocalGroceryStoreTwoToneIcon from "@mui/icons-material/LocalGroceryStoreTwoTone";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PersonIcon from "@mui/icons-material/Person";

import { useData, useCart, useWish, useAuth } from "../";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSearchclicked, setIsSearchedClicked] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");

  const { setFiltersUsed, categoriesData } = useData();
  const { token } = useAuth();
  const { wishlistCount } = useWish();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
   
      window.scrollTo({top:0, left:0, behavior: "smooth"});
    
  };
  const handleCategory = (e) => {
    setCategory(() => e.target.value);
    setFiltersUsed({ type: "CATEGORY", inputValue: e.target.value });
    navigate("/browse");
  };

  return (
    <>
      <div className="headerContainer">
        <div className="categories">
          {categoriesData.map((item) => (
            <CategoryList
              item={item}
              navigate={navigate}
              setFiltersUsed={setFiltersUsed}
            />
          ))}
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
          <div className="logoContatiner" onClick={()=>{navigate('/')}}>
            
              <h2>ShringaaR</h2>
              <p>Your Jewelry House</p>
            
          </div>
        </div>
        <div className="navbarIcons">
          <NavLink to="/about" >
            <li className="NavItem">About</li>
          </NavLink>
          <NavLink to="contact">
            <li className="NavItem">Contact</li>
          </NavLink>

          <span className="search" >
            {isSearchclicked ? (
              <div className="inputElement overlay">
                <span
                  className="closeSearch"
                  onClick={() => {
                    setIsSearchedClicked(!isSearchclicked);
                  }}
                >
                  <HighlightOffIcon />
                </span>
                <input
                  type="text"
                  value={inputValue}
                  placeholder="Search items/ metals/ brand / category"
                  onChange={(e) => {
                    setInputValue(e.target.value);
                  }}
                />
                <SearchIcon
                  onClick={() => {
                    setFiltersUsed({ type: "SEARCH", inputValue: inputValue });
                    setIsSearchedClicked(!isSearchclicked);
                    if (inputValue.length > 0) navigate("/browse");
                  }}
                />
              </div>
            ) : (
              <SearchIcon
                onClick={() => {
                  setIsSearchedClicked(!isSearchclicked);
                }}
              />
            )}
          </span>
          <span className={token ? "wishList" : "hiddenElement"}>
            <Badge
              badgeContent={token ? wishlistCount : 0}
              color="secondary"
              sx={{ color: "#5f3926" }}
            >
              <NavLink to="/wishlist">
                <FavoriteTwoToneIcon />
              </NavLink>
            </Badge>
          </span>
          <span className={token ? "emptyCart" : "hiddenElement"}>
            <Badge
              badgeContent={token ? cartCount : 0}
              color="secondary"
              sx={{ color: "#5f3926" }}
            >
              <NavLink to="/cart">
                <LocalGroceryStoreTwoToneIcon />
              </NavLink>
            </Badge>
          </span>
          <span className="login">
            {token ? (
              <NavLink to="/profile">
                <PersonIcon />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <LoginRoundedIcon />
              </NavLink>
            )}
          </span>
        </div>
      </div>
      {isMenuClicked && (
        <div title="Menu bar" className="sideNav">
          <ul>
            <NavLink to="/">
              <li onClick={handleMenu}>HOME</li>
            </NavLink>
            <NavLink to="/about">
              <li onClick={handleMenu}>ABOUT</li>
            </NavLink>
            <NavLink to="contact">
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
                <option value="rings">RINGS</option>
                <option value="bracelet">BRACELETS</option>
                <option value="earring">EARRINGS</option>
                <option value="necklace">NECKLACES</option>
              </select>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

const CategoryList = ({ item, navigate, setFiltersUsed }) => {
  return (
    <li className="NavItem"
      key={item._id}
      value={item.categoryName}
      onClick={(e) => {
        setFiltersUsed({
          type: "CLEARFILTER",
          inputValue: "",
        });
        setFiltersUsed({ type: "CATEGORY", inputValue: item.categoryName });
        navigate("/browse");
      }}
    >
      {item.categoryName}
    </li>
  );
};
