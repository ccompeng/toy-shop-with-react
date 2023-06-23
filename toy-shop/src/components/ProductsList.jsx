import React from "react";
import "../styles/product-list.css";
import ProductCart from "./ProductCart";
import { Products } from "../data";

const ProductsList = () => {
    return (
        <div className="products-list-container">
            {Products.map((product) => (
                <ProductCart product={product} />
            ))}
        </div>
    )
}

export default ProductsList;