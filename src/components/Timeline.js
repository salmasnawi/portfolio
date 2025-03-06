import React from "react";
import { color, motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const timelineData = [
  {
    icon: <FaGraduationCap size={24} color="white" />, // Graduation Icon
    title: "Bachelor of information technology",
    date: "Expected 2026",
    location: "Software development, Borg-Elarab Technology University",
    description:
      "Studying advanced computer science topics including frontend, backend, and AI development.",
  },
  {
    icon: <FaBriefcase size={24} color="white" />, // Work Icon
    title: "Frontend Developer (Freelancer)",
    date: "2024 - Present",
    location: "Remote",
    description:
      "Building modern web applications using React.js for various clients.",
  },
  {
    icon: <FaBriefcase size={24} color="white" />, // Work Icon
    title: "Programming Instructor (Python & Arduino)",
    date: "2024",
    location: "Teaching Kids",
    description:
      "Taught programming fundamentals and Arduino to young learners in an engaging way.",
  },
  {
    icon: <FaBriefcase size={24} color="white" />, // Work Icon
    title: "Full-Stack Developer - Instagram Clone",
    date: "2024",
    location: "Freelance Project",
    description:
      "Developed a full-stack Instagram clone using PHP & MySQL for a private client.",
  }
];

const Timeline = () => {
  return (
    <div className="timeline-section" style={{ backgroundColor: "black", padding: "40px" }}>
      <div className="container">
        <h2 className="text-center" style={{ color: "white", marginBottom: "30px" }}>Professional Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item d-flex align-items-start mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="icon-box me-3" style={{ background: "#EC407A", padding: "10px", borderRadius: "50%" }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ color: "white" }}>{item.title}</h4>
                <p className="mb-1" style={{ fontWeight: "bold", color: "#EC407A" }}>{item.date}</p>
                <p className="mb-1 " style={{color:"#EC407A"}}>{item.location}</p>
                <p className="text-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;