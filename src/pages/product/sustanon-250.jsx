import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";

const Sustanon250 = () => {
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
                      src="assets\images\medicine\sustanon-250.jpg"
                      alt="Sustanon 250"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Sustanon 250</h4>
                    <p className="pt-4">
                      Sustanon 250 is a blend of four different testosterone
                      esters designed to provide both rapid and sustained
                      testosterone release. It is engineered to offer the best
                      of both worlds—a fast-acting boost from shorter esters and
                      long-lasting effects from longer esters. Originally
                      developed for medical testosterone replacement therapy
                      (TRT), it has become popular in the bodybuilding community
                      for its versatility and prolonged action.
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
                                  Composition of Sustanon 250 (per 1 mL):
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Testosterone Propionate:</strong> 30
                                    mg
                                  </li>
                                  <li>
                                    <strong>
                                      Testosterone Phenylpropionate:
                                    </strong>{" "}
                                    60 mg
                                  </li>
                                  <li>
                                    <strong>Testosterone Isocaproate:</strong>{" "}
                                    60 mg
                                  </li>
                                  <li>
                                    <strong>Testosterone Decanoate:</strong> 100
                                    mg
                                  </li>
                                </ul>
                                <p>
                                  This blend totals 250 mg of testosterone per
                                  mL, hence the name “Sustanon 250.”
                                </p>

                                <h4 className="m-5 mb-3 mx-0">
                                  Pharmacokinetics:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Half-Life:</strong> Varies due to
                                    the mix of esters
                                    <ul>
                                      <li>
                                        Short esters (like Propionate and
                                        Phenylpropionate) act quickly within the
                                        first few days
                                      </li>
                                      <li>
                                        Long esters (like Isocaproate and
                                        Decanoate) extend the effect over two to
                                        three weeks
                                      </li>
                                      <li>
                                        <strong>
                                          Average effective half-life:
                                        </strong>{" "}
                                        ~15 to 18 days
                                      </li>
                                    </ul>
                                    <p>
                                      This combination allows for a more gradual
                                      and sustained testosterone release
                                      compared to single-ester compounds.
                                    </p>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Recommended Injection Frequency:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      For Bodybuilding or Performance Use:
                                    </strong>{" "}
                                    Every 7-10 days
                                  </li>
                                  <li>
                                    <strong>
                                      For Hormone Replacement Therapy (HRT):
                                    </strong>{" "}
                                    Every 2-3 weeks
                                  </li>
                                </ul>
                                <p>
                                  However, many TRT protocols now recommend more
                                  frequent dosing (e.g., weekly) to avoid
                                  hormone fluctuations.
                                </p>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage Guidelines:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Beginner Users:</strong> 250-500 mg
                                    per week
                                    <br />
                                    Provides noticeable results with minimal
                                    side effects for most users.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Intermediate Users:</strong> 500-750
                                    mg per week
                                    <br />
                                    Suitable for those with experience seeking
                                    more advanced muscle growth.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Advanced Users:</strong> 750-1000 mg
                                    per week
                                    <br />
                                    High doses used in aggressive cycles,
                                    requiring careful side effect management.
                                  </li>
                                  <br />
                                  <li>
                                    <strong>HRT:</strong> 100-250 mg every 2-3
                                    weeks
                                    <br />
                                    Administered under medical supervision to
                                    treat clinically low testosterone.
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Injection Sites:
                                </h4>
                                <p>
                                  Administered via intramuscular injection, with
                                  common injection areas including:
                                  <ul className="mt-4">
                                    <li>
                                      <strong>Glutes (Buttocks)</strong>
                                    </li>
                                    <li>
                                      <strong>Quadriceps (Thighs)</strong>
                                    </li>
                                    <li>
                                      <strong>Deltoids (Shoulders)</strong>
                                    </li>
                                  </ul>
                                  Proper rotation and technique are important
                                  due to the blend's oil base and potential for
                                  site irritation.
                                </p>

                                <h4 className="m-5 mb-3 mx-0">
                                  Potential Side Effects:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Estrogenic Side Effects:</strong>
                                    <ul>
                                      <li>Water retention</li>
                                      <li>
                                        Gynecomastia (male breast tissue growth)
                                      </li>
                                    </ul>
                                    <p>
                                      These are caused by aromatization
                                      (conversion of testosterone to estrogen).
                                      Estrogen control via aromatase inhibitors
                                      (AIs) may be necessary during cycles.
                                    </p>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Injection Site Pain:</strong>
                                    <ul>
                                      <li>
                                        The Propionate ester can cause
                                        post-injection soreness, especially if
                                        injected improperly or without warming
                                        the oil beforehand.
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Hormonal Fluctuations:</strong>
                                    <ul>
                                      <li>
                                        Despite the blend's design to maintain
                                        stable levels, users may still
                                        experience peaks and troughs,
                                        particularly when injections are spaced
                                        too far apart. This can lead to mood
                                        swings, irritability, or energy drops
                                        toward the end of the cycle.
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Other Common Side Effects:</strong>
                                    <ul>
                                      <li>Acne</li>
                                      <li>
                                        Increased red blood cell count (risk of
                                        elevated hematocrit)
                                      </li>
                                      <li>
                                        Hair loss (in genetically predisposed
                                        individuals)
                                      </li>
                                      <li>
                                        Suppression of natural testosterone
                                        production, requiring post-cycle therapy
                                        (PCT) after discontinuation
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Sustanon 250 is a well-rounded testosterone
                                  formulation offering both immediate and
                                  long-lasting effects. Its multi-ester
                                  composition provides flexibility for users and
                                  is favored in both therapeutic and athletic
                                  contexts. However, precise injection timing
                                  and proper cycle planning are essential to
                                  minimize hormonal swings and manage side
                                  effects effectively.
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
                            </div>

                            <ModalVideo
                              channel="youtube"
                              isOpen={isVideoOpen}
                              videoId={videoUrl}
                              onClose={closeVideoModal}
                            />
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
                                        Only administer Sustanon under the
                                        supervision of a licensed medical
                                        professional.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Use a new, sterile needle and syringe
                                        for every injection to avoid
                                        contamination.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Inject intramuscularly, typically into
                                        the gluteus or thigh muscle, as
                                        prescribed.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Disinfect the vial and injection site
                                        thoroughly with alcohol before use.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a cool, dry place away from
                                        direct sunlight. Do not freeze.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not exceed prescribed dosage — high
                                        doses may cause serious health risks
                                        including hormonal imbalance.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Report any side effects like swelling,
                                        pain, acne, or mood swings to a
                                        healthcare provider immediately.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Keep out of reach of children and do not
                                        share with others, even if symptoms
                                        appear similar.
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

export default Sustanon250;
