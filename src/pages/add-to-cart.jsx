import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/odometer.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import LoginModal from "../assets/js/popup/login";
import LoadingComponent from "../components/loadingComponent";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Card } from "react-bootstrap";
import HomeNutritionFooter from "../components/partials/Footer/footer";
import { Link } from "react-router-dom";

function AddToCart() {
  const canonicalUrl = window.location.href;
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [serverDataID, setServerDataID] = useState("");
  const [productDataGet, setProductDataGet] = useState([]);
  const [previousProductData, setPreviousProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cartDataClick, setCartDataClick] = useState(false);
  const [productData, setProductData] = useState([]);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchProductCartData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=MEDICAL_PRODUCT&is_purchase=true"
      );
      const serverData = response.data.data[0];
      setServerDataID(serverData._id);
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.product_id] = product.mrpPrice;
        return map;
      }, {});

      const itemDataForGetQty = serverData?.items || [];
      const itemDataForGetImgName = serverData?.items_details || [];

      const combinedData = itemDataForGetQty.map((item) => {
        const itemDetails = itemDataForGetImgName.find(
          (details) => details._id === item.item_id
        );
        if (!itemDetails) {
          console.warn(`No details found for item with id: ${item.item_id}`);
          return item;
        }

        return {
          ...item,
          ...itemDetails,
          items_id: item._id,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.item_id] || product.mrpPrice,
        };
      });
      setPreviousProductData(updatedServerData);
      setProductDataGet(updatedServerData);

      setCartDataClick(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductCartData();

    const isLogin = localStorage.getItem("fg_group_user_authorization");
    if (!isLogin) {
      return openModal();
    }
  }, [cartDataClick]);

  const handleRemoveProduct = async (cart_id, product_id) => {
    try {
      await axiosInstance.delete(
        `/order-cart/remove-item?item_id=${product_id}&cart_id=${serverDataID}`
      );
      setProductDataGet((prevData) =>
        prevData.filter((product) => product._id !== cart_id)
      );
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };
      existingData.products = existingData.products.filter(
        (product) => product.product_id !== product_id
      );
      localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      setCartDataClick(true);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const minusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      );
      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });
      setTimeout(async () => {
        handleUpdateCart(changedProducts);
      }, 1000);
      return updatedData;
    });
  };

  const plusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });

      setTimeout(() => {
        handleUpdateCart(changedProducts);
      }, 1000);

      return updatedData;
    });
  };

  const handleUpdateCart = async (updatedData) => {
    try {
      await axiosInstance.post("/order-cart/add-item", updatedData[0]);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToCart = async () => {
    setLoading1(true);
    try {
      const changedProducts = productDataGet.filter((currentProduct) => {
        const previousProduct = previousProductData.find(
          (p) => p._id === currentProduct._id
        );
        return (
          previousProduct &&
          previousProduct.quantity !== currentProduct.quantity
        );
      });

      if (changedProducts.length > 0) {
        const products = productDataGet.map((product) => ({
          product_id: product._id,
          quantity: product.quantity,
        }));

        const response = await axiosInstance.post(
          "/order-cart/add-item",
          changedProducts[0]
        );

        if (response.data.status === 200) {
          setPreviousProductData(productDataGet);
          localStorage.setItem(
            "productsData",
            JSON.stringify({
              products,
            })
          );

          window.location.href = `/medicine-check-out`;
        }
      } else {
        const products = productDataGet.map((product) => ({
          product_id: product._id,
          quantity: product.quantity,
        }));

        localStorage.setItem(
          "productsData",
          JSON.stringify({
            products,
          })
        );

        localStorage.setItem("serverDataID", serverDataID);

        window.location.href = `/medicine-check-out`;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
    setLoading1(false);
  };

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

  const getProductData = async () => {
    try {
      const response = await publicAxiosInstance.get("/medical-product/get");
      const userData = response.data.data;

      if (userData) {
        setProductData(userData);
      }
    } catch (error) {
      console.error("Error in getProductData:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Pure Go | Best Whey Protein in India | Premium Supplements
        </title>
        <meta
          name="description"
          content="Discover Pure Go, your go-to destination for the best whey protein and premium nutrition supplements in India. Boost your fitness journey with our high-quality products tailored for muscle growth, weight loss, and overall health."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, shop near by me, diet supplements near me, best multivitamins for men india, booster testosterone, how to fat burn, supplement shop near, whey isolate vs protein, whey protein vs whey protein isolate, women's protein powder for weight gain, protein powder for weight gain woman, which best peanut butter, nutrition in 100g oats"
        />
        {/* <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        /> */}
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <link rel="canonical" href={{ canonicalUrl }} />

        <link rel="preconnect" href="https://connect.facebook.net" />
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1144699046738070');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1144699046738070&ev=PageView&noscript=1"
          />`}
        </noscript>
        <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/process.env.PUBLIC_URL +  "/assets/images/nutrition/nutrition-banner-inner-14.webp`}
          as="image"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J50WNKGW38"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J50WNKGW38');
          `}
        </script>
      </Helmet>
      {/* <LoaderComponent /> */}
      {showModal && <LoginModal onClose={closeModal} />}
      {(loading || loading1) && <LoadingComponent />}
      {/* <NutritionHeader productDataGet={productDataGet} /> */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area fix">
        <div className="cart__area section-py-130">
          <div className="section-title text-center mb-60">
            <h1 className="title">Product cart</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table cart__table">
                    <thead>
                      <tr>
                        <th className="product__name">No.</th>
                        <th className="product__name">Image</th>
                        <th className="product__name">Name</th>
                        <th className="product__name">Quantity</th>
                        <th className="product__name">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productDataGet.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td className="product__name">{index + 1}</td>
                            <td className="product__thumb">
                              <span className="text-dark">
                                <img
                                  src={`https://files.fggroup.in/${product.display_image}`}
                                  alt="product"
                                />
                              </span>
                            </td>
                            <td className="product__name">
                              <span className="text-dark">{product.name}</span>
                            </td>
                            <td>
                              <div className="product__quantity d-flex align-items-center">
                                <i
                                  className="fas fa-minus text-dark me-2 fs-6"
                                  onClick={() => minusQuantity(product._id)}
                                ></i>
                                <div className="quickview-cart-plus-minus">
                                  <input type="text" value={product.quantity} />
                                </div>
                                <i
                                  className="fas fa-plus text-dark ms-2 fs-6"
                                  onClick={() => plusQuantity(product._id)}
                                ></i>
                              </div>
                            </td>
                            <td className="product__remove">
                              <button
                                className="border-0 bg-white product-close"
                                onClick={() =>
                                  handleRemoveProduct(
                                    product._id,
                                    product.items_id
                                  )
                                }
                              >
                                <LazyLoadImage
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/bin.png"
                                  }
                                  width="32px"
                                  alt="remove item"
                                  effect="blur"
                                />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  {productDataGet.length === 0 && (
                    <h5 className="text-center mt-3">No items found</h5>
                  )}
                  <div className="text-center">
                    <button
                      onClick={handleAddToCart}
                      className="cart-btn text-white m-0"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <div className="section-title text-center mb-60 ">
          <h1 className="title">Other Product</h1>
        </div>

        <div className="container">
          <div className="row">
            {product
              .filter(
                (element) =>
                  !productDataGet.some((item) => item._id === element._id)
              )
              .map((element, index) => (
                <div className="col-lg-4 col-sm-6 text-start" key={index}>
                  <div className="cont">
                    <div className="product-card">
                      <div className="product-card__image">
                        <img
                          className="lazy"
                          src={element.display_image}
                          alt={element.name}
                        />
                      </div>
                      <div className="product-card__info">
                        <h2 className="product-card__title">{element.name}</h2>
                        <p className="product-card__description truncate-description">
                          {element.description}
                        </p>
                        <p className="element-card__description text-dark">
                          <b>{element.unit}</b>
                        </p>
                        <div
                          className="product-card__price-row"
                          onClick={() => addProductInCart(productDataGet[index]?._id)}
                        >
                          <button className="product-card__btn w-100">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* <HomeNutritionFooter /> */}
    </>
  );
}

export default AddToCart;
