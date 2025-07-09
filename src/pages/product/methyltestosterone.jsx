import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";

const Methyltestosterone = () => {
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
                      src="assets\images\medicine\methyltestosterone.jpg"
                      alt="Methyltestosterone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Methyltestosterone</h4>
                    <p className="pt-4">
                      Methyltestosterone is one of the oldest and first orally
                      active derivatives of testosterone, developed to provide
                      anabolic and androgenic effects when taken by mouth. It is
                      structurally modified by 17-alpha alkylation, allowing it
                      to survive first-pass metabolism through the liver—an
                      essential change that gives it oral bioavailability,
                      unlike pure testosterone. While effective, it is now used
                      less frequently due to its hepatotoxicity and the
                      availability of safer alternatives.
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
                                  Pharmacology & Modification:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Chemical Structure:</strong>{" "}
                                    Testosterone molecule with a methyl group at
                                    the 17-alpha position
                                  </li>
                                  <li>
                                    This modification prevents the hormone from
                                    being deactivated by the liver, making oral
                                    administration possible, but at the cost of
                                    increased liver strain.
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Hormone Replacement Therapy (HRT):
                                    </strong>
                                    <br />
                                    Sometimes prescribed to treat male
                                    hypogonadism, though it's largely replaced
                                    by injectable or transdermal forms due to
                                    liver concerns.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Delayed Puberty in Males:</strong>
                                    <br />
                                    Occasionally used in controlled doses to
                                    induce secondary male characteristics.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Performance Enhancement:</strong>
                                    <br />
                                    Though not commonly used in modern
                                    bodybuilding, some athletes have used it
                                    historically for quick strength gains,
                                    especially in short-term scenarios.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Female Treatments (Very Rare):
                                    </strong>
                                    <br />
                                    Sometimes used in small doses for specific
                                    female medical conditions (e.g., certain
                                    cancers), but this use is highly specialized
                                    and rare today.
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration & Intake Timing:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Oral Dosage:</strong> Taken by
                                    mouth, typically once or twice daily
                                    depending on the prescribed dose and user's
                                    goals
                                  </li>
                                  <li>
                                    <strong>Best Time to Take:</strong>
                                    <ul>
                                      <li>
                                        Often taken in the morning or split into
                                        morning and evening doses for more
                                        stable blood hormone levels
                                      </li>
                                      <li>
                                        Recommended to take with food to
                                        minimize stomach upset or
                                        gastrointestinal discomfort
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Onset of Action:</strong>{" "}
                                    Fast-acting, with noticeable effects
                                    sometimes within days, making it appealing
                                    for short-term results
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <p>
                                  Methyltestosterone carries several risks, many
                                  of which are more pronounced due to its oral
                                  nature and liver metabolism:
                                </p>
                                <ul>
                                  <li>
                                    <strong>
                                      Liver Toxicity (Hepatotoxicity):
                                    </strong>
                                    <ul>
                                      <li>
                                        As a 17-alpha alkylated compound,
                                        Methyltestosterone poses a significant
                                        risk to the liver, especially with
                                        long-term or high-dose use
                                      </li>
                                      <li>
                                        Regular liver function tests (LFTs) are
                                        essential if taken for extended periods
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Estrogenic Side Effects:</strong>
                                    <ul>
                                      <li>
                                        Conversion to estrogen can lead to
                                        gynecomastia (male breast development)
                                        and water retention
                                      </li>
                                      <li>
                                        Estrogen control agents (like aromatase
                                        inhibitors) may be used to mitigate
                                        these effects
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Androgenic Side Effects:</strong>
                                    <ul>
                                      <li>
                                        Acne, oily skin, and increased
                                        body/facial hair
                                      </li>
                                      <li>
                                        Hair loss in individuals genetically
                                        predisposed to male pattern baldness
                                      </li>
                                      <li>
                                        Aggressive mood shifts or heightened
                                        irritability in some users
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Suppression of Natural Testosterone:
                                    </strong>
                                    <ul>
                                      <li>
                                        Like all exogenous androgens,
                                        Methyltestosterone suppresses the body's
                                        natural testosterone production,
                                        potentially requiring post-cycle therapy
                                        (PCT) for recovery
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Cardiovascular Risks (Long-Term Use):
                                    </strong>
                                    <ul>
                                      <li>
                                        Can negatively impact cholesterol levels
                                        (lowering HDL, raising LDL)
                                      </li>
                                      <li>
                                        Increased risk of high blood pressure
                                        and strain on the cardiovascular system
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Methyltestosterone offers a fast and orally
                                  convenient form of testosterone, but at the
                                  cost of increased side effects and liver
                                  toxicity. While it played an important role in
                                  the early days of androgen therapy, it is now
                                  used selectively and cautiously in medical
                                  settings. For performance enhancement, it is
                                  generally considered outdated, with more
                                  modern and safer compounds preferred today.
                                  Proper medical supervision is crucial for any
                                  therapeutic use.
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
                                        Take Methyltestosterone orally with a
                                        full glass of water at the same time
                                        each day.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Follow your doctor’s prescription
                                        strictly — do not self-adjust the
                                        dosage.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a cool, dry place away from
                                        direct sunlight and moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Regular blood tests may be necessary to
                                        monitor hormone levels and liver
                                        function.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        May cause side effects such as liver
                                        strain, acne, mood swings, or changes in
                                        cholesterol.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not recommended for long-term use due to
                                        potential [hepatotoxicity](w) (liver
                                        damage).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not use if you have prostate or
                                        breast cancer, or serious
                                        heart/liver/kidney conditions.
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

export default Methyltestosterone;
