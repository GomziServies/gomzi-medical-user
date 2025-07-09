import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";

const DesIGF1 = () => {
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
                      src="assets\images\medicine\igf-1-des.jpg"
                      alt="Des (1-3) IGF-1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Des (1-3) IGF-1</h4>
                    <p className="pt-4">
                      Des (1-3) IGF-1 is a shorter and more potent variant of
                      IGF-1. It differs from IGF-1 LR3 by lacking the first
                      three amino acids, which makes it less likely to bind to
                      IGF binding proteins (IGFBPs) and more effective at the
                      injection site, especially for localized muscle growth.
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
                                    (short-acting IGF-1 analog)
                                  </li>
                                  <li>
                                    <strong>Class:</strong> Growth factor /
                                    peptide hormone
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> ~20-30 minutes
                                  </li>
                                  <li>
                                    <strong>Duration of Action:</strong> Brief,
                                    but highly potent locally
                                  </li>
                                  <li>
                                    <strong>Receptor Affinity:</strong> Higher
                                    than standard IGF-1; more localized effects
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 20-40 mcg per
                                    injection
                                  </li>
                                  <li>
                                    <strong>Maximum Recommended Dose:</strong>{" "}
                                    ~60 mcg per injection
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>Once daily, often post-workout</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Injection Sites:</strong>
                                    <ul>
                                      <li>
                                        Localized intramuscular (preferred for
                                        site-specific growth)
                                      </li>
                                      <li>
                                        Also usable subcutaneously (abdomen,
                                        thigh)
                                      </li>
                                      <li>
                                        Rotate injection sites to prevent
                                        irritation
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
                                        Promotes muscle repair, hypertrophy, and
                                        cell growth
                                      </li>
                                      <li>
                                        More effective with carbs or insulin
                                        mimetics
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Localized Use:</strong>
                                    <ul>
                                      <li>
                                        Short half-life favors site-specific
                                        injection (e.g., lagging muscles)
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Avoid Pre-Sleep Use:</strong>
                                    <ul>
                                      <li>
                                        Short activity window makes nighttime
                                        use suboptimal
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
                                  </li>
                                  <li>
                                    <strong>Reconstitution:</strong>
                                    <ul>
                                      <li>
                                        Use bacteriostatic water (BAC water)
                                      </li>
                                      <li>
                                        Swirl gently to mix (do not shake)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Storage:</strong>
                                    <ul>
                                      <li>
                                        Refrigerate powder and reconstituted
                                        solution (2°C-8°C)
                                      </li>
                                      <li>
                                        Use within 2-3 weeks after
                                        reconstitution
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Uses:
                                </h4>
                                <ul>
                                  <li>Enhances localized muscle growth</li>
                                  <li>
                                    Accelerates muscle repair post-workout
                                  </li>
                                  <li>
                                    Stimulates muscle cell hyperplasia (new
                                    growth)
                                  </li>
                                  <li>
                                    Improves nutrient uptake & insulin
                                    sensitivity
                                  </li>
                                  <li>Reduces muscle catabolism</li>
                                  <li>
                                    Faster recovery from training or injury
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>
                                    <strong>Hypoglycemia:</strong>
                                    <ul>
                                      <li>
                                        Less common than IGF-1 LR3, but possible
                                      </li>
                                      <li>
                                        Pair with carbs to avoid low blood sugar
                                      </li>
                                    </ul>
                                  </li>
                                  <li>Injection site irritation or redness</li>
                                  <li>Localized muscle pain or swelling</li>
                                  <li>
                                    <strong>Fatigue or Headaches:</strong> Due
                                    to glucose shifts
                                  </li>
                                  <li>
                                    <strong>Organ/Tissue Overgrowth:</strong>
                                    <ul>
                                      <li>
                                        Risk with long-term or high-dose abuse
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking & Compatibility:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Commonly Stacked With:</strong>
                                    <ul>
                                      <li>GHRPs (e.g., GHRP-2 or GHRP-6)</li>
                                      <li>CJC-1295 (No-DAC)</li>
                                      <li>
                                        Anabolic steroids (for bulking cycles)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Purpose of Stacking:</strong>
                                    <ul>
                                      <li>
                                        Enhanced IGF signaling, better muscle
                                        repair, synergistic growth effects
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Duration & Protocol:
                                </h4>
                                <ul>
                                  <li>Cycle length: 4-6 weeks</li>
                                  <li>
                                    Off-cycle: Equal or longer than on-cycle
                                  </li>
                                  <li>
                                    Monitoring: Blood sugar, fatigue, and site
                                    sensitivity
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Des(1-3) IGF-1 is a potent, short-acting
                                  anabolic peptide ideal for localized muscle
                                  enhancement. Its rapid action and targeted
                                  nature make it a popular choice for addressing
                                  weak muscle groups in advanced bodybuilding.
                                  While highly effective, precise dosing and
                                  responsible cycling are key to maximizing
                                  results while avoiding adverse effects.
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
                                src="assets/images/medicine/video/diet.jpeg"
                                onClick={openVideoModal}
                                alt="Instagram video thumbnail"
                              />
                              <div
                                className="video-play-button"
                                onClick={openVideoModal}
                              >
                                <span className="play-icon"></span>
                              </div>

                              {isVideoOpen && (
                                <div
                                  className="custom-modal-overlay"
                                  onClick={closeVideoModal}
                                >
                                  <div
                                    className="custom-modal-content"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <video
                                      controls
                                      width="100%"
                                      height="100%"
                                      autoPlay
                                    >
                                      <source
                                        src="assets/images/medicine/video/diet.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                    <button
                                      className="modal-close bg-danger"
                                      onClick={closeVideoModal}
                                    >
                                      <CloseButton variant="white"/>
                                    </button>
                                  </div>
                                </div>
                              )}
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
                                        Reconstitute 1mg IGF-1 DES with
                                        bacteriostatic or acetic acid water (1–2
                                        mL based on dose frequency).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Administer via subcutaneous or
                                        intramuscular injection, ideally
                                        post-workout in target muscle.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Typical dose: 20–60 mcg per day. Shorter
                                        half-life, making it more site-specific
                                        than IGF-1 LR3.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Promotes localized muscle growth, cell
                                        repair, satellite cell activation, and
                                        hyperplasia.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Highly potent — overdosing may cause
                                        hypoglycemia or desensitization. Avoid
                                        daily use for long periods.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Store refrigerated after reconstitution.
                                        Discard within 10–14 days to prevent
                                        degradation.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Use under expert supervision. Avoid
                                        stacking with insulin or GH analogs
                                        without medical advice.
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

export default DesIGF1;
