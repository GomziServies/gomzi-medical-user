import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";

const MK677 = () => {
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
                      src="assets\images\medicine\mk-677.jpg"
                      alt="MK-677 (Ibutamoren)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">MK-677 (Ibutamoren)</h4>
                    <p className="pt-4">
                      MK-677, also known as Ibutamoren, is a growth hormone
                      secretagogue that stimulates the natural release of growth
                      hormone (GH) and IGF-1 without affecting testosterone or
                      other anabolic hormones. Commonly used for its effects on
                      muscle recovery, fat loss, joint health, and sleep
                      quality, it mimics the action of the hunger hormone
                      ghrelin.
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
                            <strong>Type:</strong> Oral GH secretagogue (not a
                            SARM)
                          </li>
                          <li>
                            <strong>Half-Life:</strong> 24 hours
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong>
                            <ul>
                              <li>
                                Stimulates the pituitary gland to release growth
                                hormone
                              </li>
                              <li>
                                Increases IGF-1 levels, promoting muscle growth
                                and tissue repair
                              </li>
                              <li>
                                Enhances sleep quality, particularly deep REM
                                sleep
                              </li>
                              <li>Boosts appetite, aiding bulking phases</li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose Range:</strong> 10–25 mg per
                            day
                          </li>
                          <li>
                            <strong>Common Dosage:</strong>
                            <ul>
                              <li>
                                10–15 mg for general recovery or longevity
                              </li>
                              <li>20–25 mg for performance and muscle gain</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Timing:</strong> Best taken before bed to
                            align with natural GH pulse and avoid daytime hunger
                          </li>
                          <li>
                            <strong>Cycle Length:</strong> Can be used long-term
                            (3–6 months or more)
                          </li>
                          <li>
                            <strong>PCT:</strong> Not required (non-suppressive)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            Muscle Recovery – enhances healing and recovery
                            post-training
                          </li>
                          <li>
                            Joint & Tissue Repair – supports collagen synthesis
                            and joint health
                          </li>
                          <li>
                            Fat Loss – improves body composition by increasing
                            metabolic rate
                          </li>
                          <li>
                            Sleep Improvement – increases REM and deep sleep
                            quality
                          </li>
                          <li>
                            Anti-Aging Effects – helps maintain youthful GH and
                            IGF-1 levels
                          </li>
                          <li>
                            Bulking Support – boosts appetite, aiding caloric
                            intake
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects & Risks:</h4>
                        <ul>
                          <li>
                            <strong>Common Effects:</strong>
                            <ul>
                              <li>
                                Increased hunger (especially during the first 2
                                weeks)
                              </li>
                              <li>Water retention or mild bloating</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Possible Risks:</strong>
                            <ul>
                              <li>
                                Insulin resistance with high doses or prolonged
                                use
                              </li>
                              <li>
                                Lethargy in some users if taken during the day
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Liver & Hormone Friendly:</strong> No
                            suppression of testosterone or liver toxicity
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Stacking Options:</h4>
                        <ul>
                          <li>
                            <strong>Bulking Stack:</strong> MK-677 + RAD-140 or
                            LGD-4033
                          </li>
                          <li>
                            <strong>Recovery Stack:</strong> MK-677 + BPC-157 or
                            TB-500
                          </li>
                          <li>
                            <strong>Fat Loss Stack:</strong> MK-677 + SR9009 or
                            Cardarine (GW-501516)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Cycle Support & PCT:</h4>
                        <ul>
                          <li>
                            <strong>Cycle Support:</strong> Not required
                          </li>
                          <li>
                            <strong>PCT:</strong> Not needed (non-hormonal and
                            non-suppressive)
                          </li>
                        </ul>

                        <p className="mt-5">
                          MK-677 (Ibutamoren) is a potent GH-releasing compound
                          widely used for muscle recovery, fat loss, and
                          longevity. Its oral format, non-suppressive
                          properties, and long-term benefits make it popular in
                          both athletic and wellness circles. Though hunger and
                          water retention are common, strategic dosing can help
                          manage these effects effectively.
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

export default MK677;
