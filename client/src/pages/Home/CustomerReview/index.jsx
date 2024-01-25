import React from "react";
import "./styles.scss";
import Slider from "./Slider/indx";
const CustomerReview = () => {
  return (
    <div className="customer-review">
      <div class="container">
        <div class="section-header">
          <h2>
            What our <br />
            customers say
          </h2>
        </div>
        <div class="customers">
            <Slider />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
