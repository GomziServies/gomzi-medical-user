import React from "react";
import Header from "../components/partials/Header/nutritionsheader";

const AnabolicCycle = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section className="px-4 py-8 md:px-12 lg:px-32 bg-white text-gray-800 features-products">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-6 text-danger">
            BEGINNERS GUIDE TO THE ANABOLIC CYCLE
          </h1>

          <p className="mb-4">
            In the age of impatience and social media youngsters start taking
            steroids without proper guidance and knowledge, which leads to
            permanent and irreversible damages to their Endocrine system, Heart,
            liver and kidneys.
          </p>

          <p className="mb-4">
            At 3rd-degree we understand the risk associated with recreational
            usage of anabolic hormones and similar compounds, that why here are
            some basic steroid cycles for beginners with cycle support and PCT
            correspondent.
          </p>

          <p className="mb-4">
            While Testosterone always remains the base of any cycle, all other
            DHTs or steroids further boost the cycle efficiency.
          </p>

          <p className="mb-4">
            We also suggest complete CBC, Testosterone and Sperm Profile tested
            after 10-15 days of completing the post cycle therapy.
          </p>

          <p className="mb-4">
            For Beginners a basic gaining cycle will always combine base dosages
            of <strong>DIANABOL</strong>, <strong>Oxymetholone</strong>,{" "}
            <strong>Nandrolone Decanoate</strong>,{" "}
            <strong>Testosterone Enanthate</strong>,{" "}
            <strong>Testosterone Cypionate</strong> or <strong>Sustanon</strong>{" "}
            (a blend of 3-4 Testosterone esters).
          </p>

          <p>
            It's always recommended to start any anabolic cycle once you have
            reached the plateau (2-3 years of hardcore training) and after the
            age of 25.
          </p>
        </div>
      </section>
    </>
  );
};

export default AnabolicCycle;
