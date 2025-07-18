import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const TB500 = () => {
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
                                    (Thymosin Beta-4 analog)
                                  </li>
                                  <li>
                                    <strong>Class:</strong> Regenerative/healing
                                    peptide
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Approx. 2-3 days
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong>
                                    <ul>
                                      <li>
                                        Increases cell migration and
                                        differentiation
                                      </li>
                                      <li>
                                        Enhances angiogenesis (new blood vessel
                                        formation)
                                      </li>
                                      <li>
                                        Promotes actin upregulation for cell
                                        movement and healing
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
                                        <strong>Initial Phase:</strong> 2-5 mg
                                        per week
                                      </li>
                                      <li>
                                        <strong>Maintenance Phase:</strong> 2-3
                                        mg per week after 4-6 weeks
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>
                                        Daily or every other day during the
                                        healing phase
                                      </li>
                                      <li>
                                        Once weekly for long-term maintenance
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
                                      <li>Subcutaneous (under the skin)</li>
                                      <li>
                                        Intramuscular (deep into the muscle)
                                      </li>
                                      <li>
                                        Localized injections near injury site
                                        for targeted healing
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Best Times to Inject:</strong>
                                    <ul>
                                      <li>Anytime during the day</li>
                                      <li>
                                        Post-workout or before sleep are common
                                      </li>
                                      <li>
                                        Maintain consistency for stable levels
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Injection Tips:</strong>
                                    <ul>
                                      <li>
                                        Use insulin syringes for accurate dosing
                                      </li>
                                      <li>
                                        Rotate injection sites to minimize
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
                                        4-6 weeks during initial healing (daily
                                        or EOD)
                                      </li>
                                      <li>
                                        1-2 injections per week for maintenance
                                      </li>
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
                                    <strong>Reconstitution:</strong> Use
                                    bacteriostatic water (swirl gently)
                                  </li>
                                  <li>
                                    <strong>Storage:</strong>
                                    <ul>
                                      <li>
                                        Before reconstitution: Cool, dry place
                                      </li>
                                      <li>
                                        After mixing: Refrigerate and use within
                                        10-14 days
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Applications:
                                </h4>
                                <ul>
                                  <li>
                                    Accelerates healing of muscles, tendons,
                                    ligaments, and joints
                                  </li>
                                  <li>
                                    Reduces inflammation and scar tissue
                                    formation
                                  </li>
                                  <li>
                                    Improves flexibility and joint mobility
                                  </li>
                                  <li>Promotes hair growth (anecdotal)</li>
                                  <li>
                                    Supports cardiac and corneal regeneration
                                    (animal studies)
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
                                      <li>
                                        BPC-157: For targeted healing synergy
                                      </li>
                                      <li>GHRPs (e.g., GHRP-6, Ipamorelin)</li>
                                      <li>CJC-1295: To enhance GH pulses</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Why Stack?</strong>
                                    <ul>
                                      <li>TB-500 supports systemic healing</li>
                                      <li>
                                        BPC-157 promotes localized tissue repair
                                      </li>
                                      <li>
                                        Combination accelerates and broadens
                                        recovery
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  TB-500 is a widely respected regenerative
                                  peptide for addressing acute and chronic
                                  injuries. Its extended half-life and systemic
                                  effects make it highly useful when stacked
                                  with localized agents like BPC-157. With
                                  minimal side effects and a favorable safety
                                  profile, TB-500 is a go-to for
                                  recovery-focused performance protocols.
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
                                        Use TB-500 strictly for research
                                        purposes as labeled. Not for human or
                                        veterinary use.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Always wear gloves and work in a sterile
                                        environment when handling TB-500.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Reconstitute the peptide with
                                        bacteriostatic water under sterile
                                        conditions.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store reconstituted TB-500 in a
                                        refrigerator (2–8°C) and use within the
                                        recommended time frame.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use a sterile, single-use syringe for
                                        each dose; dispose of properly in a
                                        sharps container.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not inject unless you are trained in
                                        proper technique and usage, as misuse
                                        can lead to harm.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        If accidental exposure occurs, contact
                                        poison control or a medical professional
                                        immediately.
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

export default TB500;
