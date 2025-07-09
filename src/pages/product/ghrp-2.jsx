import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";


const GHRP2 = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [fadingItem, setFadingItem] = useState(null);
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const authorization = localStorage.getItem("fg_group_user_authorization");
    const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

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
                    <img src="assets\images\medicine\ghrp-2.jpg" alt="GHRP-2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">GHRP-2</h4>
                    <p className="pt-4">
                      GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic
                      peptide that stimulates the pituitary gland to release
                      growth hormone (GH). It is commonly used in anti-aging
                      protocols, muscle recovery, fat loss, and performance
                      enhancement. GHRP-2 mimics ghrelin and works
                      synergistically with GHRH (e.g., CJC-1295) for amplified
                      GH secretion.
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
                    <div className="row">
                      <div className="col-md-12 col-12">
                        <div className="product-desc-wrap">
                          {/* <ul
                            className="nav nav-tabs"
                            id="myTabTwo"
                            role="tablist"
                          >
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
                          </ul> */}
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
                                    <strong>Type:</strong> Synthetic GH
                                    Secretagogue / Peptide Hormone
                                  </li>
                                  <li>
                                    <strong>Molecular Class:</strong>{" "}
                                    Hexapeptide
                                  </li>
                                  <li>
                                    <strong>Administration Route:</strong>{" "}
                                    Subcutaneous (SubQ) or Intramuscular (IM)
                                    injection
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 100-300 mcg
                                    per injection
                                  </li>
                                  <li>
                                    <strong>Maximum Dose:</strong> 500 mcg
                                    (higher doses don't proportionally increase
                                    GH and may lead to receptor desensitization)
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>2-3 times per day</li>
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
                                        Take 30-45 minutes before meals or
                                        before sleep
                                      </li>
                                      <li>
                                        Avoid carbs and fats around injection
                                        (they blunt GH release)
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Post-Workout:</strong>
                                    <ul>
                                      <li>
                                        Boosts GH pulse, protein synthesis, and
                                        recovery
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Night Use:</strong>
                                    <ul>
                                      <li>
                                        Supports fat metabolism and deep sleep
                                        cycles
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Uses:
                                </h4>
                                <ul>
                                  <li>Increases Endogenous GH Release</li>
                                  <li>Improves Recovery and Healing</li>
                                  <li>Enhances Fat Loss via lipolysis</li>
                                  <li>Supports Lean Muscle Retention</li>
                                  <li>Improves Sleep Quality and REM Sleep</li>
                                  <li>
                                    Anti-Aging: Boosts skin quality, energy,
                                    recovery
                                  </li>
                                  <li>
                                    May Increase Appetite (less than GHRP-6)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>
                                    <strong>Mild Water Retention</strong>
                                  </li>
                                  <li>
                                    <strong>Increased Hunger</strong> (milder
                                    than GHRP-6)
                                  </li>
                                  <li>
                                    <strong>Numbness/Tingling:</strong> Often
                                    due to elevated GH/IGF-1 levels
                                  </li>
                                  <li>
                                    <strong>
                                      Elevated Prolactin or Cortisol:
                                    </strong>{" "}
                                    Possible fatigue or mood issues with
                                    long-term high doses
                                  </li>
                                  <li>
                                    <strong>Receptor Desensitization:</strong>{" "}
                                    Long-term high dosing can reduce
                                    effectiveness
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking & Compatibility:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Often Stacked With:</strong>
                                    <ul>
                                      <li>
                                        CJC-1295 (DAC or no-DAC) for synergistic
                                        GH release
                                      </li>
                                      <li>Ipamorelin (gentler alternative)</li>
                                      <li>
                                        MK-677 (oral, non-injectable GH
                                        secretagogue)
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Common Stack Goals:</strong>
                                    <ul>
                                      <li>
                                        <strong>Fat Loss:</strong> GHRP-2 +
                                        CJC-1295
                                      </li>
                                      <li>
                                        <strong>Muscle Recovery:</strong> GHRP-2
                                        + IGF-1 LR3 or GH
                                      </li>
                                      <li>
                                        <strong>Anti-aging:</strong> GHRP-2 +
                                        Melatonin + light resistance training
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                                <ul>
                                  <li>
                                    Avoid insulin spikes near injection time
                                    (e.g., sugary meals)
                                  </li>
                                  <li>
                                    Monitor blood glucose and cortisol with
                                    long-term use
                                  </li>
                                  <li>
                                    Not suitable for individuals with active
                                    cancers
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  GHRP-2 is a powerful peptide for boosting
                                  natural growth hormone levels, enhancing fat
                                  loss, and supporting recovery. When used
                                  strategically—especially in combination with
                                  GHRH analogs and proper cycling—it can be a
                                  safe and effective alternative to synthetic
                                  HGH. Due to its potent effects, responsible
                                  use is essential for long-term benefits and
                                  safety.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 col-12 mt-4 mt-md-0">
                        <div className="rounded d-flex align-items-center justify-content-center h-100">
                          <div
                            className="w-100 h-100 d-flex flex-column align-items-center justify-content-start"
                            style={{
                              opacity: 1,
                              transition: "opacity 0.3s ease-in-out",
                            }}
                          >
                            <div className="container p-0 my-3 mb-4">
                              {/* <h4 className="mt-4 p-0">
                                Injection Administration Guide :
                              </h4> */}
                            </div>
                            <div className="video-wrapper">
                              <img
                              src="assets\images\medicine\video\testosterone-propionate.jpeg"
                                onClick={() => openVideoModal("AHrD91N0DaU")}
                              />
                              <div
                                className="video-play-button"
                                onClick={() => openVideoModal("AHrD91N0DaU")}
                              >
                                <span className="play-icon"></span>
                              </div>

                              <ModalVideo
                                channel="youtube"
                                isOpen={isVideoOpen}
                                videoId={videoUrl}
                                onClose={closeVideoModal}
                              />
                            </div>
                            <div className="container my-4 p-0">
                              <h4
                                className="mb-4 text-uppercase"
                                style={{ letterSpacing: "1px" }}
                              >
                                Important Notes:
                              </h4>
                              <div className="table-responsive w-100">
                                <table className="table table-bordered border border-dark table-striped bg-white">
                                  <thead className="table-light border border-dark">
                                    <tr>
                                      <th>Icon</th>
                                      <th>Note</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Reconstitute GHRP-2 (10mg box) with
                                        bacteriostatic water — dose per vial
                                        depends on concentration per injection
                                        (typically 1mg per vial).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Administer via subcutaneous injection —
                                        morning and/or before sleep recommended
                                        for GH release.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Typical dose: 100–300 mcg per injection,
                                        1–3 times per day depending on protocol.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Supports GH secretion, fat loss, and
                                        recovery. Less hunger stimulation than
                                        GHRP-6.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Keep refrigerated after reconstitution.
                                        Discard within 10–14 days for safety and
                                        efficacy.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Designed for physician-supervised use.
                                        Improper usage may cause hormonal
                                        imbalances.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Avoid stacking with insulin or GH
                                        analogs without clinical guidance.
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Courses />
          </div>
        </section>
      </main>
    </div>
  );
};

export default GHRP2;
