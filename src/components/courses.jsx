import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Offline Anabolic Androgenic Steroids Masterclass",
      image: "assets/images/course/offline-aas.webp",
      type: "offline",
      duration: "1 Month",
      features: [
        "Offline class",
        "Recorded Video and Hard Copy of Books",
        "Lifetime Video Access",
      ],
      path: "https://fggroup.in/fgiit/anabolic-steroids-course",
    },
    {
      id: 2,
      title: "Online Offline Anabolic Androgenic Steroids Masterclass",
      image: "assets/images/course/online-aas.webp",
      type: "online",
      duration: "1 Month",
      features: [
        "Live Zoom classes",
        "Recorded Video and Hard Copy of Books",
        "Lifetime Video Access",
      ],
      path: "https://fggroup.in/fgiit/anabolic-steroid-testosterone",
    },
    {
      id: 3,
      title: "Flexible anabolic androgenic steroids masterclass",
      image: "assets/images/course/flexible-aas.webp",
      type: "flexible",
      duration: "1 month",
      features: [
        "learn whenever and wherever you want",
        "Distance Learning Certificate",
        "Lifetime Video Access",
      ],
      path: "https://fggroup.in/fgiit/anabolic-androgenic-steroids",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center align-items-stretch">
        <h4 className="m-5 mb-2 mx-0">Course :</h4>
        {courses.map((course, idx) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3"
            key={course.id}
          >
            <div className="course-card d-flex flex-column w-100">
              <div className="card-img-wrapper ratio ratio-16x9 ">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  loading="lazy"
                />
              </div>

              <div className="card-body d-flex flex-column flex-grow-1">
                <div className="card-title">
                  <h5 className="card-title mb-2">{course.title}</h5>
                </div>
                {/* <h6 className="card-title mb-3">{course.title}</h6> */}
                <p className="card-title m-0">Course duration :</p>
                <div className="course-meta ">
                  <ul className="mb-0">
                    <li>{course.duration}</li>
                  </ul>
                </div>

                <div className="course-features">
                  <p>Course Features :</p>
                  <ul>
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link to={course.path}>
                    <button className="know-more-btn p-2 w-100">
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
