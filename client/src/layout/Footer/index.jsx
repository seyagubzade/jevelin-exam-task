import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer p-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 p-3">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_light.png"
              alt="logo-footer"
            />
            <p className="text-light mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              similique voluptatum nisi non possimus tempore?
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-3">
            <h3 className="text-light">BEST EXPERIENCE</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add"}>Add New</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-4 p-3">
            <h3 className="text-light">COMPANY</h3>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add"}>Add New</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
