import "./shop.css";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import ProductCard from "../../components/ProductCard";
export default function Shop() {
  const { backendData, finalPriceSortedData, productCount,setFiltersUsed } = useData();
  const [showFilters, setShowFilters] = useState(false)

  return (
    <>
      <div className="allProductsContainer">
     <p>Total Products found : <b> {productCount}</b></p>
        <div className="main">
          {/* {!showFilters ? <p onClick={() => { setShowFilters(!showFilters) }}>Show Filters ↓ </p> : */}
            <aside className="allFilters">
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
                  min={500}
                  max={1500}
                  onChange={(event) => { setFiltersUsed({ type: "PRICE", inputValue: event }) }}
                />
              </div>
              <div className="categoryFilter">
                <h3>Category</h3>
                <label htmlFor="necklace">
                  <input
                    type="checkbox"
                    name="category"
                    id="necklace"
                    value="necklace"
                    onClick={(event) => {
                      setFiltersUsed({ type: "CATEGORY", inputValue: event });
                    }}
                  />
                  Necklaces
                </label>

                <label htmlFor="ring">
                  <input
                    type="checkbox"
                    name="category"
                    id="ring"
                    value="ring"
                    onClick={(event) => {
                      setFiltersUsed({ type: "CATEGORY", inputValue: event });
                    }}
                  />
                  Rings
                </label>

                <label htmlFor="bracelet">
                  <input
                    type="checkbox"
                    name="category"
                    id="bracelet"
                    value="bracelet"
                    onClick={(event) => {
                      setFiltersUsed({ type: "CATEGORY", inputValue: event });
                    }}
                  />
                  Bracelets
                </label>
                <label htmlFor="earring">
                  <input
                    type="checkbox"
                    name="category"
                    id="earring"
                    value="earring"
                    onClick={(event) => {
                      setFiltersUsed({ type: "CATEGORY", inputValue: event });
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
                    name="office"
                    id="office"
                    value="Office"
                    onClick={(event) => {
                      setFiltersUsed({ type: "OCCASION", inputValue: event });
                    }}
                  />
                  Office
                </label>
                <label htmlFor="casual">
                  <input
                    type="checkbox"
                    name="casual"
                    id="casual"
                    value="Casual"
                    onClick={(event) => {
                      setFiltersUsed({ type: "OCCASION", inputValue: event });
                    }}
                  />
                  Casual
                </label>
                <label htmlFor="engagement">
                  <input
                    type="checkbox"
                    name="engagement"
                    id="engagement"
                    value="Engagement"
                    onClick={(event) => {
                      setFiltersUsed({ type: "OCCASION", inputValue: event });
                    }}
                  />
                  Engagement
                </label>
                <label htmlFor="bridal">
                  <input
                    type="checkbox"
                    name="bridal"
                    id="bridal"
                    value="Bridal"
                    onClick={(event) => {
                      setFiltersUsed({ type: "OCCASION", inputValue: event });
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
                    name="diamond"
                    id="diamond"
                    value="diamond"
                    onClick={(event) => {
                      setFiltersUsed({ type: "MATERIAL", inputValue: event });
                    }}
                  />
                  Diamond
                </label>
                <label htmlFor="platinum">
                  <input
                    type="checkbox"
                    name="platinum"
                    id="platinum"
                    value="platinum"
                    onClick={(event) => {
                      setFiltersUsed({ type: "MATERIAL", inputValue: event });
                    }}
                  />
                  Platinum
                </label>
                <label htmlFor="gold">
                  <input
                    type="checkbox"
                    name="gold"
                    id="gold"
                    value="gold"
                    onClick={(event) => {
                      setFiltersUsed({ type: "MATERIAL", inputValue: event });
                    }}
                  />
                  Gold
                </label>
                <label htmlFor="silver">
                  <input
                    type="checkbox"
                    name="silver"
                    id="silver"
                    value="silver"
                    onClick={(event) => {
                      setFiltersUsed({ type: "MATERIAL", inputValue: event });
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
                    onClick={(event) => {
                      setFiltersUsed({ type: "RATINGS", inputValue: event });
                    }}
                  />
                  1 ⭐ & above
                </label>
                <label htmlFor="twoPlus">
                  <input
                    type="radio"
                    name="rating"
                    id="twoPlus"
                    value={2}
                    onClick={(event) => {
                      setFiltersUsed({ type: "RATINGS", inputValue: event });
                    }}
                  />
                  2 ⭐ & above
                </label>
                <label htmlFor="threePlus">
                  <input
                    type="radio"
                    name="rating"
                    id="threePlus"
                    value={3}
                    onClick={(event) => {
                      setFiltersUsed({ type: "RATINGS", inputValue: event });
                    }}
                  />
                  3 ⭐ & above
                </label>
                <label htmlFor="fourPlus">
                  <input
                    type="radio"
                    name="rating"
                    id="fourPlus"
                    value={4}
                    onClick={(event) => {
                      setFiltersUsed({ type: "RATINGS", inputValue: event });
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
                    onClick={(event) => {
                      setFiltersUsed({ type: "SORT", inputValue: event });
                    }}
                  />
                  Low to High
                </label>
                <label htmlFor="highToLow">
                  <input
                    type="radio"
                    name="sorting"
                    id="highToLow"
                    value="HIGHTOLOW"
                    onClick={(event) => {
                      setFiltersUsed({ type: "SORT", inputValue: event });
                    }}
                  />
                  High to Low
                </label>
              </div>
              <div className="clearAll">
                <button onClick={(e)=>{
                  setFiltersUsed({type:"CLEARFILTER", inputValue:e})
                }}>Clear All</button>
              </div>
            </aside>
          

          <div className="displayProducts">
            {backendData?.loading ? (
              <h3>Loading Data,please wait...</h3>
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
 * show number of products
 * handle noproducts
 * out of stock include
 * favorite botton 
 * trending on product 
 * 
 */