import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";


const TrenboloneAcetateHexahydrobenzylcarbonate = () => {
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
                      src="assets\images\medicine\trenbolone-acetate.jpg"
                      alt="Trenbolone Acetate Hexahydrobenzylcarbonate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">
                      Trenbolone Acetate Hexahydrobenzylcarbonate
                    </h4>
                    <p className="pt-4">
                      Trenbolone, available in different ester forms such as
                      Acetate and Hexahydrobenzylcarbonate (Hexa or Parabolan),
                      is among the most powerful anabolic steroids used in
                      bodybuilding and performance enhancement. It is known for
                      its exceptional potency, ability to build lean muscle,
                      burn fat, and dramatically improve vascularity and
                      hardness. Due to its powerful nature, it's typically
                      reserved for experienced users.
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
                                    <strong>Half-Life:</strong>
                                    <ul>
                                      <li>
                                        <strong>Acetate:</strong> ~2-3 days
                                        (requires frequent injections)
                                      </li>
                                      <li>
                                        <strong>
                                          Hexahydrobenzylcarbonate (Hexa):
                                        </strong>{" "}
                                        ~7-10 days (longer-acting, less frequent
                                        dosing)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>
                                      Saturation (Dosage Concentration):
                                    </strong>{" "}
                                    100 mg/ml
                                  </li>
                                  <li>
                                    <strong>Administration:</strong>{" "}
                                    Intramuscular Injection
                                  </li>
                                  <li>
                                    <strong>
                                      Androgenic to Anabolic Ratio:
                                    </strong>{" "}
                                    Approximately 500:500 (extremely potent on
                                    both ends)
                                  </li>
                                  <li>
                                    <strong>Aromatization:</strong> Does not
                                    aromatize, but can still cause estrogen-like
                                    side effects via other mechanisms (e.g.,
                                    prolactin elevation)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Muscle Mass Gain:</strong>
                                    <ul>
                                      <li>
                                        Dramatically enhances lean muscle
                                        hypertrophy and dry gains without water
                                        retention
                                      </li>
                                      <li>
                                        Often included in bulking cycles or
                                        hardening phases for maximum muscle
                                        density
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Fat Loss & Recomposition:</strong>
                                    <ul>
                                      <li>
                                        Strongly promotes lipolysis (fat
                                        burning) while preserving muscle during
                                        calorie deficits
                                      </li>
                                      <li>
                                        Ideal for bodybuilders in cutting
                                        phases, aiming to maintain muscle mass
                                        and definition
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Increased Strength & Power:</strong>
                                    <ul>
                                      <li>
                                        Provides rapid increases in strength,
                                        aggression, and performance, ideal for
                                        powerlifters or high-intensity training
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Enhanced Protein Synthesis & Nitrogen
                                      Retention:
                                    </strong>
                                    <ul>
                                      <li>
                                        Maximizes muscle recovery, nutrient
                                        utilization, and overall anabolic
                                        environment
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosing & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Trenbolone Acetate:</strong>{" "}
                                    Injected every other day or every 2-3 days
                                    due to its shorter half-life
                                  </li>
                                  <li>
                                    <strong>
                                      Trenbolone Hexa (Parabolan):
                                    </strong>{" "}
                                    Injected every 5-7 days, allowing for more
                                    convenient dosing
                                  </li>
                                  <li>
                                    <strong>Typical Dosage Guidelines:</strong>
                                    <ul>
                                      <li>
                                        <strong>Intermediate Users:</strong>{" "}
                                        200-400 mg per week
                                      </li>
                                      <li>
                                        <strong>Advanced Users:</strong> 400-600
                                        mg per week
                                      </li>
                                      <li>
                                        Not typically recommended for beginners
                                        due to its harsh side effects and strong
                                        suppressive nature
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <p>
                                  Despite its effectiveness, Trenbolone is
                                  associated with intense side effects,
                                  especially if not carefully managed:
                                </p>
                                <ul>
                                  <li>
                                    <strong>Androgenic Effects:</strong>
                                    <ul>
                                      <li>
                                        Acne, oily skin, and hair loss
                                        (especially in those predisposed to
                                        male-pattern baldness)
                                      </li>
                                      <li>
                                        Deepening of the voice and virilization
                                        in women
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Neurological & Psychological Effects:
                                    </strong>
                                    <ul>
                                      <li>
                                        Increased aggression, irritability,
                                        night sweats, and insomnia (“tren cough”
                                        may occur post-injection)
                                      </li>
                                      <li>
                                        Users often report intense dreams and
                                        mental focus changes
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Cardiovascular Risks:</strong>
                                    <ul>
                                      <li>
                                        Strong negative impact on HDL (good
                                        cholesterol) and elevation of LDL (bad
                                        cholesterol)
                                      </li>
                                      <li>
                                        May increase blood pressure and cardiac
                                        strain
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Endocrine Disruption:</strong>
                                    <ul>
                                      <li>
                                        Complete suppression of natural
                                        testosterone production
                                      </li>
                                      <li>
                                        Can cause libido issues,
                                        prolactin-related side effects (e.g.,
                                        gynecomastia), even though it doesn't
                                        aromatize
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Liver & Kidney Stress:</strong>
                                    <ul>
                                      <li>
                                        Though not hepatotoxic, it may increase
                                        renal strain and dark-colored urine,
                                        requiring careful hydration and
                                        monitoring
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Considerations:
                                </h4>
                                <ul>
                                  <li>
                                    Often stacked with Testosterone (to maintain
                                    base hormonal function), Winstrol, or
                                    Masteron for cutting
                                  </li>
                                  <li>
                                    Cabergoline or Pramipexole may be used to
                                    manage prolactin-related issues
                                  </li>
                                  <li>
                                    A strong PCT (Post Cycle Therapy) is
                                    essential to help recover natural
                                    testosterone function
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Trenbolone Acetate and Tren Hexa (Parabolan)
                                  are considered elite-level steroids for users
                                  seeking maximum muscle definition, hardness,
                                  and recomposition effects. Their extreme
                                  potency makes them highly effective, but also
                                  comes with a high risk of side effects,
                                  especially for cardiovascular and endocrine
                                  health. Experienced users only should consider
                                  their use, and only with proper cycle
                                  planning, monitoring, and post-cycle therapy.
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
                                        Always wash your hands thoroughly before
                                        handling any injection materials.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use a sterile, single-use needle and
                                        syringe for each injection.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Disinfect the injection site with an
                                        alcohol swab before injecting.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Inject intramuscularly — common sites
                                        include glutes, deltoids, or thighs.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Rotate injection sites to avoid tissue
                                        damage or irritation.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Dispose of used needles in a proper
                                        sharps container immediately.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        If you notice redness, swelling, or pain
                                        at the injection site, consult a
                                        healthcare professional.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Follow your cycle duration, dosage, and
                                        PCT strictly — Trenbolone is potent and
                                        suppressive.
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

export default TrenboloneAcetateHexahydrobenzylcarbonate;
