import { useState } from "react";
import productsData from "./products.json";
const Admin = () => {
  const token = "dsklfjdskljfkldsajfklads";

  const [inputToken, setInputToken] = useState("");
  const [newProduct, setNewProduct] = useState({
    productId: 0,
    name: "",
    description: "",
    price: 0,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      image: file,
    }));
  };

  const handleTokenChange = (e) => {
    setInputToken(e.target.value);
  };

  const addProduct = (product) => {
    const updatedProducts = [...productsData, { ...product }];

    productsData.splice(0, productsData.length, ...updatedProducts);

    console.log("Updated products data:", productsData);
  };

  const handleSubmit = () => {
    if (inputToken === token) {
      addProduct(newProduct);
    } else {
      alert("Invalid admin token");
      return;
    }
  };

  return (
    <div>
      <h2>Add New Product (Admin)</h2>
      <label>
        Admin Token:
        <input
          type="text"
          name="adminToken"
          value={inputToken}
          onChange={handleTokenChange}
        />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" onChange={handleInputChange}></textarea>
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>
      <br />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default Admin;
