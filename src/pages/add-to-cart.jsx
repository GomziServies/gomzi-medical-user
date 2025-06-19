import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/odometer.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import LoginModal from "../assets/js/popup/login";
import LoadingComponent from "../components/loadingComponent";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Card } from "react-bootstrap";
import HomeNutritionFooter from "../components/partials/Footer/footer";
import { Link } from "react-router-dom";

function AddToCart() {
  const canonicalUrl = window.location.href;
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [serverDataID, setServerDataID] = useState("");
  const [productDataGet, setProductDataGet] = useState([]);
  const [previousProductData, setPreviousProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartDataClick, setCartDataClick] = useState(false);
  const [productData, setProductData] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchProductCartData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=MEDICAL_PRODUCT&is_purchase=true"
      );
      const serverData = response.data.data[0];
      setServerDataID(serverData._id);
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.product_id] = product.mrpPrice;
        return map;
      }, {});

      const itemDataForGetQty = serverData?.items || [];
      const itemDataForGetImgName = serverData?.items_details || [];

      const combinedData = itemDataForGetQty.map((item) => {
        const itemDetails = itemDataForGetImgName.find(
          (details) => details._id === item.item_id
        );
        if (!itemDetails) {
          console.warn(`No details found for item with id: ${item.item_id}`);
          return item;
        }

        return {
          ...item,
          ...itemDetails,
          items_id: item._id,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.item_id] || product.mrpPrice,
        };
      });
      setPreviousProductData(updatedServerData);
      setProductDataGet(updatedServerData);

      setCartDataClick(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductCartData();

    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (!isLogin) {
      return openModal();
    }
  }, [cartDataClick]);

  const handleRemoveProduct = async (cart_id, product_id) => {
    try {
      await axiosInstance.delete(
        `/order-cart/remove-item?item_id=${product_id}&cart_id=${serverDataID}`
      );
      setProductDataGet((prevData) =>
        prevData.filter((product) => product._id !== cart_id)
      );
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };
      existingData.products = existingData.products.filter(
        (product) => product.product_id !== product_id
      );
      localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      setCartDataClick(true);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const minusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      );
      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });
      setTimeout(async () => {
        handleUpdateCart(changedProducts);
      }, 1000);
      return updatedData;
    });
  };

  const plusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });

      setTimeout(() => {
        handleUpdateCart(changedProducts);
      }, 1000);

      return updatedData;
    });
  };

  const handleUpdateCart = async (updatedData) => {
    try {
      await axiosInstance.post("/order-cart/add-item", updatedData[0]);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToCart = async () => {
    setLoading1(true);
    try {
      const changedProducts = productDataGet.filter((currentProduct) => {
        const previousProduct = previousProductData.find(
          (p) => p._id === currentProduct._id
        );
        return (
          previousProduct &&
          previousProduct.quantity !== currentProduct.quantity
        );
      });

      if (changedProducts.length > 0) {
        const products = productDataGet.map((product) => ({
          product_id: product._id,
          quantity: product.quantity,
        }));

        const response = await axiosInstance.post(
          "/order-cart/add-item",
          changedProducts[0]
        );

        if (response.data.status === 200) {
          setPreviousProductData(productDataGet);
          localStorage.setItem(
            "productsData",
            JSON.stringify({
              products,
            })
          );

          window.location.href = `/medicine-check-out`;
        }
      } else {
        const products = productDataGet.map((product) => ({
          product_id: product._id,
          quantity: product.quantity,
        }));

        localStorage.setItem(
          "productsData",
          JSON.stringify({
            products,
          })
        );

        localStorage.setItem("serverDataID", serverDataID);

        window.location.href = `/medicine-check-out`;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
    setLoading1(false);
  };

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
        window.location.href = "/add-to-cart";
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  return (
    <>
      <Helmet>
        <title>
          Pure Go | Best Whey Protein in India | Premium Supplements
        </title>
        <meta
          name="description"
          content="Discover Pure Go, your go-to destination for the best whey protein and premium nutrition supplements in India. Boost your fitness journey with our high-quality products tailored for muscle growth, weight loss, and overall health."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, shop near by me, diet supplements near me, best multivitamins for men india, booster testosterone, how to fat burn, supplement shop near, whey isolate vs protein, whey protein vs whey protein isolate, women's protein powder for weight gain, protein powder for weight gain woman, which best peanut butter, nutrition in 100g oats"
        />
        {/* <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        /> */}
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <link rel="canonical" href={{ canonicalUrl }} />

        <link rel="preconnect" href="https://connect.facebook.net" />
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1144699046738070');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1"
          />`}
        </noscript>
        <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/process.env.PUBLIC_URL +  "/assets/images/nutrition/nutrition-banner-inner-14.webp`}
          as="image"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J50WNKGW38"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J50WNKGW38');
          `}
        </script>
      </Helmet>
      {/* <LoaderComponent /> */}
      {showModal && <LoginModal onClose={closeModal} />}
      {(loading || loading1) && <LoadingComponent />}
      {/* <NutritionHeader productDataGet={productDataGet} /> */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area fix">
        <div className="cart__area section-py-130">
          <div className="section-title text-center mb-60">
            <h1 className="title">Product cart</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table cart__table">
                    <thead>
                      <tr>
                        <th className="product__name">No.</th>
                        <th className="product__name">Image</th>
                        <th className="product__name">Name</th>
                        <th className="product__name">Quantity</th>
                        <th className="product__name">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productDataGet.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td className="product__name">{index + 1}</td>
                            <td className="product__thumb">
                              <span className="text-dark">
                                <img
                                  src={`https://files.fggroup.in/${product.display_image}`}
                                  alt="product"
                                />
                              </span>
                            </td>
                            <td className="product__name">
                              <span className="text-dark">{product.name}</span>
                            </td>
                            <td>
                              <div className="product__quantity d-flex align-items-center">
                                <i
                                  className="fas fa-minus text-dark me-2 fs-6"
                                  onClick={() => minusQuantity(product._id)}
                                ></i>
                                <div className="quickview-cart-plus-minus">
                                  <input type="text" value={product.quantity} />
                                </div>
                                <i
                                  className="fas fa-plus text-dark ms-2 fs-6"
                                  onClick={() => plusQuantity(product._id)}
                                ></i>
                              </div>
                            </td>
                            <td className="product__remove">
                              <button
                                className="border-0 bg-white product-close"
                                onClick={() =>
                                  handleRemoveProduct(
                                    product._id,
                                    product.items_id
                                  )
                                }
                              >
                                <LazyLoadImage
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/bin.png"
                                  }
                                  width="32px"
                                  alt="remove item"
                                  effect="blur"
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {productDataGet.length === 0 && (
                    <h5 className="text-center mt-3">No items found</h5>
                  )}
                  <div className="text-center">
                    <button
                      onClick={handleAddToCart}
                      className="cart-btn text-white m-0"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <div className="section-title text-center mb-60 ">
          <h1 className="title">Other Product</h1>
        </div>

        <div className="container">
          <div className="row">
            {productData
              .filter(
                (product) =>
                  !productDataGet.some((item) => item._id === product._id)
              )
              .map((product, index) => (
                <div className="col-lg-4 col-sm-6 text-start" key={index}>
                  <div className="cont">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          className="lazy"
                          src={`https://files.fggroup.in/${product.display_image}`}
                          alt={product.name}
                          style={{width:'300px',height:'300px'}}
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
                        <div
                          className="product-card__price-row"
                          onClick={() => addProductInCart(product?._id)}
                        >
                          <button className="product-card__btn w-100">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <HomeNutritionFooter /> */}
    </>
  );
}

export default AddToCart;
