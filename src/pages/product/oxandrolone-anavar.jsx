import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";

const OxandroloneAnavar = () => {
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
                  style={{
                    boxShadow: "0 0 20px rgba(48, 48, 48, 0.25)",
                  }}
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
                      src="assets\images\medicine\oxandrolone-anavar.jpg"
                      alt="OxandroloneAnavar"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Oxandrolone Anavar</h4>
                    <p className="pt-4">
                      Oxandrolone, commonly known by its brand name Anavar, is a
                      mild oral anabolic steroid originally developed to promote
                      lean tissue growth in patients suffering from
                      muscle-wasting conditions. Known for its low androgenic
                      activity and favorable safety profile, it has become a
                      popular choice among both cutting-phase athletes and
                      female users due to its reduced risk of virilization and
                      relatively mild side effect profile. Despite being gentler
                      than other compounds, Anavar is still effective for
                      promoting lean muscle retention and fat loss when used
                      appropriately.
                    </p>

                    <div className="inner-shop-perched-info mt-3 row align-items-center ms-0">
                      <button
                        onClick={() => addProductInCart(id)}
                        className="col-md-6 col-11 quick-buy-btn m-0 ms-md-3 mt-3 product-card__btn"
                      >
                        <i className="fa-solid fa-bolt me-2 "></i>
                        contact pharmacist
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
                        <h4 className="m-5 mb-3 mx-0">Pharmacology:</h4>
                        <ul>
                          <li>
                            <strong>Chemical Structure:</strong> Derived from
                            dihydrotestosterone (DHT) with modifications at the
                            2nd carbon atom and 17-alpha alkylation
                          </li>
                          <li>
                            <strong>Half-Life:</strong> Approximately 9-10
                            hours, making once or twice daily dosing sufficient
                            to maintain stable blood levels
                          </li>
                          <li>
                            <strong>Activity:</strong>
                            <ul>
                              <li>
                                High anabolic: Promotes protein synthesis and
                                nitrogen retention
                              </li>
                              <li>
                                Low androgenic: Less likely to cause side
                                effects like hair loss or acne
                              </li>
                              <li>
                                Non-aromatizing: Does not convert to estrogen,
                                eliminating the risk of gynecomastia or
                                estrogen-related water retention
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Cycles:</strong>
                            <ul>
                              <li>
                                Helps preserve lean muscle mass during
                                calorie-deficient diets
                              </li>
                              <li>
                                Supports a hard, dry, and vascular look, making
                                it a favorite among physique competitors and
                                models
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Recomposition:</strong>
                            <ul>
                              <li>
                                Can be used in body recomposition cycles to gain
                                lean tissue while losing fat
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Female Use:</strong>
                            <ul>
                              <li>
                                One of the few anabolic steroids considered
                                relatively safe for women at low doses (5-10
                                mg/day)
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Medical Applications:</strong>
                            <ul>
                              <li>
                                Originally prescribed for treating muscle
                                wasting, severe burns, osteoporosis, and growth
                                disorders
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration & Intake Timing:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dosage (Men):</strong> 20-60 mg/day,
                            depending on goals and experience
                          </li>
                          <li>
                            <strong>Typical Dosage (Women):</strong> 5-10 mg/day
                            due to its mild nature
                          </li>
                          <li>
                            <strong>Intake Schedule:</strong>
                            <ul>
                              <li>
                                Can be taken once or split into two doses per
                                day to maintain more stable blood hormone levels
                              </li>
                              <li>
                                Best taken with food to reduce gastrointestinal
                                discomfort and improve absorption
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <p>
                          While Anavar is one of the milder anabolic steroids,
                          it can still produce side effects, especially with
                          improper dosing or extended use:
                        </p>
                        <ul>
                          <li>
                            <strong>Liver Toxicity:</strong>
                            <ul>
                              <li>
                                Though considered mildly hepatotoxic, it is
                                still a 17-alpha alkylated steroid, meaning some
                                strain on the liver is possible
                              </li>
                              <li>
                                Prolonged or high-dose usage should be
                                accompanied by liver support supplements and
                                monitored with liver function tests
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects (Rare):</strong>
                            <ul>
                              <li>
                                Acne and hair thinning can occur, especially in
                                genetically predisposed individuals
                              </li>
                              <li>
                                Virilization in females (deepened voice, body
                                hair growth) is rare but possible at higher
                                doses
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Cholesterol Imbalance:</strong>
                            <ul>
                              <li>
                                Can significantly reduce HDL (good cholesterol)
                                and may raise LDL (bad cholesterol)
                              </li>
                              <li>
                                Cardiovascular health should be monitored, and
                                the user should follow a heart-healthy diet
                                during use
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Testosterone Suppression:</strong>
                            <ul>
                              <li>
                                Long-term use, especially in men, can suppress
                                natural testosterone production
                              </li>
                              <li>
                                Post-cycle therapy (PCT) may be necessary to
                                restore hormonal balance following a cycle
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Minimal Estrogenic Effects:</strong>
                            <ul>
                              <li>
                                Anavar does not aromatize, meaning no water
                                retention, gynecomastia, or estrogen-related
                                bloating
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Oxandrolone (Anavar) is a highly versatile oral
                          steroid that offers excellent muscle-preserving and
                          fat-burning properties with minimal side effects when
                          used responsibly. It is particularly valued in cutting
                          cycles, for female athletes, and for those looking for
                          a gentler introduction to anabolic steroids. However,
                          despite its mildness, it should still be used with
                          care, including appropriate cycle duration, dosage,
                          liver support, and post-cycle therapy when applicable.
                        </p>

                        <Courses />
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

export default OxandroloneAnavar;
