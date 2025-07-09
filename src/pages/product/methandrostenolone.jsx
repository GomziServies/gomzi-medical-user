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

const Methandrostenolone = () => {
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
                      src="assets\images\medicine\methandrostenolone.jpg"
                      alt="Methandrostenolone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Methandrostenolone</h4>
                    <p className="pt-4">
                      Methandrostenolone, commonly known as Dianabol (or Dbol),
                      is one of the most well-known and widely used oral
                      anabolic steroids. Originally developed in the 1950s, it
                      gained rapid popularity for its potent anabolic effects,
                      leading to significant muscle mass and strength gains in a
                      short period. It remains a staple in bulking cycles,
                      especially among beginners due to its fast-acting nature
                      and ease of use.
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
                                <h4 className="m-5 mb-3 mx-0">Pharmacology:</h4>
                                <ul>
                                  <li>
                                    <strong>Chemical Structure:</strong> A
                                    modified form of testosterone with an added
                                    double bond between carbon 1 and 2, and
                                    17-alpha alkylation for oral activity
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately
                                    4-6 hours, requiring multiple daily doses
                                    for stable blood levels
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong>
                                    <ul>
                                      <li>
                                        Strong anabolic effects (promote protein
                                        synthesis and nitrogen retention)
                                      </li>
                                      <li>
                                        Mild to moderate androgenic properties
                                      </li>
                                      <li>
                                        Highly estrogenic due to conversion via
                                        aromatase
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                                <ul>
                                  <li>
                                    <strong>Bulking Cycles:</strong>
                                    <ul>
                                      <li>
                                        Ideal for rapid mass and strength gain
                                        in the early stages of a bulking program
                                      </li>
                                      <li>
                                        Commonly used as a kickstarter in longer
                                        injectable cycles due to its fast onset
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Short-Term Strength Boosts:</strong>
                                    <ul>
                                      <li>
                                        Occasionally used pre-competition or
                                        before training blocks for quick power
                                        output gains
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Medical History:</strong>
                                    <ul>
                                      <li>
                                        Previously prescribed for wasting
                                        conditions, but now mostly restricted to
                                        athletic and underground use due to side
                                        effects
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration & Intake Timing:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dosage:</strong> 15-50
                                    mg/day, depending on experience level and
                                    goals
                                  </li>
                                  <li>
                                    <strong>Best Time to Take:</strong>
                                    <ul>
                                      <li>
                                        For performance: 30-45 minutes before
                                        workouts to enhance strength and
                                        aggression
                                      </li>
                                      <li>
                                        For bulking: Split the daily dose into
                                        2-3 administrations throughout the day
                                        to keep blood levels stable
                                      </li>
                                      <li>
                                        Always taken with food to reduce
                                        gastrointestinal irritation
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <p>
                                  Dianabol is highly effective but comes with a
                                  high risk of side effects, particularly with
                                  improper use or high doses:
                                </p>
                                <ul>
                                  <li>
                                    <strong>
                                      Estrogenic Side Effects (High Risk):
                                    </strong>
                                    <ul>
                                      <li>
                                        Water retention and bloating, leading to
                                        a "puffy" appearance
                                      </li>
                                      <li>
                                        Gynecomastia (development of male breast
                                        tissue), especially in users prone to
                                        estrogen sensitivity
                                      </li>
                                      <li>
                                        Aromatization (conversion to estrogen)
                                        occurs easily; use of aromatase
                                        inhibitors (AI) may be necessary during
                                        cycle
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Androgenic Side Effects:</strong>
                                    <ul>
                                      <li>
                                        Acne, greasy skin, and accelerated hair
                                        loss (especially in those predisposed to
                                        male pattern baldness)
                                      </li>
                                      <li>
                                        Possible increase in aggressive behavior
                                        or mood swings
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Liver Toxicity:</strong>
                                    <ul>
                                      <li>
                                        Due to 17-alpha alkylation, Dianabol is
                                        hepatotoxic (toxic to the liver)
                                      </li>
                                      <li>
                                        Not recommended for cycles longer than
                                        4-6 weeks
                                      </li>
                                      <li>
                                        Liver support supplements and regular
                                        liver function monitoring are strongly
                                        advised during use
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Testosterone Suppression:</strong>
                                    <ul>
                                      <li>
                                        Causes significant suppression of
                                        natural testosterone production
                                      </li>
                                      <li>
                                        Post-Cycle Therapy (PCT) is necessary
                                        after discontinuation to help restore
                                        hormonal balance
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Other Potential Risks:</strong>
                                    <ul>
                                      <li>
                                        Negative impact on cholesterol levels
                                        (decreased HDL, increased LDL)
                                      </li>
                                      <li>
                                        Possible increases in blood pressure
                                      </li>
                                      <li>
                                        Muscle gains may be partially lost after
                                        discontinuation if not followed by a
                                        proper injectable base or PCT
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Methandrostenolone (Dianabol) is a powerful
                                  oral steroid that delivers rapid and dramatic
                                  results in muscle mass and strength. It is
                                  most effective when used as part of a
                                  carefully structured bulking cycle and
                                  combined with a proper diet, liver support,
                                  and post-cycle therapy. While highly
                                  effective, its potential for estrogenic,
                                  androgenic, and hepatic side effects means it
                                  should be used cautiously and never for
                                  extended periods.
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
                                        Take Methandienone tablets orally with
                                        or after meals to minimize stomach
                                        discomfort.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Divide the dosage throughout the day
                                        (e.g., morning and evening) to maintain
                                        stable blood levels.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Combine with a proper diet and training
                                        program to maximize muscle gains.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a dry place at room
                                        temperature, away from direct light and
                                        moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Known for hepatotoxicity — avoid alcohol
                                        and limit use to short cycles (4–6 weeks
                                        recommended).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Can cause water retention, gynecomastia,
                                        and elevated blood pressure — consider
                                        cycle support or [aromatase
                                        inhibitors](w) if advised.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Post-cycle therapy ([PCT](w)) is
                                        typically required to restore natural
                                        testosterone levels.
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

export default Methandrostenolone;
