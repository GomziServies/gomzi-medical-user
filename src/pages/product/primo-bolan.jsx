import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";
import Courses from "../../components/courses";
import LoaderComponent from "../../components/PageLoader";
import ModalVideo from "react-modal-video";


const PrimoBolan = () => {
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
                      src="assets\images\medicine\primo-bolan.jpg"
                      alt="Primo Bolan"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                <div className="inner-shop-details-content">
                  <div className="bg-product px-3 pb-3 pt-3">
                    <h4 className="title">Primo Bolan</h4>
                    <p className="pt-4">
                      Primobolan, known chemically as Methenolone Enanthate, is
                      a mild injectable anabolic steroid with low androgenic
                      properties, making it a popular choice among athletes and
                      bodybuilders seeking lean muscle preservation, strength
                      gains, and aesthetic enhancement without the harsh side
                      effects of stronger compounds. Due to its clean profile,
                      Primobolan is favored both in cutting cycles and lean
                      bulking phases, particularly by those prone to estrogenic
                      or androgenic side effects.
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
                                <h4 className="m-5 mb-3 mx-0">Pharmacology:</h4>
                                <ul>
                                  <li>
                                    <strong>Half-Life:</strong> Approximately
                                    10.5 days
                                  </li>
                                  <li>
                                    <strong>Concentration/Saturation:</strong>{" "}
                                    100 mg/ml (standard concentration for
                                    injection)
                                  </li>
                                  <li>
                                    <strong>
                                      Anabolic to Androgenic Ratio:
                                    </strong>{" "}
                                    High anabolic activity with very low
                                    androgenic expression
                                  </li>
                                  <li>
                                    <strong>Chemical Structure:</strong>{" "}
                                    Dihydrotestosterone (DHT) derivative,
                                    non-aromatizing
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Primary Uses:</h4>
                                <ul>
                                  <li>
                                    <strong>
                                      Lean Muscle Gain & Preservation:
                                    </strong>
                                    <ul>
                                      <li>
                                        Excellent for retaining muscle during
                                        calorie deficits or cutting phases
                                      </li>
                                      <li>
                                        Promotes quality, dense muscle without
                                        water retention
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Strength Enhancement Without Bloat:
                                    </strong>
                                    <ul>
                                      <li>
                                        Offers a clean strength increase, ideal
                                        for athletes in weight-class sports
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Stacking:</strong>
                                    <ul>
                                      <li>
                                        Often paired with Anavar, Testosterone,
                                        or Winstrol for synergistic effects with
                                        minimal risk of side effects
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Administration & Intake Timing:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>Method:</strong> Injectable
                                  </li>
                                  <li>
                                    <strong>Injection Frequency:</strong>{" "}
                                    Typically administered once every 7 days due
                                    to its enanthate ester and long half-life
                                  </li>
                                  <li>
                                    <strong>Common Dosages:</strong>
                                    <ul>
                                      <li>
                                        <strong>Men:</strong> 300-600 mg per
                                        week
                                      </li>
                                      <li>
                                        <strong>Women (rarely):</strong> 50-100
                                        mg per week (with medical supervision
                                        due to virilization risk)
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    Can be run for longer cycles (12-16 weeks)
                                    due to its gentle nature
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">
                                  Key Advantages:
                                </h4>
                                <ul>
                                  <li>
                                    <strong>No Aromatization:</strong>
                                    <ul>
                                      <li>
                                        Does not convert to estrogen, making it
                                        a great option for users looking to
                                        avoid water retention, bloating, and
                                        gynecomastia
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Low Androgenicity:</strong>
                                    <ul>
                                      <li>
                                        Reduced risk of acne, hair loss, and
                                        aggression compared to stronger
                                        compounds
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>
                                      Suitable for Beginners & Sensitive Users:
                                    </strong>
                                    <ul>
                                      <li>
                                        One of the safest injectable steroids,
                                        particularly for those new to anabolic
                                        use or cautious about side effects
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <h4 className="m-5 mb-3 mx-0">Side Effects:</h4>
                                <p>
                                  While Primobolan is generally well-tolerated,
                                  some potential issues may occur, particularly
                                  with long-term or high-dose usage:
                                </p>
                                <ul>
                                  <li>
                                    <strong>Mild Androgenic Effects:</strong>
                                    <ul>
                                      <li>
                                        Possible in genetically predisposed
                                        individuals
                                      </li>
                                      <li>
                                        Includes hair thinning, acne, and
                                        increased facial/body hair growth
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>No Estrogenic Effects:</strong>
                                    <ul>
                                      <li>
                                        Since Primobolan does not aromatize,
                                        there's virtually no risk of
                                        estrogen-related side effects such as:
                                      </li>
                                      <ul>
                                        <li>Gynecomastia</li>
                                        <li>Water retention</li>
                                        <li>
                                          Blood pressure increase due to
                                          bloating
                                        </li>
                                      </ul>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Hormonal Suppression:</strong>
                                    <ul>
                                      <li>
                                        While milder than most other steroids,
                                        prolonged use still results in
                                        suppression of natural testosterone
                                        production
                                      </li>
                                      <li>
                                        Post-cycle therapy (PCT) is recommended
                                        to restore hormonal balance
                                      </li>
                                    </ul>
                                  </li>
                                  <br />
                                  <li>
                                    <strong>Liver Safety:</strong>
                                    <ul>
                                      <li>
                                        Being injectable and non-alkylated, it
                                        is not hepatotoxic, unlike many oral
                                        steroids
                                      </li>
                                    </ul>
                                  </li>
                                </ul>

                                <p className="mt-5">
                                  Primobolan (Methenolone Enanthate) is a
                                  premium-quality anabolic steroid ideal for
                                  users focused on lean muscle growth, muscle
                                  preservation, and minimal side effects. Its
                                  non-aromatizing, low-androgenic profile makes
                                  it a top choice for athletes seeking
                                  performance enhancement with aesthetic appeal
                                  and safe, long-term usage. While it may be
                                  less potent than other anabolic steroids, its
                                  clean gains, safety margin, and versatility
                                  make it highly valued, especially when
                                  combined with complementary compounds in a
                                  well-planned cycle.
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
                                        Only administer PrimoBolan under medical
                                        supervision or in a controlled research
                                        setting.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Inject intramuscularly using sterile,
                                        single-use needles and syringes.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Disinfect both the vial top and the
                                        injection site with alcohol before
                                        injection.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Store in a cool, dark place away from
                                        moisture and heat. Do not freeze.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>✅</td>
                                      <td>
                                        Rotate injection sites regularly to
                                        avoid irritation or tissue damage.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Do not exceed the prescribed dosage.
                                        Long-term use may affect natural hormone
                                        production.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Dispose of used needles and vials in an
                                        approved sharps container.
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>⚠️</td>
                                      <td>
                                        Seek medical attention for side effects
                                        like mood swings, acne, swelling, or
                                        pain at the injection site.
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

export default PrimoBolan;
