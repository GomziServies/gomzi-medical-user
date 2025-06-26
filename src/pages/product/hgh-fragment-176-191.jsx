import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import { useLocation } from "react-router";
import LoginModal from "../../assets/js/popup/login";
import { axiosInstance } from "../../assets/js/config/api";

const HGHFragment176191 = () => {
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
                                            src="assets\images\medicine\hgh-fragment-176-191.jpg"
                                            alt="HGH Fragment 176-191"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-flex align-items-center mt-md-0 p-0">
                                <div className="inner-shop-details-content">
                                    <div className="bg-product px-3 pb-3 pt-3">
                                        <h4 className="title">
                                            HGH Fragment 176-191
                                        </h4>
                                        <p className="pt-4">
                                            HGH Fragment 176-191 is a synthetic
                                            peptide derived from the C-terminal
                                            portion of the human growth hormone
                                            (hGH) molecule. It was specifically
                                            developed to target fat loss without
                                            the full growth hormone’s effects on
                                            muscle growth, blood sugar levels,
                                            or bone development. It focuses
                                            purely on lipolysis (fat breakdown),
                                            making it a popular fat-loss agent.
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
                                                        Synthetic peptide
                                                        (fragment of hGH)
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Half-Life:
                                                        </strong>{" "}
                                                        Approx. 1-2 hours
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Mechanism of Action:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Stimulates
                                                                lipolysis
                                                                (breakdown of
                                                                stored fat)
                                                            </li>
                                                            <li>
                                                                Inhibits
                                                                lipogenesis
                                                                (formation of
                                                                new fat)
                                                            </li>
                                                            <li>
                                                                Increases
                                                                fat-burning
                                                                enzyme activity
                                                            </li>
                                                            <li>
                                                                Especially
                                                                effective in
                                                                trouble areas
                                                                like belly,
                                                                hips, and thighs
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
                                                            Typical Dose:
                                                        </strong>{" "}
                                                        250-500 mcg per day
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Frequency:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Once or twice
                                                                daily depending
                                                                on goals
                                                            </li>
                                                            <li>
                                                                Often split
                                                                between morning
                                                                and pre-workout
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Administration Timing &
                                                    Method:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Injection Type:
                                                        </strong>{" "}
                                                        Subcutaneous (under the
                                                        skin)
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Injection Site:
                                                        </strong>{" "}
                                                        Abdominal fat or other
                                                        localized fatty areas
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Best Times to
                                                            Inject:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Morning on an
                                                                empty stomach
                                                            </li>
                                                            <li>
                                                                Pre-workout for
                                                                enhanced fat
                                                                oxidation
                                                            </li>
                                                            <li>
                                                                Avoid eating for
                                                                30-60 minutes
                                                                after injection
                                                                for maximum
                                                                effect
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Cycle Duration & Protocol:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Cycle Length:
                                                        </strong>{" "}
                                                        4-8 weeks per cycle
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Post-Cycle:
                                                        </strong>{" "}
                                                        Take a break to prevent
                                                        desensitization
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Repeatability:
                                                        </strong>{" "}
                                                        Safe to repeat with
                                                        adequate breaks
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Benefits & Applications:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        Rapid fat loss in
                                                        stubborn areas
                                                    </li>
                                                    <li>
                                                        Preserves lean muscle
                                                        during calorie deficit
                                                    </li>
                                                    <li>
                                                        Minimal effect on
                                                        insulin or blood sugar
                                                    </li>
                                                    <li>
                                                        Does not impact organ
                                                        growth or IGF-1 levels
                                                    </li>
                                                    <li>
                                                        Ideal for cutting phases
                                                        and body recomposition
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Side Effects & Tolerability:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Generally
                                                            well-tolerated at
                                                            standard doses
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Common (mild) side
                                                            effects:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Injection site
                                                                redness or
                                                                irritation
                                                            </li>
                                                            <li>
                                                                Mild headaches
                                                            </li>
                                                            <li>
                                                                Occasional
                                                                nausea or
                                                                dizziness
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Long-Term Use Risks:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Receptor
                                                                desensitization
                                                                if used
                                                                continuously
                                                            </li>
                                                            <li>
                                                                Effectiveness
                                                                may plateau
                                                                without proper
                                                                cycling
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Compatibility & Stacking:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>
                                                            Commonly Stacked
                                                            With:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                CJC-1295 (No
                                                                DAC) or
                                                                Ipamorelin for
                                                                synergistic GH
                                                                release
                                                            </li>
                                                            <li>
                                                                Clenbuterol (for
                                                                advanced
                                                                fat-burning
                                                                stacks)
                                                            </li>
                                                            <li>
                                                                Other peptides
                                                                during cutting
                                                                cycles
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Why Stack?
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Boosts fat
                                                                oxidation and
                                                                thermogenesis
                                                            </li>
                                                            <li>
                                                                Enhances effects
                                                                of natural GH
                                                                pulses
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h4 className="m-5 mb-3 mx-0">
                                                    Storage & Reconstitution:
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <strong>Form:</strong>{" "}
                                                        Lyophilized powder
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Reconstitution:
                                                        </strong>{" "}
                                                        Use bacteriostatic water
                                                        (swirl gently)
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Storage:
                                                        </strong>
                                                        <ul>
                                                            <li>
                                                                Before mixing:
                                                                Store in a cool,
                                                                dry place
                                                            </li>
                                                            <li>
                                                                After
                                                                reconstitution:
                                                                Refrigerate and
                                                                use within 2-3
                                                                weeks
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <p className="mt-5">
                                                    HGH Fragment 176-191 is a
                                                    powerful fat-loss peptide
                                                    designed to mimic the
                                                    lipolytic portion of natural
                                                    growth hormone without its
                                                    side effects. When combined
                                                    with a proper diet and
                                                    training program, it can
                                                    offer accelerated body fat
                                                    reduction and improved body
                                                    composition. Ideal for
                                                    targeted cutting strategies,
                                                    especially when cycled
                                                    properly.
                                                </p>

                                                <p>
                                                    To master the safe and
                                                    effective use of peptides
                                                    like HGH Fragment 176-191,
                                                    consider enrolling in our
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-steroids-course"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-black"
                                                    >{' '}
                                                        <strong>
                                                            Offline Steroids
                                                            Course
                                                        </strong>
                                                    </a>
                                                    , or begin learning through
                                                    our
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-steroid-testosterone"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-black"
                                                    >{' '}
                                                        <strong>
                                                            Online Course
                                                        </strong>
                                                    </a>
                                                    . Prefer to learn at your
                                                    own pace? Try the
                                                    <a
                                                        href="https://fggroup.in/fgiit/anabolic-androgenic-steroids"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-black"
                                                    >{' '}
                                                        <strong>
                                                            Flexible Learning
                                                            Program
                                                        </strong>
                                                    </a>
                                                    . For deeper insights on
                                                    cutting strategies, fat-loss
                                                    peptides, and enhancement
                                                    safety, explore our
                                                    <a
                                                        href="https://fggroup.in/book/steroids-book"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-black"
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

export default HGHFragment176191;
