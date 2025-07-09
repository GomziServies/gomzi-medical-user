import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const Ipamorelin = () => {
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
  const [isLoader,setLoader] = useState(false);
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
      setLoader(true)
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
    } finally {
      setLoader(false);
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
      {isLoader ? <LoaderComponent /> : ''}
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
                    <img
                      src="assets\images\medicine\ipamorelin.jpg"
                      alt="Ipamorelin"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Ipamorelin</h4>
                    <p className="pt-4">
                      Ipamorelin is a selective growth hormone secretagogue and
                      one of the most well-tolerated peptides in the GHRP
                      family. It stimulates the natural release of growth
                      hormone (GH) without significantly affecting cortisol or
                      prolactin levels, making it a cleaner and safer choice for
                      long-term use in muscle building, fat loss, and
                      anti-aging.
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
                                    <strong>Type:</strong> Synthetic peptide /
                                    GH Secretagogue
                                  </li>
                                  <li>
                                    <strong>Class:</strong> GHRP (Growth Hormone
                                    Releasing Peptide)
                                  </li>
                                  <li>
                                    <strong>Administration Route:</strong>{" "}
                                    Subcutaneous (SubQ) or Intramuscular (IM)
                                    injection
                                  </li>
                                  <li>
                                    <strong>Receptor Target:</strong> Ghrelin
                                    receptor (GHS-R1a)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 200-300 mcg
                                    per injection
                                  </li>
                                  <li>
                                    <strong>Maximum Dose:</strong> 500 mcg per
                                    dose (cycle high doses to prevent
                                    desensitization)
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>2-3 times daily</li>
                                      <li>
                                        Common timing:
                                        <ul>
                                          <li>Morning (upon waking)</li>
                                          <li>Post-workout</li>
                                          <li>Before sleep</li>
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
                                    <strong>Post-Workout:</strong>
                                    <ul>
                                      <li>
                                        Boosts GH pulse and promotes muscle
                                        repair
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Before Sleep:</strong>
                                    <ul>
                                      <li>
                                        Enhances natural nighttime GH release
                                      </li>
                                      <li>
                                        Supports fat loss, recovery, and sleep
                                        quality
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Empty Stomach:</strong>
                                    <ul>
                                      <li>
                                        Administer 30-45 minutes before meals
                                      </li>
                                      <li>
                                        Avoid insulin spikes (carbs/fats) to
                                        preserve GH effect
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Uses:
                                </h4>
                                <ul>
                                  <li>Stimulates Natural GH Secretion</li>
                                  <li>Promotes Lean Muscle Growth</li>
                                  <li>Speeds Recovery and Regeneration</li>
                                  <li>Enhances Sleep and Mood</li>
                                  <li>
                                    Aids in Fat Loss and Metabolism Support
                                  </li>
                                  <li>
                                    Anti-Aging Benefits (skin quality, energy,
                                    healing)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Unique Characteristics:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Minimal Side Effects:</strong> No
                                    major impact on cortisol or prolactin
                                  </li>
                                  <li>
                                    <strong>No Hunger Spike:</strong> Unlike
                                    GHRP-6, does not stimulate appetite
                                  </li>
                                  <li>
                                    <strong>Selective Mechanism:</strong>{" "}
                                    Targets GH secretion without broader
                                    hormonal disruption
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>
                                    Mild Water Retention (typically transient)
                                  </li>
                                  <li>
                                    Paresthesia (tingling/numbness in
                                    hands/feet)
                                  </li>
                                  <li>Potential Desensitization if overused</li>
                                  <li>
                                    Rare cases of mild headaches or lethargy
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
                                        CJC-1295 (no-DAC) — synergistic GH
                                        release
                                      </li>
                                      <li>
                                        MK-677 — oral GH secretagogue option
                                      </li>
                                      <li>
                                        GHRH peptides — amplifies effectiveness
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Popular Stack Goals:</strong>
                                    <ul>
                                      <li>
                                        <strong>Fat Loss & Recovery:</strong>{" "}
                                        Ipamorelin + CJC-1295
                                      </li>
                                      <li>
                                        <strong>Muscle Growth:</strong>{" "}
                                        Ipamorelin + IGF-1 LR3
                                      </li>
                                      <li>
                                        <strong>Anti-Aging:</strong> Ipamorelin
                                        solo or with low-dose GH
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                                <ul>
                                  <li>
                                    Cycle Duration: 8-12 weeks followed by 2-4
                                    week break
                                  </li>
                                  <li>
                                    Store refrigerated after reconstitution
                                  </li>
                                  <li>
                                    Avoid chronic overuse to prevent
                                    desensitization
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Ipamorelin is a clean and effective
                                  GH-releasing peptide known for its low side
                                  effect profile and selective action. It's
                                  ideal for users prioritizing recovery, fat
                                  loss, or anti-aging without excessive appetite
                                  stimulation. Safe, versatile, and
                                  well-tolerated, it is a go-to option for both
                                  cutting and recomp phases.
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
                                        Reconstitute with bacteriostatic water
                                        before use; follow sterile procedures.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Administer via subcutaneous injection
                                        (usually in the abdomen or thigh).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Typically dosed at 100–300 mcg per
                                        injection, 1–3 times daily (e.g.,
                                        morning, post-workout, before bed).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store lyophilized powder in a cool, dark
                                        place. Refrigerate after reconstitution
                                        and use within 7–10 days.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Always use sterile needles and rotate
                                        injection sites to avoid tissue
                                        irritation.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Avoid if you have active cancer,
                                        uncontrolled diabetes, or are on growth
                                        hormone therapy unless medically
                                        advised.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Though well-tolerated, possible side
                                        effects include light-headedness, water
                                        retention, or numbness.
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

export default Ipamorelin;
