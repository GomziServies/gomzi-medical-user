import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const GHRP6 = () => {
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
                    <img src="assets\images\medicine\ghrp-6.jpg" alt="GHRP-6" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">GHRP-6</h4>
                    <p className="pt-4">
                      GHRP-6 is a synthetic hexapeptide that stimulates the
                      natural release of growth hormone (GH) by acting on the
                      ghrelin receptor, similar to GHRP-2 but with a notably
                      stronger appetite-stimulating effect. It is used for
                      muscle gain, recovery, anti-aging, and fat loss support,
                      though best suited for bulking due to the hunger increase.
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
                            <strong>Type:</strong> Synthetic GH Secretagogue /
                            Peptide Hormone
                          </li>
                          <li>
                            <strong>Molecular Class:</strong> Hexapeptide
                          </li>
                          <li>
                            <strong>Administration Route:</strong> Subcutaneous
                            (SubQ) or Intramuscular (IM) injection
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose:</strong> 100–250 mcg per
                            injection
                          </li>
                          <li>
                            <strong>Maximum Dose:</strong> 500 mcg (higher doses
                            may result in receptor desensitization)
                          </li>
                          <li>
                            <strong>Frequency:</strong>
                            <ul>
                              <li>2–3 times daily</li>
                              <li>
                                Common timing:
                                <ul>
                                  <li>Upon waking</li>
                                  <li>Post-workout</li>
                                  <li>Before bed</li>
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
                            <strong>Empty Stomach Use:</strong>
                            <ul>
                              <li>
                                Administer 30–45 minutes before meals or sleep
                              </li>
                              <li>
                                Avoid insulin spikes (carbs/fats) around
                                injection time
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Post-Workout:</strong>
                            <ul>
                              <li>
                                Promotes GH pulse, recovery, and protein
                                synthesis
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Night Use:</strong>
                            <ul>
                              <li>
                                Aligns with natural GH rhythm and improves sleep
                                recovery
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Benefits & Uses:</h4>
                        <ul>
                          <li>Promotes Growth Hormone Secretion</li>
                          <li>Supports Muscle Gain & Strength</li>
                          <li>Accelerates Recovery from Workouts</li>
                          <li>Improves Sleep Quality and Tissue Repair</li>
                          <li>Significantly Increases Appetite</li>
                          <li>Anti-Aging Benefits (skin, energy, healing)</li>
                          <li>
                            Highly effective in bulking due to hunger
                            stimulation
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Unique Characteristics:
                        </h4>
                        <ul>
                          <li>
                            <strong>Strong Appetite Stimulation:</strong> More
                            pronounced than GHRP-2
                            <ul>
                              <li>Ideal for hard gainers or bulking</li>
                              <li>May hinder fat loss efforts</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Short Onset:</strong> Triggers GH release
                            within minutes
                          </li>
                          <li>
                            Often used synergistically with GHRH compounds like
                            CJC-1295
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                        <ul>
                          <li>
                            <strong>Intense Hunger</strong> — great for bulking,
                            problematic for cutting
                          </li>
                          <li>
                            <strong>Water Retention / Mild Bloating</strong>
                          </li>
                          <li>
                            <strong>
                              Joint Pain or Carpal Tunnel-like Symptoms:
                            </strong>{" "}
                            Due to elevated GH/IGF-1
                          </li>
                          <li>
                            <strong>Elevated Cortisol and Prolactin:</strong>{" "}
                            More likely at higher doses
                          </li>
                          <li>
                            <strong>Desensitization:</strong> With prolonged or
                            frequent use
                          </li>
                          <li>
                            <strong>Paresthesia:</strong> Mild tingling in hands
                            or fingers, usually transient
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Stacking & Compatibility:
                        </h4>
                        <ul>
                          <li>
                            <strong>Common Stacks:</strong>
                            <ul>
                              <li>
                                CJC-1295 (no-DAC preferred) for GH synergy
                              </li>
                              <li>
                                IGF-1 LR3 or MK-677 for muscle growth and
                                recovery
                              </li>
                              <li>Insulin or mimetics in advanced protocols</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Popular Goals:</strong>
                            <ul>
                              <li>
                                <strong>Muscle Gain & Appetite:</strong> GHRP-6
                                + CJC-1295
                              </li>
                              <li>
                                <strong>Recovery & Sleep:</strong> GHRP-6 +
                                Melatonin
                              </li>
                              <li>
                                <strong>Mass-Building:</strong> GHRP-6 + HGH
                                (experienced users)
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                        <ul>
                          <li>
                            Not ideal for cutting cycles due to increased
                            appetite
                          </li>
                          <li>Monitor prolactin levels with long-term use</li>
                          <li>
                            Use cyclically (e.g., 8–12 weeks on, followed by a
                            break) to avoid desensitization
                          </li>
                        </ul>

                        <p className="mt-5">
                          GHRP-6 is a potent peptide for boosting natural GH
                          levels, improving muscle recovery, and encouraging
                          mass gain—especially valuable in bulking phases.
                          However, its strong appetite effect and hormonal
                          influence require careful management, making it best
                          suited for strategic, cyclic use with proper stacking
                          protocols.
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

export default GHRP6;
