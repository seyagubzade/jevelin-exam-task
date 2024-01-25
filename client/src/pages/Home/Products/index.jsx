import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { DeleteById, GetAll } from "../../../store/prods/api_actions";
import { Link } from "react-router-dom";
import { addItemToWishlist } from "../../../store/wishlist/wishlistSlice";
import { addItemTobasket } from "../../../store/basket/basketSlice";
const Products = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { data, loading, error, currentData } = useSelector(
    (state) => state.prods
  );
  const dispatch = useDispatch();
  const getAll = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAll();
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return data.filter((item) =>
        item?.title?.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    });
  }, [data, searchValue]);

  return (
    <div className="products">
      <div class="container">
        <div class="section-header">
          <h4>ADJUSTABLE STRAPS</h4>
          <h2>
            Choose the best <br />
            color for your activity
          </h2>
        </div>
        <div class="filter-section mt-5 d-flex">
          <div class="form-group" style={{width: "250px"}}>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => setFilteredData(data)}
            >
              Default
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setFilteredData(() =>
                  [...data].sort((a, b) => a.price - b.price)
                );
              }}
            >
              Lower to Higher
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setFilteredData(() =>
                  [...data].sort((a, b) => b.price - a.price)
                );
              }}
            >
              Higher to Lower
            </button>
          </div>
        </div>
        <div class="row mt-5">
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only"></span>
            </div>
          ) : data ? (
            filteredData.map((item) => (
              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div class="product-card">
                  <div class="content pt-3">
                    <h5>{item.subTitle}</h5>
                    <Link to={`/detail/${item._id}`}>
                      <h4>{item.title}</h4>
                    </Link>
                    <p>${item.price}</p>
                  </div>
                  <div class="actions">
                    <button
                      className="btn btn-outline-light"
                      onClick={() => {
                        dispatch(addItemToWishlist(item));
                      }}
                    >
                      Add to Wishlist
                    </button>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        dispatch(addItemTobasket(item));
                      }}
                    >
                      Add to Basket
                    </button>
                  </div>
                  <div class="card-image">
                    <img src={item.image} alt="image" />
                  </div>
                </div>
              </div>
            ))
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

export default Products;
