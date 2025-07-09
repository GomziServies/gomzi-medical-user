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

const Oxymetholone = () => {
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
                      src="assets\images\medicine\oxandrolone-anadrol.jpg"
                      alt="Oxymetholone (Anadrol)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Oxymetholone (Anadrol)</h4>
                    <p className="pt-4">
                      Oxymetholone, widely known by the brand name Anadrol, is
                      considered one of the most powerful oral anabolic steroids
                      available. It is renowned for its ability to produce rapid
                      and dramatic gains in muscle mass and strength, making it
                      a popular choice for bulking cycles and treating severe
                      muscle-wasting conditions. However, its potency comes with
                      a high risk of side effects, particularly related to liver
                      toxicity and cardiovascular health.
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
                                    17-alpha alkylated derivative of
                                    dihydrotestosterone (DHT), structurally
                                    modified to enhance anabolic activity
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately
                                    8-9 hours, which supports split-dosing
                                    protocols for smoother blood level
                                    maintenance
                                  </li>
                                  <li>
                                    <strong>
                                      Non-Aromatizing Yet Estrogenic:
                                    </strong>
                                    <ul>
                                      <li>
                                        Does not aromatize into estrogen, but
                                        still causes estrogen-like side
                                        effects—likely due to progestin activity
                                        or estrogen receptor stimulation
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
                                        Favored in the early weeks of a
                                        mass-gaining cycle for its immediate
                                        size and strength increases
                                      </li>
                                      <li>
                                        Often used as a kickstarter before
                                        injectable compounds begin to take
                                        effect
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Medical Use:</strong>
                                    <ul>
                                      <li>
                                        Initially developed for treating anemia
                                        and severe muscle wasting
                                      </li>
                                      <li>
                                        Still occasionally used in clinical
                                        settings under strict medical
                                        supervision
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration & Intake Timing:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dosage:</strong>
                                    <ul>
                                      <li>
                                        25-100 mg/day, depending on user
                                        experience and tolerance
                                      </li>
                                      <li>
                                        50 mg/day is the most common standard
                                        dose
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Intake Schedule:</strong>
                                    <ul>
                                      <li>
                                        Best taken with meals to minimize
                                        gastrointestinal discomfort
                                      </li>
                                      <li>
                                        Often split into two doses per day
                                        (morning and afternoon) to reduce side
                                        effects and maintain more even hormone
                                        levels
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <p>
                                  Due to its extreme potency, Oxymetholone has a
                                  high side effect profile and should be used
                                  with caution and proper monitoring:
                                </p>
                                <ul>
                                  <li>
                                    <strong>Liver Toxicity (High):</strong>
                                    <ul>
                                      <li>
                                        Being a 17-alpha alkylated oral steroid,
                                        Anadrol places significant strain on the
                                        liver
                                      </li>
                                      <li>
                                        Prolonged use or high doses can lead to
                                        elevated liver enzyme levels or even
                                        hepatotoxicity
                                      </li>
                                      <li>
                                        Liver support supplements (e.g., milk
                                        thistle, NAC) and regular liver function
                                        tests are essential
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Estrogenic Side Effects:</strong>
                                    <ul>
                                      <li>
                                        Despite not converting to estrogen via
                                        aromatase, Anadrol often causes:
                                      </li>
                                      <li>Severe water retention</li>
                                      <li>Bloating</li>
                                      <li>
                                        Gynecomastia (male breast tissue
                                        development)
                                      </li>
                                      <li>
                                        Standard aromatase inhibitors (AIs) may
                                        not be effective; SERMs (e.g.,
                                        Tamoxifen) may be more appropriate if
                                        symptoms occur
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Androgenic Effects:</strong>
                                    <ul>
                                      <li>
                                        Acne, increased body/facial hair,
                                        aggression, and accelerated hair loss in
                                        genetically predisposed individuals
                                      </li>
                                      <li>
                                        Although it's derived from DHT, its
                                        androgenic rating is relatively lower
                                        than its anabolic potency, yet side
                                        effects are still prevalent
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Cardiovascular Health Risks:
                                    </strong>
                                    <ul>
                                      <li>
                                        Elevated LDL (bad cholesterol) and
                                        reduced HDL (good cholesterol)
                                      </li>
                                      <li>
                                        Potential increase in blood pressure and
                                        strain on the heart
                                      </li>
                                      <li>
                                        A cholesterol-friendly diet, regular
                                        cardio, and supplementation (e.g.,
                                        omega-3s) are recommended during use
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Testosterone Suppression:</strong>
                                    <ul>
                                      <li>
                                        Anadrol strongly suppresses natural
                                        testosterone production, often within
                                        days of starting a cycle
                                      </li>
                                      <li>
                                        Post-cycle therapy (PCT) is mandatory to
                                        restore hormonal function after
                                        discontinuation
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Oxymetholone (Anadrol) is a highly potent oral
                                  steroid capable of producing impressive muscle
                                  mass and strength gains in a short time.
                                  However, these benefits come with a notable
                                  risk of side effects, especially regarding
                                  liver health, estrogenic symptoms, and
                                  cardiovascular strain. It is best suited for
                                  experienced users and should always be
                                  accompanied by liver protection, blood work
                                  monitoring, and a well-planned PCT protocol.
                                  Anadrol is a powerful tool, but one that must
                                  be used with discipline and respect for its
                                  risks.
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
                                        Oxymetholone is a potent anabolic
                                        steroid intended for research or
                                        clinical use under medical supervision.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store tablets in a cool, dry place away
                                        from direct sunlight and moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Wash hands thoroughly before and after
                                        handling tablets for lab work.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use gloves when handling for
                                        experimental purposes to avoid direct
                                        contact.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Clearly label storage containers and
                                        restrict access to authorized personnel
                                        only.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        May cause serious side effects including
                                        liver toxicity, water retention, and
                                        hormone imbalance.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not ingest unless prescribed. Misuse
                                        may lead to long-term health risks.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not for use by minors, pets, or anyone
                                        not involved in controlled research.
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

export default Oxymetholone;
