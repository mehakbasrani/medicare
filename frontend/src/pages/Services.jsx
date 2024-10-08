import React from "react";
import { services } from "../assets/data/services";
import ServicesCard from "../components/services/ServicesCard";

const Services = () => {
  // console.log(services);
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services.map((item, index) => (
            <ServicesCard item={item} index={index} ket={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
