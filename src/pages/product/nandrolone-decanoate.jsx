import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const NandroloneDecanoate = () => {
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
                      src="assets\images\medicine\nandrolone-decanoate.jpg"
                      alt="Nandrolone Decanoate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Nandrolone Decanoate</h4>
                    <p className="pt-4">
                      Nandrolone Decanoate, commonly known by the brand name
                      Deca-Durabolin, is a long-acting injectable anabolic
                      steroid derived from testosterone. It is renowned for its
                      muscle-building properties, joint-soothing effects, and
                      relatively mild androgenic profile, making it a staple in
                      many bulking cycles. Originally developed for medical
                      purposes such as treating anemia and muscle-wasting
                      conditions, it has become popular among athletes and
                      bodybuilders for its steady gains and supportive recovery
                      benefits.
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
                                    <strong>Half-Life:</strong> 6-7 days
                                  </li>
                                  <li>
                                    <strong>Saturation (Concentration):</strong>{" "}
                                    100 mg/ml
                                  </li>
                                  <li>
                                    <strong>Administration:</strong>{" "}
                                    Intramuscular Injection
                                  </li>
                                  <li>
                                    <strong>Aromatization:</strong> Yes, but at
                                    a much lower rate than testosterone
                                  </li>
                                  <li>
                                    <strong>Progestin Activity:</strong> Yes —
                                    can contribute to side effects such as
                                    libido changes and gynecomastia when not
                                    properly managed
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Muscle Growth & Strength Enhancement:
                                    </strong>
                                    <ul>
                                      <li>
                                        Excellent for off-season bulking with
                                        slow, steady, and quality muscle mass
                                        gain
                                      </li>
                                      <li>
                                        Increases nitrogen retention, protein
                                        synthesis, and IGF-1 levels, fostering
                                        an anabolic environment
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Joint Relief & Recovery Support:
                                    </strong>
                                    <ul>
                                      <li>
                                        Promotes collagen synthesis and
                                        increases synovial fluid, improving
                                        joint lubrication
                                      </li>
                                      <li>
                                        Favored by athletes recovering from
                                        injuries or joint discomfort
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Red Blood Cell Production:</strong>
                                    <ul>
                                      <li>
                                        Stimulates erythropoiesis, which helps
                                        improve endurance, oxygen delivery, and
                                        recovery
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Stacking Synergy:</strong>
                                    <ul>
                                      <li>
                                        Commonly stacked with Testosterone
                                        Cypionate or Enanthate for a balanced
                                        anabolic-androgenic cycle
                                      </li>
                                      <li>
                                        Often paired with Dianabol for bulking
                                        phases
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosing & Intake Protocol:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Typical Injection Frequency:
                                    </strong>{" "}
                                    Once every 7-10 days
                                  </li>
                                  <li>
                                    <strong>Dosage Guidelines:</strong>
                                    <ul>
                                      <li>
                                        <strong>Beginner:</strong> 200-300 mg
                                        per week
                                      </li>
                                      <li>
                                        <strong>Intermediate:</strong> 300-500
                                        mg per week
                                      </li>
                                      <li>
                                        <strong>Advanced:</strong> 500-600 mg
                                        per week
                                      </li>
                                      <li>
                                        <strong>
                                          Therapeutic (HRT/Medical Use):
                                        </strong>{" "}
                                        100-200 mg every 10-14 days
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Note:</strong> Exceeding 600 mg/week
                                    increases the risk of side effects without
                                    significantly boosting benefits
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Estrogenic Effects:</strong>
                                    <ul>
                                      <li>
                                        Water retention and gynecomastia (though
                                        less than testosterone) due to progestin
                                        interaction
                                      </li>
                                      <li>
                                        Estrogen control via AI or SERM may be
                                        necessary
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
                                        Highly suppressive; must be run
                                        alongside testosterone
                                      </li>
                                      <li>
                                        Proper PCT is essential post-cycle
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Androgenic Side Effects (Low Risk):
                                    </strong>
                                    <ul>
                                      <li>
                                        Possible acne, oily skin, or hair
                                        thinning in genetically predisposed
                                        users
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Cardiovascular Concerns:</strong>
                                    <ul>
                                      <li>
                                        May affect cholesterol (lower HDL, raise
                                        LDL)
                                      </li>
                                      <li>
                                        Long-term use requires regular lipid
                                        panel monitoring
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Prolactin-Related Issues:</strong>
                                    <ul>
                                      <li>
                                        Can raise prolactin levels, contributing
                                        to sexual dysfunction and gynecomastia
                                      </li>
                                      <li>
                                        Supplements like Cabergoline or Vitamin
                                        B6 may help manage this
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Nandrolone Decanoate (Deca-Durabolin) is a
                                  versatile and reliable compound, especially
                                  valued for its tissue-repairing properties,
                                  smooth gains, and milder androgenic profile.
                                  While it's not ideal for cutting, it serves as
                                  a foundational anabolic in mass-building
                                  protocols. Careful attention to testosterone
                                  support, estrogen control, and post-cycle
                                  therapy ensures users can take advantage of
                                  its benefits while minimizing adverse effects.
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
                                        handling injection materials.
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
                                        Disinfect the injection site (typically
                                        gluteal muscle) with an alcohol swab
                                        before injecting.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Rotate injection sites regularly to
                                        avoid tissue damage and irritation.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Dispose of used needles in a proper
                                        sharps container — never reuse them.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        If you notice redness, swelling, or
                                        persistent pain at the injection site,
                                        consult a healthcare professional.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Follow the exact dosage and frequency as
                                        prescribed by your physician.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Keep the vial stored at 8–30°C, away
                                        from light and out of reach of children.
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

export default NandroloneDecanoate;
