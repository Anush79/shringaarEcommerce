import './shop.css'
import { useState } from 'react'
import {useData} from '../../context/DataContext'
import ProductCard from '../../components/ProductCard'
export default function Shop() {
  const {backendData}= useData() ;
  console.log(backendData)
  return <>
    <div className="allProductsContainer">

      <h1>Shop</h1>

      <div className="main">
        <aside>
          <div className="filterHeader">
            <h3>Filters</h3>
            <button>Clear All</button>
          </div>
          <div className="priceFilter">
            <h3>Price</h3>
            <p><span>500</span><span>1000</span><span>1500</span></p>
            <input type="range" name="priceRange" id="priceRange" min={0} max={100} />
          </div>
          <div className="categoryFilter">
            <h3>Category</h3>
            <label htmlFor="necklace">
              <input type="checkbox" name="category" id="necklace" value="necklace" />Necklaces
            </label>

            <label htmlFor="ring">
              <input type="checkbox" name="category" id="ring" value="ring" />Rings
            </label>

            <label htmlFor="bracelet">
              <input type="checkbox" name="category" id="bracelet" value="bracelet" />Bracelets
            </label>
            <label htmlFor="earring">
              <input type="checkbox" name="category" id="earring" value="earring" />Earrings
            </label>
          </div>
          <div className="ocassionFilter">
            <h3>Ocassion</h3>
            <label htmlFor="office"><input type="checkbox" name="office" id="office" />Office</label>
            <label htmlFor="casual"><input type="checkbox" name="casual" id="casual" />Casual</label>
            <label htmlFor="engagement"><input type="checkbox" name="engagement" id="engagement" />Engagement</label>
            <label htmlFor="bridal"><input type="checkbox" name="bridal" id="bridal" />Bridal</label>
          </div>
          <div className="typeOfMetal">
            <h3>Type</h3>
            <label htmlFor="diamond"><input type="checkbox" name="diamond" id="diamond" />Diamond</label>
            <label htmlFor="platinum"><input type="checkbox" name="platinum" id="platinum" />Platinum</label>
            <label htmlFor="gold"><input type="checkbox" name="gold" id="gold" />Gold</label>
            <label htmlFor="silver"><input type="checkbox" name="silver" id="silver" />Silver</label>
          </div>
          <div className="ratingFilter">
            <h3>Rating </h3>
            <label htmlFor="onePlus"><input type="radio" name="rating" id="onePlus" value={1} />1 ⭐ & above</label>
            <label htmlFor="twoPlus"><input type="radio" name="rating" id="twoPlus" value={2} />2 ⭐ & above</label>
            <label htmlFor="threePlus"><input type="radio" name="rating" id="threePlus" value={3} />3 ⭐ & above</label>
            <label htmlFor="fourPlus"><input type="radio" name="rating" id="fourPlus" value={4} />4 ⭐ & above</label>
          </div>
          <div className="sortByPrice">
            <h3>Sort by Price</h3>
            <label htmlFor="lowToHigh"><input type="radio" name="sorting" id="lowToHigh" />Low to High</label>
            <label htmlFor="highToLow"><input type="radio" name="sorting" id="highToLow" />High to Low</label>
          </div>
        </aside>
        <div className="displayProducts">
          {
            backendData?.loading ? <h3>Loading Data,please wait...</h3> :
            backendData?.error ? <h3>Something went wrong</h3>:
            <div className="productsContainer">
            {backendData?.productsData.map((item) => <ProductCard item={item} />)}
          </div>
          }
        </div>
      </div>

    </div>


  </>
}


