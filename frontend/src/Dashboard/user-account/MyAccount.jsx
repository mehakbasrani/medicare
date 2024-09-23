import React, { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import ProfileSettings from "./ProfileSettings";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL, token } from "../../utils/config";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const [tab, setTab] = useState("booikngs");
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);
  // console.log(userData, "userData");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const { message } = await res.json();

      if (!res.ok) {
        throw new Error(message);
      }

      dispatch({
        type: "DELETE_USER",
      });

      toast.success(message);
      navigate("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}
        {error && !loading && <Error errorMessage={error} />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50px] px-[30px] rounded-md ">
              <div className="flex itmes-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:
                  <span className=" text-headingColor text-[19px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>

              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full text-white bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md"
                >
                  Logout
                </button>
                {userData.userType != "Admin" ? (
                  <button
                    onClick={handleDelete}
                    className="w-full mt-4 text-white  bg-red-600 p-3 text-[16px] leading-7 rounded-md"
                  >
                    Delete Account
                  </button>
                ) : null}
              </div>
            </div>

            {userData.userType != "Admin" ? (
              <div className="md:col-span-2 md:px-[30px]">
                <div>
                  <button
                    onClick={() => setTab("bookings")}
                    className={` ${
                      tab == "bookings" &&
                      "bg-primaryColor text-white font-normal"
                    } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px]
          leading-7 border border-solid border-primaryColor`}
                  >
                    My Bookings
                  </button>
                  <button
                    onClick={() => setTab("settings")}
                    className={` ${
                      tab == "settings" &&
                      "bg-primaryColor text-white font-normal"
                    } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px]
            leading-7 border border-solid border-primaryColor`}
                  >
                    Profile Settings
                  </button>
                </div>

                {tab == "bookings" && <MyBookings />}
                {tab == "settings" && <ProfileSettings user={userData} />}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyAccount;
