import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/odometer.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import LoginModal from "../assets/js/popup/login";
import { toast } from "react-toastify";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import Slider from "../components/Slider";

function Home() {
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartDataCount, setCartDataCount] = useState(null);
  const [cartItemName, setCartItemName] = useState([]);
  const authorization = localStorage.getItem("fg_group_user_authorization");
  // const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const data = [
    {
      image: "/assets/images/beginer.jpg",
      caption: "Beginners to Anabolic Cycle",
      path: "/beginners-to-anabolic-cycle",
    },
    {
      image: "/assets/images/medium.jpg",
      caption: "Fat Loss to Anabolic Cycle",
      path: "/fat-loss-to-anabolic-cycle",
    },
    {
      title: "ADVANCE ANABOLIC CYCLES",
      image: "/assets/images/advance.jpg",
      caption: "Advance to Anabolic Cycle",
      path: "/advance-to-anabolic-cycle",
    },
  ];

  const product = [
    {
      description:
        "A long-acting testosterone ester, popular for its stable release and ease.",
      display_image: "assets/images/medicine/enanthate.jpg",
      name: "Testosterone Enanthate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-enanthate",
      _id: "681c341050b0a21a73050678",
    },
    {
      description:
        "Similar to Enanthate, with a slightly longer half-life, commonly used in the U.S. for HRT.",
      display_image: "assets/images/medicine/cypionate.jpg",
      name: "Testosterone Cypionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-cypionate",
      _id: "681c345950b0a21a7305067c",
    },
    {
      description:
        "A short-acting ester, ideal for those wanting quick effects or shorter cycles.",
      display_image: "assets/images/medicine/propionate.jpg",
      name: "Testosterone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-propionate",
      _id: "681c348d50b0a21a7305067e",
    },
    {
      description:
        "Aultra-long-acting ester, often used in HRT due to its infrequent injection schedule.",
      display_image: "assets/images/medicine/undecanoate.jpg",
      name: "Testosterone Undecanoate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-undecanoate",
      _id: "681c34e350b0a21a73050682",
    },
    {
      description:
        "A blend of four testosterone esters, (Propionate, Phenylpropionate, Is caproate, and Decanoate) designed for both fast and long-acting effects.",
      display_image: "assets/images/medicine/sustanon-250.jpg",
      name: "Sustanon 250",
      unit: "1 Box, 10 Injection",
      path: "/sustanon-250",
      _id: "681c351050b0a21a73050684",
    },
    {
      description:
        "The first orally active testosterone derivative, methylated to survive liver metabolism.",
      display_image: "assets/images/medicine/methyltestosterone.jpg",
      name: "Methyltestosterone",
      unit: "1 Box, 100 Tablets",
      path: "/methyltestosterone",
      _id: "681c353150b0a21a73050686",
    },
    {
      description:
        "A fat-soluble form of testosterone absorbed via the lymphatic system, bypassing significant liver metabolism.",
      display_image:
        "assets/images/medicine/testosterone-undecanoate-andriole.jpg",
      name: "Testosterone Undecanoate Andriole",
      unit: "1 Box, 100 Tablets",
      path: "/testosterone-undecanoate-andriole",
      _id: "681c356250b0a21a73050688",
    },
    {
      description:
        "A potent anabolic steroid for rapid size and strength gains.",
      display_image: "assets/images/medicine/methandrostenolone.jpg",
      name: "Methandrostenolone",
      unit: "1 Box, 100 Tablets",
      path: "/methandrostenolone",
      _id: "681c35ef50b0a21a7305068a",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, suitable for cutting cycles and female athletes.",
      display_image: "assets/images/medicine/oxandrolone-anavar.jpg",

      name: "Oxandrolone (Anavar)",
      unit: "1 Box, 100 Tablets",
      path: "/oxandrolone-anavar",
      _id: "681c361d50b0a21a7305068c",
    },
    {
      description:
        "One of the strongest oral anabolic steroids, known for rapid muscle gain and increased strength.",
      display_image: "assets/images/medicine/oxandrolone-anadrol.jpg",
      name: "Oxymetholone (Anadrol)",
      unit: "1 Box, 100 Tablets",
      path: "/oxymetholone-anadrol",

      _id: "681c364b50b0a21a7305068e",
    },
    {
      description:
        "A popular cutting steroid that enhances lean, Cutting cycles and performance enhancement.",
      display_image: "assets/images/medicine/stanozolol-winstrol.jpg",
      name: "Stanozolol (Winstrol)",
      unit: "1 Box, 100 Tablets",
      path: "/stanozolol-winstrol",

      _id: "681c369850b0a21a73050690",
    },
    {
      description:
        "A derivative of Diana Bol with fewer androgenic side effects, suitable for lean gains.",
      display_image: "assets/images/medicine/turinabol.jpg",
      name: "Turina Bol (Chloro dehydromethyl testosterone)",
      unit: "1 Box, 100 Tablets",
      path: "/turina-bol",

      _id: "681c36b450b0a21a73050692",
    },
    {
      description:
        "A long-acting injectable anabolic steroid derived from testosterone, known for steady muscle growth and appetite stimulation. Originally developed for veterinary use, particularly in horses.",
      display_image: "assets/images/medicine/boldenone-undecylenate.jpg",
      name: "Boldenone Undecylenate",
      unit: "1 Box, 10 Injection",
      path: "/boldenone-undecylenate",
      _id: "681c36e350b0a21a73050694",
    },
    {
      description:
        "A fast-acting injectable anabolic steroid with strong androgenic and moderate anabolic properties, commonly used during cutting phases. Initially developed as a treatment for breast cancer.",
      display_image: "assets/images/medicine/drostanolone-propionate.jpg",
      name: "Drostanolone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/drostanolone-propionate",
      _id: "681c370450b0a21a73050696",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, commonly used for preserving lean muscle mass and enhancing strength, suitable for both offseason and on-season use.",
      display_image: "assets/images/medicine/primo-bolan.jpg",
      name: "Primo Bolan",
      unit: "1 Box, 10 Injection",
      path: "/primo-bolan",
      _id: "681c375050b0a21a7305069c",
    },
    {
      description:
        "A potent and fast-acting anabolic steroid used to enhance muscle mass, strength, and appetite. Known for its powerful effects in building lean muscle and fat loss, commonly included in bulking cycles.",
      display_image: "assets/images/medicine/trenbolone-acetate.jpg",
      name: "Trenbolone Acetate Hexahydrobenzylcarbonate (Hexa)",
      unit: "1 Box, 10 Injection",
      path: "/trenbolone-acetate-hexahydrobenzylcarbonate",
      _id: "681c377050b0a21a7305069e",
    },
    {
      description:
        "A long-acting anabolic steroid commonly used during bulking cycles to promote muscle growth and increase strength. Known for its ability to increase red blood cell production and aid in recovery.",
      display_image: "assets/images/medicine/nandrolone-decanoate.jpg",
      name: "Nandrolone Decanoate (Deca-Durabolin)",
      unit: "1 Box, 10 Injection",
      path: "/nandrolone-decanoate",

      _id: "681c379c50b0a21a730506a0",
    },
    {
      description:
        "AMP is a naturally occurring nucleosidase that plays a role in cellular energy regulation. It is often used in bodybuilding and athletic circles for its effects on increasing endurance, improving performance, and boosting fat loss. AMP is believed to enhance the effects of certain workouts by increasing fat.",
      display_image: "assets/images/medicine/amp.jpg",
      name: "AMP (Adenosine Monophosphate)",
      unit: "1 Box, 10 Injection",
      path: "/amp",

      _id: "681c37bc50b0a21a730506a2",
    },
    {
      description:
        "Primarily used as an androgenic compound for muscle building, increasing androgenic activity without significantly increasing estrogenic effects.",
      display_image: "assets/images/medicine/mesterolone.jpg",
      name: "Mesterolone (proviron)",
      unit: "1 Box, 100 Tablets",
      path: "/mesterolone",

      _id: "681c37ea50b0a21a730506a4",
    },
    {
      description:
        "Highly thermogenic, it increases the body's coretemperature, enhancing fat-burning processes and promoting fat loss while preserving muscle mass.",
      display_image: "assets/images/medicine/clenbuterol.jpg",
      name: "Clenbuterol",
      unit: "1 Box, 100 Tablets",
      path: "/clenbuterol",
      _id: "681c381550b0a21a730506a6",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ghrp-2.jpg",
      name: "GHRP-2",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-2",
      _id: "681c4e1d50b0a21a73050751",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ghrp-6.jpg",
      name: "GHRP-6",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-6",
      _id: "681c4e4050b0a21a73050753",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ipamorelin.jpg",
      name: "Ipamorelin",
      unit: "1 Box, 10 Injection",
      path: "/ipamorelin",
      _id: "681c4e6550b0a21a73050755",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/hexarelin.jpg",
      name: "Hexarelin",
      unit: "1 Box, 10 Injection",
      path: "/hexarelin",
      _id: "681c4e8850b0a21a73050757",
    },
    {
      description:
        "The DAC (Drug Affinity Complex) version of CJC-1295 is designed to have a longer half-life, which means it continues to stimulate the release of GH over a longer period. It leads to sustained GH release, providing gradual and continuous GH elevation.",
      display_image: "assets/images/medicine/cjc-1295.jpg",
      name: "CJC-1295",
      unit: "1 Box, 10 Injection",
      path: "/cjc-1295",
      _id: "681c4eac50b0a21a73050759",
    },
    {
      description:
        "Sermorelin is a synthetic peptide that mimics the action of natural GHRH. It stimulates the pituitary gland to produce and release more GH. Unlike CJC-1295, Sermorelin is shorter-acting and is typically used for promoting natural GH release in a manner more similar to the body's natural secretion patterns.",
      display_image: "assets/images/medicine/sermorelin.jpg",
      name: "Sermorelin",
      unit: "1 Box, 10 Injection",
      path: "/sermorelin",
      _id: "681c4ed250b0a21a73050773",
    },
    {
      description:
        "The LR3 variant of IGF-1 is a modified version with longer activity and increased potency compared to standard IGF-1. The modification enhances its ability to stimulate muscle growth and tissue repair, providing extended effects and better utilization of nutrients for muscle building. IGF-1 LR3 has a longer half-life, allowing for greater effectiveness in promoting muscle growth and recovery over time.",
      display_image: "assets/images/medicine/igf-1-lr3.jpg",
      name: "IGF-1 LR3",
      unit: "1 Box, 10 Injection",
      path: "/igf-1-lr3",
      _id: "681c4eff50b0a21a73050775",
    },
    {
      description:
        "Des (1-3) IGF-1 is another variant of IGF-1 with a shorter structure, which makes it more potent and faster-acting. This version is often used for those seeking rapid muscle recovery and regeneration but may require careful dosing due to its higher potency.",
      display_image: "assets/images/medicine/igf-1-des.jpg",
      name: "Des (1-3) IGF-1",
      unit: "1 Box, 10 Injection",
      path: "/des-igf-1",
      _id: "681c4f2950b0a21a73050777",
    },
    {
      description:
        "BPC-157 is a synthetic peptide derived from a naturally occurring protein in the human stomach. It plays a vital role in healing and regenerating damaged tissues, such as muscles, tendons, ligaments, and joints. BPC-157 works by promoting angiogenesis, the process of creating new blood vessels. This improves blood flow to injured areas, enhancing nutrient delivery, reducing inflammation, and accelerating the healing process. It also helps protect tissues from further damage by supporting collagen synthesis and stabilizing cellular regeneration in tissues.",
      display_image: "assets/images/medicine/bpc-157.jpg",
      name: "BPC-157",
      unit: "1 Box, 10 Injection",
      path: "/bpc-157",
      _id: "681c4fdb50b0a21a73050779",
    },
    {
      description:
        "TB-500 is a peptide naturally produced by the thymus gland and plays a crucial role in tissue repair. It promotes cell regeneration, enhances cell migration, and accelerates healing in muscle tissue, tendons, and ligaments. TB-500 is known for its ability to reduce inflammation and help restore damaged tissues through increased fibroblast proliferation. Fibroblasts are cells responsible for collagen production, which is essential for repairing connective tissues. It is particularly effective in treating muscle strains, ligament injuries, and tendonitis.",
      display_image: "assets/images/medicine/tb-500.jpg",
      name: "TB-500",
      unit: "1 Box, 10 Injection",
      path: "/tb-500",
      _id: "681c504d50b0a21a7305077b",
    },
    {
      description:
        "HGH Fragment 176-191 is a synthetic peptide derived from the C-terminal portion of the Growth Hormone (GH) molecule. This fragment is specifically designed to target fat loss without affecting other GH functions like muscle growth or bone development. It works by increasing the rate at which the body burns fat (lipolysis) and reducing fat accumulation in fat cells, especially in areas like the abdomen, hips, and thighs. HGH Fragment 176-191 does this by increasing the activity of enzymes involved in fat breakdown and preventing the formation of new fat cells.",
      display_image: "assets/images/medicine/hgh-fragment-176-191.jpg",
      name: "HGH Fragment 176-191",
      unit: "1 Box, 10 Injection",
      path: "/hgh-fragment-176-191",
      _id: "681c507e50b0a21a7305077d",
    },
    {
      description:
        "AOD-9604 is another synthetic fragment of GH that has been specifically developed for fat loss purposes. AOD stands for Advanced Obesity Drug and is a modified version of the GH peptide. It functions similarly to HGH Fragment 176-191 by stimulating lipolysis and inhibiting fat storage. AOD-9604 has shown potential in reducing body fat without affecting blood glucose or insulin levels, which makes it appealing for those looking to lose fat without the risk of interfering with other metabolic processes.",
      display_image: "assets/images/medicine/aod-9604.jpg",
      name: "AOD-9604",
      unit: "1 Box, 10 Injection",
      path: "/aod-9604",
      _id: "681c50b550b0a21a7305077f",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image: "assets/images/medicine/ostarine.jpg",
      name: "Ostarine (MK-2866)",
      unit: "1 Box, 100 Tablets",
      path: "/ostarine",
      _id: "681c50ed50b0a21a73050781",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image: "assets/images/medicine/ligandrol.jpg",
      name: "Ligandrol (LGD-4033)",
      unit: "1 Box, 100 Tablets",
      path: "/ligandrol",
      _id: "681c511050b0a21a73050783",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image: "assets/images/medicine/rad140.jpg",
      name: "RAD140 (Testolone)",
      unit: "1 Box, 100 Tablets",
      path: "/rad-140",
      _id: "681c517450b0a21a73050787",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image: "assets/images/medicine/s23.jpg",
      name: "S23",
      unit: "1 Box, 100 Tablets",
      path: "/s23",
      _id: "681c519550b0a21a73050789",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image: "assets/images/medicine/andarine.jpg",
      name: "Andarine (S4)",
      unit: "1 Box, 100 Tablets",
      path: "/andarine",
      _id: "681c51b950b0a21a7305078b",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image: "assets/images/medicine/cardarine.jpg",
      name: "Cardarine (GW-501516)",
      unit: "1 Box, 100 Tablets",
      path: "/cardarine",
      _id: "681c51da50b0a21a7305078d",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while ntfpreserving lean muscle mass.",
      display_image: "assets/images/medicine/stenabolic.jpg",
      name: "Stenabolic (SR9009)",
      unit: "1 Box, 100 Tablets",
      path: "/stenabolic",
      _id: "681c51f950b0a21a7305078f",
    },
    {
      description:
        "These SARMs are used for improving joint health, bone density, and recovery after intense workouts.",
      display_image: "assets/images/medicine/mk-677.jpg",
      name: "MK-677 (Ibutamoren)",
      unit: "1 Box, 100 Tablets",
      path: "/mk-677",
      _id: "681c521d50b0a21a73050791",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image: "assets/images/medicine/yk-11.jpg",
      name: "YK-11",
      unit: "1 Box, 100 Tablets",
      path: "/yk-11",
      _id: "681c524150b0a21a73050793",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image: "assets/images/medicine/acp-105.jpg",
      name: "ACP-105",
      unit: "1 Box, 100 Tablets",
      path: "/acp-105",
      _id: "681c526050b0a21a73050795",
    },
  ];

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
  //     const response = await publicAxiosInstance.get("/medical-product/get");
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

  const fetchProductCartData = async () => {
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=MEDICAL_PRODUCT&is_purchase=true"
      );
      const serverData = response?.data?.data?.[0]?.items?.length;
      setCartDataCount(serverData);

      const cartData = response.data.data[0];
      const cartItemData = cartData.items_details.map((data) => data._id);
      setCartItemName(cartItemData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (isLogin) {
      fetchProductCartData();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Top Whey Protein Powder for Muscle Growth & Recovery</title>
        <meta
          name="description"
          content="Find the best whey protein powder to support muscle growth, boost recovery, and enhance performance. Shop top picks now!"
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/images/nutrition-logo.png"
        />
      </Helmet>
      {showModal && <LoginModal onClose={closeModal} />}

      <NutritionHeader />
      <Slider />

      <main className="main-area mt-5">
        <section className="features-products">
          <div className="section-title text-center">
            <h1 className="title">Anabolic Compounds</h1>
          </div>
          <div className="container text-center">
            <div className="row">
              {product.map((product, index) => (
                <div className="col-lg-4 col-sm-6 text-start" key={index}>
                  <div className="cont">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          className="lazy"
                          src={product.display_image}
                          alt={product.name}
                        />
                      </div>
                      <div className="product-card__info">
                        <h2 className="product-card__title">{product.name}</h2>
                        <p className="product-card__description truncate-description">
                          {product.description}
                        </p>
                        <p className="product-card__description text-dark">
                          <b>{product.unit}</b>
                        </p>
                        <Link to={`${product.path}?id=${product?._id}`}>
                          <div className="product-card__price-row">
                            <button className="product-card__btn w-100">
                              contact pharmacist
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="py-10 px-5 text-center m-5">
              <h2 className="text-2xl font-bold text-red-600 mb-5 fs-1">
                KNOW YOUR STACK
              </h2>
              <div className="d-flex flex-wrap flex-lg-nowrap gap-5  justify-content-center">
                {data.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="anabolic-cycle-card card me-3 flex-shrink-0 text-decoration-none"
                  >
                    <div className="position-relative">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="card-img-top"
                      />
                      <div className="anabolic-cycle-card-title text-dark fw-bold">
                        {item.caption}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div> */}

            <div className="row justify-content-center">
              <div className="col-md-6 mt-5 mb-4">
                <div className="ingredients-content">
                  <h5 className="title">
                    If you have any other medicine requirements, please click
                    the button below and submit the form.
                  </h5>
                  <Link
                    to="/require-medicine-check-out"
                    className="m-0 product-card__btn"
                  >
                    View Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Home;
