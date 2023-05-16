export default function ProductCard({item}){
  const { name, price, previousPrice, img } = item;
  return (
    <div className="ProductCard" key={name+price}>
      <img src={img} alt="Jewelry exclusive" />
      <h3>{name}</h3>
      <p className="price">
      {previousPrice && <span className="stikeThrough">$ {previousPrice}</span>}
      <b> $ {price}</b></p>
    </div>
  );
}