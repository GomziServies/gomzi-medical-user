import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const YK11 = () => {
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
                                        boxShadow:
                                            "0 0 20px rgba(48, 48, 48, 0.25)",
                                    }}
                                >
                                    <div
                                        className="product-image-container"
                                        ref={imageRef}
                                        style={{
                                            opacity: opacity,
                                            transition:
                                                "opacity 0.3s ease-in-out",
                                        }}
                                    >
                                        <img
                                            src="assets\images\medicine\yk-11.jpg"
                                            alt="YK-11"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                                <div className="inner-shop-details-content">
                                    <div className="bg-product px-3 pb-3 pt-3">
                                        <h4 className="title">YK-11</h4>
                                        <p className="pt-4">
                                            YK-11 is a myostatin inhibitor and
                                            selective androgen receptor
                                            modulator (SARM) hybrid, designed to
                                            significantly increase muscle mass
                                            and strength by inhibiting
                                            myostatin—a protein that limits
                                            muscle growth. While often
                                            classified as a SARM, it also
                                            behaves like a synthetic steroidal
                                            compound due to its chemical
                                            structure.
                                        </p>

                                        <div className="inner-shop-perched-info mt-3 row align-items-center ms-0">
                                            <button
                                                onClick={() =>
                                                    addProductInCart(id)
                                                }
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
                                    <ul
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
                                    </ul>
                                    <div
                                        className="tab-content"
                                        id="myTabContentTwo"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="description"
                                            role="tabpanel"
                                            aria-labelledby="description-tab"
                                        >
                                            <div>
                                                <h4 className="m-5 mb-3 mx-0">
                                                    Pharmacology & Mechanism of
                                                    Action:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>Type:</strong>{" "}
                                                        Synthetic steroidal SARM
                                                        / Myostatin inhibitor
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Half-Life:
                                                        </strong>{" "}
                                                        6-12 hours
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Mechanism of Action:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Binds to
                                                                androgen
                                                                receptors to
                                                                promote anabolic
                                                                activity
                                                            </li>
                                                            <li>
                                                                Inhibits
                                                                myostatin,
                                                                allowing
                                                                unrestricted
                                                                muscle growth
                                                            </li>
                                                            <li>
                                                                Increases levels
                                                                of follistatin,
                                                                further
                                                                supporting
                                                                muscle
                                                                hypertrophy
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Dosage & Administration:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Typical Dose Range:
                                                        </strong>{" "}
                                                        5-10 mg per day
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Advanced Users:
                                                        </strong>{" "}
                                                        May use up to 15 mg/day
                                                        (higher risk)
                                                    </li>
                                                    <li>
                                                        <strong>Timing:</strong>{" "}
                                                        Split into two doses
                                                        daily (every 6-8 hours)
                                                        due to short half-life
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Cycle Length:
                                                        </strong>{" "}
                                                        4-8 weeks
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            PCT Required:
                                                        </strong>{" "}
                                                        Yes, due to potential
                                                        testosterone suppression
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Primary Uses & Benefits:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        Muscle Growth - one of
                                                        the most potent SARMs
                                                        for size gains
                                                    </li>
                                                    <li>
                                                        Strength Enhancement -
                                                        promotes significant
                                                        power increases
                                                    </li>
                                                    <li>
                                                        Fat Loss Support -
                                                        preserves lean mass
                                                        during caloric deficits
                                                    </li>
                                                    <li>
                                                        Myostatin Inhibition -
                                                        allows for
                                                        greater-than-natural
                                                        muscle potential
                                                    </li>
                                                    <li>
                                                        Minimal Water Retention
                                                        - ideal for lean bulk or
                                                        recomposition
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Side Effects & Risks:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Common Side Effects:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Testosterone
                                                                suppression -
                                                                PCT is highly
                                                                recommended
                                                            </li>
                                                            <li>
                                                                Liver toxicity -
                                                                due to its
                                                                methylated
                                                                structure
                                                            </li>
                                                            <li>
                                                                Joint discomfort
                                                                or pain -
                                                                especially when
                                                                used without
                                                                support agents
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Other
                                                            Considerations:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Not well studied
                                                                in humans;
                                                                long-term safety
                                                                unknown
                                                            </li>
                                                            <li>
                                                                Can be harsh if
                                                                used improperly
                                                                or at high doses
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Stacking Options:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Muscle-Building
                                                            Stack:
                                                        </strong>{" "}
                                                        YK-11 + LGD-4033 or
                                                        RAD-140
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Fat Loss & Recomp
                                                            Stack:
                                                        </strong>{" "}
                                                        YK-11 + GW-501516
                                                        (Cardarine) + MK-677
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            With Liver Support:
                                                        </strong>{" "}
                                                        Always include liver
                                                        protectants (e.g., NAC,
                                                        TUDCA)
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Cycle Support & PCT:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Cycle Support:
                                                        </strong>{" "}
                                                        Yes - recommended (e.g.,
                                                        TUDCA or Milk Thistle)
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            PCT Required:
                                                        </strong>{" "}
                                                        Yes - 4-week PCT with
                                                        Clomid or Nolvadex
                                                        advised
                                                    </li>
                                                </ul>

                                                <p className="mt-5">
                                                    YK-11 is a powerful compound
                                                    for advanced users focused
                                                    on maximum muscle growth and
                                                    performance enhancement. Its
                                                    myostatin-inhibiting effects
                                                    are unique, but come with
                                                    increased risks. Responsible
                                                    use with liver support,
                                                    proper dosing, and PCT is
                                                    crucial for safety and
                                                    effectiveness.
                                                </p>

                                                <p>
                                                    To learn how to safely and
                                                    strategically use advanced
                                                    compounds like YK-11,
                                                    consider enrolling in our
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-steroids-course"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-dark"
                                                    >{' '}
                                                        <strong>
                                                            Offline Steroids
                                                            Course
                                                        </strong>
                                                    </a>
                                                    , or start anytime with our
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-steroid-testosterone"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-dark"
                                                    >{' '}  
                                                        <strong>
                                                            Online Course
                                                        </strong>
                                                    </a>
                                                    . If you prefer flexibility,
                                                    explore our
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-androgenic-steroids"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-dark"
                                                    >{' '}
                                                        <strong>
                                                            Flexible Learning
                                                            Program
                                                        </strong>
                                                    </a>
                                                    . For deep insights into
                                                    muscle-building agents,
                                                    myostatin science, and
                                                    safety protocols, check out
                                                    our
                                                    <a
                                                        href="https://fggroup.in/book/steroids-book"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-dark"
                                                    >{' '}  
                                                        <strong>
                                                            Comprehensive
                                                            Steroids Book
                                                        </strong>
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

export default YK11;
