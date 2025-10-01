import { useState } from "react";
import ProductItem from "./ProductItem";
import "./Bai4.css";

function Bai4() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalProducts = cart.length;
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Giỏ hàng</h2>

      <div className="cart-summary">
        <p>
          Giỏ hàng: {totalProducts} sản phẩm, tổng tiền: {totalPrice}
        </p>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Bai4;
