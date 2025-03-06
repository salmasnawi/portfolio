import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  { icon: <FaCode />, title: "Web Development", desc: " build modern and responsive websites." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Creating intuitive and engaging user experiences." },
  { icon: <FaMobileAlt />, title: "Mobile App Development", desc: " create sleek and functional mobile applications." },
];

const Services = () => {
  return (
    <section className="services py-5  text-center">
      <div className="container">
        <h2 className="section-title animate mb-4 text-light"> Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="service-card animate mt-4">
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
