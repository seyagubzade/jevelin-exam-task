import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.scss";

// import required modules
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div class="customer-content">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash2.jpg"
              alt="image"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur atque iure dolorum veniam ab velit rerum nihil provident officiis.</p>
            <h5>Ella Johnson</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="customer-content">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/tyler-nix-626668-unsplash.jpg"
              alt="image"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur atque iure dolorum veniam ab velit rerum nihil provident officiis.</p>
            <h5>Maggie Wilson</h5>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
