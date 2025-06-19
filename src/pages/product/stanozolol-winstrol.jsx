import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const StanozololWinstrol = () => {
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
                      src="assets\images\medicine\stanozolol-winstrol.jpg"
                      alt="Stanozolol (Winstrol)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Stanozolol (Winstrol)</h4>
                    <p className="pt-4">
                      Stanozolol, commonly known by its trade name Winstrol, is
                      a widely used anabolic steroid primarily favored for
                      cutting cycles and performance enhancement. It promotes a
                      lean, dry, and vascular appearance, making it especially
                      popular among physique athletes and bodybuilders during
                      contest preparation. Unlike many anabolic compounds,
                      Winstrol offers hardening effects without significant
                      water retention, making it ideal for those aiming for
                      aesthetic definition and muscle visibility.
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
                        <h4 className="m-5 mb-3 mx-0">Pharmacology:</h4>
                        <ul>
                          <li>
                            <strong>Half-Life:</strong> Approximately 9 hours
                          </li>
                          <li>
                            <strong>Chemical Nature:</strong> A 17-alpha
                            alkylated DHT-derived oral anabolic steroid, also
                            available in injectable form (aqueous solution)
                          </li>
                          <li>
                            <strong>Anabolic to Androgenic Ratio:</strong> High
                            anabolic activity with moderate androgenic effects,
                            although side effects can still occur
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Cycles:</strong>
                            <ul>
                              <li>
                                Commonly used to retain lean muscle while
                                shedding body fat
                              </li>
                              <li>
                                Provides a dry, grainy look that enhances muscle
                                definition and striations
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Performance Enhancement:</strong>
                            <ul>
                              <li>
                                Increases speed, strength, and endurance without
                                excessive weight gain
                              </li>
                              <li>
                                Used by track athletes and fighters for
                                non-bulky performance boosts
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Medical Use (Historical):</strong>
                            <ul>
                              <li>
                                Previously prescribed for treating osteoporosis,
                                angioedema, and anemia
                              </li>
                              <li>
                                Now rarely used due to the availability of safer
                                alternatives
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration & Intake Timing:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dosage (Men):</strong> 25–50 mg per
                            day (oral); 50 mg every other day (injectable)
                          </li>
                          <li>
                            <strong>Typical Dosage (Women):</strong> 5–10 mg per
                            day (due to risk of virilization)
                          </li>
                          <li>
                            <strong>Intake Schedule:</strong>
                            <ul>
                              <li>
                                Typically taken in split doses (e.g., morning
                                and evening) to maintain more stable blood
                                levels
                              </li>
                              <li>
                                Often taken with meals to reduce
                                gastrointestinal discomfort
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <p>
                          Though considered milder in certain respects compared
                          to more powerful compounds, Winstrol has its own set
                          of risks and must be used with caution:
                        </p>
                        <ul>
                          <li>
                            <strong>Liver Toxicity:</strong>
                            <ul>
                              <li>
                                As a 17-alpha alkylated oral steroid, Winstrol
                                does impose hepatotoxic stress on the liver
                              </li>
                              <li>
                                Though milder than Anadrol or Dianabol,
                                prolonged use still requires liver support
                                supplements and routine liver enzyme monitoring
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Joint Discomfort:</strong>
                            <ul>
                              <li>
                                One of Winstrol’s most notable side effects is
                                joint pain or dryness
                              </li>
                              <li>
                                This occurs due to its ability to eliminate
                                subcutaneous water, leading to reduced joint
                                lubrication
                              </li>
                              <li>
                                Users often report a "dry" feeling in the
                                joints, which can increase the risk of injury
                                under heavy lifting
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects:</strong>
                            <ul>
                              <li>
                                May cause acne, oily skin, and hair thinning,
                                especially in those genetically prone to these
                                issues
                              </li>
                              <li>
                                Women face a risk of virilization (deepened
                                voice, hair growth, menstrual irregularities) if
                                dosing is not carefully controlled
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Cardiovascular Risks:</strong>
                            <ul>
                              <li>
                                Stanozolol can have a profound negative effect
                                on cholesterol levels
                              </li>
                              <li>
                                Notably reduces HDL (good cholesterol) and may
                                raise LDL (bad cholesterol)
                              </li>
                              <li>
                                Long-term use can contribute to atherosclerosis
                                and other cardiovascular issues, especially
                                without dietary and supplemental support
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Testosterone Suppression:</strong>
                            <ul>
                              <li>
                                Like most anabolic steroids, Winstrol suppresses
                                natural testosterone production
                              </li>
                              <li>
                                Post-cycle therapy (PCT) is recommended to
                                recover hormonal balance
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Stanozolol (Winstrol) is a highly effective cutting
                          agent known for producing a lean, dry, and chiseled
                          physique without excessive bulk or bloating. It
                          remains a go-to steroid for competitive athletes,
                          fitness models, and bodybuilders entering pre-contest
                          phases. However, it must be used with care due to its
                          impact on joints, liver, and cholesterol levels.
                          Proper dosing, cycle length, and support
                          supplementation are crucial to minimizing side effects
                          and maximizing results.
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

export default StanozololWinstrol;
