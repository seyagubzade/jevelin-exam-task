import React from "react";
import "./styles.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import { decreaseAmount, increaseAmount, removeFrombasket } from "../../store/basket/basketSlice";

const Basket = () => {
  const { basket, loading, error } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
      </Helmet>

      <div class="container pt-5">
        <h1>Basket</h1>
        <table class="table table-bordered mt-5 ">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col">Total Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div class="spinner-border" role="status">
                <span class="sr-only"></span>
              </div>
            ) : basket ? (
              basket.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      alt="image"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <button className="btn btn-light" onClick={()=>{
                      dispatch(decreaseAmount(item._id))
                    }}>-</button>
                    {item.count} 
                    <button className="btn btn-light" onClick={()=>{
                      dispatch(increaseAmount(item._id))
                    }}>+</button>
                  </td>
                  <td>${item.price}</td>
                  <td>${item.totalPrice}</td>
                  <td>
                    <div class="actions">
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                          dispatch(removeFrombasket(item._id));
                        }}
                      >
                        Remove
                      </button>{" "}
                      <Link to={`/detail/${item._id}`} className="btn btn-dark">
                        Detail
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Basket;
