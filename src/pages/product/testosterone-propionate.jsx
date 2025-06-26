import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const TestosteronePropionate = () => {
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
                      src="assets\images\medicine\propionate.jpg"
                      alt="Testosterone Propionate"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Testosterone Propionate</h4>
                    <p className="pt-4">
                      Testosterone Propionate is a fast-acting injectable form
                      of testosterone, attached to the short “propionate” ester.
                      Due to its quick release into the bloodstream, it's often
                      preferred by individuals looking for rapid results or
                      running short cycles. However, this shorter half-life
                      requires more frequent injections, which can be
                      inconvenient for some users.
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
                            <strong>Half-Life:</strong> Approximately 2 to 3
                            days
                            <br />
                            Being a short ester, Testosterone Propionate enters
                            and exits the system relatively quickly, making it
                            ideal for users who prefer tighter control over
                            hormone levels and faster cycle adjustment.
                          </li>
                          <br />
                          <li>
                            <strong>Esters & Absorption:</strong>
                            <br />
                            The propionate ester allows for faster absorption
                            and quicker clearance from the body compared to
                            longer esters like Enanthate or Cypionate.
                          </li>
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">
                          Recommended Injection Frequency:
                        </h4>
                        <p>
                          Due to its short half-life, injections are typically
                          required every other day (EOD) to maintain stable
                          testosterone levels and avoid hormonal fluctuations.
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Dosage Guidelines (EOD - Every Other Day):
                        </h4>
                        <ul>
                          <li>
                            <strong>Beginner Users:</strong> 50-100 mg every
                            other day
                            <br />
                            Suitable for those new to testosterone cycles and
                            looking for moderate results.
                          </li>
                          <br />
                          <li>
                            <strong>Intermediate Users:</strong> 100-150 mg
                            every other day
                            <br />
                            Provides enhanced anabolic effects for users with
                            some cycle experience.
                          </li>
                          <br />
                          <li>
                            <strong>Advanced Users:</strong> 150-200 mg every
                            other day
                            <br />
                            High-level dosing aimed at maximum muscle gain,
                            often used in more aggressive cutting or bulking
                            cycles.
                          </li>
                          <br />
                          <li>
                            <strong>HRT (Hormone Replacement Therapy):</strong>{" "}
                            Rarely used
                            <br />
                            Not commonly prescribed for HRT due to the
                            inconvenience of frequent injections and rapid
                            hormone shifts.
                          </li>
                          <br />
                        </ul>

                        <h4 className="m-5 mb-3 mx-0">Injection Sites:</h4>
                        <p>
                          Administered via intramuscular injection, common sites
                          include:
                          <ul className="mt-4">
                            <li>
                              <strong>Glutes (Buttocks):</strong> Most common
                              and less painful
                            </li>
                            <br />
                            <li>
                              <strong>Quadriceps (Thighs):</strong> Convenient
                              for self-injection
                            </li>
                            <br />
                            <li>
                              <strong>Deltoids (Shoulders):</strong> Used for
                              smaller volume injections
                            </li>
                          </ul>
                        </p>

                        <h4 className="m-5 mb-3 mx-0">
                          Potential Side Effects:
                        </h4>
                        <ul>
                          <li>
                            <strong>Injection Site Discomfort:</strong>
                            <br />
                            Due to the higher frequency of injections and the
                            nature of the propionate ester, many users report
                            more pain, irritation, or swelling at the injection
                            site.
                          </li>
                          <br />
                          <li>
                            <strong>
                              Hormonal Side Effects (Similar to Other Esters):
                            </strong>
                            <ul>
                              <li>Water retention</li>
                              <li>
                                Gynecomastia (male breast enlargement due to
                                estrogen conversion)
                              </li>
                              <li>
                                Acne and hair loss in genetically predisposed
                                individuals
                              </li>
                              <li>
                                Suppression of natural testosterone production
                              </li>
                            </ul>
                          </li>
                          <br />
                          <li>
                            <strong>Mood & Psychological Effects:</strong>
                            <ul>
                              <li>
                                Mood swings, irritability, or emotional
                                fluctuations may be more noticeable due to the
                                sharp rises and drops in testosterone levels if
                                injections are missed or inconsistent.
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <p className="mt-5">
                          Testosterone Propionate is a fast-acting testosterone
                          ester ideal for users seeking quicker onset of results
                          or running shorter cycles. While it offers certain
                          advantages in terms of flexibility and control, the
                          need for frequent injections and increased
                          injection-site discomfort may be drawbacks for some.
                          Proper planning, consistent dosing, and monitoring are
                          essential for maximizing benefits and minimizing side
                          effects.
                        </p>

                        <p>
                          If you want to understand how to use fast-acting
                          esters like Testosterone Propionate safely and
                          effectively, we offer multiple learning resources.
                          Enroll in our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroids-course"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Offline Steroids Course</strong>
                          </a>
                          , take the
                          <a
                            href="https://fggroup.in/fgiit/anabolic-steroid-testosterone"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Online Course</strong>
                          </a>
                          , or choose our
                          <a
                            href="https://fggroup.in/fgiit/anabolic-androgenic-steroids"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Flexible Learning Course</strong>{" "}
                          </a>
                          to learn at your convenience. For a more detailed
                          foundation, our
                          <a
                            href="https://fggroup.in/book/steroids-book"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black"
                          >
                            {" "}
                            <strong>Comprehensive Book on Steroids</strong>{" "}
                          </a>
                          is also available.
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

export default TestosteronePropionate;
