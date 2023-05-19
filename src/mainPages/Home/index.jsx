import "./home.css";
import ProductCard from "../../components/ProductCard";
const popularData = [
  {
    name: "product name 1",
    price: 495.0,
    previousPrice: 600,
    img: "https://placehold.co/200?text=Shringaar",
  },
  {
    name: "product name 2",
    price: 1495.0,
    previousPrice: 1800,
    img: "https://placehold.co/200?text=Shringaar",
  },
  {
    name: "product name 3",
    price: 788.0,
    img: "https://placehold.co/200?text=Shringaar",
  },
  {
    name: "product name 4",
    price: 595.0,
    previousPrice: 799,
    img: "https://placehold.co/200?text=Shringaar",
  }

];

const category = ['Rings', 'Bracelets', 'Earrings', 'Necklaces']
export default function Home() {
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
          <button>Shop Now</button>

        </div>
      </section>

      <section className="trending">
        <p>Popular Products</p>
        <h3>TRENDING NOW</h3>
        <div className="productsContainer">
          {popularData.map((item) => <ProductCard item={item} />)}
        </div>

      </section>
      <section className="showOff">
        <div className="textContent">
          <p>Unique Pieces</p>
          <h3>BE ALWAYS ON TREND</h3>
          <p >We take immense pride in offering jewelry pieces that are crafted with the utmost care and attention to detail. Each item in our collection undergoes rigorous quality checks to ensure it meets our high standards</p>
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
            <div className="necklace">
              <img src="\assets\categoryIcon\necklace.png" alt="necklace image random" srcset="" />
              <p>Bracelets</p>
            </div>
            <div className="ring">
              <img src="\assets\categoryIcon\ring.png" alt="ring image random" srcset="" />
              <p>Rings</p>
            </div>
            <div className="bracelet">
              <img src="\assets\categoryIcon\bracelet.png" alt="bracelet image random" srcset="" />
              <p>Bracelets</p>
            </div>
            <div className="earring">
              <img src="\assets\categoryIcon\earring.png" alt="earring image random" srcset="" />
              <p>Earrings</p>
            </div>
          </div>
     

      </section>
      <section className="whyUs">
        <p>BEST IN BUSINESS</p>
        <h3>Why Choose Us</h3>
        <div className="whyusContent">
          <img className="middleImage" src="\assets\model.jpg" alt="" srcset="" />
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
