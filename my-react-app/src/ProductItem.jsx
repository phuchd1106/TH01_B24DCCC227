import "./ProductItem.css";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
        Thêm vào giỏ
      </button>
    </div>
  );
}

export default ProductItem;
