import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";


const RAD140 = () => {
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
                      src="assets\images\medicine\rad140.jpg"
                      alt="RAD140 (Testolone)
"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">RAD140 (Testolone)</h4>
                    <p className="pt-4">
                      RAD-140, commonly known as Testolone, is one of the most
                      powerful SARMs (Selective Androgen Receptor Modulators).
                      It is primarily used for bulking, muscle mass gain, and
                      strength enhancement, offering steroid-like results
                      without the severe androgenic side effects.
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
                                    <strong>Type:</strong> Oral Selective
                                    Androgen Receptor Modulator (SARM)
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> ~20 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism:</strong>
                                    <ul>
                                      <li>
                                        Selectively targets androgen receptors
                                        in muscle and bone tissue
                                      </li>
                                      <li>
                                        Stimulates anabolic activity without
                                        affecting prostate or other organs
                                      </li>
                                      <li>
                                        High anabolic-to-androgenic ratio,
                                        mimicking testosterone’s muscle-building
                                        effects
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
                                    <strong>Frequency:</strong> Once daily
                                    (20-hour half-life)
                                  </li>
                                  <li>
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>{" "}
                                    Strongly recommended, especially at higher
                                    doses
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Bulking - excellent for rapid muscle size
                                    and strength gains
                                  </li>
                                  <li>
                                    Strength Gains - boosts endurance, power,
                                    and performance
                                  </li>
                                  <li>
                                    Body Recomposition - builds lean mass while
                                    reducing fat
                                  </li>
                                  <li>
                                    Testosterone Alternative - researched for
                                    potential TRT-like benefits
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Considerations:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Mild to Moderate Side Effects:
                                    </strong>
                                    <ul>
                                      <li>
                                        Testosterone suppression after 4+ weeks
                                      </li>
                                      <li>
                                        Aggression or mood swings in some users
                                      </li>
                                      <li>
                                        Slight liver stress at higher doses -
                                        consider liver support
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Not Aromatizing:</strong>
                                    <ul>
                                      <li>No conversion to estrogen</li>
                                      <li>
                                        No risk of gynecomastia or estrogenic
                                        water retention
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>Hair Loss & Acne:</strong> Possible
                                    in sensitive individuals but generally less
                                    than steroids
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>For Bulking:</strong> RAD-140 +
                                    LGD-4033 or MK-677
                                  </li>
                                  <li>
                                    <strong>For Recomp:</strong> RAD-140 +
                                    Cardarine or Ostarine
                                  </li>
                                  <li>
                                    <strong>For Cutting:</strong> RAD-140 + S4
                                    or SR9009
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong> Use liver
                                    support like NAC or TUDCA
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>
                                    <ul>
                                      <li>Needed to restore HPTA function</li>
                                      <li>
                                        <strong>Example:</strong> Clomid (25-50
                                        mg/day) or Nolvadex (20 mg/day) for 4
                                        weeks
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  RAD-140 (Testolone) stands out as one of the
                                  most potent SARMs for muscle growth and
                                  recomposition. Its steroid-like benefits come
                                  with less risk but still require disciplined
                                  cycling and effective post-cycle therapy to
                                  safeguard hormonal health.
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
                                        RAD140 is intended for research and
                                        laboratory use only. Not approved for
                                        human consumption.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a secure, dry, and cool
                                        environment away from heat and sunlight.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Wear protective gloves when handling to
                                        avoid direct skin contact in lab
                                        settings.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Keep capsules clearly labeled and out of
                                        reach of unauthorized individuals.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Dispose of expired or unused compounds
                                        according to hazardous materials
                                        regulations.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not ingest. Potential side effects
                                        include hormonal suppression and liver
                                        strain if misused.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Not to be used by minors, pets, or
                                        non-research personnel under any
                                        circumstances.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        In case of accidental exposure or
                                        ingestion, seek immediate medical
                                        assistance.
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

export default RAD140;
