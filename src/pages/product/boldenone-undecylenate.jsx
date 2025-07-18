import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const BoldenoneUndecylenate = () => {
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
                      src="assets\images\medicine\boldenone-undecylenate.jpg"
                      alt="Boldenone Undecylenate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Boldenone Undecylenate</h4>
                    <p className="pt-4">
                      Boldenone Undecylenate, commonly known by its trade name
                      Equipoise, is a long-acting injectable anabolic steroid
                      derived from testosterone. Originally developed for
                      veterinary use, especially in horses, it has since gained
                      popularity in human performance enhancementcircles for its
                      ability to provide slow, consistent muscle growth with
                      relatively mild side effects. Unlike fast-acting steroids,
                      Equipoise delivers steady anabolic effects, making it a
                      reliable choice for long-term bulking cycles and lean mass
                      development.
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
                                    <strong>Half-Life:</strong> Approximately 14
                                    days (due to the undecylenate ester)
                                  </li>
                                  <li>
                                    <strong>Injection Type:</strong>{" "}
                                    Intramuscular injection, typically
                                    administered in glutes or outer thigh
                                  </li>
                                  <li>
                                    <strong>Onset & Duration:</strong> Slow
                                    onset with long-lasting effects, making it
                                    suitable for infrequent dosing
                                  </li>
                                  <li>
                                    <strong>
                                      Anabolic to Androgenic Ratio:
                                    </strong>{" "}
                                    Favorable anabolic effects with moderate
                                    androgenic activity
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Offseason Bulking & Lean Mass Gain:
                                    </strong>
                                    <ul>
                                      <li>
                                        Commonly used in long bulking cycles for
                                        athletes seeking gradual, high-quality
                                        muscle mass without excessive water
                                        retention
                                      </li>
                                      <li>
                                        Promotes increased nitrogen retention
                                        and protein synthesis, leading to steady
                                        size and strength improvements
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Appetite Stimulation:</strong>
                                    <ul>
                                      <li>
                                        Known to increase appetite, which can be
                                        beneficial for hard-gainers during
                                        mass-building phases
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Endurance & Red Blood Cell Production:
                                    </strong>
                                    <ul>
                                      <li>
                                        Enhances oxygen delivery to muscles by
                                        stimulating erythropoiesis (red blood
                                        cell production)
                                      </li>
                                      <li>
                                        Supports improved stamina and recovery,
                                        making it useful for athletes and
                                        strength trainers alike
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration & Intake Timing:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dosage (Men):</strong>{" "}
                                    300-600 mg per week
                                  </li>
                                  <li>
                                    <strong>Typical Dosage (Women):</strong> Not
                                    commonly recommended due to virilization
                                    risk
                                  </li>
                                  <li>
                                    <strong>Injection Frequency:</strong>
                                    <ul>
                                      <li>
                                        Despite its long half-life, split weekly
                                        dosing (e.g., every 3-4 days) is often
                                        preferred to maintain stable blood
                                        levels and reduce peak/trough
                                        fluctuations
                                      </li>
                                      <li>
                                        In low-dose protocols, it may be
                                        injected once every 10-15 days
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <p>
                                  Equipoise is generally considered a mild and
                                  well-tolerated steroid, but it still comes
                                  with several potential risks that users must
                                  manage responsibly:
                                </p>
                                <ul>
                                  <li>
                                    <strong>
                                      Hormonal Suppression & Infertility:
                                    </strong>
                                    <ul>
                                      <li>
                                        Suppresses natural testosterone
                                        production, especially with prolonged
                                        use
                                      </li>
                                      <li>
                                        May cause reduced sperm count and
                                        temporary infertility
                                      </li>
                                      <li>
                                        A full post-cycle therapy (PCT) is
                                        essential after cessation
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Estrogenic Effects (Mild to Moderate):
                                    </strong>
                                    <ul>
                                      <li>
                                        Equipoise aromatizes at a low rate into
                                        estrogen, which may lead to:
                                      </li>
                                      <ul>
                                        <li>Water retention</li>
                                        <li>
                                          Gynecomastia (in sensitive individuals
                                          or at high doses)
                                        </li>
                                      </ul>
                                      <li>
                                        Use of aromatase inhibitors (e.g.,
                                        Arimidex) may be necessary for estrogen
                                        control
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Androgenic Effects (Mild):</strong>
                                    <ul>
                                      <li>
                                        May cause acne, oily skin, and hair
                                        thinning in genetically predisposed
                                        individuals
                                      </li>
                                      <li>
                                        Androgenic effects are milder than with
                                        compounds like testosterone or
                                        trenbolone
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Cardiovascular Concerns:</strong>
                                    <ul>
                                      <li>
                                        Can negatively affect lipid profile
                                        (reduce HDL, raise LDL), though to a
                                        lesser extent than many orals
                                      </li>
                                      <li>
                                        Monitoring cholesterol, blood pressure,
                                        and hematocrit is advised, especially
                                        during long cycles
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Hematological Effects:</strong>
                                    <ul>
                                      <li>
                                        Significantly increases red blood cell
                                        count, which may enhance endurance but
                                        also raise hematocrit to potentially
                                        unhealthy levels
                                      </li>
                                      <li>
                                        Users should monitor blood viscosity and
                                        donate blood if necessary
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Boldenone Undecylenate (Equipoise) is a
                                  long-acting, injectable steroid best suited
                                  for slow and sustainable muscle growth. It
                                  provides a lean and dry look with minimal
                                  estrogenic side effects, making it a valuable
                                  tool for bodybuilders and strength athletes
                                  during extended bulking cycles. However, due
                                  to its long half-life, hormonal recovery may
                                  take longer post-cycle, necessitating careful
                                  planning and adequate PCT. When used
                                  responsibly, Equipoise can deliver consistent,
                                  high-quality gains with fewer side effects
                                  than many other anabolic steroids.
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
                                        Injectable anabolic steroid used
                                        primarily in long bulking cycles.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Common dosage: 300–600 mg per week for
                                        men (divided into 2 weekly doses).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Has a long half-life (~14 days),
                                        allowing less frequent injections.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Known for lean muscle gain with mild
                                        water retention and increased
                                        vascularity.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Aromatization is low but still possible
                                        — AI (Aromatase Inhibitor) may be
                                        needed.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Suppression of natural testosterone
                                        production — include PCT (Post Cycle
                                        Therapy).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Inject intramuscularly under expert
                                        supervision; not recommended for
                                        beginners.
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

export default BoldenoneUndecylenate;
