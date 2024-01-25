import React from "react";
import './styles.scss'
const Hero = () => {
  return (
    <div className="hero">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6  d-flex justify-content-center align-items-center">
            <div class="content">
              <h1>
                Lifestyle <br /> Smart{" "}
                <span style={{ color: "#994FFF" }}>Watch</span>
              </h1>
              <h3>Technology of the future</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, saepe. Harum sint quam at obcaecati.</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 hero-img" style={{zIndex: "100"}}>
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
      <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Ellipse-974-copy-4.png" className="bgImg" alt="bg-img" />
      <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Ellipse-974-copy-3.png" className="bgImg2" alt="bg-img" />
    </div>
  );
};

export default Hero;
