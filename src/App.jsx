import React from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import AddToCart from "./pages/add-to-cart";
import NotFoundPage from "./pages/404";
import ScrollRestoration from "./components/scroll-restoration";
import MedicineCheckOut from "./pages/medicine-check-out";
import RequireMedicineCheckOut from "./pages/require-medicine-check-out";
import ThankYouPage from "./pages/thank-you";
import RequirementThankYouPage from "./pages/thank-you-requirement";
import Product from "./pages/product";
import AnabolicCycle from "./pages/anabolic-cycle";
import BeginnersAnabolicCycle from "./pages/beginners-anabolic-cycle";
import MediumAnabolicCycle from "./pages/medium-anabolic-cycle";
import AdvanceAnabolicCycle from "./pages/advance-anabolic-cycle";
import TestosteroneEnanthate from "./pages/product/testosterone-enanthate";
import TestosteroneCypionate from './pages/product/testosterone-cypionate'
import TestosteronePropionate from "./pages/product/testosterone-propionate";
import TestosteroneUndecanoate from "./pages/product/testosterone-undecanoate";
import Sustanon250 from "./pages/product/sustanon-250";
import Methyltestosterone from "./pages/product/methyltestosterone";
import TestosteroneUndecanoateAndriole from "./pages/product/testosterone-undecanoate-andriole";
import Methandrostenolone from "./pages/product/methandrostenolone";
import OxandroloneAnavar from "./pages/product/oxandrolone-anavar";
import OxymetholoneAnadrol from './pages/product/oxymetholone-anadrol'
import StanozololWinstrol from "./pages/product/stanozolol-winstrol";
import TurinaBol from "./pages/product/turina-bol";
import BoldenoneUndecylenate from "./pages/product/boldenone-undecylenate";
import DrostanolonePropionate from './pages/product/drostanolone-propionate'
import PrimoBolan from "./pages/product/primo-bolan";
import TrenboloneAcetateHexahydrobenzylcarbonate from "./pages/product/trenbolone-acetate-hexahydrobenzylcarbonate";
import NandroloneDecanoate from "./pages/product/nandrolone-decanoate";
import AMP from "./pages/product/amp";
import Mesterolone from "./pages/product/mesterolone";
import Clenbuterol from "./pages/product/clenbuterol";
import GHRP2 from "./pages/product/ghrp-2";
import GHRP6 from "./pages/product/ghrp-6";
import Ipamorelin from "./pages/product/ipamorelin";
import Hexarelin from "./pages/product/hexarelin";
import CJC1295 from "./pages/product/cjc-1295";
import Sermorelin from "./pages/product/sermorelin";
import IGF1lr3 from "./pages/product/igf-1-lr3";
import DesIGF1 from "./pages/product/des-igf-1";
import BPC157 from "./pages/product/bpc-157";
import TB500 from "./pages/product/tb-500";
import HGHFragment176191 from "./pages/product/hgh-fragment-176-191";
import AOD9604 from "./pages/product/aod-9604";
import Ostarine from "./pages/product/ostarine";
import Ligandrol from "./pages/product/ligandrol";
import RAD140 from "./pages/product/rad-140";
import S23 from "./pages/product/s23";
import Andarine from "./pages/product/andarine";
import Cardarine from "./pages/product/cardarine";
import Stenabolic from "./pages/product/stenabolic";
import MK677 from "./pages/product/mk-677";
import YK11 from "./pages/product/yk-11";
import ACP105 from "./pages/product/acp-105";
import UserProfile from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/medicine-check-out" element={<MedicineCheckOut />} />
        <Route path="/anaboliccycle" element={<AnabolicCycle />} />
        <Route path="/testosterone-enanthate" element={<TestosteroneEnanthate />} />
        <Route path="/testosterone-cypionate" element={<TestosteroneCypionate />} />
        <Route path="/testosterone-propionate" element={<TestosteronePropionate />} />
        <Route path="/testosterone-undecanoate" element={<TestosteroneUndecanoate />} />
        <Route path="/sustanon-250" element={<Sustanon250/>} />
        <Route path="/methyltestosterone" element={<Methyltestosterone/>} />
        <Route path="/methandrostenolone" element={<Methandrostenolone/>} />
        <Route path="/testosterone-undecanoate-andriole" element={<TestosteroneUndecanoateAndriole/>} />
        <Route path="/oxandrolone-anavar" element={<OxandroloneAnavar/>} />
        <Route path="/oxymetholone-anadrol" element={<OxymetholoneAnadrol/>} />
        <Route path="/stanozolol-winstrol" element={<StanozololWinstrol/>} />
        <Route path="/turina-bol" element={<TurinaBol/>} />
        <Route path="/boldenone-undecylenate" element={<BoldenoneUndecylenate/>} />
        <Route path="/boldenone-undecylenate" element={<BoldenoneUndecylenate/>} />
        <Route path="/drostanolone-propionate" element={<DrostanolonePropionate/>} />
        <Route path="/trenbolone-acetate-hexahydrobenzylcarbonate" element={<TrenboloneAcetateHexahydrobenzylcarbonate/>} />
        <Route path="/nandrolone-decanoate" element={<NandroloneDecanoate/>} />
        <Route path="/primo-bolan" element={<PrimoBolan/>} />
        <Route path="/amp" element={<AMP/>} />
        <Route path="/mesterolone" element={<Mesterolone/>} />
        <Route path="/clenbuterol" element={<Clenbuterol/>} />
        <Route path="/ghrp-2" element={<GHRP2/>} />
        <Route path="/ghrp-6" element={<GHRP6/>} />
        <Route path="/ipamorelin" element={<Ipamorelin/>} />
        <Route path="/hexarelin" element={<Hexarelin/>} />
        <Route path="/cjc-1295" element={<CJC1295/>} />
        <Route path="/sermorelin" element={<Sermorelin/>} />
        <Route path="/igf-1-lr3" element={<IGF1lr3/>} />
        <Route path="/des-igf-1" element={<DesIGF1/>} />
        <Route path="/bpc-157" element={<BPC157/>} />
        <Route path="/tb-500" element={<TB500/>} />
        <Route path="/hgh-fragment-176-191" element={<HGHFragment176191/>} />
        <Route path="/aod-9604" element={<AOD9604/>} />
        <Route path="/ostarine" element={<Ostarine/>} />
        <Route path="/ligandrol" element={<Ligandrol/>} />
        <Route path="/rad-140" element={<RAD140/>} />
        <Route path="/s23" element={<S23/>} />
        <Route path="/andarine" element={<Andarine/>} />
        <Route path="/cardarine" element={<Cardarine/>} />
        <Route path="/stenabolic" element={<Stenabolic/>} />
        <Route path="/mk-677" element={<MK677/>} />
        <Route path="/yk-11" element={<YK11/>} />
        <Route path="/acp-105" element={<ACP105/>} />
        <Route
          path="/beginners-to-anabolic-cycle"
          element={<BeginnersAnabolicCycle />}
        />
        <Route
          path="/fat-loss-to-anabolic-cycle"
          element={<MediumAnabolicCycle />}
        />
        <Route
          path="/advance-to-anabolic-cycle"
          element={<AdvanceAnabolicCycle />}
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route
          path="/requirement-thank-you"
          element={<RequirementThankYouPage />}
        />
        {/* <Route path="/aas-check-out" element={<MedicineCheckOut />} /> */}
        <Route
          path="/require-medicine-check-out"
          element={<RequireMedicineCheckOut />}
        />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;
