import { useState, useEffect } from "react";
import "./Browser.css";
import ProductList from "./components/ProductList.jsx";
import { Frontpage } from "../pages/Frontpage";
function Browse() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      {" "}
      <Frontpage />
      <h1>React with Vite Product Page</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Browse;
