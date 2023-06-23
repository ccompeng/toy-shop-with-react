import React from "react";
import "../styles/highlight.css";
import { Highlights } from "../data";
import { FaCheckDouble } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";

const Highlight = () => {
    return (
        <div className="highlight">
            <h2>Öne çıkanlar <FaCheckDouble /></h2>
            <div className="highlight-container">
                {Highlights.map((high) => (
                    <ProductCart product={high} />
                ))}

                <Link to="toys/">Tüm ürünleri gör &rarr;</Link>
            </div>
        </div>
    )
}

export default Highlight;