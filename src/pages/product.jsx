import React, { useEffect, useState } from "react";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import Header from "../components/partials/Header/nutritionsheader";
import { CircularProgress, Fade } from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [cardLoader, setcardLoader] = useState(false);

  const getProductData = async () => {
    setcardLoader(true);
    try {
      const response = await publicAxiosInstance.get("/medical-product/get");
      const userData = response.data.data;
      if (userData) {
        setProductData(userData);
      }
    } catch (error) {
      console.error("Error in getProductData:", error);
    } finally {
      setcardLoader(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

 const product = [
    {
      description:
        "A long-acting testosterone ester, popular for its stable release and ease.",
      display_image: "assets/images/medicine/enanthate.jpg",
      name: "Testosterone Enanthate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-enanthate",
    },
    {
      description:
        "Similar to Enanthate, with a slightly longer half-life, commonly used in the U.S. for HRT.",
      display_image: "assets/images/medicine/cypionate.jpg",
      name: "Testosterone Cypionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-cypionate",
    },
    {
      description:
        "A short-acting ester, ideal for those wanting quick effects or shorter cycles.",
      display_image: "assets/images/medicine/propionate.jpg",
      name: "Testosterone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-propionate",
    },
    {
      description:
        "Aultra-long-acting ester, often used in HRT due to its infrequent injection schedule.",
      display_image: "assets/images/medicine/undecanoate.jpg",
      name: "Testosterone Undecanoate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-undecanoate",
    },
    {
      description:
        "A blend of four testosterone esters, (Propionate, Phenylpropionate, Is caproate, and Decanoate) designed for both fast and long-acting effects.",
      display_image: "assets/images/medicine/sustanon-250.jpg",
      name: "Sustanon 250",
      unit: "1 Box, 10 Injection",
      path: "/sustanon-250",
    },
    {
      description:
        "The first orally active testosterone derivative, methylated to survive liver metabolism.",
      display_image: "assets/images/medicine/methyltestosterone.jpg",
      name: "Methyltestosterone",
      unit: "1 Box, 100 Tablets",
      path: "/methyltestosterone",
    },
    {
      description:
        "A fat-soluble form of testosterone absorbed via the lymphatic system, bypassing significant liver metabolism.",
      display_image:
        "assets/images/medicine/testosterone-undecanoate-andriole.jpg",
      name: "Testosterone Undecanoate Andriole",
      unit: "1 Box, 100 Tablets",
      path: "/testosterone-undecanoate-andriole",
    },
    {
      description:
        "A potent anabolic steroid for rapid size and strength gains.",
      display_image: "assets/images/medicine/methandrostenolone.jpg",
      name: "Methandrostenolone",
      unit: "1 Box, 100 Tablets",
      path: "/methandrostenolone",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, suitable for cutting cycles and female athletes.",
      display_image: "assets/images/medicine/oxandrolone-anavar.jpg",

      name: "Oxandrolone (Anavar)",
      unit: "1 Box, 100 Tablets",
      path: "/oxandrolone-anavar",
    },
    {
      description:
        "One of the strongest oral anabolic steroids, known for rapid muscle gain and increased strength.",
      display_image: "assets/images/medicine/oxandrolone-anadrol.jpg",
      name: "Oxymetholone (Anadrol)",
      unit: "1 Box, 100 Tablets",
      path: "/oxymetholone-anadrol",
    },
    {
      description:
        "A popular cutting steroid that enhances lean, Cutting cycles and performance enhancement.",
      display_image: "assets/images/medicine/stanozolol-winstrol.jpg",
      name: "Stanozolol (Winstrol)",
      unit: "1 Box, 100 Tablets",
      path: "/stanozolol-winstrol",
    },
    {
      description:
        "A derivative of Diana Bol with fewer androgenic side effects, suitable for lean gains.",
      display_image: "assets/images/medicine/turinabol.jpg",
      name: "Turina Bol (Chloro dehydromethyl testosterone)",
      unit: "1 Box, 100 Tablets",
      path: "/turina-bol",
    },
    {
      description:
        "A long-acting injectable anabolic steroid derived from testosterone, known for steady muscle growth and appetite stimulation. Originally developed for veterinary use, particularly in horses.",
      display_image: "assets/images/medicine/boldenone-undecylenate.jpg",
      name: "Boldenone Undecylenate",
      unit: "1 Box, 10 Injection",
      path: "/boldenone-undecylenate",
    },
    {
      description:
        "A fast-acting injectable anabolic steroid with strong androgenic and moderate anabolic properties, commonly used during cutting phases. Initially developed as a treatment for breast cancer.",
      display_image: "assets/images/medicine/drostanolone-propionate.jpg",
      name: "Drostanolone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/drostanolone-propionate",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, commonly used for preserving lean muscle mass and enhancing strength, suitable for both offseason and on-season use.",
      display_image: "assets/images/medicine/primo-bolan.jpg",
      name: "Primo Bolan",
      unit: "1 Box, 10 Injection",
      path: "/primo-bolan",
    },
    {
      description:
        "A potent and fast-acting anabolic steroid used to enhance muscle mass, strength, and appetite. Known for its powerful effects in building lean muscle and fat loss, commonly included in bulking cycles.",
      display_image: "assets/images/medicine/trenbolone-acetate.jpg",
      name: "Trenbolone Acetate Hexahydrobenzylcarbonate (Hexa)",
      unit: "1 Box, 10 Injection",
      path: "/trenbolone-acetate-hexahydrobenzylcarbonate",
    },
    {
      description:
        "A long-acting anabolic steroid commonly used during bulking cycles to promote muscle growth and increase strength. Known for its ability to increase red blood cell production and aid in recovery.",
      display_image: "assets/images/medicine/nandrolone-decanoate.jpg",
      name: "Nandrolone Decanoate (Deca-Durabolin)",
      unit: "1 Box, 10 Injection",
      path: "/nandrolone-decanoate",
    },
    {
      description:
        "AMP is a naturally occurring nucleosidase that plays a role in cellular energy regulation. It is often used in bodybuilding and athletic circles for its effects on increasing endurance, improving performance, and boosting fat loss. AMP is believed to enhance the effects of certain workouts by increasing fat.",
      display_image: "assets/images/medicine/amp.jpg",
      name: "AMP (Adenosine Monophosphate)",
      unit: "1 Box, 10 Injection",
      path: "/amp",
    },
    {
      description:
        "Primarily used as an androgenic compound for muscle building, increasing androgenic activity without significantly increasing estrogenic effects.",
      display_image: "assets/images/medicine/mesterolone.jpg",
      name: "Mesterolone (proviron)",
      unit: "1 Box, 100 Tablets",
      path: "/mesterolone",
    },
    {
      description:
        "Highly thermogenic, it increases the body's coretemperature, enhancing fat-burning processes and promoting fat loss while preserving muscle mass.",
      display_image: "assets/images/medicine/clenbuterol.jpg",
      name: "Clenbuterol",
      unit: "1 Box, 100 Tablets",
      path: "/clenbuterol",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ghrp-2.jpg",
      name: "GHRP-2",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-2",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ghrp-6.jpg",
      name: "GHRP-6",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-6",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/ipamorelin.jpg",
      name: "Ipamorelin",
      unit: "1 Box, 10 Injection",
      path: "/ipamorelin",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image: "assets/images/medicine/hexarelin.jpg",
      name: "Hexarelin",
      unit: "1 Box, 10 Injection",
      path: "/hexarelin",
    },
    {
      description:
        "The DAC (Drug Affinity Complex) version of CJC-1295 is designed to have a longer half-life, which means it continues to stimulate the release of GH over a longer period. It leads to sustained GH release, providing gradual and continuous GH elevation.",
      display_image: "assets/images/medicine/cjc-1295.jpg",
      name: "CJC-1295",
      unit: "1 Box, 10 Injection",
      path: "/cjc-1295",
    },
    {
      description:
        "Sermorelin is a synthetic peptide that mimics the action of natural GHRH. It stimulates the pituitary gland to produce and release more GH. Unlike CJC-1295, Sermorelin is shorter-acting and is typically used for promoting natural GH release in a manner more similar to the body's natural secretion patterns.",
      display_image: "assets/images/medicine/sermorelin.jpg",
      name: "Sermorelin",
      unit: "1 Box, 10 Injection",
      path: "/sermorelin",
    },
    {
      description:
        "The LR3 variant of IGF-1 is a modified version with longer activity and increased potency compared to standard IGF-1. The modification enhances its ability to stimulate muscle growth and tissue repair, providing extended effects and better utilization of nutrients for muscle building. IGF-1 LR3 has a longer half-life, allowing for greater effectiveness in promoting muscle growth and recovery over time.",
      display_image: "assets/images/medicine/igf-1-lr3.jpg",
      name: "IGF-1 LR3",
      unit: "1 Box, 10 Injection",
      path: "/igf-1-lr3",
    },
    {
      description:
        "Des (1-3) IGF-1 is another variant of IGF-1 with a shorter structure, which makes it more potent and faster-acting. This version is often used for those seeking rapid muscle recovery and regeneration but may require careful dosing due to its higher potency.",
      display_image:
        "assets/images/medicine/igf-1-des.jpg",
      name: "Des (1-3) IGF-1",
      unit: "1 Box, 10 Injection",
      path: "/des-igf-1",
    },
    {
      description:
        "BPC-157 is a synthetic peptide derived from a naturally occurring protein in the human stomach. It plays a vital role in healing and regenerating damaged tissues, such as muscles, tendons, ligaments, and joints. BPC-157 works by promoting angiogenesis, the process of creating new blood vessels. This improves blood flow to injured areas, enhancing nutrient delivery, reducing inflammation, and accelerating the healing process. It also helps protect tissues from further damage by supporting collagen synthesis and stabilizing cellular regeneration in tissues.",
      display_image:
        "assets/images/medicine/bpc-157.jpg",
      name: "BPC-157",
      unit: "1 Box, 10 Injection",
      path: "/bpc-157",
    },
    {
      description:
        "TB-500 is a peptide naturally produced by the thymus gland and plays a crucial role in tissue repair. It promotes cell regeneration, enhances cell migration, and accelerates healing in muscle tissue, tendons, and ligaments. TB-500 is known for its ability to reduce inflammation and help restore damaged tissues through increased fibroblast proliferation. Fibroblasts are cells responsible for collagen production, which is essential for repairing connective tissues. It is particularly effective in treating muscle strains, ligament injuries, and tendonitis.",
      display_image:
        "assets/images/medicine/tb-500.jpg",
      name: "TB-500",
      unit: "1 Box, 10 Injection",
      path: "/tb-500",
    },
    {
      description:
        "HGH Fragment 176-191 is a synthetic peptide derived from the C-terminal portion of the Growth Hormone (GH) molecule. This fragment is specifically designed to target fat loss without affecting other GH functions like muscle growth or bone development. It works by increasing the rate at which the body burns fat (lipolysis) and reducing fat accumulation in fat cells, especially in areas like the abdomen, hips, and thighs. HGH Fragment 176-191 does this by increasing the activity of enzymes involved in fat breakdown and preventing the formation of new fat cells.",
      display_image:
        "assets/images/medicine/hgh-fragment-176-191.jpg",
      name: "HGH Fragment 176-191",
      unit: "1 Box, 10 Injection",
      path: "/hgh-fragment-176-191",
    },
    {
      description:
        "AOD-9604 is another synthetic fragment of GH that has been specifically developed for fat loss purposes. AOD stands for Advanced Obesity Drug and is a modified version of the GH peptide. It functions similarly to HGH Fragment 176-191 by stimulating lipolysis and inhibiting fat storage. AOD-9604 has shown potential in reducing body fat without affecting blood glucose or insulin levels, which makes it appealing for those looking to lose fat without the risk of interfering with other metabolic processes.",
      display_image:
        "assets/images/medicine/aod-9604.jpg",
      name: "AOD-9604",
      unit: "1 Box, 10 Injection",
      path: "/aod-9604",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "assets/images/medicine/ostarine.jpg",
      name: "Ostarine (MK-2866)",
      unit: "1 Box, 100 Tablets",
      path: "/ostarine",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "assets/images/medicine/ligandrol.jpg",
      name: "Ligandrol (LGD-4033)",
      unit: "1 Box, 100 Tablets",
      path: "/ligandrol",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "assets/images/medicine/rad140.jpg",
      name: "RAD140 (Testolone)",
      unit: "1 Box, 100 Tablets",
      path: "/rad-140",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "assets/images/medicine/s23.jpg",
      name: "S23",
      unit: "1 Box, 100 Tablets",
      path: "/s23",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image:
        "assets/images/medicine/andarine.jpg",
      name: "Andarine (S4)",
      unit: "1 Box, 100 Tablets",
      path: "/andarine",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image:
        "assets/images/medicine/cardarine.jpg",
      name: "Cardarine (GW-501516)",
      unit: "1 Box, 100 Tablets",
      path: "/cardarine",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while ntfpreserving lean muscle mass.",
      display_image:
        "assets/images/medicine/stenabolic.jpg",
      name: "Stenabolic (SR9009)",
      unit: "1 Box, 100 Tablets",
      path: "/stenabolic",
    },
    {
      description:
        "These SARMs are used for improving joint health, bone density, and recovery after intense workouts.",
      display_image:
        "assets/images/medicine/mk-677.jpg",
      name: "MK-677 (Ibutamoren)",
      unit: "1 Box, 100 Tablets",
      path: "/mk-677",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image:
        "assets/images/medicine/yk-11.jpg",
      name: "YK-11",
      unit: "1 Box, 100 Tablets",
      path: "/yk-11",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image:
        "assets/images/medicine/acp-105.jpg",
      name: "ACP-105",
      unit: "1 Box, 100 Tablets",
      path: "/acp-105",
    },
  ];
  return (
    <>
      <Header />
      {cardLoader ? (
        <div
          style={{
            display: "flex",
            height: "100dvh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "#86c33a" }} size={50} />
        </div>
      ) : (
        <Fade in={!cardLoader} timeout={600}>
          <section className="features-products mt-5">
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
                          <h2 className="product-card__title">
                            {product.name}
                          </h2>
                          <p className="product-card__description truncate-description">
                            {product.description}
                          </p>
                          <p className="product-card__description text-dark">
                            <b>{product.unit}</b>
                          </p>
                          <Link to={`${product.path}?id=${productData[index]?._id}`}>
                            <div className="product-card__price-row">
                              <button className="product-card__btn w-100">
                                Know more
                              </button>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="container-fluid py-5">
              <div className="row justify-content-center m-0">
                <div className="col-md-6 text-center">
                  <div className="ingredients-content d-flex flex-column align-items-center">
                    <h5 className="title mb-4">
                      If you have any other medicine requirements, please click
                      <br />
                      the button below and submit the form.
                    </h5>
                    <Link
                      to="/require-medicine-check-out"
                      className="product-card__btn"
                      style={{ borderRadius: "0px" }}
                    >
                      View Form
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      )}
    </>
  );
};

export default Product;
