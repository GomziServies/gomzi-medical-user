import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const Stenabolic = () => {
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
                            <strong>Type:</strong> Non-hormonal oral compound
                            (REV-ERBa agonist)
                          </li>
                          <li>
                            <strong>Half-Life:</strong> 4-6 hours
                          </li>
                          <li>
                            <strong>Mechanism of Action:</strong>
                            <ul>
                              <li>
                                Activates REV-ERBa proteins which regulate
                                circadian rhythm and metabolism
                              </li>
                              <li>
                                Boosts mitochondrial activity in muscle tissue
                              </li>
                              <li>
                                Increases fat oxidation and reduces glucose
                                storage
                              </li>
                              <li>
                                Mimics effects of endurance training at the
                                cellular level
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage & Administration:
                        </h4>
                        <ul>
                          <li>
                            <strong>Typical Dose Range:</strong> 10-30 mg per
                            day
                          </li>
                          <li>
                            <strong>Beginner Dose:</strong> 10-20 mg
                          </li>
                          <li>
                            <strong>Advanced Users:</strong> 30 mg
                          </li>
                          <li>
                            <strong>Frequency:</strong> 2-3 times daily (due to
                            short half-life)
                          </li>
                          <li>
                            <strong>Cycle Length:</strong> 6-8 weeks recommended
                          </li>
                          <li>
                            <strong>PCT:</strong> Not required (non-hormonal)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Primary Uses & Benefits:
                        </h4>
                        <ul>
                          <li>
                            Fat Burning - promotes increased fat metabolism and
                            energy expenditure
                          </li>
                          <li>
                            Endurance Boost - enhances aerobic capacity and
                            workout stamina
                          </li>
                          <li>
                            Metabolic Regulation - supports healthy blood sugar
                            and cholesterol levels
                          </li>
                          <li>
                            Non-Stimulant - increases alertness and energy
                            without CNS stimulation
                          </li>
                          <li>
                            Body Recomposition - aids in fat loss while
                            preserving lean muscle
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Side Effects & Risks:</h4>
                        <ul>
                          <li>
                            <strong>Short-Term Effects:</strong>
                            <ul>
                              <li>Mild fatigue at higher doses</li>
                              <li>Occasional headaches or dizziness</li>
                              <li>
                                Muscle cramps (usually related to hydration
                                levels)
                              </li>
                            </ul>
                          </li>
                          <li>
                            <strong>No Hormonal Suppression:</strong> Does not
                            impact testosterone or estrogen
                          </li>
                          <li>
                            <strong>Liver Consideration:</strong> Mild liver
                            stress possible at very high doses
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Stacking Options:</h4>
                        <ul>
                          <li>
                            <strong>Cutting Stack:</strong> SR9009 + Cardarine
                            (GW-501516) or Ostarine (MK-2866)
                          </li>
                          <li>
                            <strong>Endurance Stack:</strong> SR9009 + Ligandrol
                            (LGD-4033)
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Cycle Support & PCT:</h4>
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
                          Stenabolic (SR9009) is a versatile, non-hormonal
                          performance enhancer known for boosting endurance, fat
                          oxidation, and metabolic health. It's ideal for
                          cutting phases, athletic performance, or improving
                          body composition without affecting hormone levels. Due
                          to its short half-life, multiple doses per day ensure
                          the best results with minimal side effects.
                        </p>

                        <p>
                          To understand how to optimize compounds like
                          Stenabolic for fat loss, endurance, and metabolic
                          performance, enroll in our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroids-course"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Offline Steroids Course</strong>
                          </a>
                          , or begin learning through our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroid-testosterone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Online Course</strong>
                          </a>
                          . For independent learners, explore the
                          <a
                            href="https://fggroup.in/fgiit/anabolic-androgenic-steroids"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Flexible Learning Course</strong>
                          </a>
                          . For advanced protocols, dosage strategies, and
                          performance enhancement guidance, refer to our
                          <a
                            href="https://fggroup.in/book/steroids-book"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Comprehensive Steroids Book</strong>
                          </a>
                          .
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

export default Stenabolic;
