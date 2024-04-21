import React, {Suspense, useEffect, useState} from "react";
import { getProducts } from "../api/products";

import "./HomeContent.scss";

const HomeContent = () => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts().then(setProducts)
    },[])
  return (<div className="homeContainer">
     {products.map((product)=>(
         <div key={product.id} className="productContainer">
             <img className="imageStyle" src={product.image} alt={product.name}></img>
             <a className="textStyle" >{product.name}</a>
         </div>
     ))}
  </div>)
};
export default HomeContent;