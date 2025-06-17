import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const IGF1lr3 = () => {
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
                      src="assets\images\medicine\igf-1-lr3.jpg"
                      alt="IGF-1 LR3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">IGF-1 LR3</h4>
                    <p className="pt-4">
                      IGF-1 LR3 (Insulin-like Growth Factor-1 Long Arg3) is a
                      synthetic peptide hormone with an extended half-life,
                      designed to mimic and enhance the effects of natural
                      IGF-1. It plays a major role in muscle growth, cell
                      repair, and fat loss, making it popular in
                      performance-enhancing and recovery protocols.
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
                            <strong>Type:</strong> Synthetic peptide (IGF-1
                            analog)
                          </li>
                          <li>
                            <strong>Class:</strong> Growth factor/peptide
                            hormone
                          </li>
                          <li>
                            <strong>Administration Route:</strong> Subcutaneous
                            or intramuscular injection
                          </li>
                          <li>
                            <strong>Half-Life:</strong> ~20–30 hours (vs. native
                            IGF-1’s ~20 minutes)
                          </li>
                          <li>
                            <strong>Duration of Action:</strong> Extended
                            anabolic window (up to 24+ hours)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose:</strong> 20–50 mcg per
                            injection
                          </li>
                          <li>
                            <strong>Max Recommended Dose:</strong> 100 mcg per
                            day (not advised for beginners)
                          </li>
                          <li>
                            <strong>Frequency:</strong>
                            <ul>
                              <li>
                                Once daily, usually post-workout or with a
                                high-carb meal
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Injection Sites:</strong> Localized (target
                            muscles) or SubQ (abdomen) for systemic effect
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration Timing Guidelines:
                        </h4>
                        <ul>
                          <li>
                            <strong>Post-Workout:</strong>
                            <ul>
                              <li>
                                Enhances muscle cell proliferation and nutrient
                                partitioning
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>With High-Carb Meals:</strong>
                            <ul>
                              <li>
                                Improves nutrient uptake and insulin sensitivity
                              </li>
                              <li>
                                Boosts glycogen replenishment and anabolic
                                signaling
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Avoid Pre-Sleep Injections:</strong>
                            <ul>
                              <li>
                                May disrupt natural GH/IGF-1 rhythms due to long
                                duration
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Benefits & Uses:</h4>
                        <ul>
                          <li>Increases lean muscle mass</li>
                          <li>Accelerates recovery and tissue repair</li>
                          <li>Improves fat metabolism and body composition</li>
                          <li>Supports injury healing</li>
                          <li>
                            Promotes muscle cell hyperplasia (new cell growth)
                          </li>
                          <li>
                            Enhances insulin sensitivity (with proper diet)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Unique Characteristics:
                        </h4>
                        <ul>
                          <li>Long-acting version with less frequent dosing</li>
                          <li>
                            Lower binding affinity to IGFBPs — more bioavailable
                          </li>
                          <li>Works synergistically with GH and GHRPs</li>
                          <li>Ideal for cutting or lean bulking phases</li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                        <ul>
                          <li>
                            <strong>Hypoglycemia:</strong>
                            <ul>
                              <li>
                                IGF-1 mimics insulin — pair with carbs to avoid
                                low blood sugar
                              </li>
                              <li>
                                Symptoms: shakiness, dizziness, hunger, sweating
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Organ/Muscle Growth (High Dose):</strong>
                            <ul>
                              <li>
                                Potential for jaw, gut, or visceral growth with
                                abuse
                              </li>
                            </ul>
                          </li>
                          <li>Injection site irritation or swelling</li>
                          <li>Fatigue or headaches (from glucose changes)</li>
                          <li>
                            <strong>Long-Term Risk:</strong> Potential cancer
                            risk with prolonged use
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Stacking & Compatibility:
                        </h4>
                        <ul>
                          <li>
                            <strong>Commonly Stacked With:</strong>
                            <ul>
                              <li>
                                HGH, CJC-1295, or GHRPs for amplified IGF
                                pathway
                              </li>
                              <li>
                                Insulin (advanced users only — high risk,
                                medical supervision advised)
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Purpose of Stacking:</strong>
                            <ul>
                              <li>
                                Greater IGF expression, nutrient delivery, and
                                muscle cell proliferation
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Cycle Duration & Protocol:
                        </h4>
                        <ul>
                          <li>Cycle length: 4–6 weeks</li>
                          <li>
                            Off-cycle: Equal time off (e.g., 6 weeks on, 6 weeks
                            off)
                          </li>
                          <li>
                            Monitoring: Track blood glucose and IGF-1 if
                            extended use
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Storage & Reconstitution:
                        </h4>
                        <ul>
                          <li>
                            <strong>Before Reconstitution:</strong> Store
                            lyophilized powder in fridge
                          </li>
                          <li>
                            <strong>After Reconstitution:</strong> Refrigerate
                            and use within 14–20 days
                          </li>
                          <li>
                            <strong>Mixing:</strong> Do not shake — swirl gently
                          </li>
                        </ul>

                        <p className="mt-5">
                          IGF-1 LR3 is one of the most powerful anabolic and
                          regenerative peptides available. Its long duration,
                          potent growth signaling, and muscle-rebuilding
                          capabilities make it ideal for serious bodybuilders
                          and athletes. With proper dosing and careful carb
                          management, users can experience accelerated progress
                          — but caution and cycle control are essential for
                          long-term health and effectiveness.
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

export default IGF1lr3;
