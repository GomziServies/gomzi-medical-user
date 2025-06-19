import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const TestosteroneUndecanoateAndriole = () => {
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
                      src="assets\images\medicine\testosterone-undecanoate-andriole.jpg"
                      alt="Testosterone Undecanoate Andriole"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Testosterone Undecanoate Andriole</h4>
                    <p className="pt-4">
                      Testosterone Undecanoate is a unique form of testosterone
                      that is fat-soluble and absorbed through the lymphatic
                      system, rather than the portal liver system like most oral
                      steroids. This allows it to bypass significant first-pass
                      liver metabolism, drastically reducing liver toxicity
                      compared to other oral testosterone derivatives (like
                      Methyltestosterone). It is marketed under brand names such
                      as Andriol and is primarily used for Hormone Replacement
                      Therapy (HRT).
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
                          Mechanism of Absorption:
                        </h4>
                        <ul>
                          <li>
                            Unlike traditional oral steroids, Testosterone
                            Undecanoate is absorbed via the intestinal lymphatic
                            system when taken with dietary fat.
                          </li>
                          <li>
                            This route of absorption helps avoid rapid liver
                            breakdown and makes it a safer oral alternative for
                            long-term testosterone therapy.
                          </li>
                          <li>
                            However, its bioavailability can be inconsistent and
                            highly dependent on meal composition and fat
                            content.
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                        <ul>
                          <li>
                            <strong>Hormone Replacement Therapy (HRT):</strong>
                            <br />
                            Commonly prescribed to treat hypogonadism and other
                            testosterone deficiencies in men.
                          </li>
                          <br />
                          <li>
                            <strong>Mild Performance Enhancement:</strong>
                            <br />
                            Sometimes used off-label by athletes looking for a
                            mild anabolic effect, though it is far less potent
                            than injectable testosterone and rarely used in
                            serious bodybuilding cycles.
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration & Intake Timing:
                        </h4>
                        <ul>
                          <li>
                            <strong>Oral Capsule Form:</strong> Often dosed at
                            80–160 mg/day, depending on medical or personal
                            goals
                          </li>
                          <li>
                            <strong>
                              Best Taken With Meals Containing Fat:
                            </strong>{" "}
                            Dietary fats are essential to enhance lymphatic
                            absorption
                          </li>
                          <li>
                            <strong>Dosing Schedule:</strong>
                            <ul>
                              <li>
                                Typically taken in divided doses (morning and
                                evening) to maintain consistent testosterone
                                levels throughout the day
                              </li>
                              <li>
                                Taking it with a high-fat meal can significantly
                                increase its effectiveness and minimize GI upset
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <p>
                          Oral Testosterone Undecanoate is better tolerated than
                          many other orals, but side effects can still occur,
                          especially with long-term or high-dose use:
                        </p>
                        <ul>
                          <li>
                            <strong>Androgenic Effects:</strong>
                            <ul>
                              <li>
                                Mild acne, oily skin, or hair thinning,
                                particularly in individuals sensitive to DHT
                                (dihydrotestosterone)
                              </li>
                              <li>
                                Less aggressive than injectable testosterone in
                                its androgenic impact
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Estrogenic Effects (Rare):</strong>
                            <ul>
                              <li>
                                Some water retention or mild gynecomastia may
                                occur due to aromatization, though this is
                                uncommon at therapeutic doses
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Gastrointestinal Discomfort:</strong>
                            <ul>
                              <li>
                                Can cause nausea, bloating, or stomach pain if
                                taken on an empty stomach
                              </li>
                              <li>
                                To avoid this, it should always be consumed with
                                food, ideally meals rich in healthy fats
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>
                              Suppression of Natural Testosterone Production:
                            </strong>
                            <ul>
                              <li>
                                Prolonged use leads to HPTA suppression
                                (Hypothalamic-Pituitary-Testicular Axis),
                                reducing natural testosterone production
                              </li>
                              <li>
                                Upon cessation, post-cycle therapy (PCT) may be
                                required depending on dosage and duration
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Inconsistent Bioavailability:</strong>
                            <ul>
                              <li>
                                One of the main drawbacks is the variable
                                absorption rate, making consistent hormone
                                levels harder to maintain compared to injectable
                                forms
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Oral Testosterone Undecanoate provides a convenient
                          and liver-friendly oral testosterone option, ideal for
                          those seeking testosterone replacement without
                          injections. While it lacks the potency of injectables
                          for performance enhancement, its ease of use and
                          reduced liver toxicity make it a valuable option for
                          therapeutic purposes. Careful attention to timing,
                          dietary fat intake, and dosage consistency is
                          essential to maximize its effectiveness and minimize
                          side effects.
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

export default TestosteroneUndecanoateAndriole;
