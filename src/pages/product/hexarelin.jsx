import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";

const Hexarelin = () => {
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
                      src="assets\images\medicine\hexarelin.jpg"
                      alt="Hexarelin"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Hexarelin</h4>
                    <p className="pt-4">
                      Hexarelin is a potent synthetic Growth Hormone Releasing
                      Peptide (GHRP) known for its strong ability to stimulate
                      growth hormone (GH) secretion. Compared to other GHRPs
                      like GHRP-2 or GHRP-6, Hexarelin is more effective in GH
                      release but also carries a higher risk of receptor
                      desensitization with prolonged use.
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
                        <h4 className="m-5 mb-3 mx-0">
                          Pharmacology & Classification:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Synthetic peptide / GH
                            Secretagogue
                          </li>
                          <li>
                            <strong>Class:</strong> GHRP (Growth Hormone
                            Releasing Peptide)
                          </li>
                          <li>
                            <strong>Administration Route:</strong> Subcutaneous
                            (SubQ) or Intramuscular (IM) injection
                          </li>
                          <li>
                            <strong>Receptor Target:</strong> Ghrelin receptor
                            (GHS-R1a)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose:</strong> 100-200 mcg per
                            injection
                          </li>
                          <li>
                            <strong>Maximum Dose:</strong> 300 mcg per dose
                          </li>
                          <li>
                            <strong>Frequency:</strong>
                            <ul>
                              <li>2-3 times daily</li>
                              <li>
                                Commonly timed:
                                <ul>
                                  <li>Morning (upon waking)</li>
                                  <li>Post-workout</li>
                                  <li>Before sleep</li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration Timing Guidelines:
                        </h4>
                        <ul>
                          <li>
                            <strong>Empty Stomach:</strong>
                            <ul>
                              <li>
                                Avoid carbs or fats 30-45 minutes before and
                                after injection
                              </li>
                              <li>Food blunts GH pulse</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Before Sleep:</strong>
                            <ul>
                              <li>
                                Supports deep sleep, GH surge, and recovery
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Post-Workout:</strong>
                            <ul>
                              <li>Enhances muscle repair and fat metabolism</li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Benefits & Uses:</h4>
                        <ul>
                          <li>
                            Potent GH Release (strongest in the GHRP family)
                          </li>
                          <li>Enhanced Muscle Recovery & Growth</li>
                          <li>Supports Fat Loss and Metabolic Function</li>
                          <li>Improves Sleep and General Wellbeing</li>
                          <li>
                            Potential Cardiac Protection (under medical
                            investigation)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Unique Characteristics:
                        </h4>
                        <ul>
                          <li>Stronger GH stimulation than GHRP-2 or GHRP-6</li>
                          <li>No significant appetite spike (vs. GHRP-6)</li>
                          <li>
                            Higher risk of receptor desensitization — cycle
                            recommended
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                        <ul>
                          <li>
                            Rapid receptor desensitization with prolonged use
                          </li>
                          <li>Tingling or numbness (GH/IGF-1 related)</li>
                          <li>
                            Slight increases in cortisol and prolactin (less
                            than GHRP-2)
                          </li>
                          <li>Possible mild joint pain or water retention</li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Stacking & Compatibility:
                        </h4>
                        <ul>
                          <li>
                            <strong>Commonly Stacked With:</strong>
                            <ul>
                              <li>CJC-1295 (no DAC) for GH synergy</li>
                              <li>IGF-1 LR3 for anabolic enhancement</li>
                              <li>MK-677 during off-cycle periods</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Avoid Stacking With:</strong>
                            <ul>
                              <li>
                                Other potent GH secretagogues at high doses due
                                to receptor fatigue risk
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                        <ul>
                          <li>
                            Recommended Cycle: 8-12 weeks on, followed by at
                            least 2 weeks off
                          </li>
                          <li>Store refrigerated after reconstitution</li>
                          <li>Do not dose around meals (fasted-state only)</li>
                          <li>
                            Monitor for signs of hormone imbalance or
                            desensitization
                          </li>
                        </ul>

                        <p className="mt-5">
                          Hexarelin is a potent growth hormone secretagogue,
                          best suited for short cycles due to its rapid receptor
                          desensitization. It delivers dramatic benefits in GH
                          release, fat burning, and muscle repair, especially
                          for advanced users targeting recovery and performance
                          in focused phases. Its power demands respect — proper
                          timing, stacking, and cycling are essential.
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

export default Hexarelin;
