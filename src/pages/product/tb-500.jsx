import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const TB500 = () => {
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
                    <img src="assets\images\medicine\tb-500.jpg" alt="TB-500" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">TB-500</h4>
                    <p className="pt-4">
                      TB-500 (Thymosin Beta-4) is a synthetic version of a
                      naturally occurring peptide involved in tissue repair and
                      regeneration. It is highly effective in healing muscles,
                      tendons, ligaments, and joints, and is often used by
                      athletes and individuals recovering from injuries or
                      surgery.
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
                            <strong>Type:</strong> Synthetic peptide (Thymosin
                            Beta-4 analog)
                          </li>
                          <li>
                            <strong>Class:</strong> Regenerative/healing peptide
                          </li>
                          <li>
                            <strong>Half-Life:</strong> Approx. 2–3 days
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong>
                            <ul>
                              <li>
                                Increases cell migration and differentiation
                              </li>
                              <li>
                                Enhances angiogenesis (new blood vessel
                                formation)
                              </li>
                              <li>
                                Promotes actin upregulation for cell movement
                                and healing
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose:</strong>
                            <ul>
                              <li>
                                <strong>Initial Phase:</strong> 2–5 mg per week
                              </li>
                              <li>
                                <strong>Maintenance Phase:</strong> 2–3 mg per
                                week after 4–6 weeks
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Frequency:</strong>
                            <ul>
                              <li>
                                Daily or every other day during the healing
                                phase
                              </li>
                              <li>Once weekly for long-term maintenance</li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Administration Timing & Method:
                        </h4>
                        <ul>
                          <li>
                            <strong>Injection Type:</strong>
                            <ul>
                              <li>Subcutaneous (under the skin)</li>
                              <li>Intramuscular (deep into the muscle)</li>
                              <li>
                                Localized injections near injury site for
                                targeted healing
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Best Times to Inject:</strong>
                            <ul>
                              <li>Anytime during the day</li>
                              <li>Post-workout or before sleep are common</li>
                              <li>Maintain consistency for stable levels</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Injection Tips:</strong>
                            <ul>
                              <li>Use insulin syringes for accurate dosing</li>
                              <li>
                                Rotate injection sites to minimize irritation
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Cycle Duration & Recommendations:
                        </h4>
                        <ul>
                          <li>
                            <strong>Cycle Length:</strong>
                            <ul>
                              <li>
                                4–6 weeks during initial healing (daily or EOD)
                              </li>
                              <li>1–2 injections per week for maintenance</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Repeatability:</strong>
                            <ul>
                              <li>Safe to repeat cycles</li>
                              <li>
                                Ideal for chronic tendinopathy or joint
                                degeneration
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Reconstitution & Storage:
                        </h4>
                        <ul>
                          <li>
                            <strong>Form:</strong> Lyophilized powder
                            (freeze-dried)
                          </li>
                          <li>
                            <strong>Reconstitution:</strong> Use bacteriostatic
                            water (swirl gently)
                          </li>
                          <li>
                            <strong>Storage:</strong>
                            <ul>
                              <li>Before reconstitution: Cool, dry place</li>
                              <li>
                                After mixing: Refrigerate and use within 10–14
                                days
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Benefits & Applications:
                        </h4>
                        <ul>
                          <li>
                            Accelerates healing of muscles, tendons, ligaments,
                            and joints
                          </li>
                          <li>
                            Reduces inflammation and scar tissue formation
                          </li>
                          <li>Improves flexibility and joint mobility</li>
                          <li>Promotes hair growth (anecdotal)</li>
                          <li>
                            Supports cardiac and corneal regeneration (animal
                            studies)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                        <ul>
                          <li>Mild fatigue or lethargy (temporary)</li>
                          <li>Injection site irritation or redness</li>
                          <li>Possible dizziness or nausea (rare)</li>
                          <li>No known hormonal suppression</li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Compatibility & Stacking:
                        </h4>
                        <ul>
                          <li>
                            <strong>Commonly Stacked With:</strong>
                            <ul>
                              <li>BPC-157: For targeted healing synergy</li>
                              <li>GHRPs (e.g., GHRP-6, Ipamorelin)</li>
                              <li>CJC-1295: To enhance GH pulses</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Why Stack?</strong>
                            <ul>
                              <li>TB-500 supports systemic healing</li>
                              <li>BPC-157 promotes localized tissue repair</li>
                              <li>
                                Combination accelerates and broadens recovery
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          TB-500 is a widely respected regenerative peptide for
                          addressing acute and chronic injuries. Its extended
                          half-life and systemic effects make it highly useful
                          when stacked with localized agents like BPC-157. With
                          minimal side effects and a favorable safety profile,
                          TB-500 is a go-to for recovery-focused performance
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

export default TB500;
