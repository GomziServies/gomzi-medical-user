import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const Mesterolone = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [fadingItem, setFadingItem] = useState(null);
   const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const authorization = localStorage.getItem("fg_group_user_authorization");

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

  // const getProductData = async () => {
  //   try {
  //     const response = await axiosInstance.get("/medical-product/get");
  //     const userData = response.data.data;

  //     if (userData) {
  //       setProductData(userData);
  //     }
  //   } catch (error) {
  //     console.error("Error in getProductData:", error);
  //   }
  // };

  // useEffect(() => {
  //   getProductData();
  // }, []);

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

  const additionalData = [
    {
      label: "Total Fat",
      value: "0.76",
    },
    {
      label: "Saturated Fat",
      value: "0.60",
    },
    {
      label: "Cholesterol",
      value: "0.02",
    },
    {
      label: "Total Carbohydrate",
      value: "4.02",
    },
    {
      label: "Protein",
      value: "28.00",
    },
    {
      label: "Total Sugars",
      value: "0",
    },
    {
      label: "Sodium",
      value: "135.0",
    },
  ];

  return (
    <div>
      {/* <LoaderComponent /> */}
      {showModal && <LoginModal onClose={closeModal} />}
      {fadingItem}

      <NutritionHeader />

      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area">
        <section className="inner-shop-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="black-before d-flex align-items-center justify-content-center"
                  style={{ boxShadow: "0 0 20px rgba(48, 48, 48, 0.25)" }}
                >
                  <div
                    className="product-image-container"
                    ref={imageRef}
                    style={{
                      opacity: opacity,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    <img
                      src="assets\images\medicine\mesterolone.jpg"
                      alt="Mesterolone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Mesterolone</h4>
                    <p className="pt-4">
                      Mesterolone, commonly known by the brand name Proviron, is
                      an oral androgenic steroid that is unique among anabolic
                      agents. Unlike many other anabolic steroids, Proviron has
                      minimal anabolic properties and is primarily used for its
                      androgenic effects. It is favored for its ability to
                      enhance free testosterone levels, reduce estrogenic
                      activity, and support libido and mood, without
                      contributing significantly to muscle mass gain or water
                      retention. Originally developed for clinical treatment of
                      hypogonadism and male infertility, it has found a place in
                      performance-enhancing protocols as a supportive compound
                      rather than a primary mass builder.
                    </p>

                    <div className="inner-shop-perched-info mt-3 row align-items-center ms-0">
                      <button
                        onClick={() => addProductInCart(id)}
                        className="col-md-6 col-11 quick-buy-btn m-0 ms-md-3 mt-3 product-card__btn"
                      >
                        <i className="fa-solid fa-bolt me-2 "></i>contact
                        pharmacist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <button
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div>
                        <h4 className="m-5 mb-3 mx-0">
                          Pharmacology & Classification:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Oral androgenic steroid
                            (tablet form)
                          </li>
                          <li>
                            <strong>Dosage:</strong> 25 mg per tablet
                          </li>
                          <li>
                            <strong>Half-Life:</strong> Approximately 12–13
                            hours
                          </li>
                          <li>
                            <strong>Chemical Nature:</strong>{" "}
                            Dihydrotestosterone (DHT) derivative,
                            non-aromatizing
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            <strong>Enhancing Free Testosterone Levels:</strong>
                            <ul>
                              <li>
                                Binds strongly to SHBG, increasing
                                free/bioavailable testosterone
                              </li>
                              <li>
                                Enhances anabolic steroid effectiveness in
                                stacks
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Control of Estrogenic Side Effects:</strong>
                            <ul>
                              <li>
                                Non-aromatizing—reduces water retention,
                                gynecomastia, and bloating
                              </li>
                              <li>
                                Used as a mild anti-estrogen with potent
                                compounds
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>
                              Treatment of Male Hypogonadism & Infertility:
                            </strong>
                            <ul>
                              <li>
                                Clinically prescribed to improve low
                                testosterone and sperm count
                              </li>
                              <li>
                                Supports libido, mood, and sexual function
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Support During Cutting Cycles:</strong>
                            <ul>
                              <li>
                                Preserves muscle hardness and improves
                                vascularity
                              </li>
                              <li>
                                Maintains androgenic balance without fat gain
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Intake & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Usage:</strong> 25–75 mg daily,
                            split into 2–3 doses
                          </li>
                          <li>
                            <strong>Best Taken With Food:</strong> Improves
                            absorption and reduces digestive discomfort
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Side Effects & Considerations:
                        </h4>
                        <ul>
                          <li>
                            <strong>Androgenic Effects:</strong>
                            <ul>
                              <li>
                                Acne, oily skin, increased body/facial hair
                              </li>
                              <li>
                                Hair thinning in genetically predisposed users
                              </li>
                              <li>
                                Irritability or mood swings at higher doses
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Testosterone Suppression (Minimal):</strong>
                            <ul>
                              <li>
                                Low suppression compared to other orals, but
                                still possible over time
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>No Estrogenic Effects:</strong>
                            <ul>
                              <li>
                                Does not convert to estrogen—no risk of water
                                retention or gynecomastia
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Liver Toxicity:</strong>
                            <ul>
                              <li>
                                Not 17-alpha-alkylated — low risk of
                                hepatotoxicity
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Stacking & Compatibility:
                        </h4>
                        <ul>
                          <li>
                            <strong>Ideal Companion Compound:</strong> Commonly
                            paired with Testosterone, Trenbolone, or Dianabol to
                            improve androgenic tone and reduce estrogenic side
                            effects
                          </li>
                          <li>
                            <strong>Not Used for Bulking:</strong> Weak anabolic
                            properties make it a support agent rather than a
                            mass builder
                          </li>
                        </ul>

                        <p className="mt-5">
                          Mesterolone (Proviron) is a unique oral androgen that
                          offers valuable synergy in steroid cycles by boosting
                          free testosterone levels and reducing estrogenic side
                          effects. Its mild profile, low toxicity, and hormonal
                          optimization capabilities make it ideal for cutting,
                          TRT support, or enhancing libido and
                          well-being—especially for experienced users looking to
                          balance a cycle without adding mass.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Mesterolone;
