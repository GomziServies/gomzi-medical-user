import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const Cardarine = () => {
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
                      src="assets\images\medicine\cardarine.jpg"
                      alt="Cardarine (GW-501516)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Cardarine (GW-501516)</h4>
                    <p className="pt-4">
                      Cardarine (GW-501516) is not a SARM, but rather a PPARδ
                      receptor agonist. It's widely used for its powerful
                      effects on fat metabolism, endurance, and overall stamina.
                      Popular among athletes and bodybuilders during cutting or
                      endurance-focused cycles, it helps burn fat without
                      affecting muscle mass.
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
                          Pharmacology & Mechanism of Action:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Oral performance enhancer
                            (PPARδ agonist)
                          </li>
                          <li>
                            <strong>Half-Life:</strong> 16–24 hours
                          </li>
                          <li>
                            <strong>Mechanism:</strong>
                            <ul>
                              <li>
                                Activates PPARδ pathways to boost fat oxidation
                              </li>
                              <li>
                                Increases glucose uptake and energy efficiency
                                in muscle cells
                              </li>
                              <li>
                                Enhances aerobic capacity without stimulating
                                the central nervous system
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose Range:</strong> 10–20 mg per
                            day
                          </li>
                          <li>
                            <strong>Beginner Dose:</strong> 10 mg
                          </li>
                          <li>
                            <strong>Advanced Users:</strong> 20 mg
                          </li>
                          <li>
                            <strong>Frequency:</strong> Once daily (due to long
                            half-life)
                          </li>
                          <li>
                            <strong>Cycle Length:</strong> 6–8 weeks recommended
                          </li>
                          <li>
                            <strong>PCT:</strong> Not required (does not
                            suppress testosterone)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            Fat Loss – increases fat burning, especially with a
                            caloric deficit
                          </li>
                          <li>
                            Endurance Enhancement – boosts performance in
                            cardio-based training
                          </li>
                          <li>
                            Stamina & Recovery – reduces fatigue and supports
                            faster recovery
                          </li>
                          <li>
                            Recomposition – supports fat loss while preserving
                            lean muscle
                          </li>
                          <li>
                            Cholesterol Support – may improve HDL/LDL profiles
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects & Risks:</h4>
                        <ul>
                          <li>
                            <strong>Short-Term Use:</strong>
                            <ul>
                              <li>
                                No significant side effects reported at normal
                                doses
                              </li>
                              <li>Well-tolerated by most users</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Long-Term Concerns:</strong>
                            <ul>
                              <li>
                                Animal studies at high doses linked to cancer
                                (debated in humans)
                              </li>
                              <li>
                                Use cautiously and avoid long-term high dosing
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Non-Suppressive:</strong> Does not impact
                            testosterone or estrogen
                          </li>
                          <li>
                            <strong>No Liver Toxicity:</strong> No evidence of
                            liver stress at normal use levels
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Stacking Options:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Stack:</strong> Cardarine + Ostarine
                            (MK-2866) or Andarine (S4)
                          </li>
                          <li>
                            <strong>Endurance Stack:</strong> Cardarine + SR9009
                            (Stenabolic)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Cycle Support & PCT:</h4>
                        <ul>
                          <li>
                            <strong>Cycle Support:</strong> Not required
                          </li>
                          <li>
                            <strong>PCT:</strong> Not necessary, as Cardarine is
                            non-hormonal
                          </li>
                        </ul>

                        <p className="mt-5">
                          Cardarine (GW-501516) is a powerful non-hormonal
                          compound ideal for athletes and bodybuilders aiming to
                          improve fat loss, endurance, and performance. It is
                          best suited for cutting or recomposition cycles and
                          stands out for having no suppressive or liver-toxic
                          effects. While effective and safe for short-term use,
                          caution is advised for extended cycles due to
                          unresolved long-term safety concerns.
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

export default Cardarine;
