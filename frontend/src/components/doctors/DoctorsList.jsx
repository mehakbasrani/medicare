import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../utils/config";
import Error from "../error/Error";
import Loading from "../loader/Loading";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
       lg:mt-[55px]"
        >
          {doctors.map((doctor) => (
            <DoctorsCard doctor={doctor} key={doctor._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorsList;
