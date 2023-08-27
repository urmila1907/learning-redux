import ProductCard from "../ProductCard/ProductCard";
import "./product.scss"
import { useState,useEffect } from "react";

const Product = () => {
  const [products,setProducts] = useState([]);

  useEffect(()=>{
  fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((result) => setProducts(result));
  },[])

  return (
    <div className="main-box">
      <h1 className="title">Product Dashboard</h1>
      {JSON.stringify(products)}
      <ProductCard/>
    </div>
  );
}

export default Product