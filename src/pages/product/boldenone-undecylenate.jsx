import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const BoldenoneUndecylenate = () => {
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [fadingItem, setFadingItem] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleQuickBuy = async () => {};

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
                      src="assets\images\medicine\boldenone-undecylenate.jpg"
                      alt="Boldenone Undecylenate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Boldenone Undecylenate</h4>
                    <p className="pt-4">
                      Boldenone Undecylenate, commonly known by its trade name
                      Equipoise, is a long-acting injectable anabolic steroid
                      derived from testosterone. Originally developed for
                      veterinary use, especially in horses, it has since gained
                      popularity in human performance enhancementcircles for its
                      ability to provide slow, consistent muscle growth with
                      relatively mild side effects. Unlike fast-acting steroids,
                      Equipoise delivers steady anabolic effects, making it a
                      reliable choice for long-term bulking cycles and lean mass
                      development.
                    </p>

                    <div className="inner-shop-perched-info mt-3 row align-items-center ms-0">
                      <button
                        onClick={() => handleQuickBuy()}
                        className="col-md-3 col-11 quick-buy-btn m-0 ms-md-3 mt-3 product-card__btn"
                      >
                        <i className="fa-solid fa-bolt me-2 "></i> Know more
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
                            <strong>Half-Life:</strong> Approximately 14 days
                            (due to the undecylenate ester)
                          </li>
                          <li>
                            <strong>Injection Type:</strong> Intramuscular
                            injection, typically administered in glutes or outer
                            thigh
                          </li>
                          <li>
                            <strong>Onset & Duration:</strong> Slow onset with
                            long-lasting effects, making it suitable for
                            infrequent dosing
                          </li>
                          <li>
                            <strong>Anabolic to Androgenic Ratio:</strong>{" "}
                            Favorable anabolic effects with moderate androgenic
                            activity
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                        <ul>
                          <li>
                            <strong>Offseason Bulking & Lean Mass Gain:</strong>
                            <ul>
                              <li>
                                Commonly used in long bulking cycles for
                                athletes seeking gradual, high-quality muscle
                                mass without excessive water retention
                              </li>
                              <li>
                                Promotes increased nitrogen retention and
                                protein synthesis, leading to steady size and
                                strength improvements
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Appetite Stimulation:</strong>
                            <ul>
                              <li>
                                Known to increase appetite, which can be
                                beneficial for hard-gainers during mass-building
                                phases
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>
                              Endurance & Red Blood Cell Production:
                            </strong>
                            <ul>
                              <li>
                                Enhances oxygen delivery to muscles by
                                stimulating erythropoiesis (red blood cell
                                production)
                              </li>
                              <li>
                                Supports improved stamina and recovery, making
                                it useful for athletes and strength trainers
                                alike
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration & Intake Timing:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dosage (Men):</strong> 300–600 mg
                            per week
                          </li>
                          <li>
                            <strong>Typical Dosage (Women):</strong> Not
                            commonly recommended due to virilization risk
                          </li>
                          <li>
                            <strong>Injection Frequency:</strong>
                            <ul>
                              <li>
                                Despite its long half-life, split weekly dosing
                                (e.g., every 3–4 days) is often preferred to
                                maintain stable blood levels and reduce
                                peak/trough fluctuations
                              </li>
                              <li>
                                In low-dose protocols, it may be injected once
                                every 10–15 days
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <p>
                          Equipoise is generally considered a mild and
                          well-tolerated steroid, but it still comes with
                          several potential risks that users must manage
                          responsibly:
                        </p>
                        <ul>
                          <li>
                            <strong>Hormonal Suppression & Infertility:</strong>
                            <ul>
                              <li>
                                Suppresses natural testosterone production,
                                especially with prolonged use
                              </li>
                              <li>
                                May cause reduced sperm count and temporary
                                infertility
                              </li>
                              <li>
                                A full post-cycle therapy (PCT) is essential
                                after cessation
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>
                              Estrogenic Effects (Mild to Moderate):
                            </strong>
                            <ul>
                              <li>
                                Equipoise aromatizes at a low rate into
                                estrogen, which may lead to:
                              </li>
                              <ul>
                                <li>Water retention</li>
                                <li>
                                  Gynecomastia (in sensitive individuals or at
                                  high doses)
                                </li>
                              </ul>
                              <li>
                                Use of aromatase inhibitors (e.g., Arimidex) may
                                be necessary for estrogen control
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects (Mild):</strong>
                            <ul>
                              <li>
                                May cause acne, oily skin, and hair thinning in
                                genetically predisposed individuals
                              </li>
                              <li>
                                Androgenic effects are milder than with
                                compounds like testosterone or trenbolone
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Cardiovascular Concerns:</strong>
                            <ul>
                              <li>
                                Can negatively affect lipid profile (reduce HDL,
                                raise LDL), though to a lesser extent than many
                                orals
                              </li>
                              <li>
                                Monitoring cholesterol, blood pressure, and
                                hematocrit is advised, especially during long
                                cycles
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Hematological Effects:</strong>
                            <ul>
                              <li>
                                Significantly increases red blood cell count,
                                which may enhance endurance but also raise
                                hematocrit to potentially unhealthy levels
                              </li>
                              <li>
                                Users should monitor blood viscosity and donate
                                blood if necessary
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Boldenone Undecylenate (Equipoise) is a long-acting,
                          injectable steroid best suited for slow and
                          sustainable muscle growth. It provides a lean and dry
                          look with minimal estrogenic side effects, making it a
                          valuable tool for bodybuilders and strength athletes
                          during extended bulking cycles. However, due to its
                          long half-life, hormonal recovery may take longer
                          post-cycle, necessitating careful planning and
                          adequate PCT. When used responsibly, Equipoise can
                          deliver consistent, high-quality gains with fewer side
                          effects than many other anabolic steroids.
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

export default BoldenoneUndecylenate;
