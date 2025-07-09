import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";


const Sermorelin = () => {
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
                      src="assets\images\medicine\sermorelin.jpg"
                      alt="Sermorelin"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Sermorelin</h4>
                    <p className="pt-4">
                      Sermorelin is a synthetic analog of Growth
                      Hormone-Releasing Hormone (GHRH 1-29), designed to
                      stimulate the natural production of growth hormone (GH) by
                      the pituitary gland. It promotes fat loss, lean muscle
                      growth, and anti-aging effects by encouraging the body's
                      own GH release rather than providing exogenous GH.
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
                                    <strong>Type:</strong> Peptide hormone (GHRH
                                    analog)
                                  </li>
                                  <li>
                                    <strong>Class:</strong> Growth Hormone
                                    Secretagogue (GHS)
                                  </li>
                                  <li>
                                    <strong>Administration Route:</strong>{" "}
                                    Subcutaneous (SubQ) injection
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> ~10-20 minutes
                                  </li>
                                  <li>
                                    <strong>Duration of Action:</strong> ~1-2
                                    hours of GH elevation post-injection
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose:</strong> 0.5-1 mg per
                                    injection
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong>
                                    <ul>
                                      <li>
                                        3-7 times per week depending on goals
                                      </li>
                                      <li>
                                        Daily use is common, especially when
                                        used solo
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Injection Sites:</strong> Abdomen,
                                    thigh, or other SubQ areas
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration Timing Guidelines:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Before Sleep:</strong>
                                    <ul>
                                      <li>Maximizes natural GH pulse</li>
                                      <li>
                                        Supports deep sleep, recovery, and
                                        metabolism
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>On an Empty Stomach:</strong>
                                    <ul>
                                      <li>
                                        30-45 minutes before meals for optimal
                                        GH response
                                      </li>
                                      <li>
                                        Avoid carbs or fats around injection
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Optional Post-Workout Use:</strong>
                                    <ul>
                                      <li>
                                        Supports muscle repair and protein
                                        synthesis
                                      </li>
                                      <li>Best when stacked with GHRPs</li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Benefits & Uses:
                                </h4>
                                <ul>
                                  <li>Boosts natural GH secretion</li>
                                  <li>
                                    Supports fat loss and lean muscle retention
                                  </li>
                                  <li>
                                    Improves sleep, recovery, and vitality
                                  </li>
                                  <li>
                                    Anti-aging effects (skin tone, cognition,
                                    energy)
                                  </li>
                                  <li>
                                    Raises IGF-1 levels with consistent use
                                  </li>
                                  <li>
                                    Alternative to HGH therapy with lower risk
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Unique Characteristics:
                                </h4>
                                <ul>
                                  <li>Mimics natural GH secretion rhythm</li>
                                  <li>
                                    Low risk of desensitization compared to
                                    GHRPs
                                  </li>
                                  <li>
                                    Legal and safer option for GH stimulation
                                  </li>
                                  <li>
                                    Effective alone or in GHRP stacks (e.g.,
                                    GHRP-2, GHRP-6, Ipamorelin)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <ul>
                                  <li>
                                    Mild injection site reactions (redness or
                                    irritation)
                                  </li>
                                  <li>Occasional headaches or dizziness</li>
                                  <li>
                                    Temporary water retention (dose-dependent)
                                  </li>
                                  <li>Rare nausea or facial flushing</li>
                                  <li>
                                    No suppression of natural GH production
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
                                        GHRP-2, GHRP-6, Ipamorelin, or Hexarelin
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Purpose of Stacking:</strong>
                                    <ul>
                                      <li>
                                        Sermorelin + GHRP produces synergistic
                                        dual-pathway GH stimulation
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Precautions & Storage:
                                </h4>
                                <ul>
                                  <li>Typical cycle: 8-16 weeks</li>
                                  <li>
                                    Store lyophilized and reconstituted peptide
                                    in the fridge
                                  </li>
                                  <li>
                                    Use reconstituted peptide within 10-14 days
                                  </li>
                                  <li>
                                    Avoid food (especially carbs/fats) near
                                    dosing window
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Sermorelin is a fast-acting, short-duration
                                  GHRH analog that promotes safe and natural
                                  growth hormone release. Ideal for fat loss,
                                  anti-aging, and recovery, it offers a
                                  regulated alternative to HGH. Its real power
                                  shines when stacked with GHRPs, delivering a
                                  flexible and effective option in any
                                  performance or longevity program.
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
                                        Sermorelin is for laboratory research
                                        only. Not approved for human or
                                        veterinary use.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Reconstitute using sterile
                                        bacteriostatic water in a clean
                                        environment.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store the reconstituted solution in a
                                        refrigerator (2–8°C) and use within the
                                        advised timeframe.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use a sterile syringe and needle for
                                        each application to maintain purity and
                                        safety.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Dispose of syringes and vials in an
                                        approved sharps or biohazard container.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not inject unless properly trained;
                                        improper use may result in health
                                        complications.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        If accidental exposure occurs, seek
                                        medical advice immediately and report
                                        the incident.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Keep out of reach of children, pets, and
                                        unauthorized individuals.
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

export default Sermorelin;
