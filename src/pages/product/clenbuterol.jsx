import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";


const Clenbuterol = () => {
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
                      src="assets\images\medicine\clenbuterol.jpg"
                      alt="Clenbuterol"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Clenbuterol</h4>
                    <p className="pt-4">
                      Clenbuterol is a powerful sympathomimetic compound
                      originally developed as a bronchodilator for treating
                      asthma and other respiratory conditions. However, it is
                      more commonly known and used in the fitness and
                      bodybuilding world for its potent fat-burning effects.
                      Though not technically a steroid, Clenbuterol functions as
                      a beta-2 adrenergic agonist, making it highly effective in
                      promoting fat loss while preserving lean muscle mass.
                      Often categorized as a performance-enhancing drug (PED) or
                      thermogenic, Clenbuterol is widely used during cutting
                      cycles, contest preparations, or fat-loss phases.
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
                                    <strong>Type:</strong> Oral fat burner (not
                                    an anabolic steroid)
                                  </li>
                                  <li>
                                    <strong>Tablet Saturation:</strong> 20 mcg
                                    per tablet
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately
                                    36-48 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong> Beta-2
                                    adrenergic stimulation → Increases body
                                    temperature, metabolic rate, and fat
                                    mobilization
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Fat Loss Acceleration:</strong>
                                    <ul>
                                      <li>
                                        Increases caloric expenditure even at
                                        rest
                                      </li>
                                      <li>
                                        Mobilizes fat stores, ideal for cutting
                                        or recomp phases
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Muscle Preservation:</strong>
                                    <ul>
                                      <li>
                                        Anti-catabolic—helps retain muscle mass
                                        during calorie deficits
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Performance Enhancement:</strong>
                                    <ul>
                                      <li>
                                        Improves oxygen transportation and
                                        cardiovascular endurance
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Contest Prep & Aesthetic Goals:
                                    </strong>
                                    <ul>
                                      <li>
                                        Used for muscle definition and
                                        vascularity during pre-contest cuts
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Usage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Cycle:</strong> 2 weeks on /
                                    2 weeks off, or up to 3 months continuous
                                    followed by 2-month break
                                  </li>
                                  <li>
                                    <strong>Dosage Range:</strong> Starts at 20
                                    mcg/day, increased up to 100-120 mcg/day
                                    based on tolerance
                                  </li>
                                  <li>
                                    <strong>Administration Timing:</strong>{" "}
                                    Pre-workout or split across the day to
                                    reduce side effects
                                  </li>
                                  <li>
                                    <strong>Best Taken With:</strong> Potassium
                                    and taurine supplements to manage cramps and
                                    cardiovascular load
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Risks:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cardiovascular Strain:</strong>
                                    <ul>
                                      <li>
                                        Increased heart rate, palpitations,
                                        elevated blood pressure, arrhythmias
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Electrolyte Imbalance:</strong>
                                    <ul>
                                      <li>
                                        Potassium loss can cause cramps (hands,
                                        calves)
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Nervous System Stimulation:</strong>
                                    <ul>
                                      <li>
                                        Anxiety, tremors, shakiness, insomnia
                                        (dose-dependent)
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Excessive Thermogenesis:</strong>
                                    <ul>
                                      <li>
                                        Sweating, overheating, dehydration
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Tolerance Build-Up:</strong>
                                    <ul>
                                      <li>
                                        Effectiveness declines with prolonged
                                        use—cycle breaks are essential
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking & Compatibility:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Often Stacked With:</strong> Anavar,
                                    Winstrol, or T3 (Liothyronine) during
                                    cutting phases
                                  </li>
                                  <li>
                                    <strong>Not Compatible With:</strong> Other
                                    stimulants like ephedrine or high caffeine
                                    due to cardiovascular risk
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Precautions:</h4>
                                <ul>
                                  <li>
                                    <strong>Avoid if you have:</strong> Heart
                                    issues, high blood pressure, anxiety, or
                                    hyperthyroidism
                                  </li>
                                  <li>
                                    <strong>Monitoring Required:</strong>{" "}
                                    Regularly track blood pressure, heart rate,
                                    and electrolytes
                                  </li>
                                  <li>
                                    <strong>Medical Supervision:</strong> Never
                                    combine high doses with anabolic steroids
                                    without professional oversight
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Clenbuterol is a potent thermogenic agent
                                  popular for fat loss and physique refinement.
                                  Though highly effective when used
                                  strategically, it demands careful cycling and
                                  cardiovascular awareness. With responsible
                                  use, support supplements, and proper stacking,
                                  Clenbuterol can be a powerful asset for body
                                  recomposition, especially during intense
                                  cutting or contest prep phases.
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
                                src="assets/images/medicine/video/pct.jpeg"
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
                                        src="assets/images/medicine/video/pct.mp4"
                                        type="video/mp4"
                                      />
                                      Your browser does not support the video
                                      tag.
                                    </video>
                                    <button
                                      className="modal-close bg-danger"
                                      onClick={closeVideoModal}
                                    >
                                      <CloseButton variant="white" />
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
                                        Oral beta-2 agonist used for fat loss
                                        and thermogenesis during cutting cycles.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Common dose: Start with 20–40 mcg/day;
                                        titrate up to 80–120 mcg/day if well
                                        tolerated.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Best taken in the morning to avoid
                                        insomnia due to stimulant properties.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Increases metabolic rate, energy, and
                                        body temperature — promoting fat burning
                                        without muscle loss.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Cycle for 2 weeks on, 2 weeks off — or
                                        follow pyramid/tapering protocol to
                                        avoid receptor desensitization.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Possible side effects: tremors, rapid
                                        heartbeat, insomnia, headaches, muscle
                                        cramps.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not a steroid — but misuse can still
                                        lead to cardiovascular stress. Use under
                                        expert supervision.
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

export default Clenbuterol;
