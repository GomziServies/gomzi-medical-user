import React, { useEffect, useState } from "react";
import UserInfo from "../../../assets/js/menu/userInfo";
import MobileUserInfo from "../../../assets/js/menu/mobileUserInfo";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../../assets/js/config/api";
import { BsCartCheckFill } from "react-icons/bs";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function NutritionHeader({ productDataGet, cartItemName, cartDataClick }) {
  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    document.getElementById("demo").style.width = "0px";
  }

  const [cartCount, setCartCount] = useState(0);

  const fetchProductData = async () => {
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=MEDICAL_PRODUCT&is_purchase=true"
      );
      const cartData = response.data.data[0];
      setCartCount(cartData.items.length);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (isLogin) {
      fetchProductData();
    }
  }, [productDataGet, cartItemName, cartDataClick]);

  return (
    <>
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log-new">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/nutrition-logo.png"
                }
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1-new">
          <Link to="/">
            <div>
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/nutrition-logo.png"
                }
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link
            to="/nutrition"
            style={{ marginTop: "50px", marginBottom: "30px" }}
          >
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL + "../assets/images/nutrition-logo.png"
              }
              width="40%"
              alt="Fg Group"
            />
          </Link>
          <ul className="mobileUserInfo aa">
            <MobileUserInfo />
          </ul>
        </div>
        <span
          className="d-lg-none d-sm-block btnn "
          style={{ cursor: "pointer", fontSize: 20, color: "black" }}
          onClick={openside}
        >
          ☰
        </span>

        <div className="menubar">
           <Link to="/"><span>Home</span></Link>
           <Link to="/product"><span>Product</span></Link>
          <span>Contect us</span>
        </div>
        <div className="login d-lg-block d-none">
          <ul>
            <UserInfo cartCount={cartCount} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default NutritionHeader;
