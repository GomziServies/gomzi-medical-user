import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const Clenbuterol = () => {
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
                      src="assets\images\medicine\clenbuterol.jpg"
                      alt="Clenbuterol"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Clenbuterol</h4>
                    <p className="pt-4">
                      Clenbuterol is a powerful sympathomimetic compound
                      originally developed as a bronchodilator for treating
                      asthma and other respiratory conditions. However, it is
                      more commonly known and used in the fitness and
                      bodybuilding world for its potent fat-burning effects.
                      Though not technically a steroid, Clenbuterol functions as
                      a beta-2 adrenergic agonist, making it highly effective in
                      promoting fat loss while preserving lean muscle mass.
                      Often categorized as a performance-enhancing drug (PED) or
                      thermogenic, Clenbuterol is widely used during cutting
                      cycles, contest preparations, or fat-loss phases.
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
                        <h4 className="m-5 mb-3 mx-0">
                          Pharmacology & Classification:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Oral fat burner (not an
                            anabolic steroid)
                          </li>
                          <li>
                            <strong>Tablet Saturation:</strong> 20 mcg per
                            tablet
                          </li>
                          <li>
                            <strong>Half-Life:</strong> Approximately 36–48
                            hours
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong> Beta-2
                            adrenergic stimulation → Increases body temperature,
                            metabolic rate, and fat mobilization
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            <strong>Fat Loss Acceleration:</strong>
                            <ul>
                              <li>
                                Increases caloric expenditure even at rest
                              </li>
                              <li>
                                Mobilizes fat stores, ideal for cutting or
                                recomp phases
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Muscle Preservation:</strong>
                            <ul>
                              <li>
                                Anti-catabolic—helps retain muscle mass during
                                calorie deficits
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Performance Enhancement:</strong>
                            <ul>
                              <li>
                                Improves oxygen transportation and
                                cardiovascular endurance
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Contest Prep & Aesthetic Goals:</strong>
                            <ul>
                              <li>
                                Used for muscle definition and vascularity
                                during pre-contest cuts
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Usage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Cycle:</strong> 2 weeks on / 2 weeks
                            off, or up to 3 months continuous followed by
                            2-month break
                          </li>
                          <li>
                            <strong>Dosage Range:</strong> Starts at 20 mcg/day,
                            increased up to 100–120 mcg/day based on tolerance
                          </li>
                          <li>
                            <strong>Administration Timing:</strong> Pre-workout
                            or split across the day to reduce side effects
                          </li>
                          <li>
                            <strong>Best Taken With:</strong> Potassium and
                            taurine supplements to manage cramps and
                            cardiovascular load
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects & Risks:</h4>
                        <ul>
                          <li>
                            <strong>Cardiovascular Strain:</strong>
                            <ul>
                              <li>
                                Increased heart rate, palpitations, elevated
                                blood pressure, arrhythmias
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Electrolyte Imbalance:</strong>
                            <ul>
                              <li>
                                Potassium loss can cause cramps (hands, calves)
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Nervous System Stimulation:</strong>
                            <ul>
                              <li>
                                Anxiety, tremors, shakiness, insomnia
                                (dose-dependent)
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Excessive Thermogenesis:</strong>
                            <ul>
                              <li>Sweating, overheating, dehydration</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Tolerance Build-Up:</strong>
                            <ul>
                              <li>
                                Effectiveness declines with prolonged use—cycle
                                breaks are essential
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Stacking & Compatibility:
                        </h4>
                        <ul>
                          <li>
                            <strong>Often Stacked With:</strong> Anavar,
                            Winstrol, or T3 (Liothyronine) during cutting phases
                          </li>
                          <li>
                            <strong>Not Compatible With:</strong> Other
                            stimulants like ephedrine or high caffeine due to
                            cardiovascular risk
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                        <ul>
                          <li>
                            <strong>Avoid if you have:</strong> Heart issues,
                            high blood pressure, anxiety, or hyperthyroidism
                          </li>
                          <li>
                            <strong>Monitoring Required:</strong> Regularly
                            track blood pressure, heart rate, and electrolytes
                          </li>
                          <li>
                            <strong>Medical Supervision:</strong> Never combine
                            high doses with anabolic steroids without
                            professional oversight
                          </li>
                        </ul>

                        <p className="mt-5">
                          Clenbuterol is a potent thermogenic agent popular for
                          fat loss and physique refinement. Though highly
                          effective when used strategically, it demands careful
                          cycling and cardiovascular awareness. With responsible
                          use, support supplements, and proper stacking,
                          Clenbuterol can be a powerful asset for body
                          recomposition, especially during intense cutting or
                          contest prep phases.
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

export default Clenbuterol;
