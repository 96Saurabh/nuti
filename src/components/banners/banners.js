import React from "react";
import "./banners.css";

function Banners() {
  return (
    <div>
      <div className="section-banner">
        <span>
          <img
            src="https://roastfoods.com/wp-content/uploads/2023/07/MAKHANA-banners-new1-1.jpg"
            alt="product-img"
            className="banner-img"
          />
        </span>
        <span>
          <img
            src="https://shakmbarifoods.com/wp-content/uploads/2023/02/makhana-banner.jpg"
            alt="product-img"
            className="banner-img"
          />
        </span>
      </div>
      <div className="main-banner">
        <img
          src="https://mrmakhana.com/cdn/shop/files/Main_Banner_1244x425_3_3x_c7831e63-4c7e-4eb6-8631-1d4ba0e76a8b_1903x650.png?v=1686032006;"
          alt="product-img"
          className="main-banner-img"
        />
      </div>
    </div>
  );
}

export default Banners;
