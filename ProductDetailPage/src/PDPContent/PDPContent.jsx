import React, { useEffect, useState } from "react";
import {getProductById} from "Home/api/products";
import { useParams } from "react-router";
import "./PDPContent.scss";

export default function PDPContent() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(()=>{
        getProductById(id).then(setProduct);
    }, [id]);
console.log('pop');
    if(!product) return null;
console.log('pkp');
    return (
    <div className="productContainer">
        <div key={product.id} className="PDPContentcontainer">
             <img className="imageStyle" src={product.image} alt={product.name}></img>
             <a className="textStyle" >{product.name}</a>
         </div>
         <div className="description">
         <p >{product.description}</p>
         <p >{product.longDescription}</p>
         </div>
    </div>
        )
}

