import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import uploadImageToCloudinary from "../../utils/cloudinary";
import { BASE_URL, token } from "../../utils/config";

const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: "",
    bio: "",
    gender: "",
    specialization: "",
    appointmentPrice: "",
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startTime: "", endTime: "" }],
    about: "",
    photo: null,
  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phoneno: doctorData?.phoneno,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      appointmentPrice: doctorData?.appointmentPrice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    });
  }, [doctorData]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      console.error("Error caught:", error.message);
      toast.error(error.message);
    }
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const handleArrayInputChange = (key, index, event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      updateItems[index][name] = value;
      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  const deleteItem = (key, e, index) => {
    setFormData((prevFormData) => {
      const updateItems = [...prevFormData[key]];
      const finalItems = updateItems.filter((item, i) => i !== index);
      return {
        ...prevFormData,
        [key]: finalItems,
      };
    });
  };

  const addQualifications = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationChange = (e, index) => {
    e.preventDefault();
    handleArrayInputChange("qualifications", index, e);
  };

  const deleteQualification = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", e, index);
  };

  const addExperirnces = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (e, index) => {
    e.preventDefault();
    handleArrayInputChange("experiences", index, e);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", e, index);
  };

  const addTimeSlots = (e) => {
    e.preventDefault();
    addItem("timeSlots", { day: "", startTime: "", endTime: "" });
  };

  const handleTimeSlotChange = (e, index) => {
    e.preventDefault();
    handleArrayInputChange("timeSlots", index, e);
  };
  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", e, index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>
      <form>
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form_input"
            disabled={true}
            readOnly
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Phone No.*</p>
          <input
            type="number"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleInputChange}
            placeholder="Phone No."
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form_input"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div className="">
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                id="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form_input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="dematologist">Dematologist</option>
                <option value="neurologist">Neurologist</option>
                <option value="gynacologist">Gynacologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="">
              <p className="form_label">Appointment Price*</p>
              <input
                type="number"
                name="appointmentPrice"
                value={formData.appointmentPrice}
                onChange={handleInputChange}
                className="form_input py-3.5"
                placeholder="100"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label font-bold text-lg">Qualifications*</p>
          {formData.qualifications.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label ">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label ">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input "
                      onChange={(e) => handleQualificationChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteQualification(e, index)}
                  className="mb-3 bg-red-600 rounded-full text-white mt-5 p-3"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addQualifications}
            className="bg-[#000] py-2 px-5  mt-4 rounded text-white h-fit"
          >
            Add Qualification
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label font-bold text-lg">Experiences*</p>
          {formData.experiences.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label ">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label ">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={item.hospital}
                      className="form_input "
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>
                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="mb-3 bg-red-600 rounded-full text-white mt-5 p-3"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={addExperirnces}
            className="bg-[#000] py-2 px-5 mt-4 rounded text-white h-fit"
          >
            Add Experience
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label font-bold text-lg">Time Slots*</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div>
                    <p className="form_label">Day*</p>
                    <select
                      name="day"
                      id="day"
                      value={item.day}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thrusday">Thrusday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Start Time*</p>
                    <input
                      type="time"
                      name="startTime"
                      value={item.startTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">End Time*</p>
                    <input
                      type="time"
                      name="endTime"
                      value={item.endTime}
                      className="form_input"
                      onChange={(e) => handleTimeSlotChange(e, index)}
                    />
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlot(e, index)}
                      className=" bg-red-600 rounded-full text-white mt-8 p-3"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={addTimeSlots}
            className="bg-[#000] py-2 px-5 mt-4 rounded text-white h-fit"
          >
            Add Time Slot
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">About</p>
          <textarea
            name="about"
            id="about"
            rows="6"
            value={formData.about}
            onChange={handleInputChange}
            className="form_input"
          ></textarea>
        </div>
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-between overflow-hidden">
              <img
                src={formData.photo}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pinter"
            />

            <label
              htmlFor="customFile"
              className="absolute left-0 top-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] 
                          text-[15px] leading-5 overflow-hidden bg-[#0066ff46] text-headingColor 
                          font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>
        <div className="mb-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
