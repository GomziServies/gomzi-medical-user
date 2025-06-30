import React, { useEffect, useState } from "react";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import Header from "../components/partials/Header/nutritionsheader";
import { CircularProgress, Fade } from "@mui/material";
import { Link } from "react-router-dom";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [cardLoader, setcardLoader] = useState(false);

  // const getProductData = async () => {
  //   setcardLoader(true);
  //   try {
  //     const response = await publicAxiosInstance.get("/medical-product/get");
  //     const userData = response.data.data;
  //     if (userData) {
  //       setProductData(userData);
  //     }
  //   } catch (error) {
  //     console.error("Error in getProductData:", error);
  //   } finally {
  //     setcardLoader(false);
  //   }
  // };

  // useEffect(() => {
  //   getProductData();
  // }, []);

  const product = [
    {
      description:
        "A long-acting testosterone ester, popular for its stable release and ease.",
      display_image:
        "development/products/FILE-enanthate-15b31874-f174-4ead-b62e-a585478bafb1.jpeg",
      name: "Testosterone Enanthate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-enanthate",
    },
    {
      description:
        "Similar to Enanthate, with a slightly longer half-life, commonly used in the U.S. for HRT.",
      display_image:
        "development/products/FILE-cypionate-5402fec9-81e8-4edb-aadf-3e16f569a4f4.jpeg",
      name: "Testosterone Cypionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-cypionate",
    },
    {
      description:
        "A short-acting ester, ideal for those wanting quick effects or shorter cycles.",
      display_image:
        "development/products/FILE-propionate-e64a62b8-7520-4bb9-9985-05e18f7386bb.jpeg",
      name: "Testosterone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-propionate",
    },
    {
      description:
        "Aultra-long-acting ester, often used in HRT due to its infrequent injection schedule.",
      display_image:
        "development/products/FILE-undecanoate-4398ff2d-e5b5-4409-a41c-ba9fcfb07084.jpeg",
      name: "Testosterone Undecanoate",
      unit: "1 Box, 10 Injection",
      path: "/testosterone-undecanoate",
    },
    {
      description:
        "A blend of four testosterone esters, (Propionate, Phenylpropionate, Is caproate, and Decanoate) designed for both fast and long-acting effects.",
      display_image:
        "development/products/FILE-sustanon-250-ecd4897d-bbc4-4041-8c2b-b34ba82f846d.jpeg",
      name: "Sustanon 250",
      unit: "1 Box, 10 Injection",
      path: "/sustanon-250",
    },
    {
      description:
        "The first orally active testosterone derivative, methylated to survive liver metabolism.",
      display_image:
        "development/products/FILE-methyltestosterone-3d73a29c-c57c-472e-a9d2-c1ee9d6953a0.jpeg",
      name: "Methyltestosterone",
      unit: "1 Box, 100 Tablets",
      path: "/methyltestosterone",
    },
    {
      description:
        "A fat-soluble form of testosterone absorbed via the lymphatic system, bypassing significant liver metabolism.",
      display_image:
        "development/products/FILE-testosterone-undecanoate-andriole-967f22c1-6fc5-44ee-a490-e225eb6b99b8.jpeg",
      name: "Testosterone Undecanoate Andriole",
      unit: "1 Box, 100 Tablets",
      path: "/testosterone-undecanoate-andriole",
    },
    {
      description:
        "A potent anabolic steroid for rapid size and strength gains.",
      display_image:
        "development/products/FILE-methandrostenolone-4d0a9e7c-27d2-4b57-a578-ec6289abb26c.jpeg",
      name: "Methandrostenolone",
      unit: "1 Box, 100 Tablets",
      path: "/methandrostenolone",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, suitable for cutting cycles and female athletes.",
      display_image:
        "development/products/FILE-oxandrolone-anavar-74d8d4b1-3281-4a10-b7d7-d4d9a1417ce5.jpeg",
      name: "Oxandrolone (Anavar)",
      unit: "1 Box, 100 Tablets",
      path: "/oxandrolone-anavar",
    },
    {
      description:
        "One of the strongest oral anabolic steroids, known for rapid muscle gain and increased strength.",
      display_image:
        "development/products/FILE-oxandrolone-anadrol-e9f6ccb3-f38c-4b72-b8c9-6a1b19916ba4.jpeg",
      name: "Oxymetholone (Anadrol)",
      unit: "1 Box, 100 Tablets",
      path: "/oxymetholone-anadrol",
    },
    {
      description:
        "A popular cutting steroid that enhances lean, Cutting cycles and performance enhancement.",
      display_image:
        "development/products/FILE-stanozolol-winstrol-04d7634c-6739-4838-894b-85b3b48bbb54.jpeg",
      name: "Stanozolol (Winstrol)",
      unit: "1 Box, 100 Tablets",
      path: "/stanozolol-winstrol",
    },
    {
      description:
        "A derivative of Diana Bol with fewer androgenic side effects, suitable for lean gains.",
      display_image:
        "development/products/FILE-turinabol-ca4b9b89-5b1b-4676-851a-41c90a964a19.jpeg",
      name: "Turina Bol (Chloro dehydromethyl testosterone)",
      unit: "1 Box, 100 Tablets",
      path: "/turina-bol",
    },
    {
      description:
        "A long-acting injectable anabolic steroid derived from testosterone, known for steady muscle growth and appetite stimulation. Originally developed for veterinary use, particularly in horses.",
      display_image:
        "development/products/FILE-boldenone-undecylenate-32cb5e60-4600-4c73-95d0-c58b67e5a4ce.jpeg",
      name: "Boldenone Undecylenate",
      unit: "1 Box, 10 Injection",
      path: "/boldenone-undecylenate",
    },
    {
      description:
        "A fast-acting injectable anabolic steroid with strong androgenic and moderate anabolic properties, commonly used during cutting phases. Initially developed as a treatment for breast cancer.",
      display_image:
        "development/products/FILE-drostanolone-propionate-e0244e9b-630b-4e41-878b-ba32a45388f0.jpeg",
      name: "Drostanolone Propionate",
      unit: "1 Box, 10 Injection",
      path: "/drostanolone-propionate",
    },
    {
      description:
        "A mild anabolic steroid with low androgenic activity, commonly used for preserving lean muscle mass and enhancing strength, suitable for both offseason and on-season use.",
      display_image:
        "development/products/FILE-primo-bolan-23c90d72-5ec3-4fe1-9231-c2a2b75e4c7a.jpeg",
      name: "Primo Bolan",
      unit: "1 Box, 10 Injection",
      path: "/primo-bolan",
    },
    {
      description:
        "A potent and fast-acting anabolic steroid used to enhance muscle mass, strength, and appetite. Known for its powerful effects in building lean muscle and fat loss, commonly included in bulking cycles.",
      display_image:
        "development/products/FILE-trenbolone-acetate-b2b50411-0192-49dc-8942-42bb2e2bd971.jpeg",
      name: "Trenbolone Acetate Hexahydrobenzylcarbonate (Hexa)",
      unit: "1 Box, 10 Injection",
      path: "/trenbolone-acetate-hexahydrobenzylcarbonate",
    },
    {
      description:
        "A long-acting anabolic steroid commonly used during bulking cycles to promote muscle growth and increase strength. Known for its ability to increase red blood cell production and aid in recovery.",
      display_image:
        "development/products/FILE-nandrolone-decanoate-a12e0a85-a606-4270-989e-d4e04dbfc1ed.jpeg",
      name: "Nandrolone Decanoate (Deca-Durabolin)",
      unit: "1 Box, 10 Injection",
      path: "/nandrolone-decanoate",
    },
    {
      description:
        "AMP is a naturally occurring nucleosidase that plays a role in cellular energy regulation. It is often used in bodybuilding and athletic circles for its effects on increasing endurance, improving performance, and boosting fat loss. AMP is believed to enhance the effects of certain workouts by increasing fat.",
      display_image:
        "development/products/FILE-amp-5128144b-388a-471f-aef3-d7e6613601fe.jpeg",
      name: "AMP (Adenosine Monophosphate)",
      unit: "1 Box, 10 Injection",
      path: "/amp",
    },
    {
      description:
        "Primarily used as an androgenic compound for muscle building, increasing androgenic activity without significantly increasing estrogenic effects.",
      display_image:
        "development/products/FILE-mesterolone-8d6a6dee-902b-48f0-8f6b-2c0d160c2f87.jpeg",
      name: "Mesterolone (proviron)",
      unit: "1 Box, 100 Tablets",
      path: "/mesterolone",
    },
    {
      description:
        "Highly thermogenic, it increases the body's coretemperature, enhancing fat-burning processes and promoting fat loss while preserving muscle mass.",
      display_image:
        "development/products/FILE-clenbuterol-5cf1e67d-875c-4348-8515-c25a6d79c94a.jpeg",
      name: "Clenbuterol",
      unit: "1 Box, 100 Tablets",
      path: "/clenbuterol",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image:
        "development/products/FILE-ghrp-2-efb5c628-e43a-4c9a-af27-afe4549bd729.jpeg",
      name: "GHRP-2",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-2",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image:
        "development/products/FILE-ghrp-6-81d75949-e75f-4436-9a50-c369d494330d.jpeg",
      name: "GHRP-6",
      unit: "1 Box, 10 Injection",
      path: "/ghrp-6",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image:
        "development/products/FILE-ipamorelin-d6d7f638-899d-40ec-ba45-ce7a7334c475.jpeg",
      name: "Ipamorelin",
      unit: "1 Box, 10 Injection",
      path: "/ipamorelin",
    },
    {
      description:
        "GHRPs are primarily used by intermediate to advanced athletes looking to enhance muscle growth, fat loss, and recovery. These peptides can be highly effective in achieving body composition goals, particularly for individuals already engaged in intense training regimens.",
      display_image:
        "development/products/FILE-hexarelin-202537b0-a470-4445-a142-227253a6492a.jpeg",
      name: "Hexarelin",
      unit: "1 Box, 10 Injection",
      path: "/hexarelin",
    },
    {
      description:
        "The DAC (Drug Affinity Complex) version of CJC-1295 is designed to have a longer half-life, which means it continues to stimulate the release of GH over a longer period. It leads to sustained GH release, providing gradual and continuous GH elevation.",
      display_image:
        "development/products/FILE-cjc-1295-7bc95919-02e4-4820-8b7f-767f7dcbaeef.jpeg",
      name: "CJC-1295",
      unit: "1 Box, 10 Injection",
      path: "/cjc-1295",
    },
    {
      description:
        "Sermorelin is a synthetic peptide that mimics the action of natural GHRH. It stimulates the pituitary gland to produce and release more GH. Unlike CJC-1295, Sermorelin is shorter-acting and is typically used for promoting natural GH release in a manner more similar to the body's natural secretion patterns.",
      display_image:
        "development/products/FILE-sermorelin-2eeb5954-b0eb-481a-8af9-97c6e8b27bfd.jpeg",
      name: "Sermorelin",
      unit: "1 Box, 10 Injection",
      path: "/sermorelin",
    },
    {
      description:
        "The LR3 variant of IGF-1 is a modified version with longer activity and increased potency compared to standard IGF-1. The modification enhances its ability to stimulate muscle growth and tissue repair, providing extended effects and better utilization of nutrients for muscle building. IGF-1 LR3 has a longer half-life, allowing for greater effectiveness in promoting muscle growth and recovery over time.",
      display_image:
        "development/products/FILE-igf-1-lr3-c3fd0096-5256-4dd4-9681-4af2b7c25e90.jpeg",
      name: "IGF-1 LR3",
      unit: "1 Box, 10 Injection",
      path: "/igf-1-lr3",
    },
    {
      description:
        "Des (1-3) IGF-1 is another variant of IGF-1 with a shorter structure, which makes it more potent and faster-acting. This version is often used for those seeking rapid muscle recovery and regeneration but may require careful dosing due to its higher potency.",
      display_image:
        "development/products/FILE-igf-1-des-54d9a706-23ee-428d-9f41-5b6ead088d4d.jpeg",
      name: "Des (1-3) IGF-1",
      unit: "1 Box, 10 Injection",
      path: "/des-igf-1",
    },
    {
      description:
        "BPC-157 is a synthetic peptide derived from a naturally occurring protein in the human stomach. It plays a vital role in healing and regenerating damaged tissues, such as muscles, tendons, ligaments, and joints. BPC-157 works by promoting angiogenesis, the process of creating new blood vessels. This improves blood flow to injured areas, enhancing nutrient delivery, reducing inflammation, and accelerating the healing process. It also helps protect tissues from further damage by supporting collagen synthesis and stabilizing cellular regeneration in tissues.",
      display_image:
        "development/products/FILE-bpc-157-d2c39d2b-77b7-4187-80b3-aaf5528a2d1a.jpeg",
      name: "BPC-157",
      unit: "1 Box, 10 Injection",
      path: "/bpc-157",
    },
    {
      description:
        "TB-500 is a peptide naturally produced by the thymus gland and plays a crucial role in tissue repair. It promotes cell regeneration, enhances cell migration, and accelerates healing in muscle tissue, tendons, and ligaments. TB-500 is known for its ability to reduce inflammation and help restore damaged tissues through increased fibroblast proliferation. Fibroblasts are cells responsible for collagen production, which is essential for repairing connective tissues. It is particularly effective in treating muscle strains, ligament injuries, and tendonitis.",
      display_image:
        "development/products/FILE-tb-500-8446f2d1-463c-4abd-8436-8259ba74af6e.jpeg",
      name: "TB-500",
      unit: "1 Box, 10 Injection",
      path: "/tb-500",
    },
    {
      description:
        "HGH Fragment 176-191 is a synthetic peptide derived from the C-terminal portion of the Growth Hormone (GH) molecule. This fragment is specifically designed to target fat loss without affecting other GH functions like muscle growth or bone development. It works by increasing the rate at which the body burns fat (lipolysis) and reducing fat accumulation in fat cells, especially in areas like the abdomen, hips, and thighs. HGH Fragment 176-191 does this by increasing the activity of enzymes involved in fat breakdown and preventing the formation of new fat cells.",
      display_image:
        "development/products/FILE-hgh-fragment-176-191-5768b759-2f69-4f52-87bc-1d2961380019.jpeg",
      name: "HGH Fragment 176-191",
      unit: "1 Box, 10 Injection",
      path: "/hgh-fragment-176-191",
    },
    {
      description:
        "AOD-9604 is another synthetic fragment of GH that has been specifically developed for fat loss purposes. AOD stands for Advanced Obesity Drug and is a modified version of the GH peptide. It functions similarly to HGH Fragment 176-191 by stimulating lipolysis and inhibiting fat storage. AOD-9604 has shown potential in reducing body fat without affecting blood glucose or insulin levels, which makes it appealing for those looking to lose fat without the risk of interfering with other metabolic processes.",
      display_image:
        "development/products/FILE-aod-9604-a7f490a1-2422-4385-b0f3-9471a3fe12da.jpeg",
      name: "AOD-9604",
      unit: "1 Box, 10 Injection",
      path: "/aod-9604",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "development/products/FILE-ostarine-56298742-c7c6-4f27-bc31-3ca30c00954e.jpeg",
      name: "Ostarine (MK-2866)",
      unit: "1 Box, 100 Tablets",
      path: "/ostarine",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "development/products/FILE-ligandrol-61592573-36c6-4dd9-b7d4-54fe8d9a453d.jpeg",
      name: "Ligandrol (LGD-4033)",
      unit: "1 Box, 100 Tablets",
      path: "/ligandrol",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "development/products/FILE-rad140-a76dece5-e714-401f-8439-a47c353a0e64.jpeg",
      name: "RAD140 (Testolone)",
      unit: "1 Box, 100 Tablets",
      path: "/rad-140",
    },
    {
      description:
        "SARMs are often used in bodybuilding, athletic performance enhancement, and the treatment of conditions like muscle wasting and osteoporosis. They are considered an alternative to steroids because they offer the potential for muscle growth with a reduced risk of negative side effects like liver damage, cardiovascular issues, and hormonal imbalances.",
      display_image:
        "development/products/FILE-s23-1b52568b-29c9-46d9-8dba-f670bed01197.jpeg",
      name: "S23",
      unit: "1 Box, 100 Tablets",
      path: "/s23",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image:
        "development/products/FILE-andarine-278320c0-133f-4974-9941-0bf4fc8f7aa4.jpeg",
      name: "Andarine (S4)",
      unit: "1 Box, 100 Tablets",
      path: "/andarine",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while preserving lean muscle mass.",
      display_image:
        "development/products/FILE-cardarine-0c736278-474c-44be-bf11-49c854746182.jpeg",
      name: "Cardarine (GW-501516)",
      unit: "1 Box, 100 Tablets",
      path: "/cardarine",
    },
    {
      description:
        "These SARMs are typically used during cutting phases to enhance fat loss while ntfpreserving lean muscle mass.",
      display_image:
        "development/products/FILE-stenabolic-ef2c9c81-43b0-4c6f-9a75-f54982f40125.jpeg",
      name: "Stenabolic (SR9009)",
      unit: "1 Box, 100 Tablets",
      path: "/stenabolic",
    },
    {
      description:
        "These SARMs are used for improving joint health, bone density, and recovery after intense workouts.",
      display_image:
        "development/products/FILE-mk-677-f3cab4ce-32ca-4f08-9838-7ce74e1fce04.jpeg",
      name: "MK-677 (Ibutamoren)",
      unit: "1 Box, 100 Tablets",
      path: "/mk-677",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image:
        "development/products/FILE-yk-11-299b9279-0f66-4bd3-9fc2-f0106845422c.jpeg",
      name: "YK-11",
      unit: "1 Box, 100 Tablets",
      path: "/yk-11",
    },
    {
      description:
        "These SARMs can be used for both muscle growth and fat loss, making them useful for recompositing cycles.",
      display_image:
        "development/products/FILE-acp-105-6b568e4b-3348-4ccb-b419-f46ac986ac14.jpeg",
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
                            src={`https://files.fggroup.in/${product.display_image}`}
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
