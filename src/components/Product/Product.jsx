import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setproducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const res = await instance.get("/products");
        // console.log(res);
        setproducts(res.data);
        // console.log(products)
        setIsLoading(false);
      } catch (error) {
        console.log("The error is", error);
        isLoading(fal);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products?.map((singleProduct) => (
            <ProductCard
              product={singleProduct}
              key={singleProduct.id}
              renderAdd={true}//for add to cart b
            />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
