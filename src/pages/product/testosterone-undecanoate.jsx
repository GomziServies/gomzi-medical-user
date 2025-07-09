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


const TestosteroneUndecanoate = () => {
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
                      src="assets\images\medicine\undecanoate.jpg"
                      alt="Testosterone Undecanoate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Testosterone Undecanoate</h4>
                    <p className="pt-4">
                      Testosterone Undecanoate is an ultra-long-acting
                      injectable form of testosterone, most commonly used in
                      Hormone Replacement Therapy (HRT) due to its extended
                      half-life and infrequent dosing schedule. Unlike short or
                      medium esters, it allows patients to maintain stable
                      testosterone levels with injections as infrequent as every
                      10-12 weeks, making it highly convenient for long-term
                      therapy. However, it is not commonly used in bodybuilding
                      due to its slow onset and limited flexibility for cycle
                      adjustments.
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
                                  Pharmacokinetics:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately 3
                                    to 4 weeks
                                    <br />
                                    This ester provides a very prolonged release
                                    of testosterone into the bloodstream,
                                    resulting in fewer injections over time.
                                    However, due to its long half-life, blood
                                    levels rise more slowly, and any adjustments
                                    to dosage or side effects take longer to
                                    manifest or correct.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Esters & Absorption:</strong>
                                    <br />
                                    The undecanoate ester is designed for deep
                                    intramuscular injection, often in a clinical
                                    setting, to ensure proper absorption and
                                    slow, steady release over several weeks.
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Recommended Injection Frequency:
                                </h4>
                                <ul>
                                  <li>
                                    Every 10-12 weeks for HRT (after loading
                                    phase)
                                  </li>
                                  <li>
                                    Every 4-6 weeks for performance use, though
                                    this is uncommon due to the ester's long
                                    duration and slow action
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage Guidelines:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Bodybuilding (rare use):</strong>{" "}
                                    1000-2000 mg every 4-6 weeks
                                    <br />
                                    Not preferred due to the delayed onset of
                                    action and difficulty adjusting doses.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      HRT (Hormone Replacement Therapy):
                                    </strong>{" "}
                                    1000 mg every 10-12 weeks
                                    <br />
                                    After an initial loading phase (often
                                    involving two injections within the first
                                    month), maintenance injections are spaced
                                    out widely, improving patient compliance and
                                    convenience.
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Injection Sites:
                                </h4>
                                <p>
                                  <strong>Gluteus (Buttocks):</strong>
                                  <br />
                                  Administered as a deep intramuscular
                                  injection, typically by a healthcare provider.
                                  Due to the large volume and oil-based nature
                                  of the solution, proper technique is crucial
                                  to prevent injection site complications.
                                </p>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Common Testosterone Side Effects:
                                    </strong>
                                    <ul>
                                      <li>Water retention</li>
                                      <li>Acne</li>
                                      <li>
                                        Gynecomastia (breast tissue development
                                        in males)
                                      </li>
                                      <li>
                                        Hair loss or increased body/facial hair
                                      </li>
                                      <li>Mood changes</li>
                                      <li>
                                        Suppression of the body's natural
                                        testosterone production
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Unique Considerations for Undecanoate:
                                    </strong>
                                    <ul>
                                      <li>
                                        <strong>Initial hormone spike:</strong>{" "}
                                        Some users may experience a temporary
                                        surge in testosterone levels shortly
                                        after injection, potentially leading to
                                        transient side effects such as
                                        irritability, bloating, or mood changes.
                                      </li>
                                      <li>
                                        <strong>Prolonged suppression:</strong>{" "}
                                        Because of the ester's extended
                                        duration, natural testosterone
                                        production may remain suppressed for a
                                        longer period after discontinuation.
                                        Recovery can be slower, often requiring
                                        a well-structured post-cycle therapy
                                        (PCT).
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Testosterone Undecanoate is a highly effective
                                  option for long-term testosterone replacement,
                                  offering convenience through its infrequent
                                  injection schedule. While it's rarely used in
                                  performance enhancement due to its slow action
                                  and limited flexibility, it remains one of the
                                  most stable and compliance-friendly esters in
                                  clinical use. Careful medical supervision is
                                  recommended, especially to monitor hematocrit
                                  levels and manage any initial hormonal surges.
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
                                        Administer only via deep intramuscular
                                        injection — usually in the gluteal
                                        muscle.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Shake the vial gently before use and
                                        inspect for particles or discoloration.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Always use a new, sterile needle and
                                        syringe for each administration.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Disinfect the injection site with
                                        alcohol and allow it to dry before
                                        injection.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store at room temperature, away from
                                        direct light. Do not refrigerate or
                                        freeze.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Injection must be slow and deep — rapid
                                        injection may cause cough or discomfort
                                        (known as “test flu” or pulmonary oil
                                        microembolism).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Monitor for post-injection reactions
                                        like dizziness, cough, or chest
                                        discomfort and consult a healthcare
                                        professional if needed.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Follow your prescribed injection
                                        interval (e.g., every 10–14 weeks).
                                        Overdosing may lead to side effects like
                                        polycythemia or hormonal imbalance.
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

export default TestosteroneUndecanoate;
