import { NavLink, useNavigate } from "react-router-dom";
import "./home.css";

import ProductCard from "../../components/ProductCard";


import { useData } from '../../'


export default function Home() {
  const { backendData, categoriesData, setFiltersUsed } = useData()
  const navigate = useNavigate()

  const trendingArray = backendData?.productsData.filter((item) => item.product_isBadge === "Trending")
  return (
    <>
      <section className="home">
        <h4>Our Exclusive Collection</h4>
        <h3>
          The New Rivaraa
          <br /> Collection
        </h3>
        <p>
          {" "}
          your one-stop-shop for exquisite jewelry pieces that are perfect for
          any occasion.Explore our exclusive collection handcrafted with the
          finest materials to ensure both quality and beauty. Explore our collection, and find the perfect piece that speaks to you
        </p>
        <div className="mainbutton">
          <NavLink to='/browse'>
            <button>Shop Now</button>
          </NavLink>

        </div>
      </section>

      <section className="trending">
        <p>Popular Products</p>
        <h3>TRENDING NOW</h3>
        <div className="productsContainer">
          {trendingArray.slice(0, 6).map((item) => <ProductCard item={item} />)}
        </div>

      </section>
      <section className="showOff">
        <div className="textContent">
          <p>Unique Pieces</p>
          <h3>BE ALWAYS ON TREND</h3>
          <p >We take immense pride in offering jewelry pieces that are crafted with the utmost care and attention to detail. Each item in our collection undergoes rigorous quality checks to ensure it meets our high standards</p>
          <div className="mainbutton">
            <NavLink to='/browse'>
              <button>Shop Now</button>
            </NavLink>
          </div>
        </div>
        <div className="imageContent">
          <img className="bigImage" src='\assets\model2.jpg' width="400px" />
          <img className="smallImage" src='\assets\hands.jpg' alt="" />

        </div>
      </section>
      <section className="ShopByCategory">

        <h3>SHOP BY CATEGORY</h3>
        <p>Browse through your favorite categories. we have got them all!</p>
        <div className="categoryBox">
          {
            categoriesData.map(({ _id, categoryName, thumbnail }) => <div key={_id} className={categoryName}
              onClick={() => {
                setFiltersUsed({
                  type: "CLEARFILTER",
                  inputValue: "",
                });

                setFiltersUsed({ type: "CATEGORY", inputValue: categoryName });
                navigate('/browse')
              }}>
              <img src={thumbnail} alt={` random image of ${categoryName}`} />
              <p>{categoryName}</p>
            </div>
            )
          }

        </div>


      </section>
      <section className="whyUs">
        <p>BEST IN BUSINESS</p>
        <h3>Why Choose Us</h3>
        <div className="whyusContent">
          <img className="middleImage" src="\assets\model3.jpg" alt="" srcset="" />
          <div className="whyUsDescription">
            <div>
              <img src="\assets\whyUsIcons\percent-solid.svg" alt="big discount" />
              <h3>Big Discount</h3>
              <p>We provide higher discounts without compromising on quality or craftsmanship. Our commitment to offering affordable prices allows you to indulge in your love for exquisite jewelry while enjoying significant savings.</p>
            </div>
            <div>
              <img src="\assets\whyUsIcons\truck-fast-solid.svg" alt="fast delivery" />
              <h3>Free Delivery</h3>
              <p>With our Free delivery service, you can shop with confidence, knowing that there are no hidden fees or additional charges. Sit back, relax, and let us take care of delivering your exquisite jewelry directly to you.</p>
            </div>
            <div>
              <img src="\assets\whyUsIcons\wallet-solid.svg" alt="big savings " />
              <h3>Secure Payments</h3>
              <p>We ensure your peace of mind throughout your shopping experience. Your financial security is of utmost importance to us, which is why we have implemented advanced encryption and secure payment gateways.</p>
            </div>
            <div>
              <img src="\assets\whyUsIcons\boxes-packing-solid.svg" alt="big tracking order" />
              <h3>Order Tracking</h3>
              <p>We provide tracking order services, allowing you to stay informed and updated on the status of your purchase every step of the way.we ensure a seamless and transparent shopping experience.</p>
            </div>
          </div>
        </div>


      </section>

    </>
  );
}
