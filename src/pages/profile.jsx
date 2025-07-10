import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Header from "../components/partials/Header/nutritionsheader";
// import AddToCartPopUp from "../../components/AddToCartPopUp";
import { Link } from "react-router-dom";
import { axiosInstance } from "../assets/js/config/api";

function UserProfile() {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    profilePhoto: null,
    profile_image: null,
  });
  const [clickATC, setClickATC] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];

    const formDataForUpload = new FormData();
    formDataForUpload.append("files", file);

    try {
      const response = await axiosInstance.post(
        "/file-upload",
        formDataForUpload
      );
      const photoUrl = response.data.data.fileURLs[0];

      setFormData((prevData) => ({
        ...prevData,
        profilePhoto: "https://files.fggroup.in/" + photoUrl,
        profile_image: photoUrl,
      }));

      await axiosInstance.post("/account/update-profile", {
        profile_image: photoUrl,
      });

      toast.success("Profile photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
      toast.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data
      );
    }
  };

  const handleRemovePhoto = async () => {
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: null,
      profile_image: null,
    }));

    try {
      await axiosInstance.post("/account/update-profile", {
        profile_image: null,
      });
      toast.success("Profile photo removed successfully");
    } catch (error) {
      console.error("Error removing photo:", error);
      toast.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data
      );
    }
  };

  const updateData = async () => {
    try {
      const response = await axiosInstance.post(
        "/account/update-profile",
        formData
      );
      if (response.data.data) {
        getUserData();
        toast.success("User data updated successfully");
      } else {
        console.error("Failed to update user data");
        toast.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data
      );
    }
  };

  const getUserData = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      const userData = response.data.data;
      localStorage.setItem("user_info", JSON.stringify(userData));
      if (userData) {
        setFormData((prevData) => ({
          ...prevData,
          user_id: userData.user.uid || "",
          first_name: userData.user.first_name || "",
          last_name: userData.user.last_name || "",
          mobile: userData.user.mobile || "",
          email: userData.user.email || "",
          profilePhoto:
            "https://files.fggroup.in/" + (userData.user.profile_image || ""),
        }));
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
      toast.error(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateData();
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleCartOpen = async () => {
    setClickATC(true);
  };

  return (
    <>
      <Helmet>
        <title>User Profile</title>
        <meta
          name="description"
          content="Access your PureGo profile to view orders, manage account details & track your fitness journey with ease."
        />
        <meta name="keywords" content="" />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        />
      </Helmet>
      {/* <AddToCartPopUp clickATC={clickATC} setClickATC={setClickATC} /> */}
      {/* <NutritionHeader handleCartOpen={"handleCartOpen"} /> */}
      <Header />
      <Container className="margintop-nutrition mb-5">
        <form
          onSubmit={handleSubmit}
          className="border p-4 rounded"
          style={{ marginTop: "20px" }}
        >
          <h4 className="border-bottom pb-2 mb-4">User Profile</h4>
          <Row className="align-items-center mb-4">
            <Col md={2} className="text-center">
              <img
                alt="User"
                src={formData.profilePhoto}
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
              />
            </Col>
            <Col md={4}>
              <h4 className="font-weight-bold">
                {formData.first_name} {formData.last_name}
              </h4>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="profile-photo-upload"
                type="file"
                onChange={handlePhotoChange}
              />
              <label
                htmlFor="profile-photo-upload"
                className="btn btn-success btn-blue px-4 py-2 me-2"
              >
                Upload New Photo
              </label>
              {formData.profilePhoto && (
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="btn btn-outline-danger btn-remove ml-2 px-4 py-2 my-2"
                >
                  Remove
                </button>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={6} className="my-2">
              <Form.Group controlId="user_id">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col md={6} className="my-2">
              <Form.Group controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="my-2">
              <Form.Group controlId="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6} className="my-2">
              <Form.Group controlId="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="my-2">
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            className="btn-success mt-4 py-3 px-5"
            style={{ marginRight: "10px" }}
          >
            Save Changes
          </Button>
        </form>
      </Container>
    </>
  );
}

export default UserProfile;
