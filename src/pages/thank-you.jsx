import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <>
      <Helmet>
        <title>Thank You - Pure Go</title>
        <meta
          name="description"
          content="Complete your purchase at Pure Go with secure and fast checkout options. Hassle-free payment process for all your nutrition and supplement needs."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, diet supplements near me, best multivitamins for men india, booster testosterone, how to fat burn, supplement shop near, whey isolate vs protein, whey protein vs whey protein isolate, women's protein powder for weight gain, protein powder for weight gain woman, which best peanut butter, nutrition in 100g oats, protein shakes for weight gain female"
        />
        <meta property="og:title" content="Thank You - Pure Go" />
        <meta
          property="og:description"
          content="Complete your purchase at Pure Go with secure and fast checkout options. Hassle-free payment process for all your nutrition and supplement needs."
        />
        <meta
          property="og:url"
          content="https://www.purego.gomzilifesciences.in/nutrition/check-out"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        />
      </Helmet>
      {/* <NutritionHeader /> */}
      <section>
        <div className="container-fluid pt-md-5">
          <div className="container">
            <div className="row">
              <div className="wrapper-1">
                <div className="wrapper-2">
                  <div className="success-checkmark">
                    <div className="check-icon">
                      <span className="icon-line line-tip"></span>
                      <span className="icon-line line-long"></span>
                      <div className="icon-circle"></div>
                      <div className="icon-fix"></div>
                    </div>
                  </div>
                  <h1>Thank You for Your Order!</h1>
                  <p class="message">
                    Your product has been successfully ordered. Our team will
                    contact you shortly to confirm the details and arrange
                    delivery.
                  </p>
                  <Link className="go-home mt-3 d-block" to="/">
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYouPage;
