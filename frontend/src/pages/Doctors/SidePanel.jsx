import React from "react";
import convertTime from "../../utils/convertTime";

function SidePanel({ doctorId, appointmentPrice, timeSlots }) {
  console.log(appointmentPrice);
  return (
    <>
      <div className="shadow-panel Shadow p-3 lg:p-5 rounded-md ml-28">
        <div className="flex items-center justify-between">
          <p className="text_para mt-0 font-semibold">Receipt Price</p>
          <span className="text-[16px] leading-7 lg:text[22px] lg:leading-8 text-headingColor font-bold">
            Rs.{appointmentPrice}
          </span>
        </div>
        <div className="mt-[30px]">
          <p className="text_para mt-0 font-semibold">Available Time Slots:</p>

          <ul className="mt-3">
            {timeSlots?.map((slot, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2"
              >
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {slot?.day.charAt(0).toUpperCase() + slot.day.slice(1)}
                </p>
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {"  "} {convertTime(slot.startTime)} -{" "}
                  {convertTime(slot.endTime)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn px-2 w-full rounded-md">Book Appointment</button>
      </div>
    </>
  );
}

export default SidePanel;
