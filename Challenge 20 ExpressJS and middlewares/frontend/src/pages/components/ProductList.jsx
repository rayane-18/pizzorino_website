import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const ProductList = ({ products }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const handleAddToCart = async (productId) => {
    const quantity = quantities[productId] || 0;

    try {
      await axios.post(
        `http://localhost:4000/cart/addtoCart/` +
          jwtDecode(localStorage.getItem("accessToken")).user.username,
        {
          productid: productId,
          quantity,
        }
      );

      console.log(
        `Product ID: ${productId}, Quantity: ${quantity} added to cart`
      );
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>{product.price.toFixed(2)} DZD</p>
            <input
              type="number"
              min="0"
              value={quantities[product.productId] || 0}
              onChange={(e) =>
                handleQuantityChange(
                  product.productId,
                  parseInt(e.target.value)
                )
              }
            />
            <button onClick={() => handleAddToCart(product.productId)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  username: PropTypes.string.isRequired,
};

export default ProductList;
