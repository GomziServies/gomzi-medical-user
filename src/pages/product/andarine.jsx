import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import ModalVideo from "react-modal-video";
import { CloseButton } from "react-bootstrap";

const Andarine = () => {
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
                      src="assets\images\medicine\andarine.jpg"
                      alt="Andarine (S4)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Andarine (S4)</h4>
                    <p className="pt-4">
                      Andarine (S4) is a moderately potent Selective Androgen
                      Receptor Modulator (SARM) known for promoting fat loss,
                      muscle preservation, and strength gains. Initially
                      developed for treating muscle wasting and osteoporosis,
                      it's popular in cutting and recomp cycles for its dry,
                      lean gains and vascularity enhancement.
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
                                    <strong>Type:</strong> Oral SARM
                                  </li>
                                  <li>
                                    <strong>Half-Life:</strong> 4-6 hours
                                  </li>
                                  <li>
                                    <strong>Mechanism:</strong>
                                    <ul>
                                      <li>
                                        Binds selectively to androgen receptors
                                        in muscle and bone
                                      </li>
                                      <li>
                                        Helps preserve lean muscle during
                                        calorie deficits
                                      </li>
                                      <li>Increases strength and endurance</li>
                                      <li>
                                        Does not aromatize (no conversion to
                                        estrogen)
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Dosage & Administration:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Typical Dose Range:</strong> 25-50
                                    mg per day
                                  </li>
                                  <li>
                                    <strong>Beginner Dose:</strong> 25 mg
                                  </li>
                                  <li>
                                    <strong>Advanced Users:</strong> Up to 50 mg
                                  </li>
                                  <li>
                                    <strong>Frequency:</strong> Split into two
                                    doses daily (short half-life)
                                  </li>
                                  <li>
                                    <strong>Cycle Length:</strong> 6-8 weeks
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy (PCT):</strong>{" "}
                                    Recommended for cycles over 4 weeks or
                                    higher doses
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Primary Uses & Benefits:
                                </h4>
                                <ul>
                                  <li>
                                    Fat Loss - enhances fat oxidation; ideal for
                                    cutting cycles
                                  </li>
                                  <li>
                                    Muscle Preservation - retains lean mass
                                    during deficits
                                  </li>
                                  <li>
                                    Increased Vascularity - dry, hard muscle
                                    appearance
                                  </li>
                                  <li>
                                    Strength & Performance - better lifts,
                                    improved endurance
                                  </li>
                                  <li>
                                    Recomping - promotes simultaneous fat loss
                                    and muscle gain
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Side Effects & Risks:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Visual Disturbances:</strong>
                                    <ul>
                                      <li>
                                        Yellow vision tint or night blindness
                                      </li>
                                      <li>
                                        Dose-dependent and typically reversible
                                        after use
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <strong>
                                      Mild Testosterone Suppression:
                                    </strong>{" "}
                                    Less than stronger SARMs, but still PCT
                                    advised
                                  </li>
                                  <li>
                                    <strong>
                                      No Estrogenic or Liver Toxic Effects:
                                    </strong>{" "}
                                    No gynecomastia or liver strain at normal
                                    doses
                                  </li>
                                  <li>
                                    <strong>Appetite Suppression:</strong>{" "}
                                    Reported during cutting phases by some users
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Stacking Options:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cutting Stack:</strong> Andarine +
                                    Cardarine (GW-501516)
                                  </li>
                                  <li>
                                    <strong>Recomp Stack:</strong> Andarine +
                                    Ostarine (MK-2866)
                                  </li>
                                  <li>
                                    <strong>Lean Bulking:</strong> Add low-dose
                                    Ligandrol (LGD-4033)
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Cycle Support & PCT:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Cycle Support:</strong> Usually not
                                    required, but routine health checks
                                    recommended
                                  </li>
                                  <li>
                                    <strong>Post-Cycle Therapy:</strong>
                                    <ul>
                                      <li>Recommended after 4-6 week cycles</li>
                                      <li>
                                        Nolvadex or Clomid for 3-4 weeks to
                                        restore natural testosterone
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Andarine (S4) is a well-regarded SARM for
                                  cutting and recomp phases, providing strength,
                                  fat loss, and hard muscle definition with
                                  minimal estrogenic or liver concerns. Though
                                  its vision-related side effects are unique,
                                  they are temporary and manageable for most
                                  users when dosing is properly controlled.
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
                                src="assets/images/medicine/video/pct.jpeg"
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
                                        src="assets/images/medicine/video/pct.mp4"
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
                                        Andarine S4 is a SARM researched for its
                                        ability to increase muscle mass and
                                        promote fat loss.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Common research dosage: 25–50 mg per
                                        day, often split into two doses due to
                                        short half-life (~4–6 hours).
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        May support lean muscle retention during
                                        calorie deficits or cutting phases.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Potential to improve bone density —
                                        under investigation for osteoporosis
                                        support.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        May cause vision-related side effects
                                        (night blindness, yellow tint),
                                        especially at higher doses.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        May cause temporary suppression of
                                        natural testosterone — post-cycle
                                        therapy (PCT) is often used in research.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Labeled for research use only — not
                                        approved for human consumption or
                                        therapeutic use.
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

export default Andarine;
