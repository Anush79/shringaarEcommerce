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
      <section className="ShopByCategory">

        <h3>SHOP BY CATEGORY</h3>
        <p>Browse through your favorite categories. we have got them all!</p> <div className="productsContainer">
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
              <p>Bracelets</p>
            </div>
          </div>
        </div>

      </section>
      <section className="whyUs">
        <p>BEST IN BUSINESS</p>
        <h3>Why Choose Us</h3>
        <p className="desc">

        </p>
      </section>

    </>
  );
}
