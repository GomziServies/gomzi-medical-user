import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const TurinaBol = () => {
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
                      src="assets\images\medicine\turinabol.jpg"
                      alt="Turina Bol (Chloro dehydromethyl testosterone)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="px-0 d-md-none d-block">
                    <img
                      src="/assets/images/government-approved.png"
                      alt="Approved By government"
                    />
                  </div>
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">
                      Turina Bol (Chloro dehydromethyl testosterone)
                    </h4>
                    <p className="pt-4">
                      Turinabol, chemically known as
                      Chlorodehydromethyltestosterone, is an oral anabolic
                      steroid that was developed in East Germany in the 1960s.
                      It is a structural derivative of Dianabol
                      (Methandrostenolone) but with modifications that
                      significantly reduce androgenic side effects. Often
                      referred to as “Tbol”, this compound is prized for its
                      ability to promote lean, dry muscle gains without
                      excessive water retention or estrogenic side effects,
                      making it highly suitable for cutting cycles and
                      recomposition phases.
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
                            <strong>Half-Life:</strong> Approximately 16 hours,
                            allowing for once-daily dosing
                          </li>
                          <li>
                            <strong>Chemical Structure:</strong> A modified form
                            of Dianabol with a chlorine atom at the 4th carbon
                            position, which reduces its estrogenic and
                            androgenic properties
                          </li>
                          <li>
                            <strong>Anabolic to Androgenic Ratio:</strong> High
                            anabolic activity with very low androgenic effects,
                            making it well-tolerated by many users
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Cycles & Recomposition:</strong>
                            <ul>
                              <li>
                                Promotes dry, quality muscle gains with little
                                to no bloating
                              </li>
                              <li>
                                Enhances muscle hardness, vascularity, and
                                endurance
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Lean Bulking:</strong>
                            <ul>
                              <li>
                                Unlike Dianabol, Turinabol builds muscle slowly
                                and steadily, with minimal fat or water gain
                              </li>
                              <li>
                                Ideal for athletes who need strength without
                                significant weight gain
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Performance Enhancement:</strong>
                            <ul>
                              <li>
                                Increases strength, speed, and recovery with a
                                low risk of excessive mass accumulation
                              </li>
                              <li>
                                Historically used by Olympic athletes for covert
                                performance boosts
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration & Intake Timing:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dosage (Men):</strong> 20–50 mg per
                            day
                          </li>
                          <li>
                            <strong>Typical Dosage (Women):</strong> 5–10 mg per
                            day (low virilization risk at proper doses)
                          </li>
                          <li>
                            <strong>Intake Schedule:</strong>
                            <ul>
                              <li>
                                Due to its long half-life, it can be taken once
                                daily
                              </li>
                              <li>
                                Best taken with meals to improve absorption and
                                reduce gastrointestinal discomfort
                              </li>
                              <li>
                                Some users split doses morning and evening for
                                further blood level stability
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <p>
                          Turinabol is often praised for its mildness, but side
                          effects can still occur, especially at higher doses or
                          with prolonged use:
                        </p>
                        <ul>
                          <li>
                            <strong>Liver Toxicity (Mild to Moderate):</strong>
                            <ul>
                              <li>
                                As a 17-alpha alkylated compound, Tbol is orally
                                active but still hepatotoxic
                              </li>
                              <li>
                                Though milder than Dianabol or Anadrol, it
                                requires liver support supplements and regular
                                bloodwork during use
                              </li>
                              <li>Recommended cycle length: 6–8 weeks</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects (Low):</strong>
                            <ul>
                              <li>
                                Lower incidence of acne, hair loss, and
                                aggression compared to Dianabol
                              </li>
                              <li>
                                Still possible at higher doses or in sensitive
                                individuals
                              </li>
                              <li>
                                Women may experience mild virilization symptoms
                                if dosed too high or used for too long
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Cardiovascular Impact:</strong>
                            <ul>
                              <li>
                                Like many oral steroids, Tbol can negatively
                                affect cholesterol
                              </li>
                              <li>
                                May reduce HDL (good cholesterol) and increase
                                LDL (bad cholesterol)
                              </li>
                              <li>
                                Users are advised to maintain a heart-healthy
                                diet, include cardio, and consider
                                cholesterol-support supplements
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Testosterone Suppression:</strong>
                            <ul>
                              <li>
                                Turinabol suppresses natural testosterone
                                production, especially after several weeks of
                                use
                              </li>
                              <li>
                                A proper post-cycle therapy (PCT) is necessary
                                to help restore natural hormonal balance after
                                discontinuation
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Turinabol (Tbol) is a versatile and mild oral anabolic
                          steroid ideal for those seeking lean gains, muscle
                          definition, and performance enhancement without the
                          pronounced side effects associated with stronger or
                          more androgenic compounds. While not as dramatic in
                          its effects as Dianabol, it offers a safer and more
                          predictable experience, especially when liver health
                          and estrogen management are concerns. Turinabol is
                          often considered a beginner-friendly oral steroid, but
                          it should still be used with discipline, proper
                          dosing, and appropriate PCT planning.
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

export default TurinaBol;
