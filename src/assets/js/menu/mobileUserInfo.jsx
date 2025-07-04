import React, { useEffect, useState } from "react";
import CustomModal from "../popup/login";
import { axiosInstance } from "../config/api";
import { toast } from "react-toastify";

const MobileUserInfo = () => {
  const redirectDir = "";
  const [userInfo, setUserInfo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const authorization = localStorage.getItem("fg_group_user_authorization");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logout = () => {
    localStorage.removeItem("fg_group_user_authorization");
    localStorage.removeItem("user_info");
    localStorage.clear();
    setUserInfo(null);

    toast.success("Successfully Logout!");
  };

  const http_getProfile = async () => {
    try {
      const response = await axiosInstance.get("/account/profile");
      setUserInfo(response.data.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    const user_info = localStorage.getItem("user_info");
    if (authorization && !user_info) {
      const fetchProfile = async () => {
        try {
          await http_getProfile();
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };
      fetchProfile();
    } else {
      setUserInfo(JSON.parse(user_info));
    }
  }, [authorization]);

  return (
    <div>
      {userInfo ? (
        <ul>
          <li className="mb-1" style={{ cursor: "pointer" }}>
            <a href={`${redirectDir}/user/profile`}>
              Hi, {userInfo.user.last_name} <i className="far fa-user"></i>{" "}
            </a>
          </li>
          <li>
            <a href={`${redirectDir}/user/profile`}>
              <i className="far fa-user"></i> Profile
            </a>
          </li>
          <li>
            <a onClick={logout}>
              {" "}
              <i className="fas fa-sign-out-alt"></i> Log Out
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <a onClick={openModal}>
              {" "}
              <i className="far fa-user ml-1"></i> Login
            </a>
            {showModal && <CustomModal onClose={closeModal} />}
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileUserInfo;
