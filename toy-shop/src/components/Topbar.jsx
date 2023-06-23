import React from "react";
import "../styles/topbar.css";
import logo from "../assets/logo.jpg";
import { FaStar, FaBagShopping, FaChess } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>Toy shop</h1>
            </div>

            <div className="menu-nav">
                <ul>
                    <li>
                        <Link to="/">Anasayfa</Link>
                    </li>
                    <li>
                        <Link to="">Peluş oyuncaklar</Link>
                    </li>
                    <li>
                        <a href="#">Oyuncak bebek</a>
                    </li>
                    <li>
                        <a href="#">Araçlar</a>
                    </li>
                    <li>
                        <a href="#">Eğitici</a>
                    </li>
                </ul>
            </div>

            <div className="user-nav">
                <FaStar className="nav-icon" />
                <FaBagShopping className="nav-icon" />
                <span>9+</span>
                <FaChess className="nav-icon" />
            </div>
        </div>
    )
}

export default Topbar;