import React from "react";
import { FaStar, FaBagShopping } from "react-icons/fa6";
import "../styles/product-cart.css"
import { Link } from "react-router-dom";

const ProductCart = (props) => {
    const formatPrice = (price, sale) => {
        const new_price = (price - (price * sale / 100)).toFixed(2);

        return new_price;
    }

    return (
        <div className="product-wrapper">
            <Link to={`/toy/${props.product.id}`}>
                {
                    Array.isArray(props.product.pic) ?
                        <img src={props.product.pic[0]} alt={props.product.id} /> :
                        <img src={props.product.pic} alt={props.product.id} />
                }

            </Link>


            <div className="product-desc">
                {
                    props.product.sale ?
                        <>
                            <del> {props.product.price} </del>
                            <span className="sale-price"> {formatPrice(props.product.price, props.product.sale)}₺ </span>
                        </> :
                        <span className="price"> {props.product.price}₺ </span>
                }

                {
                    props.product.desc && <p> {props.product.desc.slice(0, 100)}... </p>
                }

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

export default ProductCart;