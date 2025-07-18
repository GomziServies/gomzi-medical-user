import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const S23 = () => {
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
                    <img src="assets\images\medicine\s23.jpg" alt="S23" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">S23</h4>
                    <p className="pt-4">
                      S23 is one of the most potent SARMs available, known for
                      its extreme muscle-building and fat-burning capabilities.
                      Originally developed as a potential male contraceptive, it
                      exhibits very high anabolic activity with significant
                      suppression of natural testosterone production.
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
                                    <strong>Type:</strong> Oral SARM (Selective
                                    Androgen Receptor Modulator)
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> 11-15 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism:</strong>
                                    <ul>
                                      <li>
                                        Binds strongly to androgen receptors in
                                        muscle and bone tissue
                                      </li>
                                      <li>
                                        Promotes muscle hypertrophy and
                                        lipolysis (fat loss)
                                      </li>
                                      <li>
                                        Suppresses LH and FSH, leading to
                                        testosterone suppression
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose Range:</strong> 10-20
                                    mg per day
                                  </li>
                                  <li>
                                    <strong>Beginner Dose:</strong> 10 mg
                                  </li>
                                  <li>
                                    <strong>Advanced Users:</strong> 20 mg
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong> Once or split
                                    into 2 daily doses (shorter half-life)
                                  </li>
                                  <li>
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>{" "}
                                    Essential due to complete testosterone
                                    suppression
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Bulking - dry, dense muscle gains with no
                                    water retention
                                  </li>
                                  <li>
                                    Fat Loss - effective for recomposition due
                                    to fat-burning effects
                                  </li>
                                  <li>
                                    Hardening Effect - increased vascularity and
                                    firm muscle tone
                                  </li>
                                  <li>
                                    Increased Strength - noticeable improvement
                                    in performance within 1-2 weeks
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Risks:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      High Testosterone Suppression:
                                    </strong>{" "}
                                    Often leads to complete natural shutdown
                                  </li>
                                  <li>
                                    <strong>Liver Toxicity:</strong> Moderate
                                    liver strain - use liver support
                                  </li>
                                  <li>
                                    <strong>Mood & Behavior:</strong> Possible
                                    aggression, irritability, and insomnia
                                  </li>
                                  <li>
                                    <strong>Fertility Impact:</strong> Temporary
                                    reduction in sperm count - not for users
                                    trying to conceive
                                  </li>
                                  <li>
                                    <strong>No Estrogenic Activity:</strong> No
                                    aromatization, but hormonal imbalance still
                                    possible
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>For Extreme Cutting/Recomp:</strong>{" "}
                                    S23 + Cardarine or SR9009
                                  </li>
                                  <li>
                                    <strong>For Bulking:</strong> S23 + MK-677
                                    or low-dose LGD-4033
                                  </li>
                                  <li>
                                    <strong>With Testosterone Base:</strong>{" "}
                                    Often stacked with injectable testosterone
                                    to counter suppression
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong>
                                    <ul>
                                      <li>Liver support (e.g., NAC, TUDCA)</li>
                                      <li>
                                        Monitor blood pressure and cholesterol
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy:</strong>
                                    <ul>
                                      <li>Strong PCT required</li>
                                      <li>
                                        Clomid: 50/25/25/25 mg/week or Nolvadex:
                                        40/20/20/20 mg/week
                                      </li>
                                      <li>
                                        Natural testosterone boosters can aid
                                        recovery
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  S23 is one of the most powerful SARMs
                                  available, offering impressive physique
                                  enhancement with dry muscle gains and fat
                                  loss. Due to its high level of suppression and
                                  risk factors, it's best used by advanced users
                                  who follow proper PCT and health monitoring
                                  protocols.
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
                                        S23 is for laboratory and research use
                                        only. It is not approved for human
                                        consumption.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store capsules in a cool, dry place,
                                        away from heat, light, and moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Wear gloves and avoid direct contact
                                        with the compound when handling in lab
                                        environments.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Clearly label all containers and store
                                        securely to prevent unauthorized access.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use in compliance with institutional and
                                        ethical research guidelines.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not ingest. May cause hormonal
                                        disruption or other adverse effects if
                                        misused.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not for use by minors, pets, or
                                        untrained personnel. Handle with
                                        caution.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Dispose of unused or expired capsules
                                        according to biohazard waste
                                        regulations.
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

export default S23;
