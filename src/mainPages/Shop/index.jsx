import "./shop.css";
import { useState, useEffect } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Loader from "../../components/Loader";
import { useData } from "../../context/DataContext";
import ProductCard from "../../components/ProductCard";
export default function Shop() {
  const {
    backendData,
    finalPriceSortedData,
    productCount,
    setFiltersUsed,
    filtersUsed,
  } = useData();
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="allProductsContainer">
        <p>
          Total Products found : <b> {productCount}</b>
        </p>
        <div className="main">
          <button
            className="showFiltersBtn"
            onClick={() => {
              setShowFilters(!showFilters);
            }}
          >
            {showFilters ? "Hide" : "Show"}
            <TuneIcon />
          </button>
          <div className="allFilters">
            {
              <aside
                style={!showFilters ? { display: "none" } : {}}
                className={!showFilters ? "allFilters " : "mobileViewFilter"}
              >
                <div className="filterHeader">
                  <h3>Filters</h3>
                </div>
                <div className="priceFilter">
                  <h3>Price</h3>
                  <p>
                    <span>500</span>
                    <span>1000</span>
                    <span>1500</span>
                  </p>
                  <input
                    type="range"
                    name="priceRange"
                    id="priceRange"
                    step="100"
                    value={filtersUsed.priceRange}
                    min={500}
                    max={1500}
                    onChange={(e) => {
                      setFiltersUsed({
                        type: "PRICE",
                        inputValue: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="categoryFilter">
                  <h3>Category</h3>
                  <label htmlFor="necklace">
                    <input
                      type="checkbox"
                      checked={filtersUsed.categoryFilters.includes("necklace")}
                      name="category"
                      id="necklace"
                      value="necklace"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "CATEGORY",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Necklaces
                  </label>

                  <label htmlFor="ring">
                    <input
                      type="checkbox"
                      checked={filtersUsed.categoryFilters.includes("ring")}
                      name="category"
                      id="ring"
                      value="ring"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "CATEGORY",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Rings
                  </label>

                  <label htmlFor="bracelet">
                    <input
                      type="checkbox"
                      checked={filtersUsed.categoryFilters.includes("bracelet")}
                      name="category"
                      id="bracelet"
                      value="bracelet"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "CATEGORY",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Bracelets
                  </label>
                  <label htmlFor="earring">
                    <input
                      type="checkbox"
                      checked={filtersUsed.categoryFilters.includes("earring")}
                      name="category"
                      id="earring"
                      value="earring"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "CATEGORY",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Earrings
                  </label>
                </div>
                <div className="ocassionFilter">
                  <h3>Ocassion</h3>
                  <label htmlFor="office">
                    <input
                      type="checkbox"
                      checked={filtersUsed.ocassionFilters.includes("Office")}
                      name="office"
                      id="office"
                      value="Office"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "OCCASION",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Office
                  </label>
                  <label htmlFor="casual">
                    <input
                      type="checkbox"
                      checked={filtersUsed.ocassionFilters.includes("Casual")}
                      name="casual"
                      id="casual"
                      value="Casual"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "OCCASION",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Casual
                  </label>
                  <label htmlFor="engagement">
                    <input
                      type="checkbox"
                      checked={filtersUsed.ocassionFilters.includes(
                        "Engagement"
                      )}
                      name="engagement"
                      id="engagement"
                      value="Engagement"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "OCCASION",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Engagement
                  </label>
                  <label htmlFor="bridal">
                    <input
                      type="checkbox"
                      checked={filtersUsed.ocassionFilters.includes("Bridal")}
                      name="bridal"
                      id="bridal"
                      value="Bridal"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "OCCASION",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Bridal
                  </label>
                </div>
                <div className="typeOfMetal">
                  <h3>Type</h3>
                  <label htmlFor="diamond">
                    <input
                      type="checkbox"
                      checked={filtersUsed.materialFilter.includes("diamond")}
                      name="diamond"
                      id="diamond"
                      value="diamond"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "MATERIAL",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Diamond
                  </label>
                  <label htmlFor="platinum">
                    <input
                      type="checkbox"
                      checked={filtersUsed.materialFilter.includes("platinum")}
                      name="platinum"
                      id="platinum"
                      value="platinum"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "MATERIAL",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Platinum
                  </label>
                  <label htmlFor="gold">
                    <input
                      type="checkbox"
                      checked={filtersUsed.materialFilter.includes("gold")}
                      name="gold"
                      id="gold"
                      value="gold"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "MATERIAL",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Gold
                  </label>
                  <label htmlFor="silver">
                    <input
                      type="checkbox"
                      checked={filtersUsed.materialFilter.includes("silver")}
                      name="silver"
                      id="silver"
                      value="silver"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "MATERIAL",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Silver
                  </label>
                </div>
                <div className="ratingFilter">
                  <h3>Rating </h3>
                  <label htmlFor="onePlus">
                    <input
                      type="radio"
                      name="rating"
                      id="onePlus"
                      value={1}
                      checked={filtersUsed.rating === "1"}
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "RATINGS",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    1 ⭐ & above
                  </label>
                  <label htmlFor="twoPlus">
                    <input
                      type="radio"
                      name="rating"
                      id="twoPlus"
                      checked={filtersUsed.rating === "2"}
                      value={2}
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "RATINGS",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    2 ⭐ & above
                  </label>
                  <label htmlFor="threePlus">
                    <input
                      type="radio"
                      name="rating"
                      id="threePlus"
                      checked={filtersUsed.rating === "3"}
                      value={3}
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "RATINGS",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    3 ⭐ & above
                  </label>
                  <label htmlFor="fourPlus">
                    <input
                      type="radio"
                      name="rating"
                      id="fourPlus"
                      checked={filtersUsed.rating === "4"}
                      value={4}
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "RATINGS",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    4 ⭐ & above
                  </label>
                </div>
                <div className="sortByPrice">
                  <h3>Sort by Price</h3>
                  <label htmlFor="lowToHigh">
                    <input
                      type="radio"
                      name="sorting"
                      id="lowToHigh"
                      value="LOWTOHIGH"
                      checked={filtersUsed.sort === "LOWTOHIGH"}
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "SORT",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    Low to High
                  </label>
                  <label htmlFor="highToLow">
                    <input
                      type="radio"
                      name="sorting"
                      id="highToLow"
                      checked={filtersUsed.sort === "HIGHTOLOW"}
                      value="HIGHTOLOW"
                      onClick={(e) => {
                        setFiltersUsed({
                          type: "SORT",
                          inputValue: e.target.value,
                        });
                      }}
                    />
                    High to Low
                  </label>
                </div>
                <div className="clearAll">
                  <button
                    onClick={(e) => {
                      setFiltersUsed({
                        type: "CLEARFILTER",
                        inputValue: e.target.value,
                      });
                    }}
                  >
                    Clear All
                  </button>
                </div>
              </aside>
            }
          </div>

          <div className="displayProducts">
            {backendData?.loading ? (
              <h3>
                <Loader />
              </h3>
            ) : backendData?.error ? (
              <h3>Something went wrong</h3>
            ) : (
              <div className="productsContainer">
                {finalPriceSortedData.map((item) => (
                  <ProductCard item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

/**

 * handle noproducts
 * out of stock include
 * 
 */
