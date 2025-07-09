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


const Ostarine = () => {
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
                      src="assets\images\medicine\ostarine.jpg"
                      alt="Ostarine (MK-2866)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Ostarine (MK-2866)</h4>
                    <p className="pt-4">
                      Ostarine, also known as MK-2866, is a Selective Androgen
                      Receptor Modulator (SARM) primarily used for muscle
                      preservation, fat loss, and strength enhancement. It is
                      one of the most researched and widely used SARMs due to
                      its mild profile, oral administration, and minimal
                      androgenic side effects
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
                                  Pharmacology & Mechanism of Action:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Type:</strong> Oral non-steroidal
                                    SARM
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> ~24 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism:</strong>
                                    <ul>
                                      <li>
                                        Selectively binds to androgen receptors
                                        in muscle and bone
                                      </li>
                                      <li>
                                        Promotes anabolic activity in muscle
                                        tissue without affecting other organs
                                      </li>
                                      <li>
                                        Minimizes muscle wasting and supports
                                        lean mass during caloric deficits
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose Range:</strong> 10-25
                                    mg per day
                                  </li>
                                  <li>
                                    <strong>Beginner:</strong> 10-15 mg
                                  </li>
                                  <li>
                                    <strong>Experienced Users:</strong> 20-25 mg
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong> Once daily (due
                                    to long half-life)
                                  </li>
                                  <li>
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>{" "}
                                    Often recommended for cycles &gt;4 weeks or
                                    higher doses
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Muscle Preservation - ideal for cutting
                                    phases
                                  </li>
                                  <li>
                                    Fat Loss - supports recomposition and fat
                                    oxidation
                                  </li>
                                  <li>
                                    Strength Gains - improves strength without
                                    bulk or water retention
                                  </li>
                                  <li>
                                    Joint Support - may help with collagen
                                    synthesis and joint comfort
                                  </li>
                                  <li>
                                    Recovery - reduces time between workouts
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Considerations:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Mild Side Effects (Dose-Dependent):
                                    </strong>
                                    <ul>
                                      <li>
                                        Testosterone suppression (notable at
                                        &gt;20 mg or &gt;4-week cycles)
                                      </li>
                                      <li>Headaches</li>
                                      <li>
                                        Joint pain or stiffness (rare, usually
                                        temporary)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Not Estrogenic:</strong>
                                    <ul>
                                      <li>No conversion to estrogen</li>
                                      <li>
                                        No risk of gynecomastia or water
                                        retention
                                      </li>
                                      <li>Does not aromatize</li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Not Hepatotoxic:</strong>
                                    <ul>
                                      <li>
                                        Safe for the liver at standard doses
                                      </li>
                                      <li>
                                        Routine bloodwork still recommended for
                                        safety
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cutting Stack:</strong> Ostarine +
                                    Cardarine (fat loss + endurance)
                                  </li>
                                  <li>
                                    <strong>Recomp Stack:</strong> Ostarine +
                                    LGD-4033 or S4 (lean mass + strength)
                                  </li>
                                  <li>
                                    <strong>PCT Use:</strong> May be included at
                                    low doses in a mini-PCT for
                                    bridging/tapering
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong> Typically
                                    not needed at moderate doses
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>
                                    <ul>
                                      <li>
                                        Recommended for cycles longer than 8
                                        weeks or higher dosages
                                      </li>
                                      <li>
                                        <strong>Common PCT:</strong> Clomid 25
                                        mg/day for 2-3 weeks or natural test
                                        boosters
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Ostarine (MK-2866) is one of the most
                                  beginner-friendly SARMs on the market,
                                  offering reliable muscle preservation, fat
                                  loss, and strength improvement with minimal
                                  suppression and low side effect risk. Perfect
                                  for cutting and recomposition goals,
                                  especially when paired with proper training
                                  and nutrition.
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
                                        Take Ostarine capsules with water,
                                        preferably at the same time each day.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Follow the recommended dosage — 10mg per
                                        capsule as shown on the label.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a cool, dry place away from
                                        sunlight and moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Benefits may include increased muscle
                                        mass, strength boost, and joint support.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Consult a healthcare provider before
                                        starting Ostarine, especially if you
                                        have pre-existing conditions.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not exceed the recommended dosage to
                                        avoid potential side effects.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not approved by the FDA for human
                                        consumption outside of research settings
                                        — use at your own risk.
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

export default Ostarine;
