import React, { useState, useEffect, useRef } from 'react';
import OwlCarousel from "react-owl-carousel";


const Slider = () => {
  
  const options1 = {
     loop: true,
     dots: false,
     dotsEach: false,
     nav: false,
     autoplay: true,
     autoplayTimeout: 3000,
     responsive: {
       0: { items: 1 },
       600: { items: 1 },
       1000: { items: 1 },
     },
   };

  return (
    <section className="banner-area main-section">
          {/* <OwlCarousel {...options1} className="product-slide owl-theme">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-01.webp"}
                alt="shape"
                width="100%"
                className="d-md-block d-none"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-01-mobile.webp"
                }
                alt="shape"
                width="100%"
                className="d-md-none d-block"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-02.webp"}
                alt="shape"
                width="100%"
                className="d-md-block d-none"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-02-mobile.webp"
                }
                alt="shape"
                width="100%"
                className="d-md-none d-block"
              />
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-03.webp"}
                alt="shape"
                width="100%"
                className="d-md-block d-none"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-03-mobile.webp"
                }
                alt="shape"
                width="100%"
                className="d-md-none d-block"
              />
            </div>
          </OwlCarousel> */}
          <div>
              <img
                src={process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-01.webp"}
                alt="shape"
                width="100%"
                className="d-md-block d-none"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/slider-images/banner-anabolic-01-mobile.webp"
                }
                alt="shape"
                width="100%"
                className="d-md-none d-block"
              />
            </div>
        </section>
  );
};
export default Slider;