import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/odometer.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import LoginModal from "../assets/js/popup/login";
import { toast } from "react-toastify";
import Header from "../components/partials/Header/nutritionsheader";
import Slider from "../components/Slider";

function Home() {
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartDataCount, setCartDataCount] = useState(null);
  const [cartItemName, setCartItemName] = useState([]);
  const authorization = localStorage.getItem("fg_group_user_authorization");
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const navigate = useNavigate();

  const data = [
    {
      image: "/assets/images/beginer.jpg",
      caption: "Beginners to Anabolic Cycle",
      path: "/beginners-to-anabolic-cycle",
    },
    {
      image: "/assets/images/medium.jpg",
      caption: "Fat Loss to Anabolic Cycle",
      path: "/fat-loss-to-anabolic-cycle",
    },
    {
      title: "ADVANCE ANABOLIC CYCLES",
      image: "/assets/images/advance.jpg",
      caption: "Advance to Anabolic Cycle",
      path: "/advance-to-anabolic-cycle",
    },
  ];

  const handleShowMore = () => {
    const newCount = visibleCount + 3;
    const newIndexes = Array.from(
      { length: newCount - visibleCount },
      (_, i) => visibleCount + i
    );
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!authorization) {
      openModal();
    }
  }, [authorization]);

  const getProductData = async () => {
    try {
      const response = await publicAxiosInstance.get("/medical-product/get");
      const userData = response.data.data;
      if (userData) {
        setProductData(userData);
      }
    } catch (error) {
      console.error("Error in getProductData:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const addProductInCart = async (product_id) => {
    try {
      const isLogin = localStorage.getItem("fg_group_user_authorization");
      if (!isLogin) {
        return openModal();
      }
      const response = await axiosInstance.post("/order-cart/add-item", {
        item_id: product_id,
        quantity: 1,
        item_type: "MEDICAL_PRODUCT",
      });
      if (response.data.response === "OK") {
        toast.success("Product Added in Cart");
        fetchProductCartData();
        // window.location.href = "/add-to-cart";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductCartData = async () => {
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=MEDICAL_PRODUCT&is_purchase=true"
      );
      const serverData = response?.data?.data?.[0]?.items?.length;
      setCartDataCount(serverData);

      const cartData = response.data.data[0];
      const cartItemData = cartData.items_details.map((data) => data._id);
      setCartItemName(cartItemData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (isLogin) {
      fetchProductCartData();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Top Whey Protein Powder for Muscle Growth & Recovery</title>
        <meta
          name="description"
          content="Find the best whey protein powder to support muscle growth, boost recovery, and enhance performance. Shop top picks now!"
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/images/nutrition-logo.png"
        />
      </Helmet>
      {showModal && <LoginModal onClose={closeModal} />}

      <Header />
      <Slider />

      <main className="main-area mt-5">
        <section className="features-products">
          <div className="section-title text-center">
            <h1 className="title">Anabolic Compounds</h1>
          </div>
          <div className="container text-center">
            <div className="row">
              {productData.slice(0, visibleCount).map((product, index) => (
                <div className="col-lg-4 col-sm-6 text-start" key={index}>
                  <div className="cont">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          className="lazy"
                          src={`https://files.fggroup.in/${product.display_image}`}
                          alt={product.name}
                        />
                      </div>
                      <div className="product-card__info">
                        <h2 className="product-card__title">{product.name}</h2>
                        <p className="product-card__description truncate-description">
                          {product.description}
                        </p>
                        <p className="product-card__description text-dark">
                          <b>{product.unit}</b>
                        </p>
                        <div className="product-card__price-row">
                          <button className="product-card__btn w-100">
                            Know more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < productData.length && (
              <div className="text-center mt-4">
                <span className="text-danger cp" onClick={handleShowMore}>
                  Show more ...
                </span>
              </div>
            )}

            <div className="py-10 px-5 text-center m-5">
              <h2 className="text-2xl font-bold text-red-600 mb-5 fs-1">
                KNOW YOUR STACK
              </h2>
              <div className="d-flex flex-wrap flex-lg-nowrap gap-5 overflow-auto justify-content-center">
                {data.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="anabolic-cycle-card card me-3 flex-shrink-0 text-decoration-none"
                  >
                    <div className="position-relative">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="card-img-top"
                      />
                      <div className="anabolic-cycle-card-title text-dark fw-bold">
                        {item.caption}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-6 mt-5 mb-4">
                <div className="ingredients-content">
                  <h5 className="title">
                    If you have any other medicine requirements, please click
                    the button below and submit the form.
                  </h5>
                  <Link
                    to="/require-medicine-check-out"
                    className="m-0 product-card__btn"
                  >
                    View Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
