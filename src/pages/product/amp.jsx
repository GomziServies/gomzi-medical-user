import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import AddToCart from "../add-to-cart";

const AMP = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [fadingItem, setFadingItem] = useState(null);
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const authorization = localStorage.getItem("fg_group_user_authorization");

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
                      src="assets\images\medicine\amp.jpg"
                      alt="AMP (Adenosine Monophosphate)"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">AMP (Adenosine Monophosphate)</h4>
                    <p className="pt-4">
                      AMP (Adenosine Monophosphate) is a naturally occurring
                      nucleotide that plays a critical role in cellular energy
                      metabolism. In its injectable form, AMP is occasionally
                      used as a pre-workout stimulant for increased energy,
                      endurance, and alertness. Though it is not a traditional
                      anabolic steroid or hormonal compound, AMP finds niche
                      applications in performance enhancement, particularly in
                      short bursts of intense activity. It is originally
                      designed for veterinary use, especially in performance
                      animals like racehorses, and occasionally adapted for
                      off-label human use under controlled conditions.
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
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
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
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div>
                        <h4 className="m-5 mb-3 mx-0">
                          Pharmacology & Classification:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Injectable compound
                            (non-steroidal)
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong> Enhances
                            cellular ATP cycling, potentially improving muscular
                            energy output and delaying fatigue during intense
                            exertion
                          </li>
                          <li>
                            <strong>Original Use:</strong>
                            <ul>
                              <li>
                                Developed for veterinary medicine, especially
                                for enhancing energy in performance or
                                recovering horses
                              </li>
                              <li>
                                Sometimes studied for metabolic influence on
                                mitochondrial function in humans
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            <strong>
                              Performance Enhancement (Off-Label Use):
                            </strong>
                            <ul>
                              <li>
                                Acts as a pre-workout energizer promoting mental
                                alertness and stamina
                              </li>
                              <li>
                                Helps delay fatigue during short, high-intensity
                                workouts
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Metabolic Activation:</strong>
                            <ul>
                              <li>
                                May support ATP synthesis and cellular energy
                                turnover
                              </li>
                              <li>
                                Theoretically improves muscle output and
                                neuromuscular efficiency
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Veterinary Applications:</strong>
                            <ul>
                              <li>
                                Used to enhance circulation, muscular function,
                                and metabolism in animals during high demand or
                                recovery
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Dosage Guidelines:</h4>
                        <ul>
                          <li>
                            <strong>
                              Standard Human Doses (Off-Label Use):
                            </strong>{" "}
                            4 ml, 8 ml, or 10 ml per session based on
                            tolerance/goals
                          </li>
                          <li>
                            <strong>Weight-Based Formula:</strong> 2 ml per 100
                            kg of body weight
                          </li>
                          <li>
                            <strong>Timing:</strong> Administered 30-60 minutes
                            before training/performance
                          </li>
                        </ul>
                        <p className="text-danger">
                          <strong>⚠️ Note:</strong> AMP is not approved for
                          routine human use and should only be taken under
                          medical/scientific supervision.
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects & Risks:
                        </h4>
                        <ul>
                          <li>
                            <strong>Neurological Effects:</strong>
                            <ul>
                              <li>Visual disturbances or temporary blurring</li>
                              <li>
                                Tingling, numbness, or temporary disassociation
                                post-injection
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Cardiovascular Strain:</strong>
                            <ul>
                              <li>
                                Possible impact on heart rate and blood pressure
                                in high doses
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Unknown Long-Term Safety:</strong>
                            <ul>
                              <li>Limited data on prolonged human use</li>
                              <li>
                                Potential risk for metabolic disruption or
                                overstimulation
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Legality & Regulatory Status:
                        </h4>
                        <ul>
                          <li>
                            <strong>Human Use:</strong> Not FDA-approved for
                            supplementation
                          </li>
                          <li>
                            <strong>Veterinary Use:</strong> Approved and legal
                            in veterinary applications
                          </li>
                          <li>
                            <strong>Athletic Bans:</strong> May be classified as
                            a stimulant — check with WADA or sport-specific
                            regulations
                          </li>
                        </ul>

                        <p className="mt-5">
                          AMP (Adenosine Monophosphate) is a niche compound used
                          primarily in veterinary medicine but occasionally
                          repurposed off-label for human performance
                          enhancement. While not a classic anabolic agent, it
                          can play a role in short-term energy boosts and
                          metabolic activation. However, its unapproved status
                          and unclear safety profile mean it should be used with
                          caution and not as part of a long-term regimen.
                        </p>

                        <p>
                          For those curious about unconventional or emerging
                          compounds like AMP and their place in enhancement
                          strategies, our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroids-course"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Offline Steroids Course</strong>{" "}
                          </a>
                          and
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroid-testosterone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Online Course</strong>{" "}
                          </a>
                          provide a solid scientific foundation. You can also
                          choose our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-androgenic-steroids"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Flexible Learning Course</strong>{" "}
                          </a>
                          for a more self-paced approach. For deeper
                          exploration, our
                          <a
                            href="https://fggroup.in/book/steroids-book"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Comprehensive Steroids Book</strong>{" "}
                          </a>
                          includes both traditional and lesser-known performance
                          compounds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AMP;
