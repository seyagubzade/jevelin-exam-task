import React from "react";
import "./styles.scss";

const Features = () => {
  return (
    <div className="features">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center">
            <div class="content-img">
              <img
                src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg"
                alt="hero-img"
              />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 pt-5">
            <div class="section-header">
              <h4>MEET WITH OUR</h4>
              <h2>Splendid Features</h2>
            </div>
            <div class="feature-card d-flex">
              <div class="feature-icon">
                <i class="fa-light fa-microphone"></i>
              </div>
              <div class="card-content">
                <h3>Voice Recognition</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
            <div class="feature-card d-flex">
              <div class="feature-icon">
                <i class="fa-light fa-mobile"></i>
              </div>
              <div class="card-content">
                <h3>Connect with your phone</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
            <div class="feature-card d-flex">
              <div class="feature-icon">
                <i class="fa-light fa-microphone"></i>
              </div>
              <div class="card-content">
                <h3>Voice Recognition</h3>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
