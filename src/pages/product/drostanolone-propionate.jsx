import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const DrostanolonePropionate = () => {
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
                  style={{ boxShadow: "0 0 20px rgba(48, 48, 48, 0.25)" }}
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
                      src="assets\images\medicine\drostanolone-propionate.jpg"
                      alt="Drostanolone Propionate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Drostanolone Propionate</h4>
                    <p className="pt-4">
                      Drostanolone Propionate is a synthetic anabolic-androgenic
                      steroid (AAS), derived from dihydrotestosterone (DHT), and
                      is commonly known under the brand name Masteron. It has
                      been widely used in bodybuilding, athletics, and certain
                      medical settings.
                    </p>

                    <div className="inner-shop-perched-info mt-3 row align-items-center ms-0">
                      <button
                        onClick={() => addProductInCart(id)}
                        className="col-md-6 col-11 quick-buy-btn m-0 ms-md-3 mt-3 product-card__btn"
                      >
                        <i className="fa-solid fa-bolt me-2 "></i>contact
                        pharmacist
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
                          Pharmacology & Mechanism of Action:
                        </h4>
                        <ul>
                          <li>
                            <strong>Type:</strong> Injectable anabolic steroid
                            (DHT-derived)
                          </li>
                          <li>
                            <strong>Half-Life:</strong> ~2.5 days (Propionate
                            ester)
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong>
                            <ul>
                              <li>
                                Binds to androgen receptors to stimulate protein
                                synthesis and muscle growth
                              </li>
                              <li>
                                Does not aromatize into estrogen, reducing risk
                                of water retention and gynecomastia
                              </li>
                              <li>
                                Exhibits anti-estrogenic effects—can mitigate
                                estrogenic side effects of other steroids
                              </li>
                              <li>
                                Derived from dihydrotestosterone (DHT),
                                contributing to muscle hardness and density
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose Range:</strong>
                            <ul>
                              <li>
                                Men: 300–600 mg per week (divided into EOD
                                injections)
                              </li>
                              <li>
                                Women: 50–100 mg per week (used with caution)
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Timing:</strong> Injected every other day
                            due to short ester
                          </li>
                          <li>
                            <strong>Cycle Length:</strong> 6–10 weeks
                          </li>
                          <li>
                            <strong>PCT Required:</strong> Yes, post-cycle
                            therapy is necessary to restore natural testosterone
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            <strong>Muscle Hardening:</strong> Creates a dry,
                            dense, vascular appearance
                          </li>
                          <li>
                            <strong>Cutting Cycles:</strong> Helps retain lean
                            muscle mass during calorie deficits
                          </li>
                          <li>
                            <strong>Minimal Water Retention:</strong> No
                            bloating or puffiness
                          </li>
                          <li>
                            <strong>Anti-Estrogenic Effects:</strong> Lowers
                            estrogen-related risks when stacked
                          </li>
                          <li>
                            <strong>Increased Muscle Density:</strong>{" "}
                            Especially effective for pre-contest or lean
                            athletes
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects & Risks:</h4>
                        <ul>
                          <li>
                            <strong>Androgenic Side Effects:</strong>
                            <ul>
                              <li>
                                Acne, oily skin, hair loss (especially in those
                                prone to male-pattern baldness)
                              </li>
                              <li>Increased libido or aggression</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Female-Specific Risks:</strong>
                            <ul>
                              <li>
                                Potential for virilization (deep voice, hair
                                growth, menstrual disruption)
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>Cardiovascular Health:</strong>
                            <ul>
                              <li>
                                May negatively impact cholesterol (lower HDL)
                              </li>
                              <li>Monitor blood pressure and lipid levels</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Liver Toxicity:</strong>
                            <ul>
                              <li>
                                No hepatotoxicity (safe for liver in injectable
                                form)
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Stacking Options:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Stack:</strong> Drostanolone +
                            Testosterone Propionate + Winstrol
                          </li>
                          <li>
                            <strong>Pre-Contest Stack:</strong> Drostanolone +
                            Trenbolone + Anavar
                          </li>
                          <li>
                            <strong>Mild Stack:</strong> Drostanolone +
                            Primobolan
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Cycle Support & PCT:</h4>
                        <ul>
                          <li>
                            <strong>Cycle Support:</strong> Support
                            cardiovascular health with omega-3s and regular
                            bloodwork
                          </li>
                          <li>
                            <strong>PCT (Post-Cycle Therapy):</strong> 4–6 weeks
                            of Clomid or Nolvadex to restore natural
                            testosterone levels
                          </li>
                        </ul>

                        <p className="mt-5">
                          Drostanolone Propionate (Masteron) is a DHT-derived
                          injectable steroid prized for its muscle-hardening,
                          anti-estrogenic, and non-bloating properties. It is
                          widely used in cutting and contest preparation cycles,
                          especially among lean users aiming for maximum
                          definition. While not extremely anabolic on its own,
                          it stacks effectively and delivers a polished
                          physique. Proper PCT and cardiovascular monitoring are
                          essential for safe and effective use.
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

export default DrostanolonePropionate;
