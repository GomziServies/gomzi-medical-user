import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";

const ACP105 = () => {
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
                      src="assets\images\medicine\acp-105.jpg"
                      alt="ACP-105"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">ACP-105</h4>
                    <p className="pt-4">
                      ACP-105 is a selective androgen receptor modulator (SARM)
                      designed to offer anabolic benefits like muscle growth and
                      strength enhancement without the severe side effects
                      typically associated with anabolic steroids. It’s
                      considered one of the milder SARMs, suitable for beginners
                      and those looking for performance enhancement with
                      relatively lower risks.
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
                                    <strong>Type:</strong> Non-steroidal SARM
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> Unknown
                                    (estimated short to moderate)
                                  </li>
                                  <li>
                                    <strong>Mechanism of Action:</strong>
                                    <ul>
                                      <li>
                                        Selectively binds to androgen receptors
                                        in muscle and bone tissue
                                      </li>
                                      <li>
                                        Stimulates anabolic activity without
                                        significant effects on reproductive
                                        organs
                                      </li>
                                      <li>
                                        Designed to minimize androgenic side
                                        effects (e.g., hair loss, prostate
                                        impact)
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
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                  </li>
                                  <li>
                                    <strong>Timing:</strong> Taken once daily
                                    (due to presumed moderate half-life)
                                  </li>
                                  <li>
                                    <strong>PCT Required:</strong> Yes -
                                    especially at higher doses or longer cycles
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Lean Muscle Gain - encourages dry muscle
                                    growth with minimal water retention
                                  </li>
                                  <li>
                                    Strength Gains - improves performance and
                                    endurance in training
                                  </li>
                                  <li>
                                    Fat Loss Support - preserves muscle during
                                    calorie deficit phases
                                  </li>
                                  <li>
                                    Mild Compound - lower side effect profile
                                    makes it ideal for new users or females (at
                                    lower doses)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Risks:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Mild Testosterone Suppression:
                                    </strong>{" "}
                                    Especially with cycles over 6 weeks
                                  </li>
                                  <li>
                                    <strong>Nausea or Headaches:</strong>{" "}
                                    Typically dose-dependent and reversible
                                  </li>
                                  <li>
                                    <strong>Other Considerations:</strong>
                                    <ul>
                                      <li>
                                        Due to limited human trials, long-term
                                        effects remain unknown
                                      </li>
                                      <li>
                                        Not approved for human use - research
                                        chemical status
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Recomp Stack:</strong> ACP-105 +
                                    Cardarine (GW-501516)
                                  </li>
                                  <li>
                                    <strong>Lean Bulk Stack:</strong> ACP-105 +
                                    MK-677 (Ibutamoren) for GH synergy
                                  </li>
                                  <li>
                                    <strong>Fat Loss Stack:</strong> ACP-105 +
                                    SR9009 (Stenabolic) for increased metabolism
                                    and stamina
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong> Generally
                                    not required, but organ health support
                                    supplements can be included
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>
                                    <ul>
                                      <li>
                                        Yes - to restore natural testosterone
                                        production
                                      </li>
                                      <li>
                                        Typical duration: 4 weeks using Clomid
                                        or Nolvadex
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  ACP-105 is a promising SARM known for its
                                  muscle-building and fat-burning capabilities
                                  with low androgenic risk. Its milder profile
                                  makes it a potential entry-level compound for
                                  users exploring SARMs. As with all SARMs,
                                  responsible cycling, proper dosing, and PCT
                                  are essential for safe use.
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
                              src="assets\images\medicine\video\sustanon-250.jpeg"
                                onClick={() => openVideoModal("VpV3E9pcxko")}
                              />
                              <div
                                className="video-play-button"
                                onClick={() => openVideoModal("VpV3E9pcxko")}
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
                                        Take ACP-105 orally with water,
                                        preferably at the same time each day.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store the capsules in a cool, dry place
                                        away from direct sunlight.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Follow the recommended dosage —
                                        typically 5 mg per capsule unless
                                        directed otherwise.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Only use ACP-105 for research purposes
                                        unless prescribed by a qualified
                                        physician.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not exceed the suggested dose, as
                                        SARMs may affect hormone levels.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Discontinue use and consult a doctor if
                                        you experience unusual side effects
                                        (e.g., headache, mood changes, or
                                        hormonal symptoms).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not for use by individuals under 18
                                        years or women who are pregnant or
                                        nursing.
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

export default ACP105;
