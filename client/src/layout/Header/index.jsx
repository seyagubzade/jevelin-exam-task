import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const Header = () => {
  const [toggleMobile, setToggleMobile] = useState(false);
  return (
    <header>
      <div class="header-content container d-flex justify-content-between align-items-center">
        <div class="logo">
          <img
            src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_dark.png"
            alt="logo"
          />
        </div>
        <ul class="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/add"}>Add New</Link>
          </li>
          <li>
            <Link to={"/wishlist"}>Wishlist</Link>
          </li>
          <li>
            <Link to={"/basket"}>Basket</Link>
          </li>
        </ul>
        <div class="header-right d-flex">
          <button class="cart-link btn btn-light d-flex justify-content-center align-items-center">
            <i class="fa-light fa-cart-shopping"></i>
          </button>
          <button class="btn buy-btn">Buy Now</button>
        </div>
        <button
          className="btn btn-light bars-menu"
          onClick={() => setToggleMobile(!toggleMobile)}
        >
          <i class="fa-regular fa-bars"></i>
        </button>
      </div>
      {toggleMobile && (
        <div class="mobile-menu">
          <ul class="nav-links-mobile">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/add"}>Add New</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist</Link>
            </li>
            <li>
              <Link to={"/basket"}>Basket</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
