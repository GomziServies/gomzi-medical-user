import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const BPC157 = () => {
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
                      src="assets\images\medicine\bpc-157.jpg"
                      alt="BPC-157"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">BPC-157</h4>
                    <p className="pt-4">
                      BPC-157 (Body Protection Compound-157) is a synthetic
                      peptide derived from a protective protein found in the
                      stomach. It is widely known for its powerful healing
                      properties, especially for muscle, tendon, ligament, and
                      gut injuries, making it a favored compound in both
                      athletic recovery and medical research.
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
                                    <strong>Type:</strong> Synthetic peptide
                                  </li>
                                  <li>
                                    <strong>Class:</strong> Body protective
                                    compound / healing peptide
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Estimated to be
                                    several hours (not fully defined in humans)
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong>{" "}
                                    Enhances angiogenesis, increases collagen
                                    synthesis, and accelerates tissue
                                    regeneration and repair
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 200-500 mcg
                                    per injection
                                  </li>
                                  <li>
                                    <strong>Maximum Dose:</strong> 500 mcg
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>Once daily</li>
                                      <li>
                                        Every other day in some healing phases
                                      </li>
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
                                      <li>Subcutaneous (abdominal fat)</li>
                                      <li>
                                        Localized near injury site (e.g., joint,
                                        tendon)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Best Times to Inject:</strong>
                                    <ul>
                                      <li>
                                        Morning or evening based on preference
                                      </li>
                                      <li>Post-injury or post-workout</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Injection Notes:</strong>
                                    <ul>
                                      <li>
                                        Use insulin syringes for accurate dosing
                                      </li>
                                      <li>
                                        Rotate injection sites to avoid
                                        irritation
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
                                        2-4 weeks typical depending on injury
                                      </li>
                                      <li>
                                        Chronic issues may require longer or
                                        repeated cycles
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Repeatability:</strong>
                                    <ul>
                                      <li>
                                        Safe to repeat after a short break
                                      </li>
                                      <li>
                                        Used as maintenance therapy for chronic
                                        conditions
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Applications:
                                </h4>
                                <ul>
                                  <li>
                                    Accelerates muscle, tendon, ligament healing
                                  </li>
                                  <li>Improves joint function & mobility</li>
                                  <li>Reduces inflammation</li>
                                  <li>
                                    Supports gut health (e.g., IBS, ulcers,
                                    leaky gut)
                                  </li>
                                  <li>
                                    Promotes blood vessel regeneration
                                    (angiogenesis)
                                  </li>
                                  <li>
                                    Speeds wound healing & post-surgical
                                    recovery
                                  </li>
                                  <li>
                                    Potential neuroprotective effects (nerve
                                    repair)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>
                                    <strong>Injection Site Irritation:</strong>{" "}
                                    Mild redness, swelling, or discomfort
                                  </li>
                                  <li>
                                    <strong>Dizziness or Headache:</strong> Rare
                                    and dose-dependent
                                  </li>
                                  <li>
                                    <strong>Fatigue or Nausea:</strong> Very
                                    uncommon; usually transient
                                  </li>
                                  <li>
                                    <strong>
                                      No Known Hormonal Suppression or Toxicity
                                    </strong>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Compatibility & Stacking:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Commonly Stacked With:</strong>
                                    <ul>
                                      <li>TB-500 (Thymosin Beta-4)</li>
                                      <li>GHRP-6 or Ipamorelin</li>
                                      <li>
                                        GH secretagogues or CJC-1295 (No-DAC)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Why Stack?</strong>
                                    <ul>
                                      <li>
                                        Enhance systemic and localized healing
                                        and recovery
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  BPC-157 is a powerful, multi-functional
                                  peptide favored for its regenerative effects
                                  across muscle, joint, gut, and nerve tissue.
                                  Its low side effect profile and broad healing
                                  potential make it an ideal choice for
                                  athletes, biohackers, and those recovering
                                  from injuries or inflammation-related
                                  conditions.
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
                                src="assets\images\medicine\video\sustanon-250.jpeg"
                                onClick={() => openVideoModal("VpV3E9pcxko")}
                              />
                              <div
                                className="video-play-button"
                                onClick={() => openVideoModal("VpV3E9pcxko")}
                              >
                                <span className="play-icon"></span>
                              </div>
                            </div>

                            <ModalVideo
                              channel="youtube"
                              isOpen={isVideoOpen}
                              videoId={videoUrl}
                              onClose={closeVideoModal}
                            />
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
                                        Reconstitute 5mg vial with 1–2 mL
                                        bacteriostatic water for subcutaneous or
                                        localized injection.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Common dose: 250–500 mcg per day,
                                        typically split between morning and
                                        evening or injected near injury site.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Promotes healing of joints, tendons,
                                        muscles, nerves, and even the gut
                                        lining.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        No known side effects or toxicity in
                                        research so far. No hormonal
                                        suppression.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Research compound – not FDA-approved for
                                        human consumption. Use under expert
                                        supervision.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Store in the refrigerator after
                                        reconstitution. Discard after 14 days if
                                        not used.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not a replacement for surgery or medical
                                        treatment of serious injuries.
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

export default BPC157;
