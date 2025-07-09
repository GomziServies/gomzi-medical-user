import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";


const CJC1295 = () => {
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
                    <img
                      src="assets\images\medicine\cjc-1295.jpg"
                      alt="CJC-1295"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">CJC-1295</h4>
                    <p className="pt-4">
                      CJC-1295 with DAC (Drug Affinity Complex) is a long-acting
                      GHRH analog designed to stimulate the pituitary gland to
                      increase growth hormone (GH) and IGF-1 levels. Its
                      extended half-life allows for fewer weekly injections,
                      making it a popular peptide for muscle growth, fat loss,
                      and anti-aging.
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
                                    hormone
                                  </li>
                                  <li>
                                    <strong>Class:</strong> GHRH (Growth Hormone
                                    Releasing Hormone) analog
                                  </li>
                                  <li>
                                    <strong>Modification:</strong> Attached to
                                    DAC (Drug Affinity Complex) for extended
                                    half-life
                                  </li>
                                  <li>
                                    <strong>Administration Route:</strong>{" "}
                                    Subcutaneous (SubQ) injection
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately
                                    8-10 days
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 1-2 mg per
                                    injection
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>2-3 times per week</li>
                                      <li>
                                        Less frequent dosing due to prolonged
                                        half-life
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Injection Sites:</strong> Abdomen or
                                    thigh (SubQ for steady absorption)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration Timing Guidelines:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Before Sleep:</strong>
                                    <ul>
                                      <li>
                                        Mimics natural GH pulse during deep
                                        sleep
                                      </li>
                                      <li>
                                        Enhances recovery and supports
                                        anti-aging
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Pre-Workout (optional):</strong>
                                    <ul>
                                      <li>
                                        When combined with GHRPs for enhanced GH
                                        release
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      No Strict Fasting Requirement:
                                    </strong>
                                    <ul>
                                      <li>
                                        Food timing is less critical due to
                                        long-acting nature
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Uses:
                                </h4>
                                <ul>
                                  <li>
                                    Sustained Growth Hormone Release via
                                    pituitary stimulation
                                  </li>
                                  <li>
                                    Increases IGF-1 levels for tissue growth and
                                    repair
                                  </li>
                                  <li>
                                    Supports fat loss and metabolic function
                                  </li>
                                  <li>Improves sleep and physical recovery</li>
                                  <li>
                                    Anti-aging properties (skin, joints,
                                    vitality)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Unique Characteristics:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Long-acting (DAC version):</strong>
                                    <ul>
                                      <li>Reduces frequency of injections</li>
                                      <li>Provides consistent GH elevation</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Non-desensitizing:</strong>
                                    <ul>
                                      <li>
                                        Does not cause receptor fatigue like
                                        some GHRPs
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>Mild water retention</li>
                                  <li>Tingling or numbness in extremities</li>
                                  <li>
                                    Flu-like symptoms or fatigue (rare and
                                    temporary)
                                  </li>
                                  <li>
                                    Possible mild injection site irritation
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
                                        GHRP-2, GHRP-6, Hexarelin, Ipamorelin
                                      </li>
                                      <li>
                                        IGF-1 LR3 or MK-677 for enhanced growth
                                        effects
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Purpose of Stacking:</strong>
                                    <ul>
                                      <li>
                                        Combining GHRH (CJC-1295) with GHRPs
                                        maximizes natural GH pulse and results
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                                <ul>
                                  <li>Typical cycle duration: 12-16 weeks</li>
                                  <li>
                                    Store reconstituted product refrigerated
                                  </li>
                                  <li>
                                    Monitor IGF-1 levels with extended use
                                  </li>
                                  <li>
                                    Avoid excessive dosing — GH response
                                    plateaus beyond saturation
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  CJC-1295 with DAC is a long-lasting GHRH
                                  analog that offers sustained growth hormone
                                  stimulation with only 2-3 injections per week.
                                  It works exceptionally well when stacked with
                                  fast-acting GHRPs to produce amplified GH
                                  pulses, making it a foundational peptide for
                                  those seeking optimized recovery, body
                                  composition, and longevity benefits.
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
                                src="assets/images/medicine/video/steroids-without-diet.jpeg"
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
                                        src="assets/images/medicine/video/steroids-without-diet.mp4"
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
                                        Reconstitute 5mg vial with 1–2 mL
                                        bacteriostatic water. Use insulin
                                        syringe for precise dosing.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Administer subcutaneously 1–3 times
                                        daily. Best when combined with a GHRP
                                        (like GHRP-2, GHRP-6, or Ipamorelin).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Typical dose: 100 mcg per injection —
                                        same as standard GHRH pulses.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Stimulates natural GH release without
                                        negative feedback. Ideal for fat loss,
                                        recovery, and anti-aging.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Short half-life (~30 minutes). Timed
                                        dosing is essential for optimal pulses.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Store refrigerated after mixing. Discard
                                        after 10–14 days to maintain efficacy.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Non-DAC version requires multiple daily
                                        administrations; not suitable for single
                                        daily use.
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

export default CJC1295;
