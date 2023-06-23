import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../data";
import { FaStar, FaBagShopping } from "react-icons/fa6";
import "../styles/product-detail.css";

const ProductDetail = () => {
    const [index, setIndex] = useState(0);
    const { id } = useParams();

    const product = Products.filter(p => p.id === Number(id))[0];

    const formatPrice = (price, sale) => {
        const new_price = (price - (price * sale / 100)).toFixed(2);

        return new_price;
    }

    return (
        <div className="detail-wrapper">
            <div className="pic-wrapper">
                {
                    Array.isArray(product.pic) ?
                        <img src={product.pic[index]} alt={product.id} /> :
                        <img src={product.pic} alt={product.id} />
                }

                <div className="small-pic">
                    {
                        Array.isArray(product.pic) ?
                            product.pic.map((p, i) => (
                                <img src={p} alt={product.id} key={i} onClick={() => setIndex(i)} />
                            )) :
                            null
                    }
                </div>
            </div>

            <div className="detail-desc">
                <p> {product.desc} </p>

                <div className="price-wrapper">
                    {
                        product.sale ?
                            <>
                                <del> {product.price} </del> <span className="sale-price"> {formatPrice(product.price, product.sale)}₺ </span>
                            </> :
                            <span className="price"> {product.price}₺ </span>
                    }
                </div>

                <div className="choice">
                    <div>
                        <FaStar className="star" />
                        <span>Favorilere ekle</span>
                    </div>

                    <div>
                        <FaBagShopping className="bag" />
                        <span>Sepete ekle</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;