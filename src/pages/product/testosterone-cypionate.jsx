import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";

const TestosteroneCypionate = () => {
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
                      src="assets\images\medicine\cypionate.jpg"
                      alt="Testosterone Cypionate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Testosterone Cypionate</h4>
                    <p className="pt-4">
                      Testosterone Cypionate is a synthetic version of the
                      naturally occurring male hormone testosterone. It is
                      structurally and functionally very similar to Testosterone
                      Enanthate, with a slightly longer half-life. Due to its
                      longer duration of action, it is widely used in the United
                      States for testosterone replacement therapy (TRT or HRT)
                      and is also common in performance enhancement cycles.
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
                        <h4 className="m-5 mb-3 mx-0">Pharmacokinetics:</h4>
                        <ul>
                          <li>
                            <strong>Half-Life:</strong> Approximately 8 to 10
                            days
                            <br />
                            Testosterone Cypionate has one of the longer
                            half-lives among injectable testosterone esters.
                            This allows for less frequent injections while still
                            maintaining relatively stable hormone levels.
                          </li>
                          <br />
                          <li>
                            <strong>Esters & Absorption:</strong>
                            <br />
                            The cypionate ester slows the release of
                            testosterone into the bloodstream after
                            intramuscular injection, enabling sustained anabolic
                            effects and hormonal balance over an extended
                            period.
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Recommended Injection Frequency:
                        </h4>
                        <p className="m-0">
                          Due to its extended release, Testosterone Cypionate
                          can be administered once a week or every other week,
                          depending on the user's goals and whether it's being
                          used therapeutically or for performance enhancement.
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage Guidelines (Weekly):
                        </h4>
                        <ul>
                          <li>
                            <strong>Beginner Users:</strong> 300-500 mg
                            <br />
                            Ideal for first-time users aiming for moderate
                            muscle growth and strength improvement.
                          </li>
                          <br />
                          <li>
                            <strong>Intermediate Users:</strong> 500-750 mg
                            <br />
                            Provides enhanced anabolic effects for those with
                            prior cycle experience.
                          </li>
                          <br />
                          <li>
                            <strong>Advanced Users:</strong> 750-1000 mg
                            <br />
                            High doses are reserved for experienced users
                            pursuing maximum muscle gain.
                          </li>
                          <br />
                          <li>
                            <strong>HRT (Hormone Replacement Therapy):</strong>{" "}
                            100-200 mg every 1-2 weeks
                            <br />
                            Prescribed to men with low testosterone levels to
                            restore and maintain hormonal health.
                          </li>
                          <br />
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Injection Sites:</h4>
                        <p>
                          Administered via intramuscular injection, typical
                          injection areas include:
                          <ul className="mt-4">
                            <li>
                              <strong>Gluteus (Buttocks):</strong> Preferred for
                              larger doses due to muscle size.
                            </li>
                            <br />
                            <li>
                              <strong>Deltoids (Shoulders):</strong> More
                              suitable for smaller volumes or
                              self-administration with proper technique.
                            </li>
                            <br />
                          </ul>
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <ul>
                          <li>
                            <strong>Estrogenic Effects:</strong>
                            <ul>
                              <li>Water retention</li>
                              <li>
                                Gynecomastia (male breast tissue development)
                              </li>
                            </ul>
                            <p>
                              These are caused by the aromatization of
                              testosterone into estrogen. Aromatase inhibitors
                              may be used to manage these effects.
                            </p>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects:</strong>
                            <ul>
                              <li>Acne</li>
                              <li>
                                Hair loss (in genetically predisposed
                                individuals)
                              </li>
                              <li>Increased body hair growth</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Hematological Effects:</strong>
                            <ul>
                              <li>
                                Increased hematocrit levels (higher red blood
                                cell count), which can lead to thicker blood and
                                increased cardiovascular strain if not
                                monitored. Regular blood tests are recommended
                                during extended use.
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Psychological & Endocrine Effects:</strong>
                            <ul>
                              <li>Mood swings or increased aggression</li>
                              <li>
                                Suppression of the body's natural testosterone
                                production, often requiring post-cycle therapy
                                (PCT) after discontinuation.
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Testosterone Cypionate is a widely used and effective
                          option for both medical testosterone replacement and
                          athletic performance enhancement. With its long
                          half-life and steady hormone release, it offers
                          convenience and reliable results when used responsibly
                          under proper guidance.
                        </p>

                        <Courses />
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

export default TestosteroneCypionate;
