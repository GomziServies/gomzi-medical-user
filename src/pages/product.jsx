import React, { useEffect, useState } from "react";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import Header from "../components/partials/Header/nutritionsheader";
import { CircularProgress, Fade } from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [cardLoader, setcardLoader] = useState(false);

  const getProductData = async () => {
    setcardLoader(true);
    try {
      const response = await publicAxiosInstance.get("/medical-product/get");
      const userData = response.data.data;
      if (userData) {
        setProductData(userData);
      }
    } catch (error) {
      console.error("Error in getProductData:", error);
    } finally {
      setcardLoader(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Header />
      {cardLoader ? (
        <div
          style={{
            display: "flex",
            height: "100dvh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "#86c33a" }} size={50} />
        </div>
      ) : (
        <Fade in={!cardLoader} timeout={600}>
          <section className="features-products mt-5">
            <div className="section-title text-center">
              <h1 className="title">Anabolic Compounds</h1>
            </div>
            <div className="container text-center">
              <div className="row">
                {productData.map((product, index) => (
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
                          <h2 className="product-card__title">
                            {product.name}
                          </h2>
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
            </div>

            <div className="container-fluid py-5">
              <div className="row justify-content-center m-0">
                <div className="col-md-6 text-center">
                  <div className="ingredients-content d-flex flex-column align-items-center">
                    <h5 className="title mb-4">
                      If you have any other medicine requirements, please click
                      <br />
                      the button below and submit the form.
                    </h5>
                    <Link
                      to="/require-medicine-check-out"
                      className="product-card__btn"
                      style={{ borderRadius: "0px" }}
                    >
                      View Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      )}
    </>
  );
};

export default Product;
