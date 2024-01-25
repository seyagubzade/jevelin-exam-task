import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { DeleteById, GetAll } from "../../../store/prods/api_actions";
import { Link } from "react-router-dom";
import { addItemToWishlist } from "../../../store/wishlist/wishlistSlice";
import { addItemTobasket } from "../../../store/basket/basketSlice";
const Products = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [serachValue, setSerachValue] = useState("");
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
    console.log("data>>>.", data);
    setFilteredData(() => {
      return data.filter((item) =>
        item?.title?.toLowerCase().includes(serachValue.toLowerCase().trim())
      );
    });
  }, [data, serachValue]);

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
        <div class="filter-section mt-5">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              value={serachValue}
              onChange={(e) => setSerachValue(e.target.value)}
            />
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
                  <Link to={`/detail/${item._id}`}><h4>{item.title}</h4></Link>
                  <p>${item.price}</p>
                 </div>
                  <div class="actions">
                    {/* <button className="btn btn-outline-light" onClick={()=>{
                        dispatch(DeleteById(item._id))
                    }}>Delete</button> {" "} */}
                    <button className="btn btn-outline-light" onClick={()=>{
                        dispatch(addItemToWishlist(item))
                    }}>Add to Wishlist</button>
                    <button className="btn btn-light" onClick={()=>{
                        dispatch(addItemTobasket(item))
                    }}>Add to Basket</button>
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
          {console.log("filteredData".filteredData)}
        </div>
      </div>
    </div>
  );
};

export default Products;
