import React from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import HomeNutritionFooter from "../components/partials/Footer/footer";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 error page</title>
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
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
      <NutritionHeader />
      <section className="error-page-section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <div className="error-image mb-4">
                <lottie-player
                  src="https://assets1.lottiefiles.com/packages/lf20_kcsr6fcp.json"
                  background="transparent"
                  speed="1"
                  style={{ width: "300px", height: "300px", margin: "0 auto" }}
                  loop
                  autoplay
                ></lottie-player>
              </div>

              <h1 className="display-4 fw-bold text-gradient mb-3">
                Oops! Page Not Found
              </h1>
              <p className="lead text-muted mb-4">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a
                  href="/"
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow"
                >
                  <i className="fas fa-home me-2"></i>Return Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .error-page-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
            min-height: 80vh;
            display: flex;
            align-items: center;
          }
          .text-gradient {
            background: -webkit-linear-gradient(45deg, #86c33a, #2575fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .btn-primary {
            background: linear-gradient(45deg,#86c33a, #2575fc);
            border: none;
            transition: all 0.3s ease;
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(106, 17, 203, 0.2) !important;
          }
          .error-image {
            transition: all 0.5s ease;
          }
          .error-image:hover {
            transform: scale(1.05);
          }
        `}</style>
      </section>
      <HomeNutritionFooter />
    </>
  );
};

export default NotFoundPage;
