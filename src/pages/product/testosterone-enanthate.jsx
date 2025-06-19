import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const TestosteroneEnanthate = () => {
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
                      src="assets\images\medicine\enanthate.jpg"
                      alt="Testosterone Enanthate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Testosterone Enanthate</h4>
                    <p className="pt-4">
                      Testosterone Enanthate is a synthetic form of the
                      naturally occurring male sex hormone, testosterone. It is
                      classified as a long-acting ester and is commonly used in
                      both medical and performance-enhancing contexts. Its slow
                      and stable release into the bloodstream makes it ideal for
                      individuals seeking consistent hormone levels with less
                      frequent dosing.
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
                        <h4 className="m-5 mb-3 mx-0">Pharmacokinetics:</h4>
                        <ul>
                          <li>
                            <strong>Half-Life:</strong> 5 to 7 days
                            <br />
                            Testosterone Enanthate has a relatively long
                            half-life, which allows it to maintain stable levels
                            in the bloodstream for several days.
                          </li>
                          <br />
                          <li>
                            <strong>Esters & Absorption:</strong>
                            <br />
                            The enanthate ester slows down the release of
                            testosterone after intramuscular injection.
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Recommended Injection Frequency:
                        </h4>
                        <p>
                          To maintain stable hormone levels and minimize
                          hormonal fluctuations, injections are typically
                          administered every 5 to 7 days.
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage Guidelines (Weekly):
                        </h4>
                        <ul>
                          <li>
                            <strong>Beginner Users:</strong> 250–500 mg Suitable
                            for new users with moderate goals.
                          </li>
                          <br />
                          <li>
                            <strong>Intermediate Users:</strong> 500–750 mg For
                            more muscle growth and strength.
                          </li>
                          <br />
                          <li>
                            <strong>Advanced Users:</strong> 750–1000 mg Used in
                            intense cycles.
                          </li>
                          <br />
                          <li>
                            <strong>HRT:</strong> 100–200 mg every 1–2 weeks For
                            low testosterone levels.
                          </li>
                          <br />
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Injection Sites:</h4>
                        <p>
                          Administered via intramuscular injection. Common sites
                          include the gluteus and thigh.
                          <ul className="mt-4">
                            <li>
                              <strong>Gluteus (Buttocks)</strong> Most preferred
                              site due to large muscle mass.
                            </li>
                            <br />
                            <li>
                              <strong>Quadriceps (Thighs)</strong> Offers easier
                              self-administration but may cause more discomfort
                              in some individuals.
                            </li>
                            <br />
                          </ul>
                        </p>

                        <h4 className="m-5 mb-3 mx-0">Potential Side Effects:</h4>
                        <ul>
                          <li>
                            <strong>Estrogenic Effects:</strong>
                            <ul>
                              <li>Water retention</li>
                              <li>
                                Gynecomastia (development of breast tissue in
                                males)
                              </li>
                            </ul>
                            <p className="m-0">
                              These occur due to the conversion (aromatization)
                              of testosterone into estrogen. An aromatase
                              inhibitor may be used to manage this.
                            </p>
                          </li>
                          <br />
                          <li>
                            <strong>Androgenic Effects:</strong>
                            <ul>
                              <li>Acne</li>
                              <li>
                                Hair thinning or male pattern baldness
                                (especially in genetically predisposed
                                individuals)
                              </li>
                              <li>Increased body/facial hair growth</li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Psychological Effects:</strong>
                            <ul>
                              <li>Mood swings</li>
                              <li>
                                Increased aggression or irritability in some
                                cases
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Endocrine Disruption:</strong>
                            <ul>
                              <li>
                                Suppression of the body’s natural testosterone
                                production, which may require a post-cycle
                                therapy (PCT) protocol after discontinuation.
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Testosterone Enanthate is a powerful and versatile
                          compound used both therapeutically and for physical
                          performance. When used responsibly, it can provide
                          significant benefits in terms of muscle mass,
                          strength, and overall vitality. However, proper
                          dosing, monitoring, and support therapies are crucial
                          to minimize side effects and ensure hormonal balance.
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

export default TestosteroneEnanthate;
