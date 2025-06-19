import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const AOD9604 = () => {
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
                      src="assets\images\medicine\aod-9604.jpg"
                      alt="AOD-9604"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">AOD-9604</h4>
                    <p className="pt-4">
                      AOD-9604 (Advanced Obesity Drug) is a synthetic peptide
                      fragment derived from human growth hormone (specifically a
                      modified version of HGH Fragment 176-191). It was designed
                      specifically to stimulate fat burning (lipolysis) and
                      prevent fat formation (lipogenesis) without impacting
                      blood sugar, insulin, or muscle/bone development. It’s a
                      non-anabolic peptide used for targeted fat reduction.
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
                          Pharmacology & Mechanism of Action:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Synthetic GH fragment
                            (non-anabolic)
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong>
                            <ul>
                              <li>
                                Stimulates lipolysis (breakdown of fat cells)
                              </li>
                              <li>
                                Inhibits lipogenesis (formation of new fat
                                cells)
                              </li>
                              <li>
                                Does not affect IGF-1, blood glucose, or muscle
                                growth
                              </li>
                              <li>
                                Targets abdominal fat and other stubborn fat
                                stores
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose:</strong> 1–2 mg per day
                          </li>
                          <li>
                            <strong>Frequency:</strong>
                            <ul>
                              <li>Once or twice daily, depending on goals</li>
                              <li>
                                Common protocol: Morning + Pre-workout dose
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration Timing & Method:
                        </h4>
                        <ul>
                          <li>
                            <strong>Injection Type:</strong> Subcutaneous (SubQ)
                            – under the skin
                          </li>
                          <li>
                            <strong>Injection Site:</strong> Abdominal fat or
                            other fatty areas
                          </li>
                          <li>
                            <strong>Best Times to Inject:</strong>
                            <ul>
                              <li>
                                Morning on an empty stomach – boosts fat burning
                                throughout the day
                              </li>
                              <li>
                                Pre-workout – increases fat mobilization during
                                activity
                              </li>
                              <li>
                                Avoid eating for 30–60 minutes post-injection
                                for maximum effect
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Cycle Duration & Protocol:
                        </h4>
                        <ul>
                          <li>
                            <strong>Cycle Length:</strong> 4–8 weeks
                          </li>
                          <li>
                            <strong>Post-Cycle:</strong> Break recommended to
                            avoid tolerance
                          </li>
                          <li>
                            <strong>Repeatability:</strong> Can be safely cycled
                            with appropriate breaks
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Benefits & Applications:
                        </h4>
                        <ul>
                          <li>
                            Promotes stubborn fat loss without anabolic activity
                          </li>
                          <li>No impact on blood sugar, insulin, or IGF-1</li>
                          <li>Safe for both men and women</li>
                          <li>
                            Ideal for cutting, recomposition, or aesthetic fat
                            reduction
                          </li>
                          <li>
                            Non-hormonal – good for steroid- or GH-sensitive
                            users
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Side Effects & Tolerability:
                        </h4>
                        <ul>
                          <li>
                            <strong>
                              Generally well-tolerated when used properly
                            </strong>
                          </li>
                          <li>
                            <strong>Mild Side Effects:</strong>
                            <ul>
                              <li>Injection site redness or irritation</li>
                              <li>Headaches</li>
                              <li>Occasional nausea or dizziness (rare)</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Long-Term Use Risks:</strong>
                            <ul>
                              <li>
                                Possible tolerance or reduced effect over time
                              </li>
                              <li>
                                Disruption of metabolic feedback signals with
                                chronic use
                              </li>
                              <li>
                                Cycle on/off to preserve long-term effectiveness
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Compatibility & Stacking:
                        </h4>
                        <ul>
                          <li>
                            <strong>Commonly Stacked With:</strong>
                            <ul>
                              <li>
                                HGH Fragment 176-191 – for dual-pathway fat loss
                              </li>
                              <li>
                                CJC-1295 (No DAC) or Ipamorelin – boosts natural
                                GH pulses
                              </li>
                              <li>
                                Clenbuterol (for advanced thermogenic protocols)
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Why Stack?</strong>
                            <ul>
                              <li>
                                Enhances fat burning without increasing muscle
                                mass
                              </li>
                              <li>
                                Targets multiple metabolic pathways for fat
                                oxidation
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Storage & Reconstitution:
                        </h4>
                        <ul>
                          <li>
                            <strong>Form:</strong> Lyophilized (freeze-dried)
                            powder
                          </li>
                          <li>
                            <strong>Reconstitution:</strong> Use bacteriostatic
                            water (mix gently)
                          </li>
                          <li>
                            <strong>Storage:</strong>
                            <ul>
                              <li>Before mixing: Store in a cool, dry place</li>
                              <li>
                                After reconstitution: Refrigerate and use within
                                2–3 weeks
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          AOD-9604 is a specialized fat-loss peptide that offers
                          a non-anabolic, non-hormonal solution for individuals
                          seeking targeted fat reduction. With minimal side
                          effects and no disruption of growth-related pathways,
                          it's an excellent option for safe and effective
                          cutting cycles.
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

export default AOD9604;
