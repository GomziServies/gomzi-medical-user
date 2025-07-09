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


const Stenabolic = () => {
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
                      src="assets\images\medicine\stenabolic.jpg"
                      alt="Stenabolic (SR9009)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Stenabolic (SR9009)</h4>
                    <p className="pt-4">
                      Stenabolic (SR9009) is a REV-ERBa agonist, often mistaken
                      for a SARM. It is known for its ability to enhance fat
                      burning, increase endurance, and improve cardiovascular
                      performance. Popular among athletes and fitness
                      enthusiasts, it is typically used during cutting cycles or
                      by those seeking increased energy and stamina.
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
                                    <strong>Type:</strong> Non-hormonal oral
                                    compound (REV-ERBa agonist)
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> 4-6 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong>
                                    <ul>
                                      <li>
                                        Activates REV-ERBa proteins which
                                        regulate circadian rhythm and metabolism
                                      </li>
                                      <li>
                                        Boosts mitochondrial activity in muscle
                                        tissue
                                      </li>
                                      <li>
                                        Increases fat oxidation and reduces
                                        glucose storage
                                      </li>
                                      <li>
                                        Mimics effects of endurance training at
                                        the cellular level
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose Range:</strong> 10-30
                                    mg per day
                                  </li>
                                  <li>
                                    <strong>Beginner Dose:</strong> 10-20 mg
                                  </li>
                                  <li>
                                    <strong>Advanced Users:</strong> 30 mg
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong> 2-3 times daily
                                    (due to short half-life)
                                  </li>
                                  <li>
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                    recommended
                                  </li>
                                  <li>
                                    <strong>PCT:</strong> Not required
                                    (non-hormonal)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Fat Burning - promotes increased fat
                                    metabolism and energy expenditure
                                  </li>
                                  <li>
                                    Endurance Boost - enhances aerobic capacity
                                    and workout stamina
                                  </li>
                                  <li>
                                    Metabolic Regulation - supports healthy
                                    blood sugar and cholesterol levels
                                  </li>
                                  <li>
                                    Non-Stimulant - increases alertness and
                                    energy without CNS stimulation
                                  </li>
                                  <li>
                                    Body Recomposition - aids in fat loss while
                                    preserving lean muscle
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Risks:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Short-Term Effects:</strong>
                                    <ul>
                                      <li>Mild fatigue at higher doses</li>
                                      <li>Occasional headaches or dizziness</li>
                                      <li>
                                        Muscle cramps (usually related to
                                        hydration levels)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>No Hormonal Suppression:</strong>{" "}
                                    Does not impact testosterone or estrogen
                                  </li>
                                  <li>
                                    <strong>Liver Consideration:</strong> Mild
                                    liver stress possible at very high doses
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cutting Stack:</strong> SR9009 +
                                    Cardarine (GW-501516) or Ostarine (MK-2866)
                                  </li>
                                  <li>
                                    <strong>Endurance Stack:</strong> SR9009 +
                                    Ligandrol (LGD-4033)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong> Not required
                                  </li>
                                  <li>
                                    <strong>PCT:</strong> Not necessary due to
                                    non-hormonal nature
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Stenabolic (SR9009) is a versatile,
                                  non-hormonal performance enhancer known for
                                  boosting endurance, fat oxidation, and
                                  metabolic health. It's ideal for cutting
                                  phases, athletic performance, or improving
                                  body composition without affecting hormone
                                  levels. Due to its short half-life, multiple
                                  doses per day ensure the best results with
                                  minimal side effects.
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
                                        SR9009 is strictly for laboratory
                                        research use only. Not approved for
                                        human consumption.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store capsules in a cool, dry place away
                                        from direct sunlight or moisture.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use gloves and avoid direct contact with
                                        the substance when handling for
                                        analytical research.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Label all samples clearly and store them
                                        safely to avoid cross-contamination.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Dispose of unused or expired compounds
                                        according to laboratory safety
                                        protocols.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not ingest. This compound is not
                                        evaluated or approved by regulatory
                                        authorities for medical use.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Avoid exposure to children, pets, or
                                        unauthorized individuals.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        In case of accidental ingestion or
                                        exposure, contact poison control or a
                                        medical professional immediately.
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

export default Stenabolic;
