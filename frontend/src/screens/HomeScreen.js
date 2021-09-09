import React, { useEffect, useState } from "react";
import Product from "../components/Product/Product";
import styles from "./HomeScreen.module.css";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className={styles.ProductContainer}>
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-3" key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
