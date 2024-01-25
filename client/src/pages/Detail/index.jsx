import React, { Fragment, useEffect } from "react";
import "./styles.scss";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetById } from "../../store/prods/api_actions";
import { addItemToWishlist } from "../../store/wishlist/wishlistSlice";
import { addItemTobasket } from "../../store/basket/basketSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, currentData } = useSelector((state) => state.prods);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetById(id));
  }, [id]);

  return (
    <div className="detail pt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Detail</title>
      </Helmet>
      <div class="container mt-5">
        <div class="row">
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          ) : currentData ? (
            <Fragment>
              <div class="col-12 col-md-6 col-lg-6">
                <img src={currentData.image} alt="img" />
              </div>
              <div class="col-12 col-md-6 col-lg-6">
                <h3>{currentData.title}</h3>
                <h4>{currentData.subTitle}</h4>
                <p>Model: {currentData.model}</p>
                <p>Price: {currentData.price}</p>
                <p>About: {currentData.desc}</p>
                <div class="actions">
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => {
                      dispatch(DeleteById(currentData._id));
                      navigate("/");
                    }}
                  >
                    Delete
                  </button>{" "}
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch(addItemToWishlist(currentData));
                    }}
                  >
                    Add to Wishlist
                  </button> {" "}
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch(addItemTobasket(currentData));
                    }}
                  >
                    Add to Basket
                  </button>
                </div>
              </div>
            </Fragment>
          ) : error ? (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          ) : (
            <div class="alert alert-light" role="alert">
              Not found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
